import React, {Component} from 'react'

class Report extends Component
{
    // constructor(props){
    //     super(props);        
    // }

    render(){
        let transactions = this.props.transactions;
        let listing='';
        if(transactions.length>0){
            listing = transactions.map((transaction, index) =>(
                <div className="row" key={index}>
                    <div className="text-left col-lg-3">{index}</div>
                    <div className="text-left col-lg-3">{transaction.title}</div>
                    <div className="text-left col-lg-3">{transaction.type}</div>
                    <div className="text-left col-lg-3">{transaction.amount}</div>
                </div>
            ));
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="text-left col-lg-3">ID</div>
                    <div className="text-left col-lg-3">Title</div>
                    <div className="text-left col-lg-3">Type</div>
                    <div className="text-left col-lg-3">Amount</div>
                </div>
                {listing}
            </div>
        )
    }
}

export default Report