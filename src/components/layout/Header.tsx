
import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import {useRouter, withRouter} from 'next/router'
import {FC} from 'react'
//import dynamic from 'next/dynamic'
//const MuiSwitcher = dynamic(import('../MuiSwitcher'), {ssr: false})

const Header: FC<{}> = () => {
  const router = useRouter()
  const {pathname} = router
  const resolveClassName = (eq: string, em = '') => (pathname === eq) ? styles.current : em

  enum HeaderLiType {Link}
  const headerLi = [
    {type: HeaderLiType.Link, href: '/', text: 'MAIN'},
    {type: HeaderLiType.Link, href: '/experience', text: 'experience'},
    {type: HeaderLiType.Link, href: '/project/all', text: 'projects'},
    /*{type: HeaderLiType.Link, href: '/note/all', text: '@Notes'}*/
  ]
  const lis = headerLi.map((value, i) => {
    const {href, text} = value
    let className = href
    if (href === '/project/all') className = '/project/[slug]'
    if (href === '/note/all') className = '/note/[slug]'
    return <li key={i} className={resolveClassName(className as string)}>
      <Link href={href as string}>{text}</Link>
    </li>
  })
  return (
    <header className={styles.header}>
      <ul>
        {lis}
      </ul>
    </header>
  )
}

export default Header
