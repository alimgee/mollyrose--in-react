import React, { useEffect } from "react";

const TwitterContainer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    
      <div className="twitter-embed ">
        <a
          className="twitter-timeline"
          data-theme="light"
          data-tweet-limit="2"
          data-chrome="noheader nofooter "
          href="https://twitter.com/mollyrosecancer"
        >
          Tweets by MollyRose
        </a>
      </div>
  
  );
};

export default TwitterContainer;
