import React from 'react';
import { Box, Typography, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { LightBulbIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: "Bank Churn Prediction",
    description: "Built a predictive model to identify customers likely to leave the bank using ML techniques and integrated it with Flask backend.",
    techStack: ["Python", "SQL", "Flask", "Spark", "Power BI"],
    link: "https://github.com/yourusername/bank-churn-prediction"
  },
  {
    title: "Document Scanner with OCR",
    description: "Developed an image processing pipeline that scans documents, corrects perspective, and extracts text using Tesseract.",
    techStack: ["OpenCV", "NumPy", "Tesseract"],
    link: "https://github.com/yourusername/document-scanner"
  },
  {
    title: "Subjective Answer Evaluation",
    description: "NLP-based automated grading system using semantic similarity with Word2Vec, TF-IDF and spaCy.",
    techStack: ["Python", "spaCy", "NLTK", "Word2Vec"],
    link: "https://github.com/yourusername/subjective-evaluation"
  },
  {
    title: "Geospatial Precipitation Analysis",
    description: "Analyzed regional precipitation from GeoTIFFs using rasterio and visualized insights via Power BI dashboards.",
    techStack: ["Python", "GeoPandas", "rasterio", "Power BI"],
    link: "https://github.com/yourusername/geospatial-precipitation"
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

const Projects: React.FC = () => {
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
            <LightBulbIcon className="h-64 w-64 text-pink-400" />
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
            Featured Projects
          </Typography>

          <Box component={motion.div} variants={fadeInStagger} initial="hidden" animate="show">
            {projects.map((item, index) => (
              <Box
                key={index}
                component={motion.div}
                variants={fadeItem}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                sx={{
                  mb: 6,
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
                  {item.title}
                </Typography>
                <Typography sx={{ color: '#d1d5db', mb: 2 }}>{item.description}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {item.techStack.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        background: 'linear-gradient(90deg, #6366F1, #8B5CF6)',
                        color: 'white',
                      }}
                    />
                  ))}
                </Box>
                <Button
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  sx={{
                    borderColor: '#8B5CF6',
                    color: '#8B5CF6',
                    fontWeight: 600,
                    '&:hover': {
                      background: '#8B5CF6',
                      color: 'white',
                    },
                  }}
                >
                  See More Details
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
