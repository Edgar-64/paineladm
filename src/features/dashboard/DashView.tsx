"use client"

import { useUserViewModel } from "./DashViewmodel";
import UserInfo from "@/src/components/molecules/UserInfo"

export default function UserView(){
    const {user} = useUserViewModel();

    if (!user){
        return <p>Carregando...</p>
    }

    return (<UserInfo 
        name={user.name}
        avatar={user.avatar}
    />)
}