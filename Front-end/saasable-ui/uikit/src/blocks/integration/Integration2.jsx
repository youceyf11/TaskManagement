'use client';
import PropTypes from 'prop-types';

// @mui
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  INTEGRATION - TAG  ***************************/

function IntegrationTag({ label, icon }) {
  const iconSize = { xs: 32, md: 40 };

  return (
    <Chip
      label={<Typography variant="h5">{label}</Typography>}
      {...(icon && {
        icon: <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} stroke={1} color="inherit" />
      })}
      sx={{
        px: { xs: 2.25, md: 3 },
        py: icon ? { xs: 1.25, md: 1.75 } : { xs: 1.875, md: 2.5 },
        m: 0.5,
        bgcolor: 'background.default',
        '& .MuiChip-label': { p: 0, ...(icon && { pl: 1.25 }) },
        '& svg': { width: iconSize, height: iconSize }
      }}
    />
  );
}

/***************************  INTEGRATION - 2  ***************************/

export default function Integration2({ headLine, captionLine, primaryBtn, tagList }) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.4
        }}
      >
        <GraphicsCard>
          <Stack sx={{ alignItems: 'center', p: { xs: 3, sm: 4, md: 5 } }}>
            <Stack sx={{ alignItems: 'center', gap: { xs: 1, sm: 1.5 } }}>
              {headLine && (
                <Typography align="center" variant="h2">
                  {headLine}
                </Typography>
              )}
              {captionLine && (
                <Typography align="center" variant="h6" sx={{ color: 'text.secondary' }}>
                  {captionLine}
                </Typography>
              )}
            </Stack>
            <Stack direction="row" sx={{ py: { xs: 4, sm: 5, md: 6 }, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              {tagList.map((integration, index) => (
                <IntegrationTag key={index} {...integration} />
              ))}
            </Stack>
            {primaryBtn && (
              <ButtonAnimationWrapper>
                <Button variant="contained" size="large" {...primaryBtn} />
              </ButtonAnimationWrapper>
            )}
          </Stack>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

IntegrationTag.propTypes = { label: PropTypes.any, icon: PropTypes.any };

Integration2.propTypes = { headLine: PropTypes.string, captionLine: PropTypes.string, primaryBtn: PropTypes.any, tagList: PropTypes.array };
