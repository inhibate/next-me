
import styles from './Page.module.scss'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {ProjectListType} from '@/types'
import Item from './Item'
import List from './List' 

export default ({projects}: ProjectListType) => {
  const router = useRouter()
  const {slug} = router.query
  const slugAll = slug === 'all'

  let back = <div onClick={() => router.back()} className={styles.goBack}><span>🡠 back</span></div>
  let content: JSX.Element

  let title = 'PRG938@PROJECTS'

  if (slugAll) {
    content = <List list={projects} />
    back = null as any
  }
  else {
    const project = projects.find(({id}) => id === String(slug))!
    const {id, repoName} = project
    title = title + '@' + repoName
    content = <Item key={id} {...project} />
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="#PRG938 #projects" />
      </Head>
      <main className={styles.main}>
        {back}
        {content}
      </main>
    </>
  )
}