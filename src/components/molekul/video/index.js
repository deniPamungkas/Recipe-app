import React from "react";

const Video = ({ videoLink }) => {
  console.log(videoLink)
  return (
    <div>
      <iframe
        width={"500"}
        height={"300"}
        src={videoLink}
        title="youtube video player"
        allowFullScreen
        allow="accelerometer; gyroscope; autoplay; encrypted-media; clipboard-white; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Video;
