import React from 'react'
import {Switch, Route} from 'react-router-dom'

// Components
import Landing from './Components/Landing/Landing'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Profiles from './Components/Profiles/Profiles'
import Profile from './Components/Profile/Profile'
import Dashboard from './Components/Dashboard/Dashboard'
import Create from './Components/Create/Create'
import Experience from './Components/Experience/Experience'
import Education from './Components/Education/Education'
import Posts from './Components/Posts/Posts'
import Post from './Components/Post/Post'


export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profiles' component={Profiles} />
        <Route path='/profile' component={Profile} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/create-profile' component={Create} />
        <Route path='/add-experience' component={Experience} />
        <Route path='/add-education' component={Education} />
        <Route path='/posts' component={Posts} />
        <Route exact path='/post' component={Post} />
    </Switch>
)