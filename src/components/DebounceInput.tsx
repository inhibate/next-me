
import React, {FC, useEffect} from "react"

interface DebounceInput {
  debounce: (...args: any[]) => any
  delay?: number
}

const DebounceInput: FC<DebounceInput> = ({debounce, delay = 250}) => {
  const [text, setText] = React.useState<string>(String())
  
  let timeout: Parameters<typeof clearTimeout>[0] = undefined

  const inputHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value
    setText(text)
  }

  useEffect(() => {
    timeout = setTimeout(() => debounce(text), delay)
    return () => {
      clearTimeout(timeout)
    }
  }, [text])

  return <input type="text" placeholder="Найти по названию" onInput={inputHandler} value={text} />
}

export default DebounceInput