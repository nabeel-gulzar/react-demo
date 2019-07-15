import React, {Component} from 'react'
import update from 'immutability-helper'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Budget from './Budget';
import Report from './Report';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import NotFound from './NotFound';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import cloneDeep from 'lodash.clonedeep'

class App extends Component
{

    constructor(props)
    {
        super(props)
        this.state ={  logged_in:false, 
                        user:{name:'', email:'', transactions:[]}, 
                        users:{}
                    };
        this.onLogoutClicked = this.onLogoutClicked.bind(this);
        this.userAuthorized = this.userAuthorized.bind(this);
        this.onSignupClicked = this.onSignupClicked.bind(this);
        this.submitTransaction = this.submitTransaction.bind(this);
        this.onVerifyPasswordClicked = this.onVerifyPasswordClicked.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    changePassword(newPassword){
        let userKey = this.state.user.email;
        let newUserList = cloneDeep(this.state.users);
        newUserList[userKey].password = newPassword;

        console.log(newUserList);
        this.setState({
            users:newUserList
        });
    }

    onVerifyPasswordClicked(password){
        return this.state.users[this.state.user.email].password === password
    }

    submitTransaction(newTransaction){
        // console.log("syncing server transaction with", newTransaction);
        this.syncTransactionWithServer(newTransaction);
        // console.log("updating state transaction with", newTransaction);
        // console.log("current user transactions", this.state.user.transactions)
        this.updateTrasactionsState(newTransaction);

    }

    syncTransactionWithServer(transaction){
        let updatedUsers = cloneDeep(this.state.users);
        let prevTransations = cloneDeep(updatedUsers[this.state.user.email].transactions);
        updatedUsers[this.state.user.email].transactions = [...prevTransations, transaction]
        this.setState({
            users:updatedUsers
        });
    }

    updateTrasactionsState(transaction){
        this.setState({
            user:{...this.state.user, transactions:[...this.state.user.transactions, transaction]}
        });
    }

    onSignupClicked(newUser){
        if(this.userExists(newUser)){
            alert('user already exists');
        }
        else{
            this.createUser(newUser);
        }
    }

    /** 
     * Summary: check if the user exists by sending an API call to backend.
     * 
     * Description: when users signs up, credentials are passed to this function to checks if
     * this is duplicate or not.
     * 
     * @param {type} [objectUser] user object that needs to be checked from the server
     * */
    userExists(user){
        let updatedUsers = cloneDeep(this.state.users);
        if(user.email in updatedUsers){
            return true;
        }
        return false;
    }
    


    /** 
     * Summary: create a new user by sending a API call to backend.
     * 
     * Description: create a new user by sending a API call to backend.
     * 
     * @param {type} [objectUser] user object that needs to be created.
     * */
    createUser(user){
        let userObj = {};
        userObj[user.email]=user;
        // console.log('user Objects', userObj)        
        // console.log('state (initially)', this.state.users)        
        // let updatedUsers = update(this.state.users, {$push: [userObj]});
        let updatedUsers = update(this.state.users, {$merge: userObj});

        // updatedUsers[user.email]= user;        
        // console.log('updated copy of users', updatedUsers);
        // console.log('state (before setState)', this.state.users)        
        this.setState({users:updatedUsers});        
    }

    /** 
     * Summary: verify the user credentials by sending a API call to backend.
     * 
     * Description: verify whether the credentials that user provided for signin are correct or not.
     * 
     * @param {type} [objectUser] user object that needs to be verified.
     * */
    verifyUser(user){
        if(this.state.users[user.email]){
            if(this.state.users[user.email].password===user.password){
                return this.state.users[user.email];
            }
        }
        return false;
    }

    /** 
     * Summary: add the user to state once it is verified from the backend.
     * 
     * Description: add the user to state once it is verified from the backend.
     * 
     * @param {type} [objectUser] user object that needs to be verified.
     * */
    userAuthorized(user){
        let userResponse = this.verifyUser(user);        
            if(userResponse){
                user.name = userResponse
                this.setState({
                logged_in:true, user:userResponse 
                });
            }
            else{
                alert("Credentials do not match any user")
            }
    }

    onLogoutClicked(){
        this.setState({
            logged_in:false, user: {}
        });
    }

    isLoggedIn(){
        return (this.state.logged_in)?true:false;
    }

    render(){
        const transactions = this.state.user.transactions
        const routes = this.isLoggedIn()?   
                                        ([{path: '/home', component:Home},
                                        {path: '/budget', component:Budget},
                                        {path: '/report', component: Report},
                                        {path: '/profile', component: Profile},
                                        {path: '/login', component: Home},                                        
                                        {path: '/', component:Home},
                                        {component: NotFound}])
                                        :
                                        ([{path: '/', component: Login},
                                        {path: '/signup', component: Signup},
                                        {path: '/login', component: Login},
                                        {component: NotFound}]);

  
        let routing =   <Switch>
                            {routes.map(({path, component: C, index})=> {
                                return (<Route key={C}
                                        exact
                                        path={path}
                                        //needs refactoring, what is the proper way to send props to components
                                        render={(props) =>  <C {...props} 
                                        onSignupClicked={this.onSignupClicked} 
                                        userAuthorized ={this.userAuthorized} 
                                        submitTransactions ={this.submitTransaction}
                                        transactions={transactions}
                                        onVerifyPasswordClicked={this.onVerifyPasswordClicked}
                                        changePassword={this.changePassword}/>}
                                        />)
                            })}; 
                        </Switch>;

        
        return (           
            <Router>
                <div>
                    <Header onLogoutClicked={this.onLogoutClicked} user={this.state.user} isLoggedIn={this.state.logged_in}/>
                        {routing}                        
                    <Footer/>
                </div>
            </Router>            
        );
    }
}

export default App;
