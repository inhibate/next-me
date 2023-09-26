
import {FC} from 'react'
import {Paragraph, Highlight} from '@/components/Typography'
import {ColorSchemes} from '@/components/SwitchColorScheme'
import {useColorScheme} from '@/components/Hooks'

type DescComponent<T> = FC<T> & {shortDesc?: string}

const code1 = `// store.ts
import {create} from 'zustand'

interface FilesStore {
  initialized: boolean
  fileList: any[]
  setInitialized: (value: boolean) => void
  setFileList: (list: any[]) => void
}
export const useFilesStore = create<FilesStore>()(set => ({
  initialized: false,
  fileList: [],
  setInitialized: value => set(state => ({initialized: value})),
  setFileList: list => set(state => ({fileList: list}))
}))`

const code2 = `// main.tsx
import React from 'react'
import {useFilesStore} from './store'

const ChildComponent: React.FC = () => {
  console.log('ChildComponent')
  const initialized = useFilesStore(state => state.initialized)
  const fileList = useFilesStore(state => state.fileList)
  return <div>{'initialized: ' + initialized}</div>
}

const Component: React.FC = () => {
  console.log('Component')
  const initialized = useFilesStore(state => state.initialized)
  const fileList = useFilesStore(state => state.fileList)
  const setInitialized = useFilesStore(state => state.setInitialized)
  const setFileList = useFilesStore(state => state.setFileList)

  React.useEffect(() => {
    if (!initialized) {
      setInitialized(true)
      setFileList([])
    }
  }, [])

  return <div>
    {'initialized: ' + initialized}
    <ChildComponent />
  </div>
}`

const output = `Component
ChildComponent
Component
ChildComponent`

const Component: DescComponent<{}> = () => {
  const colorScheme = useColorScheme()
  const opts = {...colorScheme, language: colorScheme?.theme !== ColorSchemes.Text ? 'typescript' : undefined, showLineNumbers: false}
  return <>
    <Paragraph>🐻 Bear necessities for state management in React!</Paragraph>
    <Paragraph>C 2023 года <a href='https://github.com/pmndrs/zustand' target='_blank'>zustand</a> довольно трендовая state-management библиотека наравне с <a href='https://github.com/reduxjs/redux-toolkit' target='_blank'>Redux Toolkit</a> в экосистеме React.</Paragraph>
    <Paragraph>Вот пример использования. Что будет в консоли при рендеринге Component?</Paragraph>
    <Highlight {...opts}>{code1}</Highlight>
    <Highlight {...opts}>{code2}</Highlight>
    <Paragraph>Тестим:</Paragraph>
    <iframe width="639" height="360" src="https://www.youtube.com/embed/_suNPuzx_eg" title="React + zustand state-management lib. Rendering optimization example" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <Paragraph>
      <pre>{output}</pre>
    </Paragraph>
    <Paragraph>как можно видеть zustand старается не делать лишних рендеров при обновлении компоненов</Paragraph>
    <Paragraph>+не нужно оборачивать в Context Provider</Paragraph>
    <Paragraph>+нет boilderplate-кода</Paragraph>
  </>
}
Component.shortDesc = 'Что будет в консоли?'

export default Component
