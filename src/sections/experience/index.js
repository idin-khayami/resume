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
    <div>
      <strong className="title">Samsson</strong>
      <FaCalendar/>  December 2017 - Now
    </div>

    <Role>Full Stack Developer</Role>
    <div>
      <strong className="title">Miare</strong>
      <FaCalendar/>  May 2017 - January 2018
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
