import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function OutlinedTimeline() {
  return (
    <>
    <div className='education'>
      <h4>Education</h4>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h6>MI Cikapayang</h6>
            <p>2010 - 2016</p>
          </TimelineContent>
        </TimelineItem> 
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h6>MTs Negeri 2 Bandung</h6>
            <p>2016 - 2019</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <h6>SMK Negeri 2 Bandung</h6>
            <p>2019 - 2022</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
          </TimelineSeparator>
          <TimelineContent>
            <h6>Universitas Pendidikan Indonesia</h6>
            <p>2022 - Now</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
    </>
  );
}
