import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'



class Header extends Component
{
    constructor(props){
        super(props)
        this.onLogoutClick = this.onLogoutClick.bind(this);
        
    }

    onLogoutClick(e){
        e.preventDefault();
        this.props.onLogoutClicked();
        this.props.history.push('/login');
    }


    render(){
        this.userName = this.props.user.name;
        this.isLoggedIn = this.props.isLoggedIn;
        const publicHeader =    <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <ul className="navbar-nav mr-auto">                    
                                                    <li className="nav-item">
                                                        <Link  className="nav-link" to="/signup">Create Account</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-9"></div>
                                            <div className="col-lg-1">
                                                <ul className="navbar-nav mr-auto">                    
                                                    <li className="nav-item">
                                                        <Link  className="nav-link" to="/login">Login</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
        const privateHeader =   <div className="row">
                                    <div className="col">
                                        <ul className="navbar-nav mr-auto">                    
                                            <li className="nav-item">
                                                <Link  className="nav-link" to="/home">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link  className="nav-link" to="/budget">Budget</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link  className="nav-link" to="/report">Report</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-lg-9"></div>
                                            <div className="col-lg-3">
                                                <ul className="navbar-nav mr-auto">                    
                                                    <li className="nav-item">
                                                        <Link  className="nav-link" to="/profile">Hello {this.userName}!</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link  className="nav-link" to="/login" onClick={this.onLogoutClick}>Logout</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

        return(
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className = "collapse navbar-collapse">
                    <div className="container-fluid">
                        {
                            this.isLoggedIn===true? privateHeader : publicHeader
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)