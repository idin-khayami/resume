import React from 'react';
import {FaCalendar} from 'react-icons/lib/fa'
import styled from 'styled-components';

const Role = styled.p`
  font-size: 24px;
  margin-bottom: 4px;
`;

const List = styled.ul`
  list-style-position: inside;
  padding-left:0;
`;

const Experience = () => (
  <div>
    <h1>
      Experience Summary
    </h1>
    <Role>Full Stack Developer (at some point devops)</Role>
    <strong className="title">Samsson</strong>
    <div className="m-t-4">
      <FaCalendar/>  December 2017 - Now
    </div>
    <div className="m-t-10">
      <List>
        <li>Developed and managed for 3+ web applications using modern frameworks</li>
        <li>Constantly improved tooling for a more reliable, automated and efficient development</li>
        <li>Worked collaboratively with the clients to achieve satisfactory results on time and budget</li>
      </List>
    </div>

    <Role>Full Stack Developer</Role>
    <strong className="title">Miare</strong>
    <div className="m-t-4">
      <FaCalendar/>  May 2017 - January 2018
    </div>
    <div className="m-t-10">
      <List>
        <li>Developed and managed for 3+ web applications using modern frameworks</li>
        <li>Constantly improved tooling for a more reliable, automated and efficient development</li>
        <li>Worked collaboratively with the clients to achieve satisfactory results on time and budget</li>
      </List>
    </div>

    <Role>Senior Frontend Developer</Role>
    <div>
      <strong className="title">Zoodfood</strong>
      <FaCalendar/>  October 2016 - June 2017
    </div>

    <Role>Senior Frontend Developer</Role>
    <div>
      <strong className="title">Pixel & Code</strong>
      <FaCalendar/>  May 2016 - June 2017
    </div>

    <Role>Frontend Developer</Role>
    <div>
      <strong className="title">Fastivery</strong>
      <FaCalendar/>  November 2015 - December 2016
    </div>

    <Role>Web Developer</Role>
    <div>
      <strong className="title">Appana Holding</strong>
      <FaCalendar/>  December 2013 - November 2015
    </div>

    <Role>Teacher</Role>
    <div>
      <strong className="title">MFT Vanak</strong>
      <FaCalendar/>  June 2013 - October 2014
    </div>
  </div>
);

export default Experience;
