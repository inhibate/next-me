
import {FC} from 'react'
import {Paragraph} from '@/components/Typography'
import Image from 'next/image'
import fb from '@/../public/fb-blocked.jpg'
import leb from '@/../public/leb.jpg'

type DescComponent<T> = FC<T> & {shortDesc?: string}

const Component: DescComponent<{}> = () => {
  return <>
    <Paragraph>2023 год. Почему бы не зарегать аккаунт в Facebook?</Paragraph>
    <Paragraph>Мне писали неоднократно с предложениями о работе когда у меня был старый аккаунт, который уже давно заброшен. Именно по этому. Хотя странно почему именно в фейсбуке писали 🤔</Paragraph>
    <Paragraph>Зарегал. В итоге просто словил блокировку:</Paragraph>
    <Image src={fb} alt="fb" />
    <Paragraph>Причину блокировки не написали (что конкретно их не устраивает). Хотя акк был чист как белый лист</Paragraph>
    <Paragraph>Ознакомьтесь с нашими нормами. Но вы же заблочили чистый акк?</Paragraph>
    <Paragraph>Просто взяли и выгнали из Facebook'a без возможности исправить то, что их не устраивает.</Paragraph>
    <Paragraph>Тоталитаризм</Paragraph>
    <Image src={leb} alt="leb" style={{width: '37%', height: 'auto'}} />
  </>
}
Component.shortDesc = '2023 год. Почему бы не зарегать аккаунт в Facebook? Мне писали неоднократно с предложениями о работе'

export default Component
