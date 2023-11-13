import styles from './Item.module.scss'
import React from 'react'
import Image from 'next/image'
import sshot1 from '@/../public/sshot1.png'
import * as Typography from '@/components/Typography' 

export default () => {
  return <div className={styles.desc}>
    <div style={{margin: '15px 0'}}>
      <h2>Screenshots:</h2>
      <div>
        <a href="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsshot1.2c046ade.png&w=1920&q=100" target="_blank">
          <Image src={sshot1} quality={100} alt="sshot1" placeholder="blur" style={{maxWidth: 180, marginRight: 20}} />
        </a>
      </div>
    </div>
    <div style={{marginBottom: 20}}>
      <h2>About:</h2>
      <div>This is my personal site build primarily for showcasing my projects and work experience. It also has <Typography.Marker>/notes</Typography.Marker> page where I write something about dev (and not only)</div>
    </div>
    <div>
      <h2>Features:</h2>
      <ul style={{listStyle: 'none'}}>
        <li>Next.js 13 used</li>
        <li><b>next/image</b> for image optimization</li>
        <li><b>next/font/google</b> for fonts optimization</li>
        <li><b>next/link</b> for client-side routing</li>
        <li>Flexible layout system</li>
        <li>Routing using file structure</li>
        <li>Statical notes</li>
        <li>Disqus-comments integration in /notes</li>
        <li><b>SSG</b> for static HTML-pages</li>
        <li><b>SWR</b> for client-side caching</li>
      </ul>
    </div>
  </div>
}
