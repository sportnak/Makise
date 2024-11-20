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
  const isWide = units > 1;
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
        h={isWide ? "300px" : "475px"}
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
    page: "rust_avr",
    title: "Rust on Arduino Uno",
    topic: "RUST",
    snippet:
      "Rust focuses on balancing ease of use for developers with being a power and fast low level programming language.",
    length: "3 MIN READ",
    units: 3,
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
