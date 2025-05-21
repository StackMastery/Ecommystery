"use client";

import { urlFor } from "@/sanity/lib/sanityImage";
import Image from "next/image";
import Masonry from "react-masonry-css";

const ReviewCard = ({ data, index }) => {
  return (
    <>
      <div
        className={`
    ${
      index + 1 === 5
        ? "bg-gradient-to-br  from-[#FA6BE9]/30 to-white/5"
        : "bg-white/5"
    }
    w-full h-fit lg:col-span-4
    flex flex-col justify-between gap-5 p-8 rounded-2xl
  `}
      >
        <div className="flex flex-col gap-5">
          <div className="flex w-full justify-between items-center">
            <span className="flex items-center gap-1">
              {Array.from({ length: data?.rating }).map((item, index) => (
                <svg
                  key={`review-${index}`}
                  width={22}
                  height={21}
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.88049 20.4663C4.6593 20.4663 4.4065 20.4031 4.21691 20.2449C3.83772 19.9601 3.67974 19.517 3.77453 19.0739L5.00689 13.5043C5.03849 13.3145 4.97528 13.1563 4.84889 13.0297L0.55121 9.23232C0.203622 8.91588 0.077227 8.44098 0.235221 8.02974C0.393216 7.58668 0.74081 7.27023 1.21479 7.23863L6.87145 6.70054C7.06105 6.66894 7.21905 6.57392 7.28225 6.41569L9.5574 1.19436C9.747 0.78289 10.1577 0.498047 10.6001 0.498047C11.0741 0.498047 11.4849 0.751292 11.6429 1.19436L13.9183 6.41569C13.9815 6.57392 14.1395 6.70054 14.329 6.70054L19.9846 7.23863C20.4597 7.27023 20.8393 7.58668 20.9644 8.02974C21.1235 8.47281 20.9962 8.94748 20.6484 9.26392L16.3837 13.0613C16.2564 13.1879 16.1927 13.3777 16.2245 13.5359L17.4567 19.1055C17.5521 19.5486 17.3953 20.0233 17.0156 20.2765C16.636 20.5613 16.1618 20.5613 15.751 20.3397L10.8529 17.4601C10.6949 17.3651 10.5053 17.3651 10.3473 17.4601L5.44928 20.3081C5.25969 20.4031 5.07008 20.4663 4.88049 20.4663Z"
                    fill="#FFCB33"
                  />
                </svg>
              ))}
            </span>
            <span>
              {data.sourcePlatform === "clutch" ? (
                <>
                  <svg
                    width={33}
                    height={36}
                    viewBox="0 0 33 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.5086 25.5202C23.6873 27.1579 21.2858 28.0612 18.6493 28.0612C12.8403 28.0612 8.57342 23.7944 8.57342 17.9339C8.57342 12.0734 12.7081 7.99021 18.6493 7.99021C21.2417 7.99021 23.6873 8.84945 25.5526 10.4871L26.8231 11.5741L32.4559 5.94125L31.0459 4.67075C27.7264 1.68176 23.3274 0 18.6493 0C8.20623 0 0.619934 7.53488 0.619934 17.8898C0.619934 28.2007 8.38248 36 18.6493 36C23.4155 36 27.866 34.3182 31.134 31.2778L32.4926 30.0073L26.7791 24.3819L25.5086 25.5202Z"
                      fill="white"
                    />
                    <path
                      d="M18.3695 11.9854C21.7037 11.9854 24.4063 14.6879 24.4063 18.0221C24.4063 21.3562 21.7037 24.0588 18.3695 24.0588C15.0354 24.0588 12.3328 21.3562 12.3328 18.0221C12.3328 14.6879 15.0354 11.9854 18.3695 11.9854Z"
                      fill="#FF7C2E"
                      fillOpacity="0.7"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2616_1912)">
                      <path
                        d="M30.1371 0H2.86416C1.55856 0 0.5 1.02656 0.5 2.29248V29.7062C0.5 30.9734 1.55856 32 2.86416 32H30.1371C31.4427 32 32.5 30.9722 32.5 29.7062V2.29248C32.5 1.02656 31.4427 0 30.1371 0Z"
                        fill="#6FDA44"
                      />
                      <path
                        d="M23.9829 18.6071C22.7234 18.6071 21.5445 18.0734 20.4718 17.2043L20.733 15.978L20.7445 15.9332C20.9774 14.6276 21.7147 12.435 23.9829 12.435C25.684 12.435 27.0677 13.8212 27.0677 15.5236C27.0626 17.2209 25.6789 18.6071 23.9829 18.6071ZM23.9829 9.30537C21.085 9.30537 18.8386 11.1908 17.9259 14.291C16.5307 12.1956 15.476 9.68041 14.8578 7.56201H11.7397V15.6875C11.7397 17.2887 10.4354 18.5943 8.83536 18.5943C7.23536 18.5943 5.93232 17.2887 5.93232 15.6875V7.56201H2.81296V15.6875C2.80144 19.0155 5.50736 21.747 8.83024 21.747C12.1531 21.747 14.859 19.0155 14.859 15.6875V14.3243C15.4658 15.5902 16.2082 16.8676 17.1106 18.0043L15.1995 26.9988H18.3931L19.7768 20.4747C20.9902 21.2529 22.3854 21.7406 23.9854 21.7406C27.4056 21.7406 30.1896 18.9348 30.1896 15.5108C30.187 12.0932 27.403 9.30537 23.9829 9.30537Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2616_1912">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </>
              )}
            </span>
          </div>
          <p className="text-[15px] font-light">{data.review}</p>
        </div>
        <div className="flex gap-5 items-center">
          <Image
            width={50}
            height={50}
            src={urlFor(data.aImage).width(100).height(100).url()}
            alt={data.name}
            className="rounded-full"
          />
          <div>
            <h3 className="text-lg">{data.name}</h3>
            <p className="text-sm">{data.hobby}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;

export const ReviewsGrid = ({ reviews }) => {
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <div className="w-full pt-10 lg:pt-16 relative z-10">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-5"
        columnClassName="review-column flex flex-col gap-5"
      >
        {reviews.map((review, index) => (
          <ReviewCard key={review._id} data={review} index={index} />
        ))}
      </Masonry>
    </div>
  );
};
