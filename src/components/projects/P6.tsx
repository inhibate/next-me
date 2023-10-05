import styles from './Item.module.scss'
import React, {FC} from 'react'
import {Highlight, Paragraph} from '../Typography'
import {useColorScheme} from '../Hooks'
import {ColorSchemes} from '../SwitchColorScheme'

const Component: FC<{}> = props => {
  return <div className={styles.desc}>
    <Paragraph>Stack:</Paragraph>
    <Paragraph>Backend: node.js, Next, Nest, Multer, JWT (<a href="https://github.com/prg938/cloudify-backend" target="_blank">code</a>)</Paragraph>
    <Paragraph>Client: Next, React, JSX, Nookies, Antd UI, SCSS (<a href="https://github.com/prg938/cloudify-client" target="_blank">code</a>)</Paragraph>
    <Paragraph>Demonstration:</Paragraph>
    <Paragraph>
      <video controls muted loop autoPlay>
        <source src={'https://user-images.githubusercontent.com/7237762/272883169-229b6520-ca4d-4435-9a4f-edf83685c500.mp4'} type="video/mp4" />
      </video>
    </Paragraph>
  </div>
}

export default Component