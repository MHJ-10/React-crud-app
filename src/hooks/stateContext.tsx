import React, {createContext, useState} from "react";

export interface IUser {
    id?: number | null
    fullName: string
    age: number
    skills: string[]
  }

interface IAppContext {
  users: IUser[]
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
  user: IUser
  setUser: React.Dispatch<React.SetStateAction<IUser>>
  selectedOptions: string[]
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>
}

interface IAppContextProps {
    children: React.ReactNode
}

export const AppContext = createContext<IAppContext>({
    users: [],
    setUsers: () => {},
    user: {id: 1, fullName: "", age: 1, skills: [""]} ,
    setUser: () => {},
    selectedOptions: [],
    setSelectedOptions: () => {}
})


 const StateContext : React.FC<IAppContextProps> = ({children}) => {
    const [users, setUsers] = useState<IUser[]>([])
    const [user, setUser] = useState<IUser>({id: 1, fullName: "", age: 1, skills: [""] })
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    return (
        <AppContext.Provider 
          value={{users, setUsers, user, setUser, selectedOptions, setSelectedOptions}}>
            {children}
        </AppContext.Provider>
    )
}

export default StateContext;