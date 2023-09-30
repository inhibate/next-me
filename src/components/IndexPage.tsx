
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
      <h3>Telegram: <a href="https://t.me/prg938" target="_blank">prg938</a></h3>
      <h3>Email: <a href="mailto:prg938@mail.ru" target="_blank">prg938@mail.ru</a></h3>
    </div>
  </div>
}

const Background: FunctionComponent = () => {
  return <div className={styles.background}>
    <h3>Background: <a href="http://eng.iate.obninsk.ru" target="_blank">OINPE NRNU MEPhI</a></h3>
  </div>
}

const Location: FunctionComponent = () => {
  return <div>
    <b>location: </b>Russia, Moscow/Kaluga
    <br/>
    <b>bdate: </b>August 21/93
  </div>
}

const WorkExperience: FunctionComponent = () => {
  const teamStyle = {display: 'flex', alignItems: 'center', gap: 5, marginRight: 5, flexDirection: 'column'} as const 
  const bhingoleramdas143 = <a href="https://gitlab.com/bhingoleramdas143" target="_blank"><img width="100" height="100" src="https://yt3.googleusercontent.com/ytc/APkrFKa7hY520VBRRMG-eI1c1l1X-NS5zf63SQQRJO2A4tY=s176-c-k-c0x00ffffff-no-rj" alt='img' /></a>
  const sergeda = <a href="https://github.com/sergeda" target="_blank"><img width="100" height="100" src="https://avatars.githubusercontent.com/u/914764?v=4" alt='img' /></a>
  const prg938 = <a href="https://github.com/prg938" target="_blank"><img width="100" height="100" src="https://prg938.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.0ab4b34f.jpg&amp;w=640&amp;q=100" alt='img' /></a>
  return <div className={styles.workExperience}>
    <h3 style={{fontSize: 80, marginLeft: -6}}>&lt;Experience/&gt;</h3>
    <ul>
      <li>
        <div style={{fontSize: 100}}>3</div>
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
        <div style={{fontSize: 100}}>2</div>
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
        <div style={{fontSize: 100}}>1</div>
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
    <h3>Stack:</h3>
    <div className={styles.skill}><b>Frontend:</b> Plain JavaScript ◌ TypeScript ◌ React ◌ Redux ◌ RTK ◌ RTK Query ◌ Zustand ◌ Next.js ◌ SWR ◌ HTML5 ◌ CSS3 ◌ MUI ◌ Antd ◌ Sass preprocessor ◌ Webpack.</div>
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
        <div className={styles.flexWrapper}>
          <Image src={meJPG} quality={100} alt="PRG938" placeholder="blur" />
        </div>
        <Location />
        <Me />
        <Background />
        <Stack />
        <WorkExperience />
      </main>
    </>
  )
}
export default IndexPage
