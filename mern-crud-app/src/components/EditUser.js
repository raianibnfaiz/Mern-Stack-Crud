import React from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useState } from 'react';
import { addUser, editUser, getUsers } from '../Service/api';
import { useHistory,useParams } from 'react-router-dom';
import { useEffect } from 'react';
const useStyle=makeStyles({
    container:{
        width:"50%",
        margin:"5% 0 0 25%",
        '& > * ':{
            marginTop:"25px"
        }
    }
})
const startingValue={
    name:"",
    username:"",
    email:"",
    phone:""

}
const EditUser = () => {
    const [user,setUser]=useState(startingValue);
    const {name,username,email,phone}= user;
    const{id}=useParams();
    const classes=useStyle();
    let history = useHistory();
    useEffect(()=>{
        loadUser();
    },[])
    const loadUser= async()=>{
       const selectedUser= await getUsers(id);
       setUser(selectedUser.data)
    }

    const onSetValue=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const editUserFormation= async()=>{
        await editUser(id,user);
        history.push("/all")
        console.log(user)
    }
    
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input" >Name</InputLabel>
                <Input onChange={(e)=>onSetValue(e)} name="name" value={name} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e)=>onSetValue(e)} name="username" value={username} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e)=>onSetValue(e)} name="email" value={email} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                <Input onChange={(e)=>onSetValue(e)} name="phone" value={phone} />
            </FormControl>
            <Button variant="contained" onClick={()=>editUserFormation()} >Edit </Button>
        </FormGroup>
    );
};

export default EditUser;