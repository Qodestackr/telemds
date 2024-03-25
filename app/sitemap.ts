import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://afyamed.com",
      priority: 1,
    },
    {
      url: "https://afyamed.com/blog",
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}

// https://www.youtube.com/watch?v=w29phXIag-4

// https://lev.engineer/blog/how-to-create-a-dynamic-sitemap-for-your-next-js-14-blog-a-comprehensive-guide-to-boost-seo
