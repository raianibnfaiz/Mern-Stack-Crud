import React from 'react';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import {Button } from '@material-ui/core'

const NavBar = () => {
    return (
        <div className="top">
            <div className="topLeft">
                <li className="topListItem">  
                    <Link className="link" to="/">
                        User's Information
                    </Link>
                </li>
            </div>
            <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Button  variant="contained">
                        <Link className="link" to="/all">
                            All User
                        </Link>
                    </Button>
                </li>
                <li className="topListItem">
                    <Button  variant="contained">
                        <Link className="link" to="/add">
                            Add User
                        </Link>
                    </Button>
                </li>

            </ul>
            </div>
            <div className="topRight">
                <ul className="topList">
                    <li>
                        MERN CRUD 
                    </li>
                </ul>
            </div>
        </div>
        
    );
};

export default NavBar;