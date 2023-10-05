
import {FC} from 'react'
import {Paragraph} from '@/components/Typography'

const Component: FC & {shortDesc?: string} = () => {
  return <>
    <Paragraph>Первый пост используя SSG Next</Paragraph>
  </>
}
Component.shortDesc = 'Первый пост'

export default Component