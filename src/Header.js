import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import Avatar from '@material-ui/core/Avatar';


function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <img
                    className="header_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                    alt="YouTube logo">
                </img>

            </div>
            <div className="header_input">
                <input type="text"  
                placeholder="Search"/>
                <SearchIcon  className="header_inputButton"/>


            </div>
            <div className="header_icons">

                <VideoCallOutlinedIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsActiveOutlinedIcon className="header_icon"/>
                <Avatar
                    img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/119007074_10157520994512541_7477164819350937676_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=kLj08tp2EA0AX8HiDWs&_nc_ht=scontent-lga3-1.xx&oh=d19abb82ef3da4764584a19d146a8acc&oe=5FD1D37C"
                    alt="user image"
                />


            </div>

        </div>
    )
}

export default Header
