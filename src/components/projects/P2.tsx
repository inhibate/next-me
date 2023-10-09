import styles from './Item.module.scss'
import React from 'react'

export default () => {
  return <div className={styles.desc}>
    Play <a href='https://prg938.github.io/mariogame' target='_blank'>HERE</a>
    <br />
    <b>Mario game using JavaScript and HTML5 Canvas</b>.
    <br />
    Two levels ready to be played! Other levels still under development😎. I will continue development soon
    <br />
    <br />
    <video width={300} controls muted loop autoPlay>
      <source src={'https://user-images.githubusercontent.com/7237762/223578682-67f165f4-6d51-423a-9740-96fb184dfe63.mp4'} type="video/mp4" />
    </video>
    <br />
  </div>
}