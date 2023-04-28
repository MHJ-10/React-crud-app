import React, {createContext, useState} from "react";

export interface IUser {
    id: number
    fullName: string
    age: number
    skills: string[]
  }

interface IAppContext {
  user: IUser[]
  setUser: React.Dispatch<React.SetStateAction<IUser[]>>
  selectedOptions: number[]
  setSelectedOptions: React.Dispatch<React.SetStateAction<number[]>>
  fullName: string
  setFullName: React.Dispatch<React.SetStateAction<string>>
  age: number
  setAge: React.Dispatch<React.SetStateAction<number>> 
  skills: string[]
  setSkills: React.Dispatch<React.SetStateAction<string[]>>
}

interface IAppContextProps {
    children: React.ReactNode
}

export const AppContext = createContext<IAppContext>({
    user: [],
    setUser: () => {},
    selectedOptions: [],
    setSelectedOptions: () => {},
    fullName: "",
    setFullName: () => {},
    age: 1,
    setAge: () => {},
    skills: [""],
    setSkills: () => {}
})


 const StateContext : React.FC<IAppContextProps> = ({children}) => {
    const [user, setUser] = useState<IUser[]>([])
    const[selectedOptions, setSelectedOptions] = useState<number[]>([])
    const [fullName, setFullName] = useState<string>("")
    const [age, setAge] = useState<number>(0)
    const [skills,setSkills] = useState<string[]>([])

    

    return (
        <AppContext.Provider 
          value={{user, setUser, selectedOptions, setSelectedOptions, fullName, 
                  setFullName, age, setAge , skills, setSkills}}>
            {children}
        </AppContext.Provider>
    )
}

export default StateContext;