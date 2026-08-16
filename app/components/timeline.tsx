import type { Project } from "@/lib/projects";
import ProjectCard from "@/app/components/project-card";

const SIDE_X = { left: 20, right: 60 } as const;
const CONNECTOR_H = 64;

function Dot({ featured }: { featured: boolean }) {
  return (
    <span
      className={`block h-4 w-4 rounded-full border-2 border-accent ${
        featured ? "bg-accent" : "bg-ink"
      }`}
    />
  );
}

function Connector({ from }: { from: "left" | "right" }) {
  const to = from === "left" ? "right" : "left";
  const x1 = SIDE_X[from];
  const x2 = SIDE_X[to];
  const mid = CONNECTOR_H / 2;

  return (
    <div className="grid grid-cols-[1fr_5rem_1fr]">
      <div />
      <svg viewBox={`0 0 80 ${CONNECTOR_H}`} className="h-16 w-20" aria-hidden>
        <path
          d={`M ${x1} 0 C ${x1} ${mid} ${x2} ${mid} ${x2} ${CONNECTOR_H}`}
          stroke="var(--color-accent)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      <div />
    </div>
  );
}

function PeriodLabel({
  project,
  align,
}: {
  project: Project;
  align: "left" | "right";
}) {
  return (
    <div
      className={`pt-8 font-mono text-xs text-signal ${
        align === "left" ? "pl-2 text-left" : "pr-2 text-right"
      }`}
    >
      {project.period ?? project.year}
    </div>
  );
}

function DesktopRow({
  project,
  side,
  eager,
}: {
  project: Project;
  side: "left" | "right";
  eager?: boolean;
}) {
  const x = side === "left" ? "left-[20px]" : "left-[60px]";

  return (
    <div className="grid grid-cols-[1fr_5rem_1fr] items-start">
      <div>
        {side === "left" ? (
          <ProjectCard project={project} eager={eager} />
        ) : (
          <PeriodLabel project={project} align="right" />
        )}
      </div>

      <div className="relative h-full">
        <div className={`absolute inset-y-0 w-px -translate-x-1/2 bg-accent ${x}`} />
        <div className={`absolute top-8 -translate-x-1/2 ${x}`}>
          <Dot featured={project.featured} />
        </div>
      </div>

      <div>
        {side === "right" ? (
          <ProjectCard project={project} eager={eager} />
        ) : (
          <PeriodLabel project={project} align="left" />
        )}
      </div>
    </div>
  );
}

function MobileRow({
  project,
  eager,
}: {
  project: Project;
  eager?: boolean;
}) {
  return (
    <li className="relative pl-12">
      <span
        className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent ${
          project.featured ? "bg-accent" : "bg-ink"
        }`}
      />
      <div className="mb-2 font-mono text-xs text-signal">
        {project.period ?? project.year}
      </div>
      <ProjectCard project={project} eager={eager} />
    </li>
  );
}

export default function Timeline({ projects }: { projects: Project[] }) {
  const ordered = [...projects].reverse();

  return (
    <>
      <div className="relative md:hidden">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-accent" />
        <ol className="space-y-14">
          {ordered.map((project, i) => (
            <MobileRow key={project.slug} project={project} eager={i === 0} />
          ))}
        </ol>
      </div>

      <div className="hidden md:block">
        {ordered.map((project, i) => {
          const side = i % 2 === 0 ? "right" : "left";
          const prevSide = i % 2 === 0 ? "left" : "right";
          return (
            <div key={project.slug}>
              {i > 0 && <Connector from={prevSide} />}
              <DesktopRow project={project} side={side} eager={i === 0} />
            </div>
          );
        })}
      </div>
    </>
  );
}
