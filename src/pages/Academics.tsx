import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const academics = [
  {
    degree: "Bachelor of Engineering - Computer Science",
    institution: "Concordia University, Montreal",
    duration: "Jan 2022 – Dec 2024",
    highlights: [
      "Specialized in Data Science and Machine Learning",
      "CGPA: 3.9 / 4.3",
      "Relevant Coursework: Machine Learning, DBMS, Operating Systems, Data Structures, Probability & Stats"
    ]
  }
];

const fadeInStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};

const fadeItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

const Academics: React.FC = () => {
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
            <AcademicCapIcon className="h-64 w-64 text-purple-400" />
          </motion.div>
        ))}

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          sx={{
            maxWidth: 1000,
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
            Academic Background
          </Typography>

          <Box component={motion.div} variants={fadeInStagger} initial="hidden" animate="show">
            {academics.map((item, index) => (
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
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#e5e7eb', mb: 1 }}>
                  {item.degree}
                </Typography>
                <Chip
                  label={item.institution}
                  sx={{
                    mr: 1,
                    fontWeight: 600,
                    background: 'linear-gradient(90deg, #6366F1, #8B5CF6)',
                    color: 'white',
                    mb: 1,
                  }}
                />
                <Chip
                  label={item.duration}
                  sx={{
                    fontWeight: 600,
                    background: 'linear-gradient(90deg, #6366F1, #8B5CF6)',
                    color: 'white',
                    mb: 2,
                  }}
                />
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  {item.highlights.map((point, i) => (
                    <li
                      key={i}
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
                    </li>
                  ))}
                </ul>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Academics;
