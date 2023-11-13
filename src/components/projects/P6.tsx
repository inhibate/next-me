import styles from './Item.module.scss'
import React, {FC} from 'react'
import {Highlight, Paragraph} from '../Typography'
import {useColorScheme} from '../Hooks'
import {ColorSchemes} from '../SwitchColorScheme'

const Component: FC<{}> = props => {
  return <div className={styles.desc}>
    <Paragraph>Clouify is a Node.js-service where user can create profile, upload files and store them. In main page he can view a list of uploaded files with ability to move unneeded files to the bin. Bin page contains removed files</Paragraph>
    <Paragraph>Backend (<a href="https://github.com/prg938/cloudify-backend" target="_blank"><b>code</b></a>): Node.js, Nest.js, Vercel Postgres (serverless SQL database), TypeORM, Multer, JWT</Paragraph>
    <Paragraph>Client (<a href="https://github.com/prg938/cloudify-client" target="_blank"><b>code</b></a>): Next.js, React, JSX, Nookies, Antd, SCSS</Paragraph>
    <Paragraph>Demonstration:</Paragraph>
    <Paragraph>
      <video controls muted loop autoPlay>
        <source src={'https://user-images.githubusercontent.com/7237762/272883169-229b6520-ca4d-4435-9a4f-edf83685c500.mp4'} type="video/mp4" />
      </video>
    </Paragraph>
  </div>
}

export default Component