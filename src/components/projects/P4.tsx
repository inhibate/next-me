import styles from './Item.module.scss'
import React from 'react'
import {Paragraph} from '../Typography'

export default () => {
  return <div className={styles.desc}>
    <Paragraph>
      <a href='https://prg938.vercel.app/' target='_blank'>prg938.vercel.app</a> using Next Framework.
    </Paragraph>
    <h2>Features:</h2>
    <ul style={{listStyle: 'none'}}>
      <li><b>next/image</b> for image optimization</li>
      <li><b>next/font/google</b> for fonts optimization</li>
      <li><b>next/link</b> for client-side routing</li>
      <li>Flexible layout system</li>
      <li>Routing using file structure</li>
      <li>Statical notes</li>
      <li>Disqus-comments integration</li>
      <li>Dark/Light color-scheme switching</li>
      <li>MUI-Switcher</li>
      <li><b>SSG</b> for static HTML-pages</li>
      <li><b>SWR</b> for client-side caching</li>
    </ul>
  </div>
}
