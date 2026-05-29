import { Children, type ReactNode } from "react";

type MobileAutoSliderProps = {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  hideAt?: "sm" | "md" | "lg";
  duration?: "short" | "medium" | "long";
};

const hideAtClasses = {
  sm: "sm:hidden",
  md: "md:hidden",
  lg: "lg:hidden",
};

const durationClasses = {
  short: "[--mobile-slider-duration:22s]",
  medium: "[--mobile-slider-duration:28s]",
  long: "[--mobile-slider-duration:35s]",
};

export default function MobileAutoSlider({
  children,
  className = "",
  trackClassName = "",
  hideAt = "md",
  duration = "medium",
}: MobileAutoSliderProps) {
  const items = Children.toArray(children);

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className={`mobile-auto-slider overflow-x-auto overflow-y-hidden px-3 ${hideAtClasses[hideAt]} ${durationClasses[duration]} ${className}`}
    >
      <div className={`mobile-auto-slider-track flex w-max gap-4 ${trackClassName}`}>
        {items.map((child, index) => (
          <div key={`mobile-slider-item-${index}`} className="contents">
            {child}
          </div>
        ))}
        {items.map((child, index) => (
          <div
            key={`mobile-slider-copy-${index}`}
            aria-hidden="true"
            inert
            className="contents"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
