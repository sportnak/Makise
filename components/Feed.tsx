import {
  Flex,
  Text,
  Box,
  GridItem,
  Grid,
  VStack,
  Span,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";

export function Feed({ files }) {
  return (
    <Box mt={-80} position={"absolute"} px="20%">
      <HStack>
        <Text
          fontWeight={300}
          cursor="pointer"
          onClick={() => (window.location.href = "/")}
        >
          HOME
        </Text>
        <Text>|</Text>
        <Text
          cursor="pointer"
          fontWeight={300}
          onClick={() => (window.location.href = "/about-me")}
        >
          ABOUT ME
        </Text>
      </HStack>
      <Grid templateColumns="repeat(3, 1fr)" gap={24} w="100%">
        {feed.map((x) => (
          <Item {...x} />
        ))}
      </Grid>
    </Box>
  );
}

function Item({ title, topic, units, image, snippet, length, page }: FeedItem) {
  const isWide = units === 3;
  const subFlex = isWide ? 0 : 1;
  return (
    <GridItem colSpan={units}>
      <Flex
        bg="white"
        boxShadow={"md"}
        cursor={"pointer"}
        onClick={() => (window.location.href = `/post/${page}`)}
        flexDir={isWide ? "row" : "column"}
        borderRadius={6}
        overflow={"hidden"}
        h={isWide ? "200px" : "375px"}
        transition="transform 0.4s, box-shadow 0.2s"
        _hover={{
          transform: "scale(1.02)",
          boxShadow: "lg",
        }}
      >
        <Box
          position={"relative"}
          w={isWide ? "80%" : "100%"}
          h={isWide ? "100%" : "200px"}
        >
          <Image src={image} alt={"cover"} fill objectFit="cover" />
        </Box>
        <VStack h="100%" py={7} px={20} justifyContent={"space-between"}>
          <Flex flexDir={"column"} alignItems={"flex-start"}>
            <Text
              letterSpacing={1}
              mb={4}
              flex={subFlex}
              fontWeight={300}
              fontSize={12}
              color="#738A94"
            >
              {topic}
            </Text>
            <Text
              m={0}
              mb={8}
              flex={subFlex}
              fontWeight={500}
              fontSize={20}
              color="black"
            >
              {title}
            </Text>
            <Text
              m={0}
              flex={subFlex}
              lineHeight={2}
              fontFamily={"Georgia"}
              fontWeight={300}
              fontSize={14}
              color="#15181A"
            >
              {snippet}
            </Text>
          </Flex>
          <Text color="#738A94" fontSize={12} w="100%" textAlign={"right"}>
            {length}
          </Text>
        </VStack>
      </Flex>
    </GridItem>
  );
}

export interface FeedItem {
  title: string;
  topic: string;
  snippet: string;
  length: string;
  units: number;
  page: string;
  image: string;
}

export const feed: FeedItem[] = [
  {
    page: "questions_for_interviewers",
    title: "On Interviewing",
    topic: "JOB HUNTING",
    snippet:
      "Most non-coding interviews end up being broken into two parts - a series of STAR questions and an opportunity for you to ask questions. I've put together a list of a few of the questions I commonly see and some of my favorites to ask the interviewer.",
    length: "5 MIN READ (12/11/2024)",
    units: 1,
    image: "/images/questions.jpg",
  },
  {
    page: "random_nits",
    title: "Some Random Nits",
    topic: "CODE STYLE",
    snippet:
      "I don't think of my self as particularly nit picky, but there are a few things that I think are easy wins that can help you save time in the long run. Let's go over a couple of them.",
    length: "5 MIN READ (12/11/2024)",
    units: 2,
    image: "/images/nit.png",
  },
  {
    page: "who_you_know",
    title: "Who do you know?",
    topic: "JOB HUNTING",
    snippet:
      "If you're looking for the short version, this is just me ranting about how the job search process is never about how good you are on paper. It's about who you know.",
    length: "2 MIN READ (12/12/2024)",
    units: 2,
    image: "/images/network.png",
  },
  {
    page: "rfc",
    title: "Evaluating Random Forest Classifiers",
    topic: "RFC",
    snippet:
      "In the current AI-driven landscape, much of the buzz revolves around large language models (LLMs). While these are powerful tools, they’re not the only way to build AI-enhanced products",
    length: "3 MIN READ (11/25/2024)",
    units: 1,
    image: "/images/tree.png",
  },
  {
    page: "resumes",
    title: "Updating My Resume",
    topic: "RESUMES",
    snippet:
      "So I decided to update my resume recently and now we can get some A/B testing done on resume formats!",
    length: "3 MIN READ",
    units: 1,
    image: "/images/resume.png",
  },
  {
    page: "rust_avr",
    title: "Rust on Arduino Uno",
    topic: "RUST",
    snippet:
      "Rust focuses on balancing ease of use for developers with being a power and fast low level programming language.",
    length: "3 MIN READ",
    units: 1,
    image: "/images/arduino.png",
  },
  {
    page: "golang_reading",
    title: "What Makes Go Special?",
    topic: "GOLANG",
    snippet:
      "So let's talk about Go. Learning about this language is incredibly valuable because it took the experiences of a large scale organization (Google) and identified key tenets of good software engineering.",
    length: "3 MIN READ",
    units: 1,
    image: "/images/built.png",
  },
  {
    page: "golang_init",
    title: "Foray into Go",
    topic: "GOLANG",
    snippet:
      "AKA how many projects can I work on concurrently? 🙃 I don't know anyone who doesn't go through phases.",
    length: "2 MIN READ",
    units: 1,
    image: "/images/writing.png",
  },
  {
    page: "yarn-resolutions",
    title: "Yarn Resolutions",
    topic: "JAVASCRIPT",
    snippet:
      "TIL about yarn resolutions. Phew it's early. Resolutions are a relatively simple concept that allows you to manage sub dependencies of a project. ",
    length: "1 MIN READ",
    units: 1,
    image: "/images/advanced.png",
  },
];
