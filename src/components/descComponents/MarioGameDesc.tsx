import styles from '@/styles/ProjectItem.module.scss'
import React from 'react'

export default () => {
  return <div className={styles.desc}>
    <b>Mario game using JavaScript and HTML5 Canvas</b>.
    <br />
    2 levels ready to be played! Other levels still under development😎
    <br />
    Play <a href='https://prg938.github.io/mariogame' target='_blank'>HERE</a>
  </div>
}