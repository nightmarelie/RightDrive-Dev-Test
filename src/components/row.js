import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardMedia from "@mui/material/CardMedia";

export const Row = ({
  name,
  slug,
  imageUrl,
  numberOwners,
  volumeOneDay: { amount: volumeAmount, volumeUnit },
  floorPrice: { amount, unit },
}) => {
  const classes = useStyles();

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 320,
        gap: 2,
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <CardMedia component="img" height="40" image={imageUrl} alt={name} />
      <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          {name}
        </Typography>
        <Typography fontSize="sm" mb={1}>
          Owners {numberOwners}
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: "none" }}
        >
          Price: {amount} {unit}
        </Chip>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: "none" }}
        >
          Volume: {volumeAmount} {volumeUnit}
        </Chip>
      </div>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  rowWrapper: {
    border: "2px solid #3D3D3D",
    borderRadius: 4,
    display: "grid",
    padding: 5,
    rowGap: 3,
    sx: {
      ":hover": {
        borderColor: "#7D7D7D",
        transform: "scale(1.04)",
      },
      backgroundColor: theme.palette.background.paper,
      transition: "all 0.2s ease-in-out 0s",
    },
  },
}));
