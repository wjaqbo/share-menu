"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, useRef } from "react";

export default function Button({
  children,
  href,
  noBackground = false,
  className,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  noBackground?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const buttonRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const rippleCircleRef = useRef<HTMLSpanElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  function startAnimation(e: React.MouseEvent) {
    if (!buttonRef.current || !rippleCircleRef.current || !rippleRef.current) {
      return;
    }
    const offset = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - offset.left;
    const y = e.clientY - offset.top;

    rippleCircleRef.current.style.left = `${x}px`;
    rippleCircleRef.current.style.top = `${y}px`;

    rippleRef.current.classList.add("is-active");
  }

  function stopAnimation() {
    if (!rippleRef.current) {
      return;
    }
    rippleRef.current.classList.remove("is-active");
  }

  const linkButton = href && (
    <Link
      onMouseDown={startAnimation}
      onMouseDownCapture={stopAnimation}
      ref={buttonRef}
      href={href}
      className={`${noBackground ? "bg-transparent text-orange-600" : "bg-orange-600 font-bold text-white"} relative inline-block w-full rounded-md border border-orange-500 px-4 py-4 text-center text-lg md:w-auto md:py-2`}
    >
      <div ref={rippleRef} className="c-ripple">
        <span ref={rippleCircleRef} className="c-ripple__circle"></span>
      </div>
      {children}
    </Link>
  );

  const button = (
    <button
      onMouseDown={startAnimation}
      onMouseDownCapture={stopAnimation}
      ref={buttonRef}
      {...props}
      className={cn(
        "relative w-full rounded-md border border-orange-500 px-4 py-4 text-lg disabled:bg-gray-500 disabled:text-black md:w-auto md:py-2",
        noBackground
          ? "bg-transparent text-orange-600"
          : "bg-orange-600 font-bold text-white",
        className,
      )}
    >
      <div ref={rippleRef} className="c-ripple">
        <span ref={rippleCircleRef} className="c-ripple__circle"></span>
      </div>
      {children}
    </button>
  );
  return <>{href ? linkButton : button}</>;
}
