import { client } from "@/lib/sanity";
import ServicesClient, { ServicesClientDiv } from "./ServicesClient";
import ServiceCard from "./ServiceCards";

const Services = async ({ length, titleDesShow = true, className = "" }) => {
  const query = `*[_type == "service"] | order(_createdAt asc){
  _id,
  title,
  slug,
  description,
  cGrad,
  iGrad,
  "imageUrl": image.asset->url,
  type->{_id, title}
}${length ? `[0...${length}]` : ""}`;

  const services = await client.fetch(query);

  return (
    <>
      <section className={`section  ${className}`}>
        <div className="max-w-[1440px] w-full -mt-20 px-5">
          <ServicesClient titleDesShow={titleDesShow} />
          <ServicesClientDiv>
            {services.map((service, index) => (
              <ServiceCard index={index} key={service._id} service={service} />
            ))}
          </ServicesClientDiv>
        </div>
      </section>
    </>
  );
};

export default Services;
