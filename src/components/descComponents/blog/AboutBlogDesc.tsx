
import {FC} from 'react'
import {Paragraph} from '@/components/Typography'

type DescComponent<T> = FC<T> & {shortDesc?: string}

const AboutBlogDesc: DescComponent<{}> = () => {
  return <>
    <Paragraph>Первый пост используя SSG Next</Paragraph>
  </>
}
AboutBlogDesc.shortDesc = 'Первый пост'

export default AboutBlogDesc