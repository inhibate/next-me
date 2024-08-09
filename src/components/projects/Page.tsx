
import styles from './Page.module.scss'
import Head from 'next/head'
import {useRouter} from 'next/router'

export default ({projects}: any) => {
  const router = useRouter()
  const {slug} = router.query
  const isSlugAll = slug === 'all'

  return (
    <>
      <Head>
        <title>projects</title>
        <meta name="description" content="projects" />
      </Head>
      <main className={styles.main}>
        projects page
      </main>
    </>
  )
}