
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
    <h3>Background/Education: <a href="http://eng.iate.obninsk.ru" target="_blank">OINPE</a></h3>
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
          <h2>Frontend Developer (React)</h2>
        </div>
        <div>
          <b>At </b>
          <a href="http://www.autoklad.ua" target='_blank'>remote/AUTOCLAD</a>
        </div>
        <div>
          <b>Time: </b>
          <span>2019 — Oct 4/2021</span>
        </div>
        <div>
          <ul>
            <li>Creating/Updating business-logic using React for admin-panel</li>
            <li>Database interaction using REST API</li>
          </ul>
        </div>
      </li>
      <li>
        <div>
          <h2>Frontend Developer (React)</h2>
        </div>
        <div>
          <b>At </b>
          <a href="http://altinet.ua" target='_blank'>remote/ALTINET</a>
        </div>
        <div>
          <b>Time: </b>
          <span>2016 — Aug 21/2018</span>
        </div>
        <div>
          <span>
            <b>Team: </b>
          </span>
          <span>
            <a href="https://github.com/sergeda" target="_blank">Serhii Dashko</a>
            <span>&nbsp;&nbsp;</span>
          </span>
          <span>
            <a href="https://github.com/prg938" target="_blank">ME</a>
            <span>&nbsp;&nbsp;</span>
          </span>
        </div>
        <div>
          <ul>
            <li>Creating new business-logic using React</li>
            <li>Updating existing business-logic using React</li>
          </ul>
        </div>
      </li>
      <li>
        <div>
          <h2>Frontend-developer (Angular 1 & React)</h2>
        </div>
        <div>
          <b>At </b>
          <a href="https://vk.com/tovarovoz" target='_blank'>remote/TOVAROVOZ</a>
        </div>
        <div>
          <b>Time: </b>
          <span>2015 — Jun 11/2016</span>
        </div>
        <div>
          <span>
            <b>Team: </b>
          </span>
          <span>
            <a href="https://github.com/sergeda" target="_blank">Serhii Dashko</a>
            <span>&nbsp;&nbsp;</span>
          </span>
          <span>
            <a href="https://github.com/prg938" target="_blank">ME</a>
            <span>&nbsp;&nbsp;</span>
          </span>
          <span>
            <a href="https://gitlab.com/bhingoleramdas143" target="_blank">Ramdas Bhingole</a>
            <span>&nbsp;&nbsp;</span>
          </span>
        </div>
        <div>
          <ul>
            <li>Creating/Updating business-logic using Angular 1 & React for admin-panel</li>
            <li>Implementing CRUD logic interacting with REST API</li>
            <li>Implementing client-routing for entities</li>
            <li>Implementing i18n for 3 languages</li>
            <li>Resolving incoming bugs</li>
            <li>Integrating external components (WYSIWYG-editor / file-uploader)</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
}

const Stack: FunctionComponent = () => {
  return <div className={styles.skillset}>
    <h3>Stack:</h3>
    <ul>
      <li><b>Frontend:</b></li>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>React</li>
      <li>Redux</li>
      <li>MUI</li>
      <li>Antd</li>
      <li>RTK</li>
      <li>RTK Query</li>
      <li>Next.js</li>
      <li>SWR</li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Sass preprocessor</li>
      <li>Webpack</li>
      <li>-</li>
      <li><b>Backend (Junior):</b></li>
      <li>REST</li>
      <li>HTTP/WS Protocols</li>
      <li>Node.js</li>
      <li>TypeScript</li>
      <li>Nest</li>
      <li>TypeORM</li>
      <li>Postgres</li>
      <li>Swagger</li>
      <li>-</li>
      <li><b>Editors:</b></li>
      <li>VS Code</li>
      <li>-</li>
      <li><b>VCS:</b></li>
      <li>Git</li>
      <li>-</li>
      <li><b>Services:</b></li>
      <li>Github</li>
      <li>Gitlab</li>
    </ul>
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
        <div className={styles.skillsetWorkExperienceGroup}>
          <WorkExperience />
          <Stack />
        </div>
      </main>
    </>
  )
}
export default IndexPage
