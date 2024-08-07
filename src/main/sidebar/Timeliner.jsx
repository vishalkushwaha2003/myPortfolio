import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Timeliner() {
  const isxSmallScreen = useMediaQuery('(max-width:640px)');
  const isSmallScreen = useMediaQuery('(min-width:640px) and (max-width:768px)');
  const isMediumScreen = useMediaQuery('(min-width:768px) and (max-width:1024px)');

  const getFontSize = () => {
    if (isxSmallScreen) return '16px';
    if (isSmallScreen) return '10px';
    if (isMediumScreen) return '13px';
    return '18px';
  };

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <MenuBookIcon sx={{ color: 'rgba(255,255,255)' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          className="animate__animated animate__bounceIn"
          sx={{
            color: 'rgba(255,255,255)',
            fontSize: getFontSize(),
            fontWeight: '500',
          }}
        >
          Education
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="rgba(251, 185, 182,0.5)">
          2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          className="animate__animated animate__bounceIn"
          sx={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: getFontSize(),
            fontWeight: '400',
            fontFamily: 'unset',
          }}
        >
          <Tooltip
            title="from Jawahar Navodaya Vidyalaya"
            placement="top-start"
            className="hover:cursor-pointer hover:text-white"
          >
            Matriculation
          </Tooltip>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="rgba(251, 185, 182,0.5)">
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          className="animate__animated animate__bounceIn"
          sx={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: getFontSize(),
            fontWeight: '400',
            fontFamily: 'unset',
          }}
        >
          <Tooltip
            title="from Jawahar Navodaya Vidyalaya"
            placement="top-start"
            className="hover:cursor-pointer hover:text-white"
          >
            Intermediate
          </Tooltip>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="rgba(251, 185, 182,0.5)">
          2021-2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          className="animate__animated animate__bounceIn"
          sx={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: getFontSize(),
            fontWeight: '400',
            fontFamily: 'unset',
          }}
        >
          <Tooltip
            title="from Harcourt Butler Technical University"
            placement="top-start"
            className="hover:cursor-pointer hover:text-white"
          >
            Graduation
          </Tooltip>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
