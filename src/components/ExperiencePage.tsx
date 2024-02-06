
import React, {FunctionComponent} from 'react'
import styles from '@/styles/Experience.module.scss'
import Head from 'next/head'

export default () => {
  return <>
    <Head>
      <title>experience</title>
    </Head>
    <div className={styles.experience}>
      <div className={styles.item + ' ' + styles.workHistoryItem}>🐻</div>
      <div className={styles.item}>
        <div className={styles.position}>Frontend Developer (React) at Autoclad</div>
        <div className={styles.duration}>Kyiv (Ukraine) / <b>1.2 years</b></div>
        <div className={styles.resp}>
          <ul>
            <li>Programmed new React-logic for dashboard panel</li>
            <li>Interacted with backend-developers</li>
            <li>Resolved incoming bugs</li>
            <li>Modified/supported existing functionality in existing codebase</li>
          </ul>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.position}>Frontend Developer (React) at Altinet</div>
        <div className={styles.duration}>Kyiv (Ukraine) / <b>1.1 years</b></div>
        <div className={styles.resp}>
          <ul>
            <li>Programmed new logic using React</li>
            <li>Supported functionality in existing codebase</li>
          </ul>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.position}>Frontend Developer (Angular1 & React) at Tovarovoz (e-commerce service)</div>
        <div className={styles.duration}>Kyiv (Ukraine) / <b>1 year</b></div>
        <div className={styles.resp}>
          <ul>
            <li>Programmed new logic for dashboard-panel using Angular1 and React afterwards</li>
            <li>Programmed complex UI-components</li>
            <li>Implemented CRUD for objects within dashboard by interacting with REST API (backend on Scala and Postgres)</li>
            <li>Implemented navigation within objects using React Router</li>
            <li>Implemented internationalization support for 3 languages (russian, ukrainian, english)</li>
            <li>Integrated external React-components</li>
            <li>Used <a href="https://redux.js.org">Redux</a> library for client-caching and state management</li>
            <li>Resolved incoming bugs</li>
          </ul>
        </div>
      </div>
      <div className={styles.item + ' ' + styles.educationItem}>EDUCATION</div>
      <div className={styles.item}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/f/f9/%D0%98%D0%90%D0%A2%D0%AD_logo.png' />
        <div>
          <div><a href="https://en.wikipedia.org/wiki/Obninsk_Institute_for_Nuclear_Power_Engineering"><b>IATE MEPHI</b> (Obninsk Institute for Nuclear Power Engineering).</a></div>
          <div>Obninsk, Russia</div>
        </div>
      </div>
    </div>
  </>
}