import { useState } from "react";
import Lobby from "./components/Lobby";
import Chat from "./components/Chat";
import { LogLevel, HubConnectionBuilder } from "@microsoft/signalr";

interface IMessages {
  user: string;
  message: string[];
}

function App() {
  const [connection, setConnection] = useState<any>();
  const [messages, setMessages] = useState<IMessages[]>([]);
  const [users, setUsers] = useState<string[]>([]);

  const joinRoom = async (user: any, room: any) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl(`https://localhost:7212/chat`)
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("UsersInRoom", (users) => {
        setUsers(users);
      });

      connection.on("TestMethod",(msg)=>{
        console.log(msg);
        console.log(`test msg`);
        
        
      })

      connection.on("ReceiveMessage", (user: string, message: string[]) => {
        setMessages((messages) => [...messages, { user, message }]);
      });
      connection.onclose(() => {
        setConnection(``);
        sendMessage([]);
        setUsers([]);
      });

      await connection.start();
      await connection.invoke("JoinRoom", { user, room });
      setConnection(connection);
    } catch (error) {
      console.log(error);
    }
  };

  const closeChat = async () => {
    try {
      await connection.stop();
    } catch (error) {}
  };

  const sendMessage = async (message: any | string) => {
    try {
      await connection.invoke(`SendMessage`, message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-full h-screen overflow-hidden bg-slate-400 flex justify-center items-center">
      <div className="  h-5/6 w-3/4 p-2 border-2 rounded-xl border-slate-500 border-solid overflow-hidden p-2">
        <h2 className=" h-1/6 text-center text-blue-200 text-8xl font-bold p-6 m-2  bg-slate-900 rounded-xl">
          My chat
        </h2>
        <div className="m-2">
          {!connection ? (
            <Lobby joinRoom={joinRoom} />
          ) : (
            <Chat
              messages={messages}
              sendMessage={sendMessage}
              closeChat={closeChat}
              users={users}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
