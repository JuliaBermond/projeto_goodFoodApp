import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import ActionBar from "../admin/ActionBar";

export default function AdminLayout() {
  return (
    <Grid
      h="100vh"
      w="100vw"
      templateColumns={{
        base: "1fr",
        md: "240px 1fr", 
      }}
      templateRows={{
        base: "auto 1fr", 
        md: "1fr", 
      }}
      color={"gray.900"}
    >
      <GridItem
        bg="blackAlpha.400"
        minH="100vh"
        position={{ base: "sticky", md: "static" }}
        top="0"
        zIndex="10"
      >
        <ActionBar />
      </GridItem>

      <GridItem bg="white">
        <Box p={{ base: 4, md: 6 }} h="100%">
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  );
}
