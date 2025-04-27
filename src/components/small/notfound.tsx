import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Notfound from "../../assets/notfound.png";
export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f9fafb",
        textAlign: "center",
        p: 4,
      }}
    >
      {/* SVG Illustration */}
      <Box component={motion.div} whileHover={{ scale: 1.05 }} sx={{ mb: 4 }}>
        <img
          src={Notfound}
          alt="404 Not Found"
          style={{ width: "300px", maxWidth: "80%" }}
        />
      </Box>

      {/* Text */}
      <Typography
        variant="h3"
        component={motion.h1}
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </Typography>

      {/* Button */}
      <Button
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate("/")}
      >
        Go Home
      </Button>
    </Box>
  );
}
