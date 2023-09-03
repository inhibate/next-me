import styles from '@/styles/ProjectItem.module.scss'
import React, {FC} from 'react'
import {Highlight, Paragraph} from '../Typography'
import {useColorScheme} from '../Hooks'
import {ColorSchemes} from '../SwitchColorScheme'

const code = `import {FC} from 'react'

const HiComponent = FC<{}> = () => {
  const style = {padding: '20px'}
  return (
    <div style={style}>Hi</div>
  )
}

export default HiComponent`

const code2 = `const HiComponent = FC<{}> = () => {
  const style = {padding: '5px'}
  return (
    <div style={style}>Welcome <b>Dear Visitor</b></div>
  )
}`
const code3 = `chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'data') {
    // return simple object for simplicity
    sendResponse({
      content: 'hello from background.js',
      badge: '123'
    })
    return true
  }
})`

const code4 = `import {useEffect, useState, FC} from 'react'

interface HiComponentStateType = {
  content: string
  badge: string
}

const HiComponent = FC<{}> = () => {
  const [state, setState] = useState<HiComponentStateType>({
    content: 'hello',
    badge: 0
  })
  useEffect(() => {
    chrome.runtime.sendMessage({type: 'data'}, (response) => {
      if (response) {
        const {content, badge} = response
        setState({content, badge})
        chrome.action.setBadgeText({text: badge})
      }
      else document.write('Cannot fetch data from background.js')
    })
  }, [])
  return (
    <div>{state.content}</div>
  )
}`

const CreDsc: FC<{}> = props => {

  const colorScheme = useColorScheme()
  const opts = {...colorScheme, language: colorScheme?.theme !== ColorSchemes.Text ? 'typescript' : undefined, showLineNumbers: false}

  return <div className={styles.desc}>
    <Paragraph>
      Generate new Chrome extension fast
    </Paragraph>
    <Paragraph>
      #1. Init CRE: <a target="_blank" href="https://github.com/prg938/cre#usage">github.com/prg938/cre#usage</a>.
    </Paragraph>
    <Paragraph>
      #2. Go to <u>index.tsx entry point</u> and define for example this component: 
    </Paragraph>
    <Highlight {...opts}>{code}</Highlight>
    <Paragraph>
      #3. Now we can open Chrome popup-window and we will see <u>Hi</u>. Let's change <u>index.tsx</u>:
    </Paragraph>
    <Highlight {...opts}>{code2}</Highlight>
    <Paragraph>
      #4. We will see <u>Welcome Dear Visitor</u> text. This is because CRE updates extension on any change.
      Now let's interact with <u>background.js</u> and update Badge. In <u>ext/background.js</u> we will add:
    </Paragraph>
    <Highlight {...opts}>{code3}</Highlight>
    <Paragraph>
      #5. And update index.tsx:
    </Paragraph>
    <Highlight {...opts}>{code4}</Highlight>
    <Paragraph>
      #6. In Chrome popup-window we will see <u>hello from background.js</u> text and Badge set to 123
    </Paragraph>
    <Paragraph>{}</Paragraph>
  </div>
}

export default CreDsc