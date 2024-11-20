import { VStack, Text, Box } from "@chakra-ui/react";
import { FeedItem } from "./Feed";
import Image from "next/image";
import Markdown from "react-markdown";

export function Article({
  title,
  image,
  content,
}: Partial<FeedItem> & { content: string }) {
  return (
    <VStack>
      <Box position={"fixed"} zIndex={1} top={0} w="100%" bg="#060606">
        <Text
          ml="40px"
          cursor="pointer"
          onClick={() => (window.location.href = "/")}
        >
          Home
        </Text>
      </Box>
      <VStack mt={60} w="100%" px={"15%"}>
        <Text color="black" fontSize="40px">
          {title}
        </Text>
        <Box
          borderRadius={6}
          overflow={"hidden"}
          position="relative"
          w="100%"
          h="600px"
        >
          <Image src={image} alt={"cover"} fill objectFit="cover" />
        </Box>
        <Box
          bg="white"
          borderRadius={6}
          px={"15%"}
          py={20}
          w={"80%"}
          mt={-80}
          zIndex={1}
        >
          <Box
            lineHeight={"35.2px"}
            fontSize="22px"
            color="#3C484E"
            fontFamily={"Georgia"}
          >
            <Markdown>{content}</Markdown>
          </Box>
        </Box>
      </VStack>
    </VStack>
  );
}
