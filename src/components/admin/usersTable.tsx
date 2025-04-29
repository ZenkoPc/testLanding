import { User } from "@/types";
import { GetUsers } from "@/actions/getUsers";
import { UsersTableComp } from "./usersTableClient";

export async function UsersTableAdmin(){

    let users: User[] = []

    try{
        users = await GetUsers() as User[]
    }catch(err){
        return <UsersTableComp users={[]} error={err as string} />
    }

    return <UsersTableComp users={users} />

}