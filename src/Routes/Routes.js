import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Home from '../components/common/Home'
import PageNotFound from '../components/common/PageNotFound'
import Login from '../components/auth/Login'
import SignUp from '../components/auth/SignUp'
// import fire from '../config/fire'
import SearchLocation from '../components/common/SearchLocation'
import BookYourConsignment from '../components/common/BookYourConsignment'
import Admin from '../components/common/Admin'
import Quotation from "../components/auth/Quotation"


class Routes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             user: {}
        }
    }
    

    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Switch>
                    {/* {this.state.user ? (
                        <Route exact path= "/" component = {Home} />
                    ): (
                        <Route path= "/login" component = {Login} />
                    )} */}
                    <Route exact path= "/" component = {Home} />
                    <Route path = "/searchbylocation" component = {SearchLocation} />
                    <Route path= "/login" component = {(props) => <Login {...props}/>} />
                    <Route path= "/signup" component = {(props) => <SignUp {...props} />} />
                    <Route path = "/bookyourconsignment" component = {(props)=><BookYourConsignment {...props}/>} />
                    <Route path ="/admin/dashboard" component = {Admin} />
                    <Route path ="/paynow" component = {Quotation}/>

                    <Route component = {PageNotFound} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default Routes
