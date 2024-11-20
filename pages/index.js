import { promises as fs } from "fs";
import { HomeHeader } from "@/components/HomeHeader";
import { Feed } from "@/components/Feed";
import { Box } from "@chakra-ui/react";

export default function Home(props) {
  return (
    <Box background="background.100">
      <HomeHeader />
      <Feed files={props.files} />
    </Box>
  );
}

export async function getStaticProps() {
  const files = await fs.readdir(process.cwd() + "/content/", "utf8");
  return { props: { files } };
}
