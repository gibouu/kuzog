type ContactPayload = {
  name: string;
  email: string;
  message: string;
  timestamp: string;
};

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_KEY = 'f2ce33a4-b6ff-430d-8df0-83d86a51c7f5';

export async function submitContact(payload: ContactPayload): Promise<void> {
  const body = {
    access_key: WEB3FORMS_KEY,
    subject: 'New KUZOG enquiry',
    from_name: payload.name,
    from_email: payload.email,
    message: payload.message,
    submitted_at: payload.timestamp,
    source: window.location.href
  };

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'Web3Forms submission failed');
  }
}
