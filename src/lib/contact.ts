type ContactPayload = {
  name: string;
  email: string;
  message: string;
  timestamp: string;
  topic?: string;
  botcheck?: string;
  hCaptchaResponse?: string;
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
// Web3Forms access keys are public by design — they only authorize delivery to
// the form owner's inbox and carry no account privileges. Abuse is mitigated by
// hCaptcha + the provider's domain/spam controls, not by hiding this value. This
// is a static GitHub Pages site with no backend to proxy the request through.
const WEB3FORMS_KEY = 'f2ce33a4-b6ff-430d-8df0-83d86a51c7f5';

export async function submitContact(payload: ContactPayload): Promise<void> {
  const body: Record<string, string> = {
    access_key: WEB3FORMS_KEY,
    subject: payload.topic ? `New KUZOG enquiry [${payload.topic}]` : 'New KUZOG enquiry',
    from_name: payload.name,
    from_email: payload.email,
    message: payload.message,
    submitted_at: payload.timestamp,
    source: window.location.href
  };

  if (payload.topic) {
    body['topic'] = payload.topic;
  }

  if (payload.botcheck) {
    body['botcheck'] = payload.botcheck;
  }

  if (payload.hCaptchaResponse) {
    body['h-captcha-response'] = payload.hCaptchaResponse;
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(body)
  });

  // Web3Forms returns HTTP 200 even for application-level failures (invalid
  // captcha, spam rejection, provider validation), signalling the real outcome
  // only via the JSON body's `success` flag. Treating any 2xx as success would
  // silently drop enquiries while telling the user it worked — so parse the body
  // and require `success === true`.
  let data: Web3FormsResponse | null = null;
  try {
    data = (await response.json()) as Web3FormsResponse;
  } catch {
    data = null;
  }

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || 'Web3Forms submission failed');
  }
}
