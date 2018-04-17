import React from 'react';
import {differenceInCalendarYears} from 'date-fns';
import styled from 'styled-components';

const getFormattedWorkExprience = (startDate) => {
  const workingYears = differenceInCalendarYears(new Date(), startDate);
  return workingYears
}

const Summary = () => {
  const age = differenceInCalendarYears(new Date(), new Date(1992, 11, 9));
  const workingYears = getFormattedWorkExprience(new Date(2012, 11, 8));
  const Decription = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
`;
  return (
    <div>
      <h1>
        Summary
      </h1>
      <Decription className="m-t-10">
        A {age} year old self-taught full-stack web developer with {workingYears}+ years of experience
        using various cutting-edge technologies such as react, angular etc.
        I have been programming anywhere that i was accepted as one for years and today
        i do it more than anyone!
      </Decription>
    </div>
  );
}

export default Summary;