import React from "react";
import s from "./Review.module.scss";
import ReviewCard from "../ReviewCard/ReviewCard";
import { CarVideos } from "@/constants/constants";

const Review = () => {
  return (
    <section className={s.Reviews}>
      <h1>Reviews</h1>
      <div className={s.videos}>
        <ReviewCard CarVideos={CarVideos} />
      </div>
    </section>
  );
};

export default Review;
