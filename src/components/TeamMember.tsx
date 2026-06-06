interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  highlights: string[];
  photoSrc?: string;
  photoAlt?: string;
}

export function TeamMember({ name, role, bio, highlights, photoSrc, photoAlt }: TeamMemberProps) {
  return (
    <article className="flex h-full flex-col gap-6 rounded-card border border-hairline bg-surface p-8">
      <div className="flex flex-col gap-2">
        {photoSrc ? (
          <img
            src={photoSrc}
            alt={photoAlt ?? name}
            className="mb-4 h-20 w-20 rounded-full object-cover"
          />
        ) : (
          <div
            className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-surface-elevated text-display-md text-muted-ink"
            aria-hidden
          >
            {name.charAt(0)}
          </div>
        )}
        <h3 className="text-display-md text-ink">{name}</h3>
        <p className="text-sm font-medium text-muted-ink md:text-base">{role}</p>
      </div>
      <p className="text-sm text-muted-ink md:text-base">{bio}</p>
      <ul className="flex flex-col gap-2">
        {highlights.map((highlight) => (
          <li key={highlight} className="text-sm text-muted-ink md:text-base">
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}
