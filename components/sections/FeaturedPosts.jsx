import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FeaturedPostsCard } from "..";
import { getFeaturedPosts } from "../../services";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1023, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const customleftarrow = (
    <div className="absolute left-0 text-center py-3 px-2 cursor-pointer rounded-lg scale-90 bg-blue-500 text-white transition duration-300 ease-in hover:scale-100">
      <i className="fas fa-angle-left"></i>
    </div>
  );

  const customrightarrow = (
    <div className="absolute right-0 text-center py-3 px-2 cursor-pointer rounded-lg scale-90 bg-blue-500 text-white transition duration-300 ease-in hover:scale-100">
      <i className="fas fa-angle-right"></i>
    </div>
  );

  return (
    <div className="mb-8">
      <Carousel
        infinite
        customLeftArrow={customleftarrow}
        customRightArrow={customrightarrow}
        responsive={responsive}
        itemClass="px-2"
        autoPlay={true}
        autoPlaySpeed={2000}
      >
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <FeaturedPostsCard key={index} post={post} />
          ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPosts;
