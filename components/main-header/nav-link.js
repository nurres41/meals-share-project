'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from "./nav-link.module.css";

const NavLink = ({href, children}) => {

  const path = usePathname(); 

  return (
    <li>
        <Link href={href} className={path.startsWith(href) ? `${styles.active} ${styles.link}` : styles.link}>
            {children}
        </Link>
    </li>
  )
}

export default NavLink
