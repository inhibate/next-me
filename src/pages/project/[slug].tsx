
import Layout from '@/components/layout'
import Page from '@/components/projects/Page'
import {getLocalData} from '@/../lib/localdata'
import {NextPageWithLayout} from '../_app'
import type {ProjectListType} from '@/types'

const projects = async (): Promise<ProjectListType['projects']> => {
  return await getLocalData('json/projects.json')
}
const getStaticProps = async () => ({props: {projects: await projects()}})
const getStaticPaths = async () => {
  const items = await projects()
  return {
    paths: [...items.map(project => ({params: {slug: project.id}})), {params: {slug: 'all'}}],
    fallback: false
  }
}

const Slug: NextPageWithLayout<ProjectListType> = props => <Page {...props} />
Slug.getLayout = page => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Slug
export {getStaticProps, getStaticPaths}