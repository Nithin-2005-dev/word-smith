import React, { useContext, useRef, useState } from 'react'
import { IoMdArrowDropdown ,IoMdArrowDropup } from "react-icons/io";
import { TextStore } from './store/TextStore';
import { motion } from 'framer-motion';
import ReverseBtn from './ReverseBtn';
const Buttons = () => {
    const {text}=useContext(TextStore)
    const [cat1,setcat1]=useState(false)
    const [cat2,setcat2]=useState(false)
    const [cat3,setcat3]=useState(false)
    const removeValue=useRef();
  return (
    <div className="flex flex-wrap gap-4">
    <motion.div className='flex flex-col min-w-1/4 mx-2'>
      <div className={`border-2 ${cat1?'border-slate-800':'border-slate-300'} inline-block rounded-md p-2 text-base font-bold text-center`}  onClick={()=>setcat1(!cat1)}>Case conversion{cat1?<IoMdArrowDropup className='inline-block m-1 text-xl' />:<IoMdArrowDropdown className='inline-block m-1 text-xl'/>}</div>
      {cat1 &&<><button className='drop m-1 p-2 text-base font-semibold rounded-lg' onClick={()=>{
        let present=text.current.value.toUpperCase();
        text.current.value=present
      }}>upper case</button>
      <button className='drop m-1 p-2 text-base font-semibold rounded-lg' onClick={()=>{
        let present=text.current.value.toLowerCase();
        text.current.value=present
      }}>lower case</button><button className='drop m-1 p-2 text-base font-semibold rounded-lg' onClick={()=>{
        let present=text.current.value;
        let presentArr=present.split(" ");
        text.current.value="";
        presentArr.map((word)=>{
            text.current.value+=word.charAt(0).toUpperCase()+word.substring(1)+" ";
        })
      }}>title case</button><button className='drop m-1 p-2 text-base font-semibold rounded-lg'
      onClick={()=>{
        let present=text.current.value;
        let presentArr=present.split(".");
        text.current.value="";
        presentArr.map((str)=>{
            text.current.value+=str.charAt(0).toUpperCase()+str.substring(1)+".";
        })
      }}
      >sentence case</button></>}
      </motion.div>
      <motion.div className='flex flex-col min-w-1/4 mx-2'>
      <div className={`border-2 ${cat2?'border-slate-800':'border-slate-300'} inline-block rounded-md p-2 text-base font-bold text-center`} onClick={()=>setcat2(!cat2)}>Count{cat2?<IoMdArrowDropup className='inline-block m-1 text-xl' />:<IoMdArrowDropdown className='inline-block m-1 text-xl'/>}</div>
      {cat2 &&<><button className='drop m-1 p-2 text-base font-semibold rounded-lg' onClick={()=>{
         let present=text.current.value;
         text.current.value=`Number of characters=${present.length}`
      }}>character count</button>
      <button className='drop m-1 p-2 text-base font-semibold rounded-lg' onClick={()=>{
        let present=text.current.value;
        let presentArr=present.split(" ");
        text.current.value=`Number of words=${presentArr.length}`;
      }}>word count</button></>}
      </motion.div>
      <div className='flex flex-col min-w-1/4 mx-2'>
      <div className={`border-2 ${cat3?'border-slate-800':'border-slate-300'} inline-block rounded-md p-2 text-base font-bold text-center`} onClick={()=>setcat3(!cat3)}>Remove{cat3?<IoMdArrowDropup className='inline-block m-1 text-xl' />:<IoMdArrowDropdown className='inline-block m-1 text-xl'/>}</div>
      {cat3 &&<><button className='drop m-1 p-2 text-base font-semibold rounded-lg' onClick={()=>{
         let present=text.current.value;
         let presentArr=present.split(" ");
         console.log(presentArr)
         text.current.value=""
         presentArr.map((word)=>{
            if(word.charAt(0)!=""){
                text.current.value+=(word+" ")
            }
         })
      }}>Extra spaces</button>
      <input ref={removeValue} type="text" className='border-2 border-slate-400 active:border-slate-400 rounded-lg p-1' placeholder='enter word'/>
      <button className='drop m-1 p-2 text-base font-semibold rounded-lg' onClick={()=>{
        let word=removeValue.current.value;
        removeValue.current.value="";
        let present=text.current.value;
        text.current.value="";
        const removeWord=(Text,presentText)=>{
            if(word.length>presentText.length){
                Text+=presentText;
                text.current.value=Text;
                return;
            }else{
                if(word==presentText.substring(0,word.length)){
                    removeWord(Text,presentText.substring(word.length))
                }else{
                    Text+=presentText.charAt(0);
                    removeWord(Text,presentText.substring(1))
                }
            }
        }
        removeWord("",present);
      }}>Any word</button></>}
      </div>
      <ReverseBtn/>
    </div>
  )
}

export default Buttons
