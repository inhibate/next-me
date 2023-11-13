import { Paragraph } from '../Typography'
import styles from './Item.module.scss'
import React from 'react'

export default () => {
  return <div className={styles.desc}>
    <b>Mario game using Pure JavaScript and Canvas</b>.
    <br />
    2 levels almost complete, other levels still under development😎
    <Paragraph>
      Play game: <a href='https://prg938.github.io/mariogame' target='_blank'>prg938.github.io/mariogame</a>
    </Paragraph>
    <video width={300} controls muted loop autoPlay>
      <source src={'https://user-images.githubusercontent.com/7237762/223578682-67f165f4-6d51-423a-9740-96fb184dfe63.mp4'} type="video/mp4" />
    </video>
    <br />
  </div>
}