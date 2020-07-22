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
          data-theme="dark"
          data-tweet-limit="3"
          data-chrome="noheader nofooter noborder"
          href="https://twitter.com/mollyrosecancer"
        >
          Tweets by MollyRose
        </a>
      </div>
  
  );
};

export default TwitterContainer;
