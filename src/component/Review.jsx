import { useState } from "react";
import Reviewsdata from "./Reviewsdata";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(2);
  const { id, name, job, image, text } = Reviewsdata[index];

  const preBtn = () => {
    setIndex((prev) => {
      if (prev < 1) {
        return 0;
      }
      return prev - 1;
    });
  };

  const nextBtn = () => {
    setIndex((prev) => {
      if (prev >= Reviewsdata.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const srPriseBtn = () => {
    setIndex(() => Math.floor(Math.random() * 4));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={preBtn}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextBtn}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={srPriseBtn}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
