import { Box, Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../redux/actions/authActions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // const apiUrl = process.env.REACT_APP_LOGIN_API_URL;
    const apiUrl = 'http://127.0.0.1:8000/api/login/';

    console.log("formdata", formData)
    const response = await axios.post(apiUrl, formData);
    // Dispatch login action with form data
    dispatch(loginSuccess(response.data.token, response.data.user));
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;