import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses = {
  primary:
    "border border-transparent bg-gradient-to-r from-[#19b7c5] to-[#145cb7] text-white shadow-[0_18px_40px_rgba(20,92,183,0.24)] hover:from-[#15a6b3] hover:to-[#0f4fa4] hover:shadow-[0_22px_50px_rgba(20,92,183,0.32)]",
  secondary:
    "border border-[#d7e1f2] bg-white/90 text-[#20365e] shadow-[0_12px_30px_rgba(15,23,42,0.08)] hover:border-[#c2d0ea] hover:bg-white hover:text-[#0f214f]",
  ghost:
    "border border-[#d7e1f2] bg-white/70 text-[#334766] shadow-sm hover:border-[#c2d0ea] hover:bg-white hover:text-[#145cb7]",
};

const sizeClasses = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#19b7c5] active:scale-[0.98]",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(" ");

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {content}
    </button>
  );
}