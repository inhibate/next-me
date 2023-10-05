import styles from './Notes.module.scss'
import {FC} from 'react'
import {Note} from '@/types'
import Link from 'next/link'
import {CommentCount} from 'disqus-react'
import * as NoteComponents from '.'

interface ItemType extends Note {
  opened?: boolean
}

type JSXElement = null | JSX.Element

const Item: FC<ItemType> = ({id, date, title, tags, mappedComponent, opened = false}) => {
  const tagList = tags.map(tag => <span key={tag}>{tag}&nbsp; </span>)
  const itemHref = '/note/' + id
  const commentCountConfig = {
    identifier: id,
    url: 'https://prg938.vercel.app' + itemHref
  }
  let authorElement: JSXElement = <div className={styles.author}>
    <div className={styles.by}>автор: <a href="https:/github.com/prg938" target="_blank">PRG938</a></div>
  </div>
  let commentCountElement: JSXElement = null
  let itemClassName = String()
  let titleClassName = styles.titleBig 
  let shortDesc = null
  if (!opened) {
    commentCountElement = <span className={styles.commentCount}>
      {' | '}<CommentCount shortname='prg938-vercel-app' config={commentCountConfig} >X comments</CommentCount>
    </span>
    itemClassName = styles.item
    titleClassName = styles.title
    authorElement = null
    shortDesc = NoteComponents[mappedComponent as keyof typeof NoteComponents].shortDesc!

  }
  const itemElement = <div className={itemClassName}>
    <div className={titleClassName}>{title}</div>
    <div className={styles.taglist}>
      <div>{tagList}</div>
    </div>
    <div className={styles.date}>
      <div>created: {date}{commentCountElement}</div>
    </div>
    <div className={styles.shortDesc}>{shortDesc}</div>
    {authorElement}
  </div>

  const item = opened ? itemElement : <Link href={itemHref}>{itemElement}</Link>

  return item
}

export default Item