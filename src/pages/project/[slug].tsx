
import Layout from '@/components/layout'
import Page from '@/components/projects/Page'
import {NextPageWithLayout} from '../_app'

const projects = async (): Promise<{id: any}[]> => {
  return [{id: 1}]
}

const getStaticProps = async () => ({props: {projects: await projects()}})
const getStaticPaths = async () => {
  const items = await projects()
  return {
    paths: [...items.map(project => ({params: {slug: project.id}})), {params: {slug: 'all'}}],
    fallback: false
  }
}

const Slug: NextPageWithLayout<{}> = props => <Page {...props} />
Slug.getLayout = page => <Layout>{page}</Layout>

export default Slug
export {getStaticProps, getStaticPaths}