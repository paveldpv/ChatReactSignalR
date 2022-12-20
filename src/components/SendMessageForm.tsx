import React, { useState } from "react";

interface ISendMessageForm {
  sendMessage: (msg: any | string) => Promise<void>;
}

export default function SendMessageForm({ sendMessage }: ISendMessageForm) {
  const [message, setMessage] = useState(``);
  return (
    <form className="w-full h-1/3 "
     onSubmit={(e) => {
      e.preventDefault()
      sendMessage(message)
      setMessage(``)
    }}>
      <div className="w-full bg-slate-700 h-1"></div>
      <div className="flex">
         <input className="w-full m-2 p-2 font-bold text-2xl"
           type="text"
           placeholder="message"
           onChange={(e) => setMessage(e.target.value)}
           value={message}
         />
         <button
           type="submit" placeholder="message.."
           className=" p-4 m-4 bg-slate-800 rounded-xl text-blue-200  "
         >
           Send Message
         </button>
      </div>
    </form>
  );
}
