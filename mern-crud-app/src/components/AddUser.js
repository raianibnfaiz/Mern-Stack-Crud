import React from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useState } from 'react';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

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

const AddUser = () => {
    const [user,setUser]=useState(startingValue);
    const {name,username,email,phone}= user;
    const classes=useStyle();
    let history = useHistory();
    const onSetValue=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const addUserFormation= async()=>{
        await addUser(user);
       history.push("./all")
        console.log(user)
    }
    
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
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
            <Button variant="contained" onClick={()=>addUserFormation()} >Add </Button>
        </FormGroup>
    );
};

export default AddUser;