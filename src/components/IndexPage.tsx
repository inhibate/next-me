
import React, {FunctionComponent} from 'react'
import styles from '@/styles/Index.module.scss'
import meJPG from '@/../public/me.jpg'
import Head from 'next/head'
import Image from 'next/image'
import {Highlight} from '@/components/Typography'

const cppHW = `#include <iostream>
using namespace std;
int main(void) {
  cout << "HELLO WORLD";
  return 0;
}
`

const Me: FunctionComponent = () => {
  return <div className={styles.me}>
    <Highlight language='cpp'>{cppHW}</Highlight>
  </div>
}

const Info: FunctionComponent = () => {
  return <div className={styles.info}>
    <div className={styles.name}>
      <h4>IVAN PAKOV</h4>
    </div>
    <div className={styles.occ}>
      <h2>JavaScript/TypeScript software developer</h2>
    </div>
    <div style={{marginTop: 15}}><a href="mailto:prg938@mail.ru" target="_blank">prg938@mail.ru</a> - email</div>
    <div style={{marginBottom: 15}}><a href="https://t.me/prg938" target="_blank">prg938</a> - telegram</div>
    <h4 style={{fontWeight: 'var(--body-font-weight)', textTransform: 'uppercase'}}><b>Background: </b><a href="http://eng.iate.obninsk.ru" target="_blank">IATE MEPhI</a></h4>
  </div>
}

const WorkExperience: FunctionComponent = () => {
  const teamStyle = {display: 'flex', alignItems: 'center', gap: 5, marginRight: 5} as const 
  const imgStyle = {borderRadius: '50%'}
  const bhingoleramdas143 = <a href="https://gitlab.com/bhingoleramdas143" target="_blank"><img style={imgStyle} width="25" height="25" src="https://yt3.googleusercontent.com/ytc/APkrFKa7hY520VBRRMG-eI1c1l1X-NS5zf63SQQRJO2A4tY=s176-c-k-c0x00ffffff-no-rj" alt='img' /></a>
  const sergeda = <a href="https://github.com/sergeda" target="_blank"><img style={imgStyle} width="25" height="25" src="https://avatars.githubusercontent.com/u/914764?v=4" alt='img' /></a>
  const prg938 = <a href="https://github.com/prg938" target="_blank"><img style={imgStyle} width="25" height="25" src="https://prg938.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.0ab4b34f.jpg&amp;w=640&amp;q=100" alt='img' /></a>
  return <div className={styles.workExperience}>
    <h3 style={{fontSize: 35, textTransform: 'uppercase'}}>Experience:</h3>
    <ul>
      <li>
        <div>
          <div>
            <h3>2019 — Oct 4/2021 — React Frontend Developer <b>at <a href="http://www.autoklad.ua" target='_blank'>AUTOCLAD</a></b></h3>
          </div>
          <div className={styles.list}>
            <ul>
              <li>Created/Updated logic using React for admin-panel</li>
              <li>Interacted with backend using REST API (RoR and Postgres)</li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <div>
          <div>
            <h3>2017 — Nov 7/2018 — Frontend Developer (React) <b>at <a href="http://altinet.ua" target='_blank'>ALTINET</a></b></h3>
          </div>
          <div style={teamStyle}>TEAM — {sergeda} {prg938}</div>
          <div className={styles.list}>
            <ul>
              <li>Programmed new logic using React</li>
              <li>Editied/Updated existing logic using React</li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <div>
          <div>
            <h3>2015 — Jun 11/2016 — Frontend-developer (Angular 1 & React) <b>at <a href="https://vk.com/tovarovoz" target='_blank'>TOVAROVOZ</a></b></h3>
          </div>
          <div style={teamStyle}>TEAM — {bhingoleramdas143} {sergeda} {prg938}</div>
          <div className={styles.list}>
            <ul>
              <li>Programmed new logic for admin-panel using Angular 1 and React</li>
              <li>Edited/Updated existing logic in existing codebase</li>
              <li>Implemented CRUD by interacting with REST API (backend on Scala and Postgres)</li>
              <li>Resolved incoming bugs</li>
              <li>Integrated external components</li>
              <li>Used Redux as a library for client-caching for data fetched via REST API</li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
}

const Stack: FunctionComponent = () => {
  return <div className={styles.skillset}>
    <h4 style={{fontWeight: 'var(--body-font-weight)'}}><b>STACK:</b> TS/JS, node.js, Next, React, Redux, SWR, Zustand, Sass/Scss, Antd, MUI, Git, Nest, Webpack, HTTP/WS, JWT, REST, TypeORM, Redis, PostgreSQL</h4>
  </div>
}

const Main: FunctionComponent = () => {
  return <div className={styles.flexWrapper}>
    <Image src={meJPG} quality={100} alt="PRG938" placeholder="blur" style={{borderRadius: '50%'}} />
    <Me />
  </div>
}

const IndexPage: FunctionComponent = props => {
  return (
    <>
      <Head>
        <title>Fullstack Developer PRG938</title>
        <meta name="description" content="#PRG938 #Pakov #Ivan #frontend #backend #next #nest #react #node.js #typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="yandex-verification" content="a1e54786b39f217b" />
        <meta name="google-site-verification" content="WwqOSUwmJ7QuPCHC5yGGIOBO21M4gd6RZAkR0hcStf8" />
      </Head>
      <main className={styles.main}>
        <Main />
        <Info />
        <Stack />
        <WorkExperience />
      </main>
    </>
  )
}
export default IndexPage
