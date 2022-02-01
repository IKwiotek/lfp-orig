import { useUserContext } from "../../contexts/user"

export const Message = () => {
    const user = useUserContext();
    console.log(user);
    return (
        <p>{user}</p>
    )
}