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
import MealDetails from './components/MealDetails/MealDetails';
import MealFinder from './components/MealFinder/MealFinder';


function App() {
 
  return (
    <div className="App">
      <MealDetails/>
      <MealFinder/>
    </div>
  );
}

export default App;
