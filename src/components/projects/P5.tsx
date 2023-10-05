import styles from './Item.module.scss'
import React, {FC} from 'react'
import {Highlight, Paragraph} from '../Typography'
import {useColorScheme} from '../Hooks'
import {ColorSchemes} from '../SwitchColorScheme'

const code = `<script src='vendor.js'></script>
<script src='app.js'></script>`

const code2 = `const WSP = require('html-webpack-scripts-plugin')
const WSPInstance = new WSP({inline: /(vendor|app)\\.js/})
module.exports = {
  plugins: [WSPInstance]
}`

const code3 = `<script>/*content of vendor.js*/</script>
<script>/*content of app.js*/</script>`

const Component: FC<{}> = props => {
  const colorScheme = useColorScheme()
  const opts1 = {...colorScheme, language: colorScheme?.theme !== ColorSchemes.Text ? 'html' : undefined, showLineNumbers: false}
  const opts2 = {...colorScheme, language: colorScheme?.theme !== ColorSchemes.Text ? 'typescript' : undefined, showLineNumbers: false}
  const opts3 = {...colorScheme, language: colorScheme?.theme !== ColorSchemes.Text ? 'html' : undefined, showLineNumbers: false}
  return <div className={styles.desc}>
    <Paragraph>
      Webpack plugin. Transform external-scripts to inline-scripts. Example:
    </Paragraph>
    <Highlight {...opts1}>{code}</Highlight>
    <Paragraph>
      usage:
    </Paragraph>
    <Highlight {...opts2}>{code2}</Highlight>
    <Paragraph>
      result:
    </Paragraph>
    <Highlight {...opts3}>{code3}</Highlight>
  </div>
}

export default Component