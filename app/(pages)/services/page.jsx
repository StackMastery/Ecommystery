import Services from "@/app/components/pages/Home/Services";
import ServicesClientPage from "./ServiceClient";

const ServicesPage = () => {
  return (
    <>
      <ServicesClientPage>
        <Services titleDesShow={false} className=" -my-20" />
      </ServicesClientPage>
    </>
  );
};

export default ServicesPage;
