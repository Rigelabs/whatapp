import { Avatar } from '@material-ui/core'
import React from 'react'
import "../components_css/sidebarChat.css"
function SideBarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarchat__info">
                <h2>This is the room name</h2>
                <p>this is last message</p>
            </div>
        </div>
    )
}

export default SideBarChat
