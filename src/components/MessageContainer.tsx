import React, { useEffect } from "react";
import { useRef } from "react";
interface IMessageContainer {
  messages: any[];
}

export default function MessageContainer({ messages }: IMessageContainer) {
  const messageRef = useRef() as React.MutableRefObject<HTMLInputElement>

  useEffect(()=>{
    if(messageRef && messageRef.current){
      const {scrollHeight,clientHeight}=messageRef.current
      messageRef.current.scrollTo({
        left:0, top:scrollHeight-clientHeight,behavior:'smooth'
      })
    }
  },[messages])

  return (
    <div ref={messageRef} className=" text-right p-4 h-80 overflow-y-scroll">
      {messages.map((m, index) => {
        return (
          <div key={index} className=' border-2 border-solid p-4 border-slate-500 mb-2'>
            <div className="text-blue-900  mb-2 underline">{m.user}</div>
            <span className="p-2 m-1 bg-slate-400 text-blue-800 text-2xl font-bold rounded-md ">
              {m.message}
            </span>
          </div>
        );
      })}
    </div>
  );
}
