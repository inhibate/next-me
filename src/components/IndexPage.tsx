
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
      <div className={styles.myface}>
        <PlaceholderImage src={myFacePhoto} w={100} h={100} style={""} />
      </div>
      <div className={styles.telegram}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg" width="25" />
        <h2>telegram: <a href="https://t.me/inhibate" target="_blank">t.me/inhibate</a></h2>
      </div>
      <h2>экспириенс: <a href="https://career.habr.com/inhibate/print" target="_blank">career.habr/inhibate</a></h2>
      <h2>2024</h2>
    </main>
  </React.Fragment>
}
export default IndexPage
