import React from 'react'
import MessageContainer from './MessageContainer'
import SendMessageForm from './SendMessageForm'
import UsersContainer from './UsersContainer'
interface IChat{
   messages:any[]
   sendMessage:(msg:any|string)=>Promise<void>,
   closeChat:()=>Promise<void>,
   users:string[]|any
}

export default function Chat({messages,sendMessage,closeChat,users}: IChat) {
  console.log(users);
  
  return (
    <div className='grid m-2 rounded-xl bg-slate-200 grid-rows-6 gap-1 h-full mb-6'>
      <div className='row-span-1'>
        <button className='p-2 m-2 bg-red-400 text-slate-200 rounded-md mb-5'
         onClick={()=>closeChat()}>
          leave room
        </button>        
      </div>
      
      <div className='grid grid-cols-6 gap-4 row-span-5'>        
        <UsersContainer user={users}/>
        <div className='col-span-5 grid grid-row-5 gap-1'>
          <MessageContainer messages={messages}/>
          <SendMessageForm sendMessage={sendMessage}/>
        </div>
      </div>
    </div>
  )
}