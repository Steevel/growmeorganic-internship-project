import { Divider, TextField, Typography, Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";

const HomePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(e: Event) {
    e.preventDefault();

    if (name && email && phoneNumber) {
      console.log("name", name);
      console.log("email", email);
      console.log("phoneNumber", phoneNumber);
      localStorage.setItem("user", JSON.stringify(name, email, phoneNumber));
    } else {
      console.log("Fill all the fields");
    }
  }

  const paperStyle = {
    padding: "30px 20px",
    width: 300,
    margin: "10% auto",
  };

  return (
    <Grid>
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
            onChange={(e) => setPhoneNumber(e.target.value)}
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
