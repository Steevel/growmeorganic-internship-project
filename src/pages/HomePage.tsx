import { useContext, FormEvent, ChangeEvent } from "react";
import { Divider, TextField, Typography, Button, Alert } from "@mui/material";
import { Send } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const HomePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [error, setError] = useState(false);
  const { setIsUser } = useContext(AuthContext);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name && email && phoneNumber) {
      setIsUser(true);
      localStorage.setItem(
        "user",
        JSON.stringify({ name, email, phoneNumber })
      );
      navigate("/details");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }

  const handlePhoneNumber = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setPhoneNumber(Number(e.target.value));
      console.log(phoneNumber);
    }
  };

  const paperStyle = {
    padding: "30px 20px",
    width: 300,
    margin: "5% auto",
  };

  return (
    <Grid>
      {error && (
        <Alert severity="error">
          Fill all the fields. Make sure all the details are in the correct
          format
        </Alert>
      )}
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h6" color="inherit" component="div">
          Enter Details
        </Typography>
        <Typography style={{ marginTop: "15px", color: "gray" }}>
          Please fill your details
        </Typography>
        <Divider />
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginTop: "10px" }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Phone Number"
            variant="standard"
            value={phoneNumber}
            // onChange={(e) => setPhoneNumber(e.target.value)}
            onChange={(e) => handlePhoneNumber(e)}
            style={{ marginTop: "10px" }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginTop: "10px" }}
          />
          <Button
            variant="contained"
            type="submit"
            endIcon={<Send />}
            style={{ marginTop: "15px" }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default HomePage;
