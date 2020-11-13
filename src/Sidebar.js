import React from 'react';
import SidebarRow from "./SidebarRow";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";



import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar"> 
<SidebarRow  selected Icon={HomeIcon} title="Home"/>
<SidebarRow Icon={WhatshotIcon} title="Trending" />
<SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
<hr />
<SidebarRow Icon={VideoLibraryIcon} title="Library"/>
<SidebarRow Icon={HistoryIcon} title="History"/>
<SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
<SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
<SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked Videos"/>
<SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
        </div>
    )
}

export default Sidebar;
