'use client';
import PropTypes from 'prop-types';

// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  BENEFIT - 5  ***************************/

export default function Benefit5({ heading, caption, blockDetail }) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
        >
          <Typeset
            {...{
              heading,
              caption,
              stackProps: { sx: { alignItems: 'center', textAlign: 'center' } },
              captionProps: { sx: { width: { xs: 1, sm: '80%', md: '65%' } } }
            }}
          />
        </motion.div>
        <Grid container spacing={1.5}>
          {blockDetail.map((item, index) => (
            <Grid key={index} size={{ xs: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: item.animationDelay,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                style={{ height: '100%' }}
              >
                <GraphicsCard sx={{ p: { xs: 2, sm: 2.25, md: 3 }, height: 1 }}>
                  <Stack sx={{ gap: 0.5, alignItems: 'center' }}>
                    <Stack direction="row" sx={{ alignItems: 'flex-end' }}>
                      <Typography component="div" variant="h1">
                        {item.counter}
                      </Typography>
                      <Typography component="div" variant="h3" sx={{ color: 'text.secondary', mb: { xs: 0.25, md: 0.625 } }}>
                        {item.defaultUnit}
                      </Typography>
                    </Stack>
                    <Typography align="center" sx={{ color: 'text.secondary' }}>
                      {item.caption}
                    </Typography>
                  </Stack>
                </GraphicsCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

Benefit5.propTypes = { heading: PropTypes.any, caption: PropTypes.any, blockDetail: PropTypes.any };
