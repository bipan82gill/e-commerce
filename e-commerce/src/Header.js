import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
                <img 
                className="header_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="logo"/>
                <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className ="header__searchIcon"/>
                </div>
                <div className="header__nav">
                    <div className ="header__option">
                        <span className="header__optionLineOne">
                           hello
                        </span>
                        <span className="header__optionTwoOne">
                           Sign In
                        </span>
                    </div>
                    <div className ="'header__option">
                        <span className="header__optionLineOne">
                           returns
                        </span>
                        <span className="header__optionTwoOne">
                           & Orders
                        </span>
                    </div>
                    <div className ="'header__option">
                        <span className="header__optionLineOne">
                           Your
                        </span>
                        <span className="header__optionTwoOne">
                           Prime
                        </span>
                    </div>
                </div>
        </div>
    )
}

export default Header
