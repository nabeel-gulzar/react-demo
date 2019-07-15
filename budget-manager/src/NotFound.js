import React, {Component} from 'react'

class NotFound extends Component
{
    render(){
        return(
            <div>
                <h1>This page is not available in our application</h1>
                <h3>Maybe one of the following problems happaned:</h3>
                <ul>
                    <li>Did you make a typo trying to manually enter url</li>
                    <li>Applicaion redirected you to this page.</li>
                </ul>
            </div>
        )
    }
}

export default NotFound