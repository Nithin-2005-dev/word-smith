import React from 'react'
import Header from './components/Header'
import Container from './components/Container'
import { TextProvider } from './components/store/TextStore'
import Buttons from './components/Buttons'

const App = () => {
  return (
   <TextProvider>
    <Header></Header>
    <Container/>
    <Buttons/>
   </TextProvider>
  )
}

export default App
