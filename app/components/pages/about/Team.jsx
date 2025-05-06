import { Suspense } from "react";
import TeamServer from "./TeamServer";
import TeamClient from "./TeamClient";

const Team = () => {
  return (
    <>
      <section className="section relative !z-50 py-20 pb-40">
        <TeamClient>
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl  text-center font-semibold">
              Our
              <span className="text-transparent italic font-light bg-gradient-to-r font-serif from-pB via-pM to-pY bg-clip-text ">
                Dedicated Team
              </span>{" "}
            </h2>
            <p className="text-center my-5 text-lg">
              Get inspired by transformation videos, client wins, and the
              systems behind our process.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-3 gap-10 gap-x-20 pt-10">
            <TeamServer />
          </div>
        </TeamClient>
      </section>
    </>
  );
};

export default Team;
