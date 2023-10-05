
import Layout from '@/components/layout'
import NotesPage from '@/components/notes/Page'
import {getLocalData} from '@/../lib/localdata'
import {NextPageWithLayout} from '../_app'
import type {Note, Notes} from '@/types'

const notes = async (): Promise<Note[]> => {
  return await getLocalData('json/notes.json')
}
const getStaticProps = async () => ({props: {items: await notes()}})
const getStaticPaths = async () => {
  const items = await notes()
  return {
    paths: [...items.map(item => ({params: {slug: item.id}})), {params: {slug: 'all'}}],
    fallback: false
  }
}

const Slug: NextPageWithLayout<Notes> = props => {
  return <NotesPage {...props} />
}
Slug.getLayout = page => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Slug
export {getStaticProps, getStaticPaths}