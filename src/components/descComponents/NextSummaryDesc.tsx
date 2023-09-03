import styles from '@/styles/ProjectItem.module.scss'
import React from 'react'
import {Paragraph} from '../Typography'

export default () => {
  return <div className={styles.desc}>
    <Paragraph>
      <a href='https://prg938.vercel.app/' target='_blank'>prg938.vercel.app</a> using Next.js react framework.
    </Paragraph>
    <h2>FUNCTIONALITY:</h2>
    <ul style={{listStyle: 'none'}}>
      <li><b>next/image</b> for image optimization</li>
      <li><b>next/font/google</b> for fonts optimization</li>
      <li><b>next/link</b> for client-side routing</li>
      <li>Flexible layout system</li>
      <li>Routing using file structure</li>
      <li>Dynamic gallery</li>
      <li>Statical notes + disqus-comment system integration</li>
      <li>Dark/Light color-scheme switching</li>
      <li>MUI-Switcher</li>
      <li>Github Gists</li>
      <li><b>SSG</b> for static html-pages and data</li>
      <li><b>SWR</b> for client-side fetching and caching</li>
    </ul>
  </div>
}
