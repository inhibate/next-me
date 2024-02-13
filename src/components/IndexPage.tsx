
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
          <div>Привет)</div>
          <div className={styles.telegram}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg" width="25" />
            <div>telegram: <a href="https://t.me/prg938" target="_blank">t.me/prg938</a></div>
          </div>
        </div>
        <div className={styles.myface}>
          <Image src={myFacePhoto} quality={100} alt="PRG938" placeholder="blur" />
        </div>
        <div className={styles.stack}>
          <ul>
            <li className={styles.label}><b>Frontend стек: </b></li>
            <li><a href="https://en.wikipedia.org/wiki/JavaScript">Pure JavaScript</a></li>
            <li><a href="https://www.typescriptlang.org">TypeScript</a></li>
            <li><a href="https://nextjs.org">Next (React framework)</a></li>
            <li><a href="https://react.dev">React</a></li>
            <li><a href="https://github.com/pmndrs/zustand">Zustand 🐻</a></li>
            <li><a href="https://redux.js.org">Redux</a></li>
            <li><a href="https://swr.vercel.app">SWR</a></li>
            <li><a href="https://react-hook-form.com">React Hook Form</a></li>
            <li><a href="https://sass-lang.com">Sass</a></li>
            <li><a href="https://mui.com">MUI</a>/<a href="https://ant.design">Antd</a></li>
            <li><a href="https://webpack.js.org">Webpack</a></li>
            <li><a href="https://www.apollographql.com/apollo-client">Apollo Client</a></li>
            <li><a href="https://graphql.org">GraphQL</a></li>
          </ul>
          <ul>
            <li className={styles.label}><b>Backend стек: </b></li>
            <li><a href="https://nodejs.org/en">Node.js</a></li>
            <li><a href="https://nestjs.com">Nest (Node Framework)</a></li>
            <li><a href="https://ru.wikipedia.org/wiki/HTTP">HTTP</a></li>
            <li><a href="https://ru.wikipedia.org/wiki/WebSocket">WebSocket</a></li>
            <li><a href="https://typeorm.io">TypeORM</a></li>
            <li><a href="https://jwt.io">JWT</a></li>
            <li><a href="https://en.wikipedia.org/wiki/REST">REST</a></li>
            <li><a href="https://en.wikipedia.org/wiki/REST">Git</a></li>
          </ul>
          <ul>
            <li className={styles.label}><b>+: </b></li>
            <li><a href="https://github.com/prg938">github.com/prg938 (github)</a></li>
            <li><a href="https://gitlab.com/hypotenuse">gitlab.com/hypotenuse (Gitlab)</a></li>
          </ul>
        </div>
      </main>
    </>
  )
}
export default IndexPage
