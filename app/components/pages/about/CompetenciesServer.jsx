import { competenciesData } from "@/controllers/frontend/about.controller";
import { CompetenciesCard } from "./CompetenciesClient";

const CompetenciesServer = async () => {
  const data = await competenciesData();

  return (
    <>
      {data &&
        data.map((com, index) => (
          <CompetenciesCard data={com} key={`competenciesCard-${index}`} />
        ))}
    </>
  );
};

export default CompetenciesServer;
