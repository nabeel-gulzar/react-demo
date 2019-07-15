import React, {Component} from 'react'
import Report from './Report';

class Budget extends Component
{
    constructor(props){
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.addTransactionClicked = this.addTransactionClicked.bind(this);
        this.transactions= []
        //I for income and E for expense, need to refactor
        this.state = {transaction:{title:'', amount:0, type:''}}
    }


    resetState(){
        this.setState({transaction:{title:'', amount:0, type:''}});
    }

    addTransactionClicked(e){
        e.preventDefault();
        console.log("sending transaction to server", this.state.transaction);
        this.props.submitTransactions(this.state.transaction);
        this.resetState();        
    }
    onTitleChange(e){
        this.setState({
            transaction:{...this.state.transaction, title:e.target.value}
        });
    }

    onTypeChange(e){
        this.setState({
            transaction:{...this.state.transaction, type:e.target.value}
        });
    }


    onAmountChange(e){
        this.setState({
            transaction:{...this.state.transaction, amount:e.target.value}
        });
    }

    render(){
        this.transactions = this.props.transactions
        return(
            <div className="jumbotron container">
                <form>
                    <div className="form-group row">
                        <label htmlFor="inputTitle" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input required type="text" className="form-control" id="inputTitle" placeholder="Fuel" value={this.state.transaction.title} onChange={this.onTitleChange}/>
                        </div>
                    </div>
                        
                    <div className="form-group row">
                        <label htmlFor="inputType" className="col-sm-2 col-form-label">Type</label>
                        <div className="col-sm-10">
                            <input required type="char" className="form-control" id="inputType" placeholder="Expense (E) or Income (I)" value={this.state.transaction.type} onChange={this.onTypeChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputAmount" className="col-sm-2 col-form-label">Amount</label>
                        <div className="col-sm-10">
                            <input required type="number" className="form-control" id="inputAmount" placeholder="0.0" value={this.state.transaction.amount} onChange={this.onAmountChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="text-right col-sm-6">
                            <button type="submit" className="btn btn-dark" onClick={this.addTransactionClicked}>Add</button>
                        </div>
                    </div>
            </form>
            <Report transactions={this.transactions} />
        </div>
        )
    }
}

export default Budget