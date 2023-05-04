import React, { useState, useEffect, useContext } from "react";
import { AppContext, IUser } from "../hooks/stateContext";
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Input from '../components/input';
import MultiSelect from "../components/multiSelect";


const UserForm = () => {
  const {users, setUsers, user, setUser, selectedOptions, setSelectedOptions} = useContext(AppContext)
  const [birthDate, setBirthDate] = useState<string>("")


  useEffect(() => {
    const getUsers = localStorage.getItem("users")
    if(getUsers){
      const parsedUsers = JSON.parse(getUsers)
      setUsers(parsedUsers)
    }
  },[])

  useEffect(() => {
    const skills = selectedOptions.map((option) => option)
    setUser({...user, skills})
   }, [selectedOptions])
  
  const resetInput = () => {
    setUser({fullName: "", age: 0, skills:[""]})
  }

  const handleFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fullName = e.currentTarget.value
    setUser({...user, fullName})
  }

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
   const thisYear = new Date().getFullYear()
   const birthDate = parseInt(e.currentTarget.value) 
   const age = thisYear- birthDate
   setBirthDate(e.currentTarget.value)
   setUser({...user, age})
  }

   
  const handleAdd = () => {
    resetInput()
    const newUser: IUser = {
      id: Math.floor(Math.random()*100),
      fullName: user.fullName,
      age: user.age,
      skills: user.skills
    }
    setUsers([...users, newUser])
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
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
       value={user.fullName}
       width={25}
       onChange={(e) => handleFullName(e)}
      />

      <Input 
       label="تاریخ تولد"
       type="date"
       id='birthDate'
       value={birthDate}
       width={25}
       onChange={(e) => handleAge(e)}
      />

      <MultiSelect
       selectedOptions={selectedOptions}
       setSelectedOptions={setSelectedOptions}
      />
    
      <div className='text-center d-flex p-2'>
        <Link
         onClick={handleAdd}
         className="btn btn-success rounded border border-light mx-auto "
         to={"/users"}
         type="submit">
          تایید
        </Link> 
      </div>

    </Form>
    </>
  )
}

export default UserForm;
