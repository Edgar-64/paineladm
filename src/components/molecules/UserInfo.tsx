import Avatar from "../atoms/Avatar";

type Props = {
    name: string;
    avatar: string;
}

export default function UserInfo({name, avatar}:Props){
    return(
        <div className="flex items-center gap-2">
            <Avatar src={avatar}/>
            <span className="text-sm font-medium">{name}</span>
        </div>
    )
}