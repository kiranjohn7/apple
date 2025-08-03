import React from "react";
import Button from "./Button";
import { IoLogoApple } from "react-icons/io5";

function normalizeCtas(cta) {
  if (!cta) return [];
  if (typeof cta === "string") return [{ label: cta, variant: "primary" }];
  if (Array.isArray(cta)) {
    return cta
      .map((item) => {
        if (typeof item === "string")
          return { label: item, variant: "primary" };
        if (typeof item === "object")
          return { label: item.label, variant: item.variant || "primary" };
        return null;
      })
      .filter(Boolean);
  }
  if (typeof cta === "object")
    return [{ label: cta.label, variant: cta.variant || "primary" }];
  return [];
}

export default function Section({
  title,
  accent,
  showAppleLogo = false,
  subtitle,
  img,
  cta,
  tagline,
  items,
}) {
  const panels = Array.isArray(items)
    ? items.map((it) => ({
        ...it,
        ctas: normalizeCtas(it.cta),
      }))
    : [
        {
          title,
          accent,
          showAppleLogo,
          subtitle,
          img,
          ctas: normalizeCtas(cta),
          tagline,
        },
      ];

  return (
    <section className="overflow-hidden flex flex-col items-center text-center py-12 px-6">
      <div className="max-w-7xl w-full flex gap-6 flex-col lg:flex-row">
        {panels.map((panel, idx) => {
          const textColorClass = panel.invert ? "text-white" : "text-gray-800";
          const justifyClass =
            panel.contentPosition === "bottom"
              ? "justify-end pb-10 top-110"
              : "justify-start pt-10";

          return (
            <div
              key={idx}
              className="relative flex-1 rounded-lg overflow-hidden flex flex-col justify-between min-h-[500px] md:min-h-[650px] lg:min-h-[700px]"
            >
              <div
                aria-label={panel.title || ""}
                role="img"
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${panel.img})` }}
              />
              <div className="absolute inset-0" aria-hidden="true" />

              <div
                className={`relative z-10 flex flex-col items-center px-6 ${justifyClass} ${textColorClass}`}
              >
                <h2
                  className="font-semibold flex flex-wrap justify-center items-center gap-1"
                  style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)" }}
                >
                  {panel.showAppleLogo && (
                    <IoLogoApple
                      className="inline-block text-2xl flex-shrink-0"
                      aria-label="Apple logo"
                    />
                  )}
                  <span>{panel.title}</span>
                  {panel.accent && (
                    <span
                      className="italic text-blue-600 flex-shrink-0"
                      style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)" }}
                    >
                      {panel.accent}
                    </span>
                  )}
                </h2>
                {panel.subtitle && (
                  <p className="text-lg mt-1">{panel.subtitle}</p>
                )}
                {panel.ctas && panel.ctas.length > 0 && (
                  <div className="mt-4 flex flex-wrap justify-center gap-4">
                    {panel.ctas.map(({ label, variant: v = "primary" }, i) => (
                      <Button key={i} variant={v}>
                        {label}
                      </Button>
                    ))}
                  </div>
                )}
              </div>

              {panel.tagline && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4">
                  <p
                    className="font-semibold bg-clip-text text-transparent text-center"
                    style={{
                      backgroundImage: "linear-gradient(90deg,#4f8cff,#d952d9)",
                      fontSize: "clamp(0.85rem,2vw,1rem)",
                    }}
                  >
                    {panel.tagline}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}