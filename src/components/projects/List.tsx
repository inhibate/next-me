import styles from './List.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import type {ProjectItem} from '@/types'

interface ProjectListType {
  list: ProjectItem[]
}

export default ({list}: ProjectListType) => {
  const pathProject = '/project/'
  const imageStyle = {}
  
  const projects = list.map(project => {
    const {id, repoName, shortDesc, previewSize, preview} = project
    const projectHref = pathProject + id
    const src = preview
    const w = previewSize![0]
    const h = previewSize![1]
    return <div key={id} className={styles.project}>
      <Image
        src={src}
        alt={'preview'}
        width={w}
        height={h}
        placeholder='blur'
        blurDataURL={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAAUABQMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAI/9oACAEBAAAAAD//AP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIQAAAAf//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMQAAAAf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z'}
        style={imageStyle}
        quality={100}
      />
      <div>
        <h3 className={styles.title}>
          <Link href={projectHref}>{repoName}</Link>
        </h3>
        <p className={styles.desc}>{shortDesc}</p>
      </div>
    </div> 
  })
  return <div className={styles.main}>{projects}</div>
}
