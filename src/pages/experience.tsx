
import ExperiencePage from '@/components/ExperiencePage'
import Layout from '@/components/layout'
import type {NextPageWithLayout} from "./_app"

const Index: NextPageWithLayout = props => <ExperiencePage {...props} />

Index.getLayout = page => <Layout>{page}</Layout>

export default Index