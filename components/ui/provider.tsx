"use client"

import { ChakraProvider } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import { system } from '@/components/theme/chakra_theme'
import { ThemeProvider } from "next-themes"

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ColorModeProvider {...props} />
      </ThemeProvider>
    </ChakraProvider>
  )
}
