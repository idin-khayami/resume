import React from 'react';
import styled from 'styled-components';
import {FaCalendar} from 'react-icons/lib/fa';

const Degree = styled.p`
  font-size: 24px;
  margin: 0;
`;

const Info = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: row;
`;
const Educationcontainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const Education = () => (
  <div>
    <h1>
      Education
    </h1>

    <Educationcontainer>
      <Info>
        <Degree>Master Software Engineering</Degree>
        <div className="m-t-4">
          <FaCalendar/> October 2016- Feb 2019
        </div>
      </Info>
      <Info>
        <Degree>Bachelore IT Engineering</Degree>
        <div className="m-t-4">
          <FaCalendar/> October 2011- June 2015
        </div>
      </Info>
      <Info>
        <Degree>Bachelore Civil Engineering</Degree>
        <div className="m-t-4">
          <FaCalendar/> October 2011- July 2015
        </div>
      </Info>
    </Educationcontainer>
  </div>
);

export default Education;
