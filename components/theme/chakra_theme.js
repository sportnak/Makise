import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        background: {
          100: "#F4F8FB",
        },
        font: {
          100: "#738A94",
          300: "#15181A",
        },
      },
    },
  },
});

export const system = createSystem(defaultBaseConfig, customConfig);
