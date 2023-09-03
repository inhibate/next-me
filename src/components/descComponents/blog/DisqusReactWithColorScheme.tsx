
import {FC} from 'react'
import {Highlight, Marker, Paragraph} from '@/components/Typography'
import {useColorScheme} from '@/components/Hooks'
import {ColorSchemes} from '@/components/SwitchColorScheme'
import tension from '@/../public/tension.gif'
import Image from 'next/image'

const code = `import {DiscussionEmbed} from 'disqus-react'
const {url, id, title} = article
<DiscussionEmbed
  shortname='example'
  config={{language: 'ru', identifier: id, url, title}}
/>`
const code2 = `:root[data-color-scheme=dark] iframe[src*=disqus.com] {
  color-scheme: light;
}`
const code3 = `// Вызываем когда меняется тема (например по нажатию на кнопку)
const resetDISQUS = () => {
  if (typeof DISQUS !== "undefined") {
    DISQUS.reset({reload: true})
  }
}`
type DescComponent<T> = FC<T> & {shortDesc?: string}

const DisqusReactWithColorScheme: DescComponent<{}> = () => {
  const colorScheme = useColorScheme()
  const opts = {...colorScheme, language: colorScheme?.theme !== ColorSchemes.Text ? 'typescript' : undefined, showLineNumbers: false}
  const opts2 = {...colorScheme, language: colorScheme?.theme !== ColorSchemes.Text ? 'css' : undefined, showLineNumbers: false}
  return <>
    <Paragraph>
      <a href="https://github.com/disqus/disqus-react" target='_blank'>disqus-react</a> это библиотека для интеграции Disqus-комментариев на сайт/сервис/блог.
    </Paragraph>
    <Highlight {...opts}>{code}</Highlight>
    <Paragraph>
      Есть статья и ее параметры: <Marker>url</Marker>  <Marker>identifier</Marker>  <Marker>title</Marker>. Передаем config с параметрами в DiscussionEmbed и Disqus загрузит thread-комментариев ассоциированный с данным набором параметров.
    </Paragraph>
    <Paragraph>
      Одако присутствуют проблемы с изменением темы
    </Paragraph>
    <Image
      src={tension}
      alt="tension"
      style={{width: '220px', height: 'auto', borderRadius: '7px'}}
      placeholder='blur'
      blurDataURL={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAAUABQMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAI/9oACAEBAAAAAD//AP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIQAAAAf//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMQAAAAf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z'}
      />
    <Paragraph>
      Если на сайте темная тема: <Marker>:root[data-color-scheme=dark]</Marker> то background Disqus-комментариев остается белый, а не прозрачный. 
      Проблему можно решить добавив глобальный стиль:
    </Paragraph>
    <Highlight {...opts2}>{code2}</Highlight>
    <Paragraph>
       Проблема с белым фоном решена. 
       Однако когда мы меняем тему сайта, тема блока Disqus-комментариев не синхронизируется с темой сайта. 
       Проблему можно решить полной перезагрузкой блока Disqus-комментариев:
    </Paragraph>
    <Highlight {...opts}>{code3}</Highlight>
    <Paragraph>
      Также нужно учесть что: background-color у BODY должен быть в диапазоне <Marker>#000000 - #787878</Marker> (для светлой темы) и вне диапазона <Marker>#000000 - #787878</Marker> (для темной). В формате hex.
    </Paragraph>
  </>
}
DisqusReactWithColorScheme.shortDesc = 'disqus-react это библиотека для интеграции Disqus-комментариев на сайт'

export default DisqusReactWithColorScheme