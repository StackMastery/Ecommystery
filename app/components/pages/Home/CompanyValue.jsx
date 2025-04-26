import { getAllCompanyValuesData } from "@/controllers/frontend/company.controller";
import {
  CompanyValueCard,
  CompanyValueGredBg,
  CompanyValuesImageTitleDes,
} from "./CompanyValueClient";

const CompanyValue = async () => {
  const { values } = await getAllCompanyValuesData();

  return (
    <>
      <section className="section py-20 w-full flex-col items-center max-w-full">
        <div className="flex w-full justify-between absolute max-w-[1440px]">
          <CompanyValueGredBg />
        </div>
        <div className="w-full max-w-[1440px] px-5 flex flex-col lg:flex-row md:gap-10 justify-between z-50">
          <CompanyValuesImageTitleDes />
          <div className="w-full xl:w-8/12 grid grid-cols-12 gap-5 -mt-2">
            {values.map((value, index) => (
              <CompanyValueCard
                values={values}
                value={value}
                key={`value-${index}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyValue;
