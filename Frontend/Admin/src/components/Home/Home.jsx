import {
  Box,
  Card,
  CardActionArea,
  Container,
  Typography,
} from "@mui/material";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()


  return (
    <Container maxWidth="xl" sx={{ margin: "2rem 0" }}>
      <Typography variant="h4">Welcome!</Typography>
      <Typography variant="h5" sx={{ margin: "2rem 0" }}>
        Select your view:
      </Typography>
      <Box sx={{display: "flex", justifyContent: "center", gap: 10}}>
        <Card className={styles.card}>
          <CardActionArea  className={styles.cardAction} onClick={() => navigate("/newparticipants")}>
            <Typography fontSize="1.5rem" variant="subtitle1" className={styles.cardText}>
              View college participants{" "}
            </Typography>
          </CardActionArea>
        </Card>
        <Card className={styles.card}>
          <CardActionArea  className={styles.cardAction} onClick={() => navigate("/participants")}>
            <Typography fontSize="1.5rem" variant="subtitle1" className={styles.cardText}>View event participants</Typography>
          </CardActionArea>
        </Card>
      </Box>
    </Container>
  );
};
export default Home;
