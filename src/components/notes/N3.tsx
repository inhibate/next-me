
import {FC} from 'react'
import {Paragraph} from '@/components/Typography'
import Image from 'next/image'
import fb from '@/../public/fb-blocked.jpg'
import leb from '@/../public/leb.jpg'

type DescComponent<T> = FC<T> & {shortDesc?: string}

const Component: DescComponent<{}> = () => {
  return <>
    <Paragraph>2023 год. Почему бы не зарегать аккаунт в Facebook?</Paragraph>
    <Paragraph>Зарегал. В итоге просто словил блокировку:</Paragraph>
    <Image src={fb} alt="fb" style={{width: '37%', height: 'auto', borderRadius: 7}} />
    <Paragraph>Причину блокировки не написали (что конкретно их не устраивает). Хотя акк был чист как белый лист</Paragraph>
    <Paragraph>Тоталитаризм😔</Paragraph>
    <Image src={leb} alt="leb" style={{width: '37%', height: 'auto', borderRadius: 7}} />
  </>
}
Component.shortDesc = '2023 год. Почему бы не зарегать аккаунт в Facebook?'

export default Component
