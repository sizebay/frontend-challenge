import { linearProgressClasses, styled, LinearProgress } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 24,
  marginTop: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#5DE290" : "#53db87",
  },
}));

export default function ProgressBar() {
  return <BorderLinearProgress variant="determinate" value={60} />;
}
