import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="header black-bg">                
                <div className="sidebar-toggle-box">
                    <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
                </div>
                {/* Logo start */}
                <a href="/" className="logo"><b>EB EVENT</b></a>


            </header>
        )
    }
}

export default Header;