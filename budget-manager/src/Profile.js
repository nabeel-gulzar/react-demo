import React, {Component} from 'react'
import Confirm from './Confirm';

class Profile extends Component
{
    constructor(props){
        super(props);
        this.state = {email:'', password:'', rePassword:'', showModal:false}

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRePasswordChange = this.onRePasswordChange.bind(this);
        this.onChangeEmailClicked = this.onChangeEmailClicked.bind(this);
        this.onChangePasswordClicked = this.onChangePasswordClicked.bind(this);
        this.onConfirmed = this.onConfirmed.bind(this);
    }

    onEmailChange(e){
        e.preventDefault();
        this.setState({email:e.target.value});
    }

    onPasswordChange(e){
        e.preventDefault();
        this.setState({password:e.target.value});
    }

    onRePasswordChange(e){
        e.preventDefault();
        this.setState({rePassword:e.target.value});
    }

    onChangeEmailClicked(e){
        e.preventDefault();
        this.setState({showModal:true});        
    }

    onChangePasswordClicked(e){
        e.preventDefault();
        this.setState({showModal:true});            
    }

    onConfirmed(isPasswordCorrect){
        if(isPasswordCorrect){
            console.log('Confirmed');
            this.props.changePassword(this.state.password);
            this.setState({showModal:false});
        }
    }

    onHide(){
        console.log('Hide');
    }

    render(){
        return(
            <div className="jumbotron container">
                <form>
                    <div className="form-group row text-center">
                        <label htmlFor="inputEmail" className="col-sm-3 col-form-label text-left">New Email</label>
                        <div className="col-sm-6">
                            <input required type="email" className="form-control" id="inputEmail" placeholder="steve@rackspace.com" value={this.state.email} onChange={this.onEmailChange}/>
                        </div>
                    {/* </div>
                        
                    <div className="form-group row text-right"> */}
                        <div className="text-right col-sm-3">
                            <button type="submit" className="btn btn-dark" onClick={this.onChangeEmailClicked}>Change Email</button>
                        </div>
                    </div>
                </form>
                <form>                       
                    <div className="form-group row text-center">
                        <label htmlFor="inputPassword" className="col-sm-3 col-form-label text-left">New Password</label>
                        <div className="col-sm-6">
                            <input required type="password" className="form-control" id="inputPassword" placeholder="********" value={this.state.password} onChange={this.onPasswordChange}/>
                        </div>
                    </div>
                    <div className="form-group row text-center">
                        <label htmlFor="inputRePassword" className="col-sm-3 col-form-label text-left">Confirm New Password</label>
                        <div className="col-sm-6">
                            <input required type="password" className="form-control" id="inputRePassword" placeholder="********" value={this.state.rePassword} onChange={this.onRePasswordChange} />
                        </div>
                    {/* </div>
                    <div className="form-group row text-right"> */}
                        <div className="text-right col-sm-3 ">
                            <button type="submit" className="btn btn-dark" onClick={this.onChangePasswordClicked}>Change Password</button>
                        </div>
                    </div>
            </form>                        
            {(this.state.showModal && <Confirm isOpen={true} onConfirmed={this.onConfirmed} onHine={this.onHide} onVerifyPasswordClicked={this.props.onVerifyPasswordClicked}/>)}
        </div>
        )
    }
}

export default Profile