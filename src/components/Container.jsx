import React, { useContext, useRef } from 'react'
import { TextStore } from './store/TextStore'

const Container = () => {
    const {text}=useContext(TextStore)
  return (
    <section>
    <div className='flex justify-center py-5'>
    <textarea className='border-fuchsia-900 active:border-2 bg-white m-4 w-full p-5 text-base text-purple-950' rows={10}
    placeholder='enter the text here'
    ref={text}
    >

</textarea>
    </div>
    </section>
  )
}

export default Container
