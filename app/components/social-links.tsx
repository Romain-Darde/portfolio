type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
  icon: React.ReactNode;
};

const links: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:romaindarde.rd@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/romain-darde",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.19-3.37-1.19-.46-1.16-1.11-1.47-1.11-1.47-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/romain-darde-78807b19b/",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.75h3.4V21H3.5V8.75Zm6.2 0h3.26v1.68h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.07 2.27 4.07 5.22V21h-3.4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-3.4V8.75Z" />
      </svg>
    ),
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {links.map(({ label, href, external, icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-dim transition hover:text-signal hover:drop-shadow-[0_0_8px_var(--color-signal)]"
        >
          <span className="block h-5 w-5">{icon}</span>
        </a>
      ))}
    </div>
  );
}
