import { Box, LinearProgress, linearProgressClasses } from "@mui/material";
import styled from "styled-components";
import imageGif from "../../assets/gifConfete.gif";
import { Tasks } from "../../App";
import { ProgressBarProps } from "./Types";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 79,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#E4E4E4",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#5DE290",
  },
}));

export const ProgressBar: React.FC<ProgressBarProps> = ({ tasks }) => {
  const itemsDone = tasks.filter((item: Tasks) => {
    return item.done;
  });

  const result = (itemsDone.length / tasks.length) * 100;

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {result === 100 ? (
        <img
          src={imageGif}
          style={{
            position: "absolute",
            top: -100,
            right: 0,
            zIndex: 1,
            width: 150,
          }}
        />
      ) : null}
      <BorderLinearProgress
        variant="determinate"
        value={result || 0}
        style={{ height: 24, margin: "24px 0px" }}
      />
    </Box>
  );
};
