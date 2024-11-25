import { Article } from "@/components/Article";
import { feed } from "@/components/Feed";
import fs from "fs";
import type { GetStaticPaths } from "next";
import sizeOf from "image-size";
import { join } from "path";

export default function Post({ content, page, imageSizes }) {
  const feedItem = feed.find((x) => x.page === page);
  if (!feedItem) {
    return <div>404</div>;
  }
  return (
    <Article
      imageSizes={imageSizes}
      title={feedItem.title}
      image={feedItem.image}
      content={content}
    />
  );
}

export async function getStaticProps(context) {
  const content = await fs.readFileSync(
    process.cwd() + `/content/${context.params.name}.md`,
    "utf-8"
  );

  const imageSizes: any = {};

  // A regular expression to iterate on all images in the post
  const iterator = content.matchAll(/\!\[.*]\((.*)\)/g);
  let match: IteratorResult<RegExpMatchArray, any>;
  while (!(match = iterator.next()).done) {
    const [, src] = match.value;
    try {
      // Images are stored in `public`
      const { width, height } = sizeOf(join("public", src));
      imageSizes[src] = { width, height };
    } catch (err) {
      console.error(`Can’t get dimensions for ${src}:`, err);
    }
  }

  return { props: { content, page: context.params.name, imageSizes } };
}

export const getStaticPaths = (async () => {
  return {
    paths: feed.map((x) => ({ params: { name: x.page } })),
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;
