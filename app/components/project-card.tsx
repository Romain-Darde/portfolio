import Image from "next/image";
import BeforeAfterSlider from "@/app/components/before-after-slider";
import type { Project, ProjectKind, ProjectLink } from "@/lib/projects";

function linkMeta(link: ProjectLink) {
  switch (link.type) {
    case "repo":
      return { label: "View repo", symbol: "↗" };
    case "live":
      return { label: "Visit site", symbol: "↗" };
    case "wiki":
      return { label: "Visit wiki", symbol: "↗" };
    case "video":
      return { label: "Watch demo", symbol: "▶" };
    case "document":
      return { label: link.label, symbol: "↗" };
  }
}

const kindLabel: Record<ProjectKind, string> = {
  school: "School",
  internship: "Internship",
  personal: "Personal",
};

function ProjectPreview({ project }: { project: Project }) {
  const { link, image, beforeAfter, title } = project;

  if (beforeAfter && beforeAfter.length > 0) {
    return <BeforeAfterSlider pairs={beforeAfter} alt={title} />;
  }

  if (!image && link?.type !== "video") return null;

  const content = image ? (
    <Image
      src={image}
      alt={title}
      fill
      sizes="(min-width: 768px) 480px, 100vw"
      className="object-cover"
    />
  ) : (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-signal/25 bg-ink">
      <span className="text-2xl text-signal">▶</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
        Demo
      </span>
    </div>
  );

  const preview = (
    <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
      {content}
    </div>
  );

  if (!link) return preview;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${linkMeta(link).label}: ${title}`}
    >
      {preview}
    </a>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { title, tagline, stack, link, featured, logo, kind, sketch } =
    project;

  return (
    <div className="relative">
      {sketch && (
        <Image
          src={sketch}
          alt=""
          aria-hidden
          width={600}
          height={459}
          className="pointer-events-none absolute -right-6 -bottom-6 z-10 w-28 -rotate-4 drop-shadow-[0_12px_20px_rgba(0,0,0,0.5)] sm:w-48"
        />
      )}

      <article
        className={`relative overflow-hidden rounded-lg border border-signal/15 bg-panel ${
          featured ? "shadow-[0_0_40px_-20px_var(--color-accent)]" : ""
        }`}
      >
        <ProjectPreview project={project} />

        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            {logo ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
                className="inline-block rounded-md bg-white px-3 py-2 transition hover:shadow-[0_0_20px_-6px_var(--color-signal)]"
              >
                <Image
                  src={logo.src}
                  alt={title}
                  width={190}
                  height={100}
                  className="h-8 w-auto object-contain"
                />
              </a>
            ) : (
              <h3 className="text-xl font-medium text-paper">{title}</h3>
            )}
            <span className="shrink-0 font-mono text-xs text-dim">
              {kindLabel[kind]}
            </span>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-dim">{tagline}</p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded border border-signal/25 bg-ink px-2.5 py-1 font-mono text-xs text-signal"
              >
                {tech}
              </li>
            ))}
          </ul>

          {link && (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-accent hover:underline"
            >
              {linkMeta(link).label} {linkMeta(link).symbol}
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
