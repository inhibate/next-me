
import React, {FunctionComponent} from 'react'
import styles from '@/styles/Experience.module.scss'
import Head from 'next/head'

export default () => {
  return <>
    <Head>
      <title>экспириенс</title>
    </Head>
    <div className={styles.experience}>
      <div>Экспириенс можно посмотреть тут:</div>
      <a href="https://career.habr.com/inhibate/print">career.habr.com/inhibate/print</a>
    </div>
  </>
}