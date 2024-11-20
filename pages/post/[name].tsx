import { Article } from "@/components/Article";
import { feed } from "@/components/Feed";
import fs from "fs";
import type { GetStaticPaths } from "next";

export default function Post({ content, page }) {
  const feedItem = feed.find((x) => x.page === page);
  return (
    <Article title={feedItem.title} image={feedItem.image} content={content} />
  );
}

export async function getStaticProps(context) {
  const content = await fs.readFileSync(
    process.cwd() + `/content/${context.params.name}.md`,
    "utf-8"
  );

  return { props: { content, page: context.params.name } };
}

export const getStaticPaths = (async () => {
  return {
    paths: feed.map((x) => ({ params: { name: x.page } })),
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;
