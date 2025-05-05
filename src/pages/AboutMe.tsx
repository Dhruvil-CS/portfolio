import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Avatar,
  Tooltip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import {
  UserIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  CameraIcon,
  GlobeEuropeAfricaIcon
} from '@heroicons/react/24/outline';

const FloatingBadge = ({ text, delay, style = {} }: { text: string; delay: number; style?: React.CSSProperties }) => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.8 }}
    whileHover={{ scale: 1.1, rotate: 2 }}
    style={{
      position: 'absolute',
      fontSize: '1rem',
      padding: '0.5rem 1rem',
      borderRadius: '999px',
      background: 'rgba(255,255,255,0.1)',
      color: '#fff',
      backdropFilter: 'blur(6px)',
      border: '1px solid rgba(255,255,255,0.15)',
      pointerEvents: 'none',
      ...style
    }}
  >
    {text}
  </motion.div>
);

const floatingParticles = Array.from({ length: 20 }, (_, i) => (
  <motion.div
    key={i}
    style={{
      position: 'absolute',
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: '#ffffff1a',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      zIndex: 0,
    }}
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 8 + Math.random() * 5, repeat: Infinity, ease: 'easeInOut' }}
  />
));

const AboutMe: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="page-container">
      <Box
        py={10}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          px: 2,
          background: 'radial-gradient(circle at 20% 10%, #0f172a 0%, #1f2937 100%)',
        }}
      >
        {/* Aurora Background Gradient */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: '-30%',
            background: 'linear-gradient(115deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)',
            filter: 'blur(120px)',
            opacity: 0.2,
            zIndex: 0,
          }}
        />

        {/* Floating Particles */}
        {floatingParticles}

        {/* Creative Floating Labels */}
        <FloatingBadge text="🚀 Lifelong Learner" delay={0.6} style={{ top: '12%', left: '8%' }} />
        <FloatingBadge text="💡 Creative Coder" delay={1.1} style={{ bottom: '12%', right: '10%' }} />
        <FloatingBadge text="📸 Storyteller" delay={1.6} style={{ top: '30%', right: '12%' }} />

        {/* Floating Icons */}
        {[UserIcon, CodeBracketIcon, RocketLaunchIcon].map((Icon, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 30 + i * 8, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: `${10 + i * 20}%`,
              left: `${10 + i * 20}%`,
              opacity: 0.04 + i * 0.03,
              zIndex: 0,
            }}
          >
            <Icon className="h-52 w-52 text-fuchsia-400" />
          </motion.div>
        ))}

        {/* Main Card Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box
            sx={{
              maxWidth: 1100,
              mx: 'auto',
              zIndex: 2,
              p: isMobile ? 3 : 6,
              borderRadius: 8,
              bgcolor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid #4f46e560',
              boxShadow: '0 25px 40px rgba(0,0,0,0.25)',
              backdropFilter: 'blur(12px)',
              position: 'relative',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2rem', md: '3.5rem' },
                letterSpacing: '-0.04em',
                mb: 4,
                textAlign: 'center',
                background: 'linear-gradient(90deg, #4F46E5, #EC4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Hello, I'm a Digital Craftsman 🧪
            </Typography>

            <Grid container spacing={4}>
              <Grid size={{ xs:12, md:6}}>
                <Typography variant="h6" sx={{ color: '#f3f4f6', mb: 1 }}>🌟 My Philosophy</Typography>
                <Typography sx={{ color: '#d1d5db' }}>
                  I'm driven by curiosity and shaped by code. I strive to merge art and logic to solve real-world problems with design and empathy.
                </Typography>
              </Grid>

              <Grid size={{ xs:12, md:6}}>
                <Typography variant="h6" sx={{ color: '#f3f4f6', mb: 1 }}>🎉 Quirks & Perks</Typography>
                <Typography sx={{ color: '#d1d5db' }}>
                  Fan of synth music, coffee rituals, minimalist UI, and spontaneous prototyping. Also, I build tools that help others build.
                </Typography>
              </Grid>

              <Grid size={{ xs:12, md:6}}>
                <Typography variant="h6" sx={{ color: '#f3f4f6', mb: 1 }}>⚙️ Favorite Stack</Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {["React", "Next.js", "TypeScript", "Python", "PostgreSQL", "Docker", "Vercel", "Tailwind"].map(skill => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      sx={{
                        color: '#e5e7eb',
                        borderColor: '#6366f1',
                        background: 'rgba(79,70,229,0.08)',
                        '&:hover': {
                          boxShadow: '0 0 10px #9333ea',
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Grid>

              <Grid size={{ xs:12, md:6}}>
                <Typography variant="h6" sx={{ color: '#f3f4f6', mb: 1 }}>🌐 Links</Typography>
                <Box display="flex" gap={2} flexWrap="wrap">
                  {[
                    { label: 'LinkedIn', link: 'https://linkedin.com', icon: <GlobeEuropeAfricaIcon className="h-5 w-5" /> },
                    { label: 'GitHub', link: 'https://github.com', icon: <CodeBracketIcon className="h-5 w-5" /> },
                    { label: 'Portfolio', link: '#', icon: <RocketLaunchIcon className="h-5 w-5" /> },
                  ].map(({ label, link, icon }) => (
                    <Tooltip title={label} key={label}>
                      <Avatar
                        sx={{
                          bgcolor: '#4F46E5',
                          cursor: 'pointer',
                          '&:hover': {
                            transform: 'scale(1.15)',
                            boxShadow: '0 0 15px #ec4899',
                          },
                          transition: '0.3s ease',
                        }}
                        onClick={() => window.open(link, '_blank')}
                      >
                        {icon}
                      </Avatar>
                    </Tooltip>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>

        {/* Scroll Down Prompt */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#fff',
            fontSize: '2rem',
            opacity: 0.5,
          }}
        >
          ↓
        </motion.div>
      </Box>
    </div>
  );
};

export default AboutMe;
