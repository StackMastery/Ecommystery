import { Hotel, Search } from "lucide-react";
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
                .child(S.documentTypeList("teams").title("Teams")), // Added teams

              S.listItem()
                .title("Competencies")
                .icon(MdAssignment)
                .child(
                  S.documentTypeList("competencies").title("Competencies")
                ), // Added competencies
            ])
        ),

      S.divider(),
      S.listItem()
        .title("SEO")
        .icon(Search)
        .child(S.documentTypeList("seo").title("SEO")),

      S.divider(),
    ]);
