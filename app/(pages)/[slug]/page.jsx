import NotFound from "@/app/not-found";
import { getDynamicPageData } from "@/controllers/frontend/page.controller";
import PageContent from "./PageContent";

const DynamicPages = async ({ params: { slug } }) => {
  const page = await getDynamicPageData(slug);

  if (!page?.slug) {
    return <NotFound />;
  }

  return (
    <section className="flex justify-center">
      <div className="w-full max-w-[1240px] py-40">
        <PageContent page={page} />
      </div>
    </section>
  );
};

export default DynamicPages;
