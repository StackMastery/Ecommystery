import { fetchReviews } from "@/controllers/frontend/review.controller";
import { ReviewsGrid } from "../../ui/ReviewCard";
import { ReviewsBackground } from "./ServicesClient";

const Reviews = async () => {
  const reviews = await fetchReviews();

  return (
    <>
      <section className="section relative !z-50 py-10 pb-40">
        <div className="w-full max-w-[1440px] px-5 flex justify-center items-center flex-col">
          <ReviewsBackground />
          <div className="w-full relative z-10">
            <h2 className="text-4xl md:text-5xl font-extralight text-center italic font-serif">
              Great work{" "}
              <span className="text-transparent font-familyN bg-gradient-to-r from-pM via-pM to-[#f1c37e] font-semibold bg-clip-text not-italic">
                for great companies <br className="max-[500px]:hidden" /> for
              </span>{" "}
              drive{" "}
              <span className="text-transparent font-familyN bg-gradient-to-r from-pM to-pink-400 font-semibold bg-clip-text not-italic">
                their
              </span>{" "}
              growth{" "}
            </h2>
            <p className="text-center my-5 text-lg">
              Get inspired by insights, and success stories from our growing{" "}
              <br className="max-[500px]:hidden" /> community of e-commerce
              entrepreneurs.
            </p>
          </div>
          <div className="w-full relative lg:pt-5 z-10">
            <ReviewsGrid reviews={reviews} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
