import React, {Component} from 'react';
import TraciLogo from '../assets/Tracified_logo.png';

class TracifiedLogo extends Component{
    render(){
        var logoStyle={
            height: '125px'             
        }

        var backStyle={
            backgroundColor:"black",
            textAlign: 'center',
        }

        return(
            <div style={backStyle}>
                <img src={TraciLogo} style={logoStyle}/>
            </div>
        );
    }
}

export default TracifiedLogo;