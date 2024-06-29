import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonLoading() {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
      <Box sx={{ width: '20%', aspectRatio: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Skeleton variant="circular" sx={{ width: '80%', height: '80%' }} />
      </Box>

      <Box sx={{ width: '50%', height: '100%' }}>
        <Skeleton sx={{ height: '33%' }} />
        <Skeleton sx={{ height: '33%' }} animation="wave" />
        <Skeleton sx={{ height: '33%' }} animation='wave' />
      </Box>
    </Box>
  );
}
