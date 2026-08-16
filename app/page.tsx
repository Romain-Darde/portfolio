import SocialLinks from "@/app/components/social-links";
import Timeline from "@/app/components/timeline";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <header className="mb-24 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
          Robotics · Embedded · Software
        </p>
        <h1 className="mt-4 font-mono text-5xl font-medium tracking-tight">
          Romain Darde
          <span className="text-accent [animation:blink_1s_steps(1)_infinite]">
            _
          </span>
        </h1>

        <p className="mt-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-signal">
          Seeking a full-time Software or Robotics Engineer role - available
          from September 2026
        </p>

        <p className="mt-4 max-w-xl text-lg leading-relaxed text-dim">
          Final-year robotics engineering student, currently interning at Stanley
          Robotics. <br />
          Writing code for the physical world.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="/CV_Romain_Darde.pdf"
            download
            className="inline-flex items-center gap-2 rounded border border-accent px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-accent transition hover:bg-accent hover:text-ink hover:shadow-[0_0_20px_-4px_var(--color-accent)]"
          >
            Download CV ↓
          </a>
          <SocialLinks />
        </div>
      </header>

      <Timeline projects={projects} />

      <section className="mt-24 border-t border-signal/15 pt-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
          About me
        </p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-dim">
            <p>
              As a robotics engineering student at Polytech Sorbonne, I
              specialize in bridging the gap between complex software and
              physical hardware. My background includes rigorous math and
              physics preparatory classes, alongside an enriching Erasmus
              semester in Seville.
            </p>
            <p>
              Beyond academics, I am a true maker at heart. My
              projects range from programming autonomous robots to physically
              renovating an entire apartment.
            </p>
            <p>
              I bring a strong work ethic to everything I do, applying it to balance 
              my demanding studies with over three years of part-time student jobs 
              in customer service and operations. I am proactive, eager for challenges, and always
              ready to get my hands dirty to make things work.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:w-56">
            <dl className="h-fit space-y-3 rounded-lg border border-signal/15 bg-panel p-5 font-mono text-xs">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-dim">Location</dt>
                <dd className="text-right text-signal">Paris, FR</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-dim">Education</dt>
                <dd className="text-right text-signal">Polytech Sorbonne</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-dim">Exchange</dt>
                <dd className="text-right text-signal">Seville, ES</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-dim">French</dt>
                <dd className="text-right text-signal">Native</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-dim">English</dt>
                <dd className="text-right text-signal">C1</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-dim">Spanish</dt>
                <dd className="text-right text-signal">B1</dd>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/CV_Romain_Darde.pdf"
                download
                className="inline-flex items-center gap-2 rounded border border-accent px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-accent transition hover:bg-accent hover:text-ink hover:shadow-[0_0_20px_-4px_var(--color-accent)]"
              >
                Download CV ↓
              </a>
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
