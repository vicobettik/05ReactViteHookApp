import React from 'react'
import ReactDOM from 'react-dom/client'

import { CounterApp } from './01-useState/CounterApp'
import { CounterWitCustomHook } from './01-useState/CounterWitCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { MemoHook } from './06-memos/MemHook'
import { Memorize } from './06-memos/Memorize'
import { CallbackHook } from './06-memos/CallbackHook'
import { HooksApp } from './HooksApp'

import './index.css'
import { Padre } from './07-tareaMemo/Padre'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    //<HooksApp />
    //<CounterApp />
    //<CounterWitCustomHook />
    // <SimpleForm />
    // <FormWithCustomHook />
    // <MultipleCustomHooks />
    // <FocusScreen />
    // <Layout />
    // <Memorize />
    // <MemoHook />
    // <CallbackHook />
    <Padre />
  //</React.StrictMode>
)
