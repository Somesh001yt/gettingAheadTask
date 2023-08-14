import React from "react";
import "./FeaturePage.scss";
import FeatureCard from "./FeatureCard";
import featureData from "./featuredetails";

const FeaturePage = () => {
  return (
    <div className="feature-container">
      <div className="input-container">
        <div className="input-btn relative">
          <input type="text" placeholder="Type here something" />
          <div className="absolute right-32 top-2 text-[20px]">
            <ion-icon name="image-outline"></ion-icon>
          </div>
          <div className="absolute right-20 top-2 text-[20px] -rotate-45 ">
            <ion-icon name="link-outline"></ion-icon>
          </div>
        </div>
        <button className="post-btn">Post</button>
      </div>

      <h4 className="feature-heading">Feature Content</h4>

      {featureData.map((content, index) => (
        <FeatureCard key={index} {...content} />
      ))}
    </div>
  );
};

export default FeaturePage;
