export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6344b723baf6a61ccd43853f",
                  title: "Sanity Studio",
                  name: "luz-blog-studio",
                  apiId: "d4f15693-b710-41b2-9f32-790dd9cf7279",
                },
                {
                  buildHookId: "6344b72331e7741c8e4026df",
                  title: "Blog Website",
                  name: "luz-blog",
                  apiId: "f46cc6b5-cc66-485f-84f3-e8e78873dcaa",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/luzaracelydls/luz-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://luz-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
