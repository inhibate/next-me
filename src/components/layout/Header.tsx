
import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {FC} from 'react'

const Header: FC<{}> = () => {
  const router = useRouter()
  const {pathname} = router
  const resolveClassName = (eq: string, em = '') => (pathname === eq) ? styles.current : em

  const navItems = [
    {href: '/', text: 'MAIN'},
    {href: '/experience', text: 'экспириенс'},
  ].map((value, i) => {
    const {href, text} = value
    return <li key={i} className={resolveClassName(href as string)}>
      <Link href={href as string}>{text}</Link>
    </li>
  })
  return (
    <header className={styles.header}>
      <ul>
        {navItems}
      </ul>
    </header>
  )
}

export default Header
