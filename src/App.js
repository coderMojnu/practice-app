import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';
import { Button } from '@material-ui/core';
import Rechart from './components/Rechart/Rechart';

import Friend from './components/Friend/Friend';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [color, setColor] = useState('');
  const[users, setUsers] = useState([]);
  const[singleUser, setSingleUser] = useState([]);
  const[randomUsers, setRandomUsers] = useState({});
  const handleColor = () => {
    let thumbColor = color ? '' : 'primary';
    setColor(thumbColor);
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => setUsers(data))
    //singleUser
    fetch('https://jsonplaceholder.typicode.com/users/9')
    .then(res => res.json())
    .then(data => setSingleUser(data))
    //randomUser
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => setRandomUsers(data.results[0]))
  }, [])
  console.log(randomUsers)
  return (
    <div>
      <h1>{singleUser.name}</h1>
      <h2>{randomUsers.login?.password}</h2>
      <AccessAlarmIcon/>
      <ThumbUpIcon onClick={handleColor} color={color}></ThumbUpIcon>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  );
}

export default App;
