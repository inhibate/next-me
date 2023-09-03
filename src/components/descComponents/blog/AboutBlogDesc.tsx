
import {FC} from 'react'
import {Paragraph} from '@/components/Typography'

type DescComponent<T> = FC<T> & {shortDesc?: string}

const AboutBlogDesc: DescComponent<{}> = () => {
  return <>
    <Paragraph>Первый пост данного мини-блога</Paragraph>
  </>
}
AboutBlogDesc.shortDesc = 'Первый пост данного мини-блога'

export default AboutBlogDesc