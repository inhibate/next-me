import styles from './Item.module.scss'
import React from 'react'
import {Paragraph} from '../Typography'
import Image from 'next/image'
import screenshot1 from '@/../public/S31009-203907.jpg'
import screenshot2 from '@/../public/S31009-203912.jpg'

export default () => {
  return <div className={styles.desc}>
    <h2>Screenshots:</h2>
    <div>
      <Image src={screenshot1} quality={100} alt="screenshot1" placeholder="blur" style={{maxWidth: 180, marginRight: 20}} />
      <Image src={screenshot2} quality={100} alt="screenshot2" placeholder="blur" style={{maxWidth: 180}} />
    </div>
    <Paragraph>
      <h2>Features:</h2>
      <ul style={{listStyle: 'none'}}>
        <li>Build with Next Framework</li>
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
    </Paragraph>
  </div>
}
