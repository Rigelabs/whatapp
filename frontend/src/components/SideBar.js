import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import React from 'react';
import '../components_css/sidebar.css';
import SideBarChat from './SideBarChat';
function SideBar() {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar src="https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914__340.png" />
                <div className="sidebar__headerRight">
                    
                    <IconButton>
                         <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                         <ChatIcon />
                    </IconButton>
                    <IconButton>
                         <MoreVertIcon />
                    </IconButton>
                    
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start a new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chat">
                <SideBarChat />
                <SideBarChat />
                <SideBarChat />
            </div>
           
        </div>
          
)}

export default SideBar
