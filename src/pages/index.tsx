
import IndexPage from '@/components/IndexPage'
import Layout from '@/components/layout'
import type {NextPageWithLayout} from "./_app"

const Index: NextPageWithLayout = props => <IndexPage {...props} />

Index.getLayout = page => <Layout>{page}</Layout>

export default Index