import React from "react";
import { Stack, Box } from "@mui/material";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Video = ({ video }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {
            <Card
              sx={{
                width: { xs: "100%", sm: "358px", md: "320px" },
                boxShadow: "none",
                borderRadius: 0
              }}
            >
              <CardMedia
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                alt={snippet?.title}
                sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
              />
              <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                  {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
                <Typography variant="subtitle2" color="gray">
                  {snippet?.channelTitle || demoChannelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </CardContent>
            </Card>
          }
        </Box>
      ))}
    </Stack>
  );
};

export default Video;
