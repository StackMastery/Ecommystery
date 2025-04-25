export const HeaderData = {
  navs: [
    {
      path: "/",
      element: "Home",
    },
    {
      path: "/about-us",
      element: "About us",
    },
    {
      element: "Services",
      childrens: [
        {
          path: "/web-dev",
          element: "Web Development",
        },
        {
          path: "/ui-ux",
          element: "UI UX",
        },
      ],
    },
    {
      path: "/blog",
      element: "Blog",
    },
    {
      path: "/contact",
      element: "Contact",
    },
  ],
};
