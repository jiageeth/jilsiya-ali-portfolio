"use client";

import { useEffect, useRef, useState } from "react";

type ViewState = "loading" | "success" | "failure";

const tabs: { id: ViewState; label: string }[] = [
  { id: "loading", label: "Loading" },
  { id: "success", label: "Success" },
  { id: "failure", label: "Failure" },
];

const DELAY_MS = 1600;

/**
 * A small interactive sketch of the four view states handled in the Jobby App:
 * loading, success, failure and retry. Layout placeholders only, no real data.
 */
export default function ViewStatesDemo() {
  const [state, setState] = useState<ViewState>("loading");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  };

  // One automatic loading -> success moment when the page opens.
  useEffect(() => {
    timer.current = setTimeout(() => setState("success"), DELAY_MS);
    return clearTimer;
  }, []);

  const choose = (next: ViewState) => {
    clearTimer();
    setState(next);
  };

  const retry = () => {
    clearTimer();
    setState("loading");
    timer.current = setTimeout(() => setState("success"), DELAY_MS);
  };

  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-sm">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="text-sm font-medium">Jobs</span>
          <div
            role="group"
            aria-label="Choose a view state to preview"
            className="flex rounded-full border border-line p-0.5 text-xs"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                aria-pressed={state === t.id}
                onClick={() => choose(t.id)}
                className={`rounded-full px-3 py-1 transition-colors ${
                  state === t.id
                    ? "bg-accent text-accent-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[15.5rem] p-4" aria-live="polite">
          {state === "loading" && (
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-sm text-muted">
                <span className="h-3.5 w-3.5 rounded-full border-2 border-accent border-t-transparent motion-safe:animate-spin" />
                Loading jobs
              </p>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="space-y-2 rounded-lg border border-line p-3 motion-safe:animate-shimmer"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="h-3 w-2/5 rounded bg-line" />
                  <div className="h-2.5 w-3/5 rounded bg-line/70" />
                </div>
              ))}
            </div>
          )}

          {state === "success" && (
            <ul className="space-y-3">
              {["Job title", "Job title", "Job title"].map((t, i) => (
                <li key={i} className="rounded-lg border border-line p-3">
                  <p className="text-sm font-medium">{t}</p>
                  <p className="text-xs text-muted">
                    Company, location, employment type
                  </p>
                </li>
              ))}
            </ul>
          )}

          {state === "failure" && (
            <div className="grid h-[13.5rem] place-content-center justify-items-center gap-3 text-center">
              <p className="text-sm font-medium">Something went wrong</p>
              <p className="max-w-[16rem] text-xs text-muted">
                The jobs could not be loaded. Try the request again.
              </p>
              <button
                type="button"
                onClick={retry}
                className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
              >
                Retry
              </button>
            </div>
          )}
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        The view states I handle in the Jobby App. Switch between them, or
        press Retry on the failure view.
      </figcaption>
    </figure>
  );
}
