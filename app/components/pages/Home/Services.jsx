import { client } from "@/lib/sanity";
import ServicesClient, { ServicesClientDiv } from "./ServicesClient";
import ServiceCard from "./ServiceCards";

const Services = async ({ length, titleDesShow = true, className = "" }) => {
  const baseQuery = `*[_type == "service"] | order(order asc, _createdAt asc){
  _id,
  title,
  slug,
  description,
  cGrad,
  iGrad,
  "imageUrl": image.asset->url,
  order,
  type->{_id, title}
}`;

  const query = length ? `${baseQuery}[0...${length}]` : baseQuery;

  const servicesRe = await client.fetch(query);

  const services = servicesRe.sort((a, b) => a.order - b.order);

  return (
    <>
      <section className={`section   ${className}`}>
        <div className="max-w-[1440px] w-full -mt-20 px-5">
          <ServicesClient titleDesShow={titleDesShow} />
          <ServicesClientDiv>
            {services.map((service, index) => (
              <ServiceCard
                length={services?.length || 0}
                index={index}
                key={service._id}
                service={service}
              />
            ))}
          </ServicesClientDiv>
        </div>
      </section>
    </>
  );
};

export default Services;
