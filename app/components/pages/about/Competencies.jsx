import CompetenciesClient from "./CompetenciesClient";
import CompetenciesServer from "./CompetenciesServer";

const Competencies = () => {
  return (
    <>
      <section className="section relative z-[999]">
        <CompetenciesClient>
          <div className="w-full text-start flex justify-start">
            <h2 className="text-4xl md:text-5xl font-semibold ">
              Our Core{" "}
              <span className="text-transparent font-serif italic font-extralight bg-clip-text bg-gradient-to-r from-pM to-pY">
                Competencies
              </span>
            </h2>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10">
            <CompetenciesServer />
          </div>
        </CompetenciesClient>
      </section>
    </>
  );
};

export default Competencies;
