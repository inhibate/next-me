
import React, {FunctionComponent} from 'react'
import styles from '@/styles/Index.module.scss'
import myFacePhoto from '@/../public/me.png'
import Head from 'next/head'
import Image from 'next/image'

const Stack: FunctionComponent = () => {
  return <div className={styles.skillset}>
    <div style={{fontWeight: 'var(--body-font-weight)'}}><b>STACK:</b> TS/JS, node.js, Next, React, Redux, SWR, Zustand, Sass/Scss, Antd, MUI, Git, Nest, Webpack, HTTP/WS, JWT, REST, TypeORM, Redis, PostgreSQL</div>
  </div>
}

const IndexPage: FunctionComponent = props => {
  return (
    <>
      <Head>
        <title>Ivan Pakov. Software developer</title>
        <meta name="description" content="#pakov #ivan #frontend #backend #next #nest #react #node.js #typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="yandex-verification" content="a1e54786b39f217b" />
        <meta name="google-site-verification" content="WwqOSUwmJ7QuPCHC5yGGIOBO21M4gd6RZAkR0hcStf8" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>
          <div>Привет. Какими судьбами?</div>
        <div className={styles.myface}>
          <Image src={myFacePhoto} quality={100} alt="PRG938" placeholder="blur" />
        </div>
        <div className={styles.telegram}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg" width="25" />
            <div>telegram: <a href="https://t.me/prg938" target="_blank">t.me/prg938</a></div>
          </div>
        </div>
        <div className={styles.stack}>
        </div>
      </main>
    </>
  )
}
export default IndexPage
