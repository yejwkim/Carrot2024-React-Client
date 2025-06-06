import React from 'react'
import { Box, Container, Typography, Link } from '@mui/material'
// Import the Link component from react-router-dom, renamed as RouterLink
import { Link as RouterLink } from 'react-router-dom'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid #ddd',
        mt: 'auto',
        py: 2,
        backgroundColor: '#fafafa',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} UT Carrot. All rights reserved.
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 1 }}
        >
          {/* Use `component={RouterLink}` instead of the default MUI Link behavior */}
          <Link
            component={RouterLink}
            to="/terms"
            color="inherit"
            underline="hover"
            sx={{ mx: 1 }}
          >
            Terms & Conditions
          </Link>
          {' | '}
          <Link
            component={RouterLink}
            to="/privacy"
            color="inherit"
            underline="hover"
            sx={{ mx: 1 }}
          >
            Privacy Policy
          </Link>
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
