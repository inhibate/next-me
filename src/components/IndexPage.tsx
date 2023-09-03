
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
      <h2 style={{color: 'rebeccapurple', marginBottom: 20}}>Fullstack Developer (Next.js / Nest.js / TypeScript)</h2>
      <ul>
        <li>
          <span>Telegram: </span>
          <a href="https://t.me/prg938" target="_blank">
            <b>prg938</b>
          </a>
        </li>
        <li>
          <span>Email: </span>
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
    <h3>Location: Russia, Moscow/Obninsk </h3>
  </div>
}

const WorkExperience: FunctionComponent = () => {
  return <div className={styles.workExperience}>
    <h3>Commercial experience:</h3>
    <ul>
      <li>
        <div>
          <h2>2019 — Oct 4/2021 — Frontend Developer (React)</h2>
        </div>
        <div>
          <b>at <a href="http://www.autoklad.ua" target='_blank'>remote/AUTOCLAD</a></b>
        </div>
        <div>
          <ul>
            <li>🥤 Creating/Updating logic using React for admin-panel</li>
            <li>🥤 Backend interaction using REST API (RoR + Postgres)</li>
          </ul>
        </div>
      </li>
      <li>
        <div>
          <h2>2016 — Aug 21/2018 — Frontend Developer (React)</h2>
        </div>
        <div>
          <b>at <a href="http://altinet.ua" target='_blank'>remote/ALTINET</a></b>
        </div>
        <div>
          <b>team  
          <a href="https://github.com/sergeda" target="_blank"> Serhii Dashko - </a>
          <a href="https://github.com/prg938" target="_blank"> Ivan Pakov </a></b>
        </div>
        <div>
          <ul>
            <li>🥤 Programming new logic using React</li>
            <li>🥤 Editing/Updating existing logic using React</li>
          </ul>
        </div>
      </li>
      <li>
        <div>
          <h2>2015 — Jun 11/2016 — Frontend-developer (Angular 1 & React)</h2>
        </div>
        <div>
          <b>at </b>
          <a href="https://vk.com/tovarovoz" target='_blank'>remote/TOVAROVOZ</a>
        </div>
        <div>
          <b>team  
          <a href="https://github.com/prg938" target="_blank"> Ivan Pakov - </a></b>
          <a href="https://gitlab.com/bhingoleramdas143" target="_blank"> Ramdas Bhingole - </a>
          <a href="https://github.com/sergeda" target="_blank">  Serhii Dashko </a>
          
        </div>
        <div>
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
    <div className={styles.skill}><b>Frontend:</b> JavaScript ◌ TypeScript ◌ React ◌ Redux ◌ MUI ◌ Antd ◌ RTK ◌ RTK Query ◌ Next.js ◌ SWR ◌ HTML5 ◌ CSS3 ◌ Sass preprocessor ◌ Webpack.</div>
    <div className={styles.skill}><b>Backend:</b> REST ◌ HTTP/WS Protocols ◌ node.js ◌ TypeScript ◌ Nest ◌ TypeORM ◌ Postgres ◌ Swagger.</div>
    <div className={styles.skill}><b>Editors:</b> VS Code <b>Services:</b> Github/Gitlab <b>VCS:</b> Git </div>
  </div>
}

const IndexPage: FunctionComponent = props => {
  useEffect(() => { console.log('WHOAMI') }, [])
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
        <div style={{display: 'flex'}}>
          <Image src={meJPG} quality={100} alt="PRG938" placeholder="blur" style={{width: 180, height: 'auto', borderRadius: 16, marginRight: 20}} />
          <CityGallery />
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
