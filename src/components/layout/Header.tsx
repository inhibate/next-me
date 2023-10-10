
import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import {useRouter, withRouter} from 'next/router'
import {FC} from 'react'
import dynamic from 'next/dynamic'
const MuiSwitcher = dynamic(import('../MuiSwitcher'), {ssr: false})

const Header: FC<{}> = () => {
  const router = useRouter()
  const {pathname} = router
  const resolveClassName = (eq: string, em = '') => (pathname === eq) ? styles.current : em

  enum HeaderLiType {Content, Link}
  const headerLi = [
    {type: HeaderLiType.Link, href: '/', text: 'ME'},
    {type: HeaderLiType.Link, href: '/project/all', text: 'projects'},
    {type: HeaderLiType.Link, href: '/note/all', text: 'Notes'},
    {type: HeaderLiType.Content, content: <MuiSwitcher />}
  ]
  const headerLiElements = headerLi.map((value, i) => {
    if (value.type === HeaderLiType.Content) {
      return <li key={i}>{value.content}</li>
    }
    if (value.type === HeaderLiType.Link) {
      const {href, text} = value
      let className = href
      if (href === '/project/all') className = '/project/[slug]'
      if (href === '/note/all') className = '/note/[slug]'
      return <li key={i} className={resolveClassName(className as string)}>
        <Link href={href as string}>{text}</Link>
      </li>
    }
  })
  return (
    <header className={styles.header}>
      <ul>
        {headerLiElements}
      </ul>
    </header>
  )
}

export default Header
