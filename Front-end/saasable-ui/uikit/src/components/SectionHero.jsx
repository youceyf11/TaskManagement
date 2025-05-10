'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from './ContainerWrapper';
import SvgIcon from './SvgIcon';

import { getBackgroundDots } from '@/utils/getBackgroundDots';
import { PAGE_PATH } from '@/path';

// @assets
import Wave from '@/images/graphics/Wave';

/***************************  HERO - SEARCH OPTIONS  ***************************/

const options = [
  { label: 'About', path: PAGE_PATH.about },
  { label: 'Benefit', path: PAGE_PATH.benefit },
  { label: 'Blog', path: PAGE_PATH.blog },
  { label: 'CTA', path: PAGE_PATH.cta },
  { label: 'Clientele', path: PAGE_PATH.clientele },
  { label: 'Color', path: PAGE_PATH.color },
  { label: 'Coming Soon', path: PAGE_PATH.comingSoon },
  { label: 'Contact Us', path: PAGE_PATH.contactUs },
  { label: 'Cookie', path: PAGE_PATH.cookie },
  { label: 'Early Access', path: PAGE_PATH.earlyAccess },
  { label: '404 Error', path: PAGE_PATH.error404 },
  { label: 'FAQ', path: PAGE_PATH.faq },
  { label: 'Feature', path: PAGE_PATH.feature },
  { label: 'Footer', path: PAGE_PATH.footer },
  { label: 'Forgot Password', path: PAGE_PATH.forgotPassword },
  { label: 'Gallery', path: PAGE_PATH.gallery },
  { label: 'Hero', path: PAGE_PATH.hero },
  { label: 'Icon', path: PAGE_PATH.icon },
  { label: 'Integration', path: PAGE_PATH.integration },
  { label: 'Login', path: PAGE_PATH.login },
  { label: 'Mega Menu', path: PAGE_PATH.megaMenu },
  { label: 'Navbar', path: PAGE_PATH.navbar },
  { label: 'New Password', path: PAGE_PATH.newPassword },
  { label: 'Pricing', path: PAGE_PATH.pricing },
  { label: 'Process', path: PAGE_PATH.process },
  { label: 'Privacy Policy', path: PAGE_PATH.privacyPolicy },
  { label: 'Register', path: PAGE_PATH.register },
  { label: 'Small Hero', path: PAGE_PATH.smallHero },
  { label: 'Team', path: PAGE_PATH.team },
  { label: 'Testimonial', path: PAGE_PATH.testimonial },
  { label: 'Terms & Conditions', path: PAGE_PATH.termsCondition },
  { label: 'Top Offer', path: PAGE_PATH.topOffer },
  { label: 'Typography', path: PAGE_PATH.typography },
  { label: 'Onboard', path: PAGE_PATH.onboard },
  { label: 'Other', path: PAGE_PATH.other },
  { label: 'OTP Verification', path: PAGE_PATH.otpVerification }
];

/***************************  SECTION HERO  ***************************/

export default function SectionHero({ heading, search = true, offer = false, breadcrumbs }) {
  const theme = useTheme();
  const router = useRouter();

  const boxRadius = { xs: 24, sm: 40 };

  const handleSelect = (event, value) => {
    if (typeof value === 'object' && value !== null) {
      value.path && router.push(value.path);
    }
  };

  return (
    <Box
      sx={{
        overflow: 'hidden',
        py: { xs: 3, sm: 5, md: 8 },
        background: getBackgroundDots(theme.palette.grey[300], 60, 30),
        bgcolor: 'grey.100',
        borderBottomLeftRadius: boxRadius,
        borderBottomRightRadius: boxRadius
      }}
    >
      <ContainerWrapper>
        <Stack sx={{ alignItems: 'center', gap: { xs: 1, sm: 1.5 } }}>
          {breadcrumbs && (
            <Chip
              variant="outlined"
              label={
                <Breadcrumbs
                  separator={<SvgIcon name={'tabler-chevron-right'} size={16} color="text.primary" />}
                  rel="noopener noreferrer"
                  aria-label="main-breadcrumb"
                  sx={{ '& .MuiBreadcrumbs-separator': { mx: 0.5 } }}
                >
                  {breadcrumbs?.map((item, index) => (
                    <Link
                      component={NextLink}
                      key={index}
                      variant="caption"
                      color={breadcrumbs.length - 1 !== index ? 'inherit' : 'primary.main'}
                      href={item.to && breadcrumbs.length - 1 !== index ? item.to : ''}
                    >
                      {item.title}
                    </Link>
                  ))}
                </Breadcrumbs>
              }
              sx={{ bgcolor: 'grey.100', '& .MuiChip-label': { py: 0.5, px: 1.5 } }}
            />
          )}
          {offer && (
            <Chip
              variant="outlined"
              label={
                <>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Over 200+
                  </Typography>
                  <Chip
                    label={
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'primary.main'
                        }}
                      >
                        Design Blocks
                      </Typography>
                    }
                    sx={{ bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1 } }}
                    icon={
                      <CardMedia
                        component="img"
                        image="/assets/images/shared/celebration.svg"
                        sx={{ width: 20, height: 20 }}
                        alt="celebration"
                        loading="lazy"
                      />
                    }
                  />
                </>
              }
              sx={{ bgcolor: 'grey.100', '& .MuiChip-label': { py: 0.5, px: 1.5 } }}
            />
          )}
          <Typography variant="h1" sx={{ textAlign: 'center', width: { xs: 345, sm: 550, md: 700 } }}>
            {heading}
          </Typography>
          <Box sx={{ py: { xs: 0.575, md: 0.875 } }}>
            <Wave />
          </Box>
          {search && (
            <Autocomplete
              freeSolo
              autoComplete
              options={options}
              getOptionLabel={(option) => (typeof option !== 'string' ? option.label : '')}
              onChange={handleSelect}
              sx={{ bgcolor: 'grey.100', width: { xs: 1, sm: 392 } }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search for blocks... (e.g., Hero, Testimonial, Pricing)"
                  variant="outlined"
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      sx: { '&.MuiOutlinedInput-root': { pl: 1.75, '& .MuiAutocomplete-input': { pl: 1.25 } } },
                      startAdornment: <SvgIcon name="tabler-search" size={22} color="grey.700" />,
                      'aria-label': 'Search blocks'
                    }
                  }}
                />
              )}
              renderOption={(props, option) => {
                return (
                  <ListItem {...props} key={option.label} sx={{ px: 1.75, py: 1, borderRadius: 3, '&:hover': { bgcolor: 'grey.200' } }}>
                    {option.label}
                  </ListItem>
                );
              }}
              ListboxProps={{
                sx: {
                  maxHeight: 250,
                  overflowY: 'auto',
                  '&::-webkit-scrollbar': { width: 8, borderRadius: 1 },
                  '&::-webkit-scrollbar-track': { bgcolor: 'grey.50', borderRadius: 1 },
                  '&::-webkit-scrollbar-thumb': { bgcolor: 'grey.300', borderRadius: 1 }
                }
              }}
              slotProps={{
                paper: {
                  sx: {
                    pl: 1.5,
                    pr: 0.75,
                    py: 1.25,
                    borderRadius: 4,
                    boxShadow: `0px 16px 10px 0px ${alpha(theme.palette.grey[900], 0.06)}`
                  }
                }
              }}
            />
          )}
        </Stack>
      </ContainerWrapper>
    </Box>
  );
}

SectionHero.propTypes = { heading: PropTypes.string, search: PropTypes.bool, offer: PropTypes.bool, breadcrumbs: PropTypes.array };
