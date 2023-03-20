import React from "react";
import Typography from "@material-ui/core/Typography";
import MaterialCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardOverflow from "@mui/material/CardOverflow";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@material-ui/core/styles";

export const Card = ({
  name,
  slug,
  imageUrl,
  numberOwners,
  volumeOneDay: { amount: volumeAmount, volumeUnit },
  floorPrice: { amount, unit },
}) => {
  const classes = useStyles();

  return (
    <MaterialCard component="li" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageUrl} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Divider />
          <CardOverflow
            variant="soft"
            sx={{
              display: "flex",
              gap: 1.5,
              py: 1.5,
              px: "var(--Card-padding)",
              bgcolor: "background.level1",
            }}
          >
            <Typography
              level="body3"
              sx={{ fontWeight: "md", color: "text.secondary" }}
            >
              Owners: {numberOwners}
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              level="body3"
              sx={{ fontWeight: "md", color: "text.secondary" }}
            >
              Volume: {volumeAmount} {volumeUnit}
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              level="body3"
              sx={{ fontWeight: "md", color: "text.secondary" }}
            >
              Price: {amount} {unit}
            </Typography>
          </CardOverflow>
        </CardContent>
      </CardActionArea>
    </MaterialCard>
  );
};

const useStyles = makeStyles((theme) => ({
  boxWrapper: {
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
