
import React, {FunctionComponent, useEffect} from 'react'
import styles from '@/styles/Index.module.scss'
import meJPG from '@/../public/me.jpg'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CityGallery from './CityGallery'

const Me: FunctionComponent = () => {
  return <div className={styles.me}>
    <div className={styles.hi}>
      <h1><b>IVAN PAKOV</b></h1>
    </div>
    <div className={styles.contacts}>
      <h2 style={{marginBottom: 20}}>Fullstack Developer (next.js / nest.js / typescript)</h2>
      <ul>
        <li>
          <span>telegram: </span>
          <a href="https://t.me/prg938" target="_blank">
            <b>prg938</b>
          </a>
        </li>
        <li>
          <span>email: </span>
          <a href="mailto:prg938@mail.ru" target="_blank">
            <b>prg938@mail.ru</b>
          </a>
        </li>
      </ul>
    </div>
  </div>
}

const Background: FunctionComponent = () => {
  return <div className={styles.background}>
    <h3>Background/Education: <a href="http://eng.iate.obninsk.ru" target="_blank">OINPE NRNU MEPhI</a></h3>
  </div>
}

const Location: FunctionComponent = () => {
  return <div>
    <b>location: </b>Russia, Moscow/Obninsk
    <br/>
    <b>b-date: </b>August 21/93 (29yo)
  </div>
}

const WorkExperience: FunctionComponent = () => {
  return <div className={styles.workExperience}>
    <h3>Commercial experience:</h3>
    <ul>
      <li>
        <div>
          <h4>2019 — Oct 4/2021 Frontend Developer (React) <b>at <a href="http://www.autoklad.ua" target='_blank'>AUTOCLAD</a></b></h4>
        </div>
        <div className={styles.list}>
          <ul>
            <li>🥤 Creating/Updating logic using React for admin-panel</li>
            <li>🥤 Backend interaction using REST API (RoR + Postgres)</li>
          </ul>
        </div>
      </li>
      <li>
        <div>
          <h4>2016 — Aug 21/2018 Frontend Developer (React) <b>at <a href="http://altinet.ua" target='_blank'>ALTINET</a></b></h4>
        </div>
        <div>
          <b>team:  
          <a href="https://github.com/sergeda" target="_blank"> Serhii Dashko - </a>
          <a href="https://github.com/prg938" target="_blank"> Ivan Pakov </a></b>
        </div>
        <div className={styles.list}>
          <ul>
            <li>🥤 Programming new logic using React</li>
            <li>🥤 Editing/Updating existing logic using React</li>
          </ul>
        </div>
      </li>
      <li>
        <div>
          <h4>2015 — Jun 11/2016 Frontend-developer (Angular 1 & React) <b>at <a href="https://vk.com/tovarovoz" target='_blank'>TOVAROVOZ</a></b></h4>
        </div>
        <div>
          <b>team:  
          <a href="https://github.com/prg938" target="_blank"> Ivan Pakov - </a></b>
          <a href="https://gitlab.com/bhingoleramdas143" target="_blank"> Ramdas Bhingole - </a>
          <a href="https://github.com/sergeda" target="_blank">  Serhii Dashko </a>
        </div>
        <div className={styles.list}>
          <ul>
            <li>🥤 Programming new logic for admin-panel using Angular 1 & React</li>
            <li>🥤 Editing/Updating existing logic</li>
            <li>🥤 Implementing CRUD by interacting with REST API (Scala + Postgres)</li>
            <li>🥤 Implementing client-routing for entities</li>
            <li>🥤 Implementing i18n for 3 languages</li>
            <li>🥤 Resolving incoming bugs</li>
            <li>🥤 Integrating external components (WYSIWYG-editor / file-uploader)</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
}

const Stack: FunctionComponent = () => {
  return <div className={styles.skillset}>
    <h3>Stack:</h3>
    <div className={styles.skill}><b>Frontend:</b> JavaScript ◌ TypeScript ◌ React ◌ Redux ◌ RTK ◌ RTK Query ◌ Zustand ◌ Next.js ◌ SWR ◌ HTML5 ◌ CSS3 ◌ MUI ◌ Antd ◌ Sass preprocessor ◌ Webpack.</div>
    <div className={styles.skill}><b>Backend:</b> REST ◌ HTTP/WS Protocols ◌ node.js ◌ TypeScript ◌ Nest ◌ TypeORM ◌ Postgres ◌ Swagger.</div>
    <div className={styles.skill}><b>Editors:</b> VS Code <b>Services:</b> Github/Gitlab <b>VCS:</b> Git </div>
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
        <Me />
        <div className={styles.flexWrapper}>
          <Image src={meJPG} quality={100} alt="PRG938" placeholder="blur" />
          <object type="image/svg+xml" data="https://github-readme-stats.vercel.app/api/top-langs/?username=prg938&layout=compact&hide_border=true&theme=dark&langs_count=4" />
        </div>
        <Location />
        <Background />
        <Stack />
        <WorkExperience />
      </main>
    </>
  )
}
export default IndexPage
