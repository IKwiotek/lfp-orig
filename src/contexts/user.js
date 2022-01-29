import {createContext,useContext} from 'react';

export const UserContextConfig = createContext();
export const useUserContext = () => useContext(UserContextConfig);

export const UserContext = (props) => {
    return (
        <UserContextConfig.Provider value = "Hello World" >
            {props.children}
        </UserContextConfig.Provider>
    )
}