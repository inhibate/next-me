
import React, {FunctionComponent} from 'react'
import styles from '@/styles/Experience.module.scss'
import Head from 'next/head'

export default () => {
  return <>
    <Head>
      <title>experience</title>
    </Head>
    <div className={styles.experience}>
      <div className={styles.item + ' ' + styles.workHistoryItem}>WORK HISTORY</div>
      <div className={styles.item}>
        <div className={styles.position}>React Frontend Developer at Autoclad</div>
        <div className={styles.duration}>1.5 years</div>
        <div className={styles.resp}>
          <ul>
            <li>Programmed new logic using React</li>
            <li>Edited/Updated existing logic in existing codebase</li>
          </ul>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.position}>React Frontend Developer at Altinet</div>
        <div className={styles.duration}>1.2 years</div>
        <div className={styles.resp}>
          <ul>
            <li>Programmed new logic using React</li>
            <li>Edited/Updated existing logic in existing codebase</li>
          </ul>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.position}>Angular1 & React Developer at Tovarovoz (e-commerce service)</div>
        <div className={styles.duration}>1 year</div>
        <div className={styles.resp}>
          <ul>
            <li>Programmed new logic for admin-panel using Angular1 and React</li>
            <li>Edited/Updated existing logic in existing codebase</li>
            <li>Implemented CRUD for all objects within service by interacting with REST API (backend on Scala and Postgres)</li>
            <li>Resolved incoming bugs</li>
            <li>Integrated external components</li>
            <li>Used <a href="https://redux.js.org">Redux</a> library for client-caching and state management</li>
          </ul>
        </div>
      </div>
      <div className={styles.item + ' ' + styles.educationItem}>EDUCATION</div>
      <div className={styles.item}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/f/f9/%D0%98%D0%90%D0%A2%D0%AD_logo.png' />
        <div>
          <div><a href="https://en.wikipedia.org/wiki/Obninsk_Institute_for_Nuclear_Power_Engineering"><b>IATE MEPHI</b> (Obninsk Institute for Nuclear Power Engineering).</a></div>
          <div>Intelligent Cybernetic Systems. Obninsk, Russia</div>
        </div>
      </div>
    </div>
  </>
}