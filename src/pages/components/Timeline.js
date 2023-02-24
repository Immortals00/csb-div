import videos from "./videos.json";
import { Box, Stack, Typography } from "@mui/material";

import Video from "./Video";
function Timeline() {
  return (
    <div>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Video videos={videos} />
        </Box>
      </Stack>
    </div>
  );
}

export default Timeline;
