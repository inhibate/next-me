
import React, {FunctionComponent} from 'react'
import Head from 'next/head'
import styles from '@/styles/Index.module.scss'
import myFacePhoto from '@/../public/myface.jpg'
import { PlaceholderImage } from '@/components/PlaceholderImage'

const IndexPage: FunctionComponent = props => {
  return <React.Fragment>
    <Head>
      <title>Ivan Dev</title>
      <meta name="description" content="#pakov #ivan #inhibate #frontend #backend #next #react #node.js #typescript" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="yandex-verification" content="a1e54786b39f217b" />
      <meta name="google-site-verification" content="WwqOSUwmJ7QuPCHC5yGGIOBO21M4gd6RZAkR0hcStf8" />
    </Head>
    <main className={styles.main}>
      <h2>Привет 🌝 Я <b>React/Next Frontend-разработчик.</b> Резюме/CV: <a href="https://career.habr.com/ivanpk938/print" target="_blank">career.habr.com/ivanpk938</a></h2>
    </main>
  </React.Fragment>
}
export default IndexPage
