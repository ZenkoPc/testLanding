"use client";

import { User } from "@/types";
import { UserCard } from "../dashboard/UserCard";
import { TriangleAlertIcon } from "lucide-react";

export function UsersTableComp({ users, error }:{ users: User[], error?: string }) {

    if(error) return (
        <div className="flex-1 flex flex-col gap-6 justify-center items-center">
            <TriangleAlertIcon size={90} color="red" />
            <h1 className="text-2xl text-center">
                Something happened, please contact support.
            </h1>
        </div>
    )
  
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {users.length > 0 &&
        users.map((user) => <UserCard key={user.id} {...(user as User)} />)}
    </div>
  );
}
