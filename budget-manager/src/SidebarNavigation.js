import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {Component} from 'react'

class SidebarNavigation extends Component
{


    render(){
        return(
            <nav cl assName="nav flex-column">
                <a className="nav-link" href="#">Home</a>
                <a className="nav-link" href="#">Budget</a>
                <a className="nav-link" href="#">Report</a>
            </nav>
        )
    }
}

export default SidebarNavigation