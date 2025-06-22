import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const allPosts = await getCollection("blog");

  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `${context.site}/posts/${post.id}`,
      pubDate: post.data.pubDate,
    })),
    customData: `<language>en-us</language>`,
  });
}
