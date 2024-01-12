import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useReducer } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const defaultTheme = createTheme();

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  date: "",
  slot: "",
  category: "",
};

export default function Appointment() {
  function reducer(state, action) {
    switch (action.type) {
      case "CHANGE": {
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [showPaymentModal, setShowPaymentModal] = React.useState(false);
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);
  const navigate = useNavigate()

  function postData() {
    console.log(state);
    fetch(`https://fitness-mkwg.onrender.com/login`, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("response", res);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    postData();
    console.log("Form submitted:", state);
    setShowPaymentModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      dispatch({
        type: "CHANGE",
        payload: { name, value },
      });
    } else {
      dispatch({
        type: "CHANGE",
        payload: { name, value },
      });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const { firstName, lastName, email, date, slot, category } = state;

  const handlePaymentSubmit = () => {
    setPaymentSuccess(true);
  };

  if (paymentSuccess) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1000,
    });

    navigate("/")

  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" data-aos="fade-up">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            User Details
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  value={firstName}
                  onChange={handleChange}
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="date"
                  label="Select Date"
                  type="date"
                  fullWidth
                  value={state.date}
                  onChange={(e) => handleChange(e)} // Update the handleChange function
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel id="slot-label">Select Slot</InputLabel>
                <Select
                  labelId="slot-label"
                  id="slot"
                  fullWidth
                  name="slot"
                  value={slot}
                  onChange={handleChange}
                >
                  <MenuItem value="morning">Morning</MenuItem>
                  <MenuItem value="afternoon">Afternoon</MenuItem>
                  <MenuItem value="evening">Evening</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="category-label">Select Category</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  fullWidth
                  name="category"
                  value={category}
                  onChange={handleChange}
                >
                  <MenuItem value="Gym Trainer">Gym Trainer</MenuItem>
                  <MenuItem value="Yoga Trainer">Yoga Trainer</MenuItem>
                  <MenuItem value="Dance Trainer">Dance Trainer</MenuItem>
                  <MenuItem value="Cardio Trainer">Cardio Trainer</MenuItem>
                  <MenuItem value="Fitness Nutritionist">
                    Fitness Nutritionist
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Pay Now
            </Button>
          </Box>
        </Box>
      </Container>

      {/* ///////////////////////////////////////////////////////// */}
      {/* Payment Modal */}
      <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Payment form fields */}
          <Form onSubmit={handlePaymentSubmit}>
            <Form.Group className="mb-3" controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="Enter card number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter state" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="cvv">
              <Form.Label>CVV</Form.Label>
              <Form.Control type="text" placeholder="Enter CVV" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="expiry">
              <Form.Label>Expiry</Form.Label>
              <Form.Control type="text" placeholder="Enter expiry date" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Payment
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </ThemeProvider>
  );
}
