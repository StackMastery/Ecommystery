import blog from "../schemas/blog";
import blogCategory from "../schemas/blogCategory";
import competencies from "../schemas/competencies";
import gradient from "../schemas/gradient";
import seo from "../schemas/seo";
import team from "../schemas/team";

export const schema = {
  types: [team, competencies, seo, blog, blogCategory, gradient],
};
