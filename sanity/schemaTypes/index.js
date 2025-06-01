import faqBlock from "../schemas/blocks/faqBlock";
import processGroup from "../schemas/blocks/processGroup";
import serviceContent from "../schemas/blocks/serviceContent";
import serviceData from "../schemas/blocks/serviceData";
import blog from "../schemas/blog";
import blogCategory from "../schemas/blogCategory";
import competencies from "../schemas/competencies";
import marquee from "../schemas/marquee";
import reviews from "../schemas/reviews";
import seo from "../schemas/seo";
import services from "../schemas/services";
import serviceType from "../schemas/serviceType";
import team from "../schemas/team";

export const schema = {
  types: [
    team,
    competencies,
    seo,
    blog,
    blogCategory,
    services,
    serviceType,
    serviceContent,
    processGroup,
    serviceData,
    reviews,
    marquee,
    faqBlock,
  ],
};
