
import React, {FunctionComponent} from 'react'
import styles from '@/styles/Experience.module.scss'
import Head from 'next/head'

export default () => {
  return <>
    <Head>
      <title>experience</title>
    </Head>
    <div className={styles.experience}>
      <div>Экспириенс можно посмотреть тут:</div>
      <a href="https://career.habr.com/prg938/print">career.habr.com/prg938/print</a>
    </div>
  </>
}