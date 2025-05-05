import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CloudIcon, CpuChipIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <Box
        py={10}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          px: 2,
          background: 'radial-gradient(circle at top left, #111827 0%, #1f2937 100%)',
        }}
      >
        {/* Parallax Background Icons (like Experience page) */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              top: `${20 + i * 10}%`,
              left: `${10 + i * 20}%`,
              opacity: 0.05 + i * 0.05,
              zIndex: 0,
            }}
          >
            <BriefcaseIcon className="h-64 w-64 text-purple-400" />
          </motion.div>
        ))}

        {/* Profile Image Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: { md: 300 },
            maxWidth: { md: 400 },
            zIndex: 1
          }}
        >
          <div className="relative group" style={{ width: '100%', maxWidth: 350 }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(45deg, #4F46E5 0%, #EC4899 100%)',
                filter: 'blur(20px)',
                opacity: 0.4,
                zIndex: 0,
              }}
            />
            <motion.img
              src="/profile.jpeg"
              alt="Dhruvil Kotecha"
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                border: '4px solid rgba(255,255,255,0.1)',
                boxShadow: '6px 6px 20px rgba(0,0,0,0.1)',
                zIndex: 1,
                borderRadius: 12
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </div>
        </Box>

        {/* Text Content Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            flex: 1,
            maxWidth: 600,
            textAlign: { xs: 'center', md: 'left' },
            zIndex: 1
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.05em',
              mb: 2,
              background: 'linear-gradient(45deg, #4F46E5 20%, #EC4899 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Dhruvil Kotecha
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: '#e5e7eb'
            }}
          >
            Software Developer | Data Enthusiast | Lifelong Learner
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 4, color: '#d1d5db', fontSize: '1rem' }}
          >
            Passionate about building intelligent systems and meaningful user experiences.
            From crafting efficient APIs to analyzing complex datasets—I'm here to create value.
          </Typography>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(90deg, #8B5CF6, #EC4899)',
                color: 'white',
                fontWeight: 600,
                borderRadius: 999,
                px: 5,
                py: 1.5,
                textTransform: 'none',
                boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
              }}
              component={Link}
              to="/experience"
            >
              Explore My Work
            </Button>
          </motion.div>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
