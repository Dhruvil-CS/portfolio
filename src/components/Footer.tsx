import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        gap={2}
        mb={2}
      >
        <IconButton 
          aria-label="GitHub" 
          href="https://github.com/Dhruvil-CS"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton 
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/dhruvil-kamleshkumar-kotecha-a627a31b1/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton 
          aria-label="Email"
          href="mailto:kotechadhruvil@gmail.com"
        >
          <EmailIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Dhruvil Kamlehskumar Kotecha. Built with React and Material-UI
      </Typography>
    </Box>
  );
}

export default Footer;