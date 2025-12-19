import { buttonContent } from "@/data/siteData";
import { Box, Flex } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../client/NavBar";

export default function Layout() {
  const location = useLocation();

  return (
    <Flex direction="column" minH="100vh">
      <NavBar buttonContent={buttonContent} />

      <Box flex="1" p={6} className="lora" letterSpacing="wide">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </Box>
    </Flex>
  );
}
