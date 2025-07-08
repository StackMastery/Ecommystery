import { client } from "@/lib/sanity";
import Header from "./Header";

const HeaderServer = async () => {
  const baseQuery = `*[_type == "service"] | order(order asc, _createdAt asc){
    _id,
    title,
    slug,
    image,
    iGrad,
    "imageUrl": image.asset->url,
    type->{title},
    order
    }`;

  const servicesRes = await client.fetch(baseQuery);

  const services = servicesRes.sort((a, b) => a.order - b.order);

  return (
    <>
      <Header services={services} />
    </>
  );
};

export default HeaderServer;
