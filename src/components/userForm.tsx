import React, {useState, useEffect, useContext} from "react";
import { AppContext } from "../hooks/stateContext";
import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom"
import Input from './input';
import MultiSelect from "./multiSelect";
import { handleGetName } from "./multiSelect";



const UserForm = () => {
  const {fullName, setFullName, age, setAge, skills, setSkills, user, setUser, selectedOptions} = useContext(AppContext)
  const [birthDate, setBirthDate] = useState<string>("")

 
  useEffect(() => {
    const users = localStorage.getItem("users")
    if(users){
        const parsedUsers = JSON.parse(users)
        setUser(parsedUsers)
    }
  },[])

  const handleAdd = () => {
        const getSkills = handleGetName(selectedOptions)
        const skill = getSkills.toString()
        setSkills([...skills, skill])
         resetInput()
        const newUser = {
          id: Math.floor(Math.random()*100),
          fullName,
          age,
          skills:[...skills,skill]
         }
         setUser([...user, newUser])
         localStorage.setItem('users', JSON.stringify([...user, newUser]));
        resetInput()
       }
      
   const resetInput = () => {
    setFullName("")
    setAge(0)
    setSkills([""])
   }


   const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const thisYear = new Date().getFullYear()
    const birthDate = parseInt(e.currentTarget.value) 
    const age = thisYear- birthDate
    setBirthDate(e.currentTarget.value)
    setAge(age)
   }
   
  
  return (
    <>
    <Form  className="mt-5 w-50 bg-dark bg-gradient bg-opacity-50 mx-auto rounded rounded-3 border border-2 border-danger">
      
      <h1 className="text-center p-1">
        <span className="badge bg-danger bg-opacity-75 bg-gradient">فرم ثبت نام کاربر</span>
      </h1>

      <Input 
       label='نام و نام خانوادگی'
       type='text'
       id='fullName'
       value={fullName}
       onChange={(e) => setFullName(e.currentTarget.value)}
      />

      <Input 
       label="تاریخ تولد"
       type="date"
       id='birthDate'
       value={birthDate}
       onChange={(e) => handleAge(e)}
      />

      <MultiSelect />

      <div className='text-center d-flex  p-2'>
         <Link
         onClick={handleAdd}
         className="btn btn-success rounded border border-light mx-auto "
         to={"/users"}
         type="submit"
         >
          تایید
         </Link>  
       </div>
    </Form>
    </>
  )
}

export default UserForm;