import React, { useState, useEffect } from "react";
import SearchBar from "./videos/SearchBar";
import { VideoList } from "./videos/VideoList";
import { VideoDetail } from "./videos/VideoDetail";
import { UseVideos } from "./videos/UseVideos";

export const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = UseVideos("anime");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};
