import React, { useContext, useState } from 'react'
import { TextStore } from './store/TextStore';
import { IoMdArrowDropdown ,IoMdArrowDropup } from "react-icons/io";

const ReverseBtn = () => {
    const [cat3,setcat3]=useState(false);
    const {text}=useContext(TextStore)
  return (
      <div className='flex flex-col min-w-1/4 mx-2'>
      <div className={`border-2 ${cat3?'border-slate-800':'border-slate-300'} inline-block rounded-md p-2 text-base font-bold text-center`} onClick={()=>setcat3(!cat3)}>Reverse{cat3?<IoMdArrowDropup className='inline-block m-1 text-xl' />:<IoMdArrowDropdown className='inline-block m-1 text-xl'/>}</div>
      {cat3 &&<><button className='drop m-1 p-2 text-base font-semibold rounded-lg'
      onClick={()=>{
        let present=text.current.value;
        let presentArr1=present.split(' ');
        text.current.value="";
        presentArr1.map((sentence)=>{
            let presentArr2=sentence.split('');
            presentArr2.reverse()
            presentArr2.map((sentence2)=>{
                text.current.value+=sentence2;
            })
            text.current.value+=" "
        })
      }}
      >each word</button>
      <button className='drop m-1 p-2 text-base font-semibold rounded-lg' 
      onClick={()=>{
        let present=text.current.value;
        let presentArr=present.split('');
        presentArr.reverse();
        text.current.value="";
        presentArr.map((letter)=>{
            text.current.value+=letter;
        })
      }}>whole text</button></>}
      </div>
  )
}

export default ReverseBtn
