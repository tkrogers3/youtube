import React from 'react'
import "./VideoCard.css"

import Avatar from '@material-ui/core/Avatar';
function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className="videoCard">
            <img src={image}
             className="videoCard_thumbnail"
            alt="" />
            <div className="videoCard_info">
                <Avatar className="videoCard_avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>

        </div>
    )
}

export default VideoCard
