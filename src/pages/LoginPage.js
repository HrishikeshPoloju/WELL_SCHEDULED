import React, { useState } from "react";
import { signInWithGoogle, signInWithEmail, signUpWithEmail, logout } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { Button, TextField, Typography, Box } from "@mui/material";

const LoginPage = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={5}>
      <Typography variant="h4">Login</Typography>
      
      {user ? (
        <>
          <Typography variant="h6">Welcome, {user.displayName || user.email}</Typography>
          <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
        </>
      ) : (
        <>
          <Button variant="contained" color="primary" onClick={signInWithGoogle}>Sign in with Google</Button>

          <TextField label="Email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="Password" variant="outlined" fullWidth type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          
          <Button variant="contained" color="primary" onClick={() => signInWithEmail(email, password)}>Login with Email</Button>
          <Button variant="outlined" color="primary" onClick={() => signUpWithEmail(email, password)}>Sign Up</Button>
        </>
      )}
    </Box>
  );
};

export default LoginPage;
