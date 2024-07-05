import { createContext, useRef } from "react";

const TextStore=createContext({});
const TextProvider=({children})=>{
    const text=useRef();
    return <TextStore.Provider value={{text}}>
        {children}
    </TextStore.Provider>
}
export {TextStore,TextProvider}