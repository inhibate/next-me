import React from 'react'
import styles from './Item.module.scss'
import {ProjectItem} from '@/types'
import {FunctionComponent} from "react"
import Image from 'next/image'
import Projects from '.'
import DefaultPreviewSVG from '../DefaultPreviewSVG'

const getImage = (W: number, H: number, preview: string) => {
  const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAAUABQMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAI/9oACAEBAAAAAD//AP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIQAAAAf//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMQAAAAf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z'
  return <Image
    src={preview}
    alt={preview}
    width={W}
    height={H}
    placeholder='blur'
    blurDataURL={blurDataURL}
  />
}

const resolvePreview = (previewSize: [number, number], preview: string) => {
  const [W, H] = previewSize
  if (/\.mp4/i.test(preview)) {
    return <video width={W} height={H} poster={'/poster.jpg'} controls muted loop autoPlay>
      <source src={preview} type="video/mp4" />
    </video>
  }
  else if (preview === 'default') {
    return <DefaultPreviewSVG W={16} H={16} />
  }
  else {
    return getImage(W, H, preview)
  }
}

const ProjectItem: FunctionComponent<Partial<ProjectItem>> = ({
  preview = String(),
  previewSize,
  repoName,
  repoLink,
  mappedComponent
}) => {
  const Project = Projects[mappedComponent as keyof typeof Projects]
  return <div className={styles.item}>
    <div>
      <div>{repoName}</div>
      <div>In Github: <a target="_blank" href={repoLink}>{repoLink!.slice(26)}</a></div>
    </div>
    <div>{resolvePreview(previewSize!, preview)}</div>
    <Project />
  </div>
}

export default ProjectItem