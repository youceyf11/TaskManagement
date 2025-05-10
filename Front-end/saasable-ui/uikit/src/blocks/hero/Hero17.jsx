'use client';
import PropTypes from 'prop-types';

import { useEffect, useRef, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion, useScroll, useTransform } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { getBackgroundDots } from '@/utils/getBackgroundDots';

// @assets
import Wave from '@/images/graphics/Wave';

// threshold - adjust threshold as needed
const options = { root: null, rootMargin: '0px', threshold: 0.6 };

/***************************  HERO - 17  ***************************/

export default function Hero17({ chip, headLine, captionLine, primaryBtn, videoSrc, videoThumbnail, listData }) {
  const theme = useTheme();
  const boxRadius = { xs: 24, sm: 32, md: 40 };

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.4, 0.6], [0.9, 0.92, 0.94, 0.96, 1]);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle video play/pause based on intersection with the viewport
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (videoRef.current && !isPlaying) {
            videoRef.current
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.error('Autoplay was prevented:', error);
              });
          }
        } else {
          if (videoRef.current && isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const videoElement = videoRef.current;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [isPlaying]);

  return (
    <>
      <Box
        sx={{
          height: { xs: 592, sm: 738, md: 878 },
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1,
          zIndex: -1,
          borderBottomLeftRadius: boxRadius,
          borderBottomRightRadius: boxRadius,
          background: getBackgroundDots(theme.palette.grey[300], 60, 35),
          bgcolor: 'grey.100'
        }}
      ></Box>
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Box ref={containerRef}>
          <Box sx={{ pb: { xs: 3, sm: 4, md: 5 } }}>
            <Stack sx={{ alignItems: 'center', gap: 1.5 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Chip
                  variant="outlined"
                  label={
                    typeof chip.label === 'string' ? (
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {chip.label}
                      </Typography>
                    ) : (
                      chip.label
                    )
                  }
                  sx={{ bgcolor: 'grey.100', '& .MuiChip-label': { py: 0.5, px: 1.5 } }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Typography variant="h1" align="center" sx={{ maxWidth: 800 }}>
                  {headLine}
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Box sx={{ pt: 0.5, pb: 0.75 }}>
                  <Wave />
                </Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Typography variant="h6" align="center" sx={{ color: 'text.secondary', maxWidth: 650 }}>
                  {captionLine}
                </Typography>
              </motion.div>
            </Stack>
            <Stack sx={{ alignItems: 'center', gap: 2, mt: { xs: 3, sm: 4, md: 5 } }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <ButtonAnimationWrapper>
                  <Button
                    color="primary"
                    variant="contained"
                    startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                    {...primaryBtn}
                  />
                </ButtonAnimationWrapper>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {listData.map((item, index) => (
                    <Chip
                      key={index}
                      label={<Typography variant="caption2">{item.title}</Typography>}
                      variant="outlined"
                      icon={<GraphicsImage image={item.image} sx={{ width: 16, height: 16 }} />}
                      sx={{ height: 32, px: 1, bgcolor: 'grey.100', '& .MuiChip-label': { py: 0.75, px: 1 } }}
                    />
                  ))}
                </Stack>
              </motion.div>
            </Stack>
          </Box>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
            style={{ scale }}
          >
            <GraphicsCard sx={{ border: '5px solid', borderColor: 'grey.300' }}>
              <video
                playsInline
                ref={videoRef}
                width="100%"
                height="100%"
                style={{ display: 'flex', objectFit: 'cover' }}
                preload="metadata"
                autoPlay={false}
                loop={true}
                muted={true}
                poster={videoThumbnail}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </GraphicsCard>
          </motion.div>
        </Box>
      </ContainerWrapper>
    </>
  );
}

Hero17.propTypes = {
  chip: PropTypes.object,
  headLine: PropTypes.string,
  captionLine: PropTypes.string,
  primaryBtn: PropTypes.any,
  videoSrc: PropTypes.string,
  listData: PropTypes.array
};
