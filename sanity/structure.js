import {
  BookOpen,
  Hotel,
  Layers,
  List,
  Search,
  Settings,
  Sliders,
  Star,
} from "lucide-react";
import { FaParagraph } from "react-icons/fa6";
import { MdGroup, MdAssignment } from "react-icons/md";

export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About")
        .icon(Hotel)
        .child(
          S.list()
            .title("About Sections")
            .items([
              S.listItem()
                .title("Team")
                .icon(MdGroup)
                .child(S.documentTypeList("teams").title("Teams")),

              S.listItem()
                .title("Competencies")
                .icon(MdAssignment)
                .child(
                  S.documentTypeList("competencies").title("Competencies")
                ),
            ])
        ),

      S.listItem()
        .title("SEO")
        .icon(Search)
        .child(S.documentTypeList("seo").title("SEO")),

      S.listItem()
        .title("Blog")
        .icon(FaParagraph)
        .child(
          S.list()
            .title("Blog Content")
            .items([
              S.listItem()
                .title("Posts")
                .icon(BookOpen)
                .child(S.documentTypeList("blog").title("Posts")),

              S.listItem()
                .title("Categories")
                .icon(List)
                .child(S.documentTypeList("categoryBlog").title("Categories")),
            ])
        ),

      S.listItem()
        .title("Services")
        .child(
          S.list()
            .title("Blog Content")
            .items([
              S.listItem()
                .title("Services")
                .icon(BookOpen)
                .child(S.documentTypeList("service").title("Services")),

              S.listItem()
                .title("Services Types")
                .icon(List)
                .child(
                  S.documentTypeList("servicesType").title("Services Type")
                ),
            ])
        ),
      S.listItem()
        .title("Reviews")
        .icon(Star)
        .child(S.documentTypeList("review").title("Reviews")),

      S.listItem()
        .title("Marquee")
        .icon(Sliders)
        .child(S.documentTypeList("marquee").title("Maruquee")),

      S.listItem()
        .title("Pages")
        .icon(Layers)
        .child(S.documentTypeList("page").title("Pages")),
    ]);
