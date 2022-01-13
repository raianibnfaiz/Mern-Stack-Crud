import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteUser, getUsers } from '../Service/api';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: 'gray',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    },
    btnDelete:{
        '&:hover': {
            backgroundColor: '#f99',
            color: 'white',
        }
    },
    btnEdit:{
        
            '&:hover': {
                backgroundColor: '#fff',
                color: 'orange',
        }
    }
})


const AllUser = () => {
    const[users,setUsers]= useState([]);
    const classes = useStyles();
    useEffect(()=>{
        getAllUsers()
    },[])

    const getAllUsers= async()=>{
        let response= await getUsers();
        console.log(response.data)
        setUsers(response.data)
    }
    const deleteSelectedUser= async(id)=>{
        await deleteUser(id)
        getAllUsers()
    }
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                    
                    
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow className={classes.row} key={user._id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button className={classes.btnEdit} variant="contained" component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button className={classes.btnDelete} style={{marginLeft:"10px"}} variant="contained" onClick={()=>deleteSelectedUser(user._id)}>Delete</Button>
                        </TableCell>
                        
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default AllUser;