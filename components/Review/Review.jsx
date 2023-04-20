import React from "react";
import s from "./Review.module.scss";
import ReviewCard from "../ReviewCard/ReviewCard";

const Review = () => {
  const CarVideos = [
    {
      link: "https://player.vimeo.com/external/328465444.sd.mp4?s=f9ccb1200a449bdf2dd10d99e96f0603a24e24d3&profile_id=164&oauth2_token_id=57447761",
      id: '1'
    },
    {
      link: "https://www.youtube.com/embed/fdGWRq1dVBA",
      id: '2'
    },
    {
      link: "https://youtu.be/1Ftbd-1UgZc",
      id: '3'
    },
    {
      link: "https://www.youtube.com/embed/WGXu5018Wxc",
      id: '4'
    },
    {
      link: "https://www.youtube.com/embed/i-QaaokEQms",
      id: '5'
    },
  ];
  return (
    <section className={s.Reviews}>
      <h1>Reviews</h1>
      <div className={s.videos}>
        <ReviewCard CarVideos={CarVideos}/>
      </div>
    </section>
  );
};

export default Review;
