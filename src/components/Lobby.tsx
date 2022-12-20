import React from "react";
import { useState } from "react";

interface ILobby {
  joinRoom: any;
}

export default function Lobby({ joinRoom }: ILobby) {
  const [user, setUser] = useState(``);
  const [room, setRoom] = useState(``);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        joinRoom(user, room);
      }}
      action="submit"
    >
      <div className="flex justify-center items-center flex-col" >
        <div className="flex flex-col w-full">
          <input className=" p-4 m-4 "
            type="text"
            placeholder="name"
            onChange={(e) => setUser(e.target.value)}
          />
          <input className=" p-4 m-4"
            type="text"
            placeholder="room"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <button className=" p-4 m-4 bg-slate-800 rounded-xl text-blue-200 ">
         Join to Room
         </button>
      </div>
    </form>
  );
}
