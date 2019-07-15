import React, {Component} from 'react'
import Modal from 'react-modal'

class Confirm extends Component{
    constructor(props){
        super(props);
        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.state = {password: ''}
    }

    onPasswordChange(e){
        e.preventDefault();
        this.setState({password:e.target.value});
    }

    verifyPassword(password){
        // implement password verification logic
        return this.props.onVerifyPasswordClicked(this.state.password);    
    }

    onConfirmClick(e){
        e.preventDefault();
        this.props.onConfirmed(this.verifyPassword(this.state.password))
    }
    render() {
        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)'
            }
          };
        return (
            <Modal
                isOpen={this.props.isOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                <form>
                    <div className="form-group row text-center">
                        <label htmlFor="inputPassword" className="col-sm-3 col-form-label text-left">Password</label>
                        <div className="col-sm-6">
                            <input required type="password" className="form-control" id="inputPasword" placeholder="*******" value={this.state.password} onChange={this.onPasswordChange}/>
                        </div>
                    {/* </div>
                        
                    <div className="form-group row text-right"> */}
                        <div className="text-right col-sm-3">
                            <button type="submit" className="btn btn-dark" onClick={this.onConfirmClick}>Confirm Action</button>
                        </div>
                    </div>
                </form>

          </Modal>
        );
    }
    }

export default Confirm