
import {FC} from 'react'
import {Paragraph} from '@/components/Typography'
import Image from 'next/image'
import fb from '@/../public/fb-blocked.jpg'

type DescComponent<T> = FC<T> & {shortDesc?: string}

const Component: DescComponent<{}> = () => {
  return <>
    <Image src={fb} alt="fb" style={{maxWidth: '100%', height: 'auto', borderRadius: 7}} />
    <Paragraph>Зарегистрировал совершенно чистый, новоиспеченный facebook-аккаунт. Как он может нарушать нормы сообщества?</Paragraph>
  </>
}
Component.shortDesc = 'Тоталитарный режим в Facebook'

export default Component
