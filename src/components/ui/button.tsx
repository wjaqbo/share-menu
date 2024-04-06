import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  href,
  noBackground = false,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  noBackground?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const linkButton = href && (
    <Link
      href={href}
      className={`${noBackground ? "bg-transparent text-orange-600" : "bg-orange-600 font-bold text-white"} inline-block w-full rounded-md border border-orange-500 px-4 py-4 text-center text-lg md:w-auto md:py-2`}
    >
      {children}
    </Link>
  );

  const button = (
    <button
      {...props}
      className={`${noBackground ? "bg-transparent text-orange-600" : "bg-orange-600 font-bold text-white"} w-full rounded-md border border-orange-500 px-4 py-4 text-lg disabled:bg-gray-500 disabled:text-black md:w-auto md:py-2`}
    >
      {children}
    </button>
  );
  return <>{href ? linkButton : button}</>;
}
