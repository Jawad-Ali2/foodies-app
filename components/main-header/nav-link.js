"use client";

import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";
import Link from "next/link";
export default function NavLinks({ href, children }) {
  const path = usePathname();

  return (
    <>
      <Link
        href={href}
        className={
          path.startsWith(href)
            ? `${classes.active} ${classes.link}`
            : classes.link
        }
      >
        {children}
      </Link>
    </>
  );
}