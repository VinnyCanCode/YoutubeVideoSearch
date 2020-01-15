import React from 'react';
import './VideoItem.scss';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="item" id="videoItem" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <div className="header">
          <h4>{video.snippet.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
