import React from 'react';
import {
  Box,
  Grid,
  Link,
  Typography,
  Container,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const socialMediaLinks = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
};

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
        padding: '142px'
      }}
    >
      <Container >
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <img src="https://i.ibb.co/xj2X5v1/completed-Logo.png" alt="Logo" style={{ width: '250px', height: 'auto', marginRight: '280px' }} />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1">
              ABOUT US
            </Typography>
            <Typography variant="body2" color="inherit" component="div">
              52, Ali Balhwene street,2080 - Ariana
              <br />
              buyMEall@gmail.com
              <br />
              +216.20.222.232
              <br />
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="white" gutterBottom>
              OUR PRODUCTS
            </Typography>
            <Link href="#" color="inherit" display="block">
              Baby toys
            </Link>
            <Link href="#" color="inherit" display="block">
              electronics
            </Link>
            <Link href="#" color="inherit" display="block">
              health and Beauty
            </Link>
            <Link href="#" color="inherit" display="block">
              Home Lifestyle
            </Link>
            <Link href="#" color="inherit" display="block">
              Medcine
            </Link>
            <Link href="#" color="inherit" display="block">
              Men Fashion
            </Link>
            <Link href="#" color="inherit" display="block">
              Pets
            </Link>
            <Link href="#" color="inherit" display="block">
              Sport and outdoor
            </Link>
            <Link href="#" color="inherit" display="block">
              Women Fashion
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" align="center">
              QR Code
            </Typography>
            <img src="https://i.ibb.co/KshTGmV/QR-code.png" alt="Logo" style={{ width: '100px', height: 'auto', marginLeft: '90px' }} />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="white" gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <IconButton
              aria-label="Facebook"
              color="inherit"
              component="a"
              href={socialMediaLinks.facebook}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              color="inherit"
              component="a"
              href={socialMediaLinks.twitter}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              color="inherit"
              component="a"
              href={socialMediaLinks.instagram}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ pt: 4 }}
        >
          © 2024 Company Co. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
