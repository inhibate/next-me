
import React, {FunctionComponent} from 'react'
import styles from '@/styles/Index.module.scss'
import meJPG from '@/../public/me.jpg'
import Head from 'next/head'
import Image from 'next/image'

const Me: FunctionComponent = () => {
  return <div className={styles.me}>
    <div className={styles.name}>
      <h1><b>IVAN PAKOV</b></h1>
    </div>
    <div className={styles.occ}>
      <h2>JS/TS Fullstack Software developer / Russia</h2>
    </div>
    <h4 style={{marginTop: 15}}>Contact #1: Email: <a href="mailto:prg938@mail.ru" target="_blank">prg938@mail.ru</a></h4>
    <h4>Contact #2: Telegram (preferable): <a href="https://t.me/prg938" target="_blank">prg938</a></h4>
  </div>
}

const Background: FunctionComponent = () => {
  return <div className={styles.background}>
    <h3>Background: <a href="http://eng.iate.obninsk.ru" target="_blank">IATE MEPhI</a></h3>
  </div>
}

const WorkExperience: FunctionComponent = () => {
  const teamStyle = {display: 'flex', alignItems: 'center', gap: 5, marginRight: 5, flexDirection: 'column'} as const 
  const bhingoleramdas143 = <a href="https://gitlab.com/bhingoleramdas143" target="_blank"><img width="100" height="100" src="https://yt3.googleusercontent.com/ytc/APkrFKa7hY520VBRRMG-eI1c1l1X-NS5zf63SQQRJO2A4tY=s176-c-k-c0x00ffffff-no-rj" alt='img' /></a>
  const sergeda = <a href="https://github.com/sergeda" target="_blank"><img width="100" height="100" src="https://avatars.githubusercontent.com/u/914764?v=4" alt='img' /></a>
  const prg938 = <a href="https://github.com/prg938" target="_blank"><img width="100" height="100" src="https://prg938.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.0ab4b34f.jpg&amp;w=640&amp;q=100" alt='img' /></a>
  return <div className={styles.workExperience}>
    <h3 style={{fontSize: 60}}>Experience:</h3>
    <ul>
      <li>
        <div style={teamStyle}>
          TEAM:
          {prg938}
          +unknown
        </div>
        <div>
          <div>
            <h2>◌ 2019 — Oct 4/2021 — Frontend Developer (React) <b>at <a href="http://www.autoklad.ua" target='_blank'>AUTOCLAD</a></b></h2>
          </div>
          <div className={styles.list}>
            <ul>
              <li>◌ Creating/Updating logic using React for admin-panel</li>
              <li>◌ Backend interaction using REST API (RoR + Postgres)</li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <div style={teamStyle}>
          TEAM:
          {sergeda}
          {prg938}
        </div>
        <div>
          <div>
            <h2>◌ 2017 — Nov 7/2018 — Frontend Developer (React) <b>at <a href="http://altinet.ua" target='_blank'>ALTINET</a></b></h2>
          </div>
          <div className={styles.list}>
            <ul>
              <li>◌ Programming new logic using React</li>
              <li>◌ Editing/Updating existing logic using React</li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <div style={teamStyle}>
          TEAM:
          {bhingoleramdas143}
          {sergeda}
          {prg938}
        </div>
        <div>
          <div>
            <h2>◌ 2015 — Jun 11/2016 — Frontend-developer (Angular 1 & React) <b>at <a href="https://vk.com/tovarovoz" target='_blank'>TOVAROVOZ</a></b></h2>
          </div>
          <div className={styles.list}>
            <ul>
              <li>◌ Programming new logic for admin-panel using Angular 1 & React</li>
              <li>◌ Editing/Updating existing logic</li>
              <li>◌ Implementing CRUD by interacting with REST API (Scala + Postgres)</li>
              <li>◌ Implementing client-routing for entities</li>
              <li>◌ Implementing i18n for 3 languages</li>
              <li>◌ Resolving incoming bugs</li>
              <li>◌ Integrating external components (WYSIWYG-editor / file-uploader)</li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
}

const Stack: FunctionComponent = () => {
  return <div className={styles.skillset}>
    <div className={styles.skill}>
      <h1 style={{maxWidth: 100}}>Main Stack: </h1>
      <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
      <img width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
      <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
      <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
      <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg" />
      <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
      <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
      <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg" />
      <img width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain-wordmark.svg" />
      <img width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
    </div>
    <h4 style={{fontWeight: 400}}>+: HTTP/WS, JWT, REST, <b>Type</b>ORM, SWR, Zustand, Sass/Scss, Antd UI, MUI</h4>
  </div>
}

const Main: FunctionComponent = () => {
  return <div className={styles.flexWrapper}>
  <Me />
  <Image src={meJPG} quality={100} alt="PRG938" placeholder="blur" style={{borderRadius: 3}} />
</div>
}

const IndexPage: FunctionComponent = props => {
  return (
    <>
      <Head>
        <title>PRG938</title>
        <meta name="description" content="#PRG938 #Pakov #Ivan #frontend #backend #next #nest #react #node.js #typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="yandex-verification" content="a1e54786b39f217b" />
        <meta name="google-site-verification" content="WwqOSUwmJ7QuPCHC5yGGIOBO21M4gd6RZAkR0hcStf8" />
      </Head>
      <main className={styles.main}>
        <Main />
        <Stack />
        <Background />
        <WorkExperience />
      </main>
    </>
  )
}
export default IndexPage
