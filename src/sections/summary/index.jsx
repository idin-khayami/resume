import React from 'react';
import { differenceInCalendarYears } from 'date-fns';

const getFormattedWorkExprience = startDate => {
  return differenceInCalendarYears(new Date(), startDate);
};

const isBackend = process.env.REACT_APP_POSITION === 'backend';
const isFrontend = !isBackend;

const technologies = isBackend
  ? 'Python, Golang, elasticsearch, redis, Docker, Ansible and Bash'
  : 'react, angular, responsive';
const interest = isBackend
  ? 'scalable microservices'
  : 'progressive web applications';

const Summary = () => {
  const age = differenceInCalendarYears(new Date(), new Date(1992, 10, 8));
  const workingYears = getFormattedWorkExprience(new Date(2013, 7, 1));
  return (
    <div>
      <h1 className="section-header">Summary</h1>
      <p className="m-t-10">
        A {age} year old self-taught devops with {workingYears}+ years of
        experience using technologies such as {technologies} etc. to develop{' '}
        {isBackend}
        web applications, who is insterest in a position with an interest in
        developing {interest}.
      </p>
    </div>
  );
};

export default Summary;
