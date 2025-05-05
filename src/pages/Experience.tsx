import React from 'react';
import { Box, Typography, Button, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRightIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    company: "Ericsson Canada Inc.",
    logo: "https://github.com/Dhruvil-CS/General/blob/main/Ericsson-Logo.wine.png?raw=true",
    role: "Software Developer Co-op",
    duration: "May 2023 - Aug 2024",
    points: [
      "Developed automated anomaly detection system for network logs",
      "Implemented cloud migration strategy using AWS S3",
      "Optimized CI/CD pipelines with GitHub Actions",
      "Created real-time monitoring dashboards with OpenSearch"
    ]
  }
];

const fadeInStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

const Experience: React.FC = () => {
  return (
    <div className="page-container">
      <Box
        py={10}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '90vh',
          px: 2,
          background: 'radial-gradient(circle at top left, #111827 0%, #1f2937 100%)',
        }}
      >
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
        {/* Parallax Background Icons */}
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

        {/* Animated Container */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          sx={{
            maxWidth: 1200,
            mx: 'auto',
            position: 'relative',
            zIndex: 1
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2rem', md: '3.5rem' },
              letterSpacing: '-0.05em',
              mb: 8,
              background: 'linear-gradient(45deg, #4F46E5 20%, #EC4899 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}
          >
            My Professional Journey
          </Typography>

          <Box component={motion.div} variants={fadeInStagger} initial="hidden" animate="show">
            {experiences.map((exp, index) => (
              <Box
                key={index}
                component={motion.div}
                variants={fadeItem}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                sx={{
                  mb: 8,
                  p: 5,
                  borderRadius: 6,
                  bgcolor: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar
                    src={exp.logo}
                    alt={exp.company}
                    sx={{ width: 56, height: 56, bgcolor: 'white' }}
                  />
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#e5e7eb' }}>
                    {exp.company}
                  </Typography>
                </Box>

                {/* Chips: Role and Duration */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Chip
                      label={exp.role}
                      sx={{
                        fontWeight: 600,
                        background: 'linear-gradient(90deg, #6366F1, #8B5CF6)',
                        color: 'white',
                      }}
                    />
                    <Chip
                      label={exp.duration}
                      sx={{
                        fontWeight: 600,
                        background: 'linear-gradient(90deg, #6366F1, #8B5CF6)',
                        color: 'white',
                      }}
                    />
                  </Box>
                </Box>
                <motion.ul
                  variants={fadeInStagger}
                  style={{
                    paddingLeft: 0,
                    listStyle: 'none',
                    marginBottom: '2rem',
                  }}
                >
                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      variants={fadeItem}
                      style={{
                        position: 'relative',
                        paddingLeft: '2rem',
                        marginBottom: '1rem',
                        color: '#e5e7eb',
                        fontSize: '1rem'
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: '#8B5CF6',
                        }}
                      >
                        ▹
                      </span>
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>

                <Box sx={{ textAlign: 'center' }}>
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
                      endIcon={<ArrowRightIcon className="h-5 w-5" />}
                    >
                      See More Details
                    </Button>
                  </motion.div>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Experience;
