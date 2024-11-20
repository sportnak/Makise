import { Article } from "@/components/Article";
import fs from "fs";

export default function AboutMe({ content }) {
  return (
    <Article
      title={"About Me"}
      image={"/images/built-by.png"}
      content={content}
    />
  );
}

export async function getStaticProps() {
  const content = await fs.readFileSync(
    process.cwd() + "/content/about_me.md",
    "utf-8"
  );
  console.log("foobar", content);
  return { props: { content } };
}
