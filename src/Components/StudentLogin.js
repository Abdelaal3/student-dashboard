import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Paper
} from "@mui/material";

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    let tempErrors = { email: '', password: '' };
    let isValid = true;

    if (!email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    } else if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-])/.test(password)) {
      tempErrors.password = "Password must include a letter, number, and symbol";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login successful");
      // Login logic here
    }
  };

  return (
    <center>
      <div className='container'>
        <Paper
          elevation={8}
          sx={{
            width: 350,
            p: 4,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255,255,255,0.4)",
            borderRadius: 4
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Student Login
          </Typography>
          <Typography variant="body2" mb={3}>
            Welcome onboard with us!
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Institute Email ID"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />

            <Box display="flex" justifyContent="flex-end" mt={1}>
              <Link href="#" variant="caption" underline="hover">
                Forgot Password?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#f5a623",
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              Login as Student
            </Button>
          </form>
        </Paper>
      </div>
    </center>
  );
};

export default StudentLogin;
