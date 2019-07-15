import React from 'react'
import {withRouter} from 'react-router-dom'

class Signup extends React.Component{
    constructor(props){
        super(props)
        this.onSignupClicked = this.onSignupClicked.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)


        this.state = {user: 
                        {   
                            email: 'nabeel@gmail.com',
                            password: '123456',
                            name: 'Nabeel',
                            transactions: []
                        }
                    }
    }

    onNameChange(e){
        e.preventDefault()
        this.setState({
            user: {
                ...this.state.user,
                name: e.target.value
            }
        })        
    }

    onEmailChange(e){
        e.preventDefault()
        this.setState({
            user: {
                ...this.state.user,
                email: e.target.value
            }
        })        

    }

    onPasswordChange(e){
        e.preventDefault()
        this.setState({
            user: {
                ...this.state.user,
                password: e.target.value
            }
        })        
        
    }

    
    onSignupClicked(e){
        e.preventDefault(); 
        console.log('SignUp clicked in local component')
        this.props.onSignupClicked(this.state.user)
        this.props.history.push('/login');        
    }


    render(){
        return(
            <form className="jumbotron container">

            <div className="form-group row">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input required type="name" className="form-control" id="inputName" placeholder="steve samuel" value={this.state.user.name} onChange={this.onNameChange}/>
                </div>
            </div>
                
            <div className="form-group row">
                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input required type="email" className="form-control" id="inputEmail" placeholder="steve@outlook.com" value={this.state.user.email} onChange={this.onEmailChange}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input required type="password" className="form-control" id="inputPassword" placeholder="Password" value={this.state.user.password} onChange={this.onPasswordChange} />
                </div>
            </div>
            <div className="form-group row">
                {/* <div className="col-sm-5"></div> */}
                    <div className="text-center col-sm-12">
                        <button type="submit" className="btn btn-dark" onClick={this.onSignupClicked}>Create Account</button>
                    </div>
                {/* <div className="col-sm-5"></div> */}
            </div>
        </form>
        )
    }
}

export default withRouter(Signup);