import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { yellow } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";

export default function ItemCard({ prod }) {
  const navigate = useNavigate();

  const cardClickHandler = (id) => {
    console.log("card clicked");
    navigate(`/product/${prod.id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined" elevation={0}>
      <CardActionArea onClick={cardClickHandler}>
        <CardHeader
          avatar={
            prod.owner.profile_pic ? (
              <Avatar src={`http://192.168.103.120:8000${prod.owner.profile_pic}`} />
            ) : (
              <Avatar sx={{ bgcolor: yellow[400] }} aria-label="recipe">
                R
              </Avatar>
            )
          }
          title={prod.owner.name}
        />
        <CardMedia
          component="img"
          height="194"
          image={`http://192.168.103.120:8000${prod.img}`}
          alt="Paella dish"
        />
        <CardContent>
          <Typography fontWeight={700} variant="body1">
            Rs {prod.price}
          </Typography>
          <Typography variant="body1">{prod.price}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2">Panjim</Typography>
      </CardActions>
    </Card>
  );
}
