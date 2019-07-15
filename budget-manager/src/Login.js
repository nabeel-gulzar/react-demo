import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {Component} from 'react'

class Login extends Component{
    constructor(props){
        super(props);   
        this.onLoginClicked = this.onLoginClicked.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);    
        this.state = {email:'nabeel@gmail.com', password:'!@#$%^'};
        
}

    onEmailChange(e){
        this.setState({
            email: e.target.value,
        })
    }

    onPasswordChange(e){
        this.setState({
            password: e.target.value,
        })
    }

    // verifyUser(){
        // get server api to authorize user
        // const serverEmail = 'nabeel@gmail.com';
        // const serverPass = '!@#$%^';
        
    //     return (this.state.email === serverEmail && this.state.password === serverPass)
    // }

    onLoginClicked(e){
        e.preventDefault();
        this.props.userAuthorized({email: this.state.email, password: this.state.password});
    }

    render(){
        return(
            <form className="jumbotron container">
                <div className="form-group row">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input required type="email" className="form-control" id="inputEmail" placeholder="steve@outlook.com" value={this.state.email} onChange={this.onEmailChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input required type="password" className="form-control" id="inputPassword" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
                    </div>
                </div>
                <div className="form-group row">
                        <div className="text-center col-sm-12">
                            <button type="submit" className="btn btn-dark" onClick={this.onLoginClicked}>Login</button>
                        </div>
                </div>
            </form>
        )
    }
}

export default Login

