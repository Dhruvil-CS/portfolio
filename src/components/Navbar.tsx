import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar
  position="static"
  sx={{
    background: 'linear-gradient(90deg, #8B5CF6,rgb(144, 62, 103))',
  }}
>
      <Toolbar>
        <Typography variant="h6" sx={{fontWeight: 800, flexGrow: 1 }}>
          Dhruvil Kotecha
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{fontWeight: 800,textTransform: 'none',fontSize: '1rem'}}>Home</Button>
        <Button color="inherit" component={Link} to="/experience" sx={{fontWeight: 800,textTransform: 'none',fontSize: '1rem'}}>Experience</Button>
        <Button color="inherit" component={Link} to="/academics" sx={{fontWeight: 800,textTransform: 'none',fontSize: '1rem'}}>Academics</Button>
        <Button color="inherit" component={Link} to="/projects" sx={{fontWeight: 800,textTransform: 'none',fontSize: '1rem'}}>Projects</Button>
        <Button color="inherit" component={Link} to="/aboutme" sx={{fontWeight: 800,textTransform: 'none',fontSize: '1rem'}}>About Me</Button>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;