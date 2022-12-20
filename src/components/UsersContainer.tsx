import React from "react";

interface IUsersContainer {
  user: string[];
}

export default function UsersContainer({ user }: IUsersContainer) {
  return (
    <div className="  bg-green-400 text-lg rounded-sm p-2 m-1 overflow-y-auto">
      {user.map((user) => (
        <div className="p-2 border-2 border-slate-500 rounded-md border-dashed mb-1">
          {user}
        </div>
      ))}
    </div>
  );
}
