import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Tip from './Tip';
import Tooltip from '@mui/material/Tooltip';

export default function Timeliner() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        
        <TimelineSeparator>
          {/* <TimelineDot /> */}
          <MenuBookIcon sx={{
            color:'rgba(255,255,255)'
          }}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{
          color:'rgba(255,255,255)',
          fontSize:'20px',
          fontWeight:'500'
        }}>Education</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="rgba(251, 185, 182,0.5)">
          2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          {/* <Tip/> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{
          color:'rgba(255,255,255,0.9)',
          fontSize:'18px',
          fontWeight:'400',
          fontFamily:'unset'
        }}>

<Tooltip title="from Jawahar Navodaya Vidyalaya" placement="top-start" className='hover:cursor-pointer hover:text-white'>Matriculation</Tooltip>
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
        <TimelineContent sx={{
          color:'rgba(255,255,255,0.9)',
          fontSize:'18px',
          fontWeight:'400',
          fontFamily:'unset'
        }}>
<Tooltip title="from Jawahar Navodaya Vidyalaya" placement="top-start" className='hover:cursor-pointer hover:text-white'>Intermediate</Tooltip>

        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="rgba(251, 185, 182,0.5)">
          2021-2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{
           color:'rgba(255,255,255,0.9)',
           fontSize:'18px',
           fontWeight:'400',
           fontFamily:'unset'
        }}>
<Tooltip title="from Harcourt Butler Technical University" placement="top-start" className='hover:cursor-pointer hover:text-white'>Graduation</Tooltip>

        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
