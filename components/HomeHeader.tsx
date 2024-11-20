import { Box, Center, Text } from "@chakra-ui/react";
import coverImg from "@/public/images/blog-cover.png";
import Image from "next/image";

export function HomeHeader() {
  return (
    <Center
      w="100%"
      bg="#110F12"
      maxH="600px"
      position="relative"
      h="600px"
      sm={{ h: "300px" }}
    >
      <Image
        src={coverImg}
        fill
        alt="Cover Image"
        objectFit="contain"
        objectPosition="bottom"
      />
      <Box position={"absolute"} zIndex={1}>
        <Text
          textAlign={"center"}
          fontSize="36px"
          fontWeight={700}
          color="white"
        >
          Michael Nakayama
        </Text>
        <Text color="white" fontWeight={200} fontSize="18px">
          Developer / Manager / Designer / Entreprenuer
        </Text>
      </Box>
    </Center>
  );
}
