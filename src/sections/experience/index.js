import React from 'react';
import { FaCalendar } from 'react-icons/lib/fa';
import styled from 'styled-components';

const Role = styled.p`
  font-size: 24px;
  margin-bottom: 4px;
`;

const InformationRole = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 4px;
  }
`;

const Experience = () => (
  <div>
    <h1>Experience Summary</h1>
    <Role>Frontend Developer</Role>
    <InformationRole>
      <strong className="title">Snapp</strong>
      <FaCalendar /> <span> March 2019 - Now </span>
    </InformationRole>

    <Role>Senior Frontend Developer</Role>
    <InformationRole>
      <strong className="title">Peeyade</strong>
      <FaCalendar /> <span> March 2018 - February 2019 </span>
    </InformationRole>

    <Role>Full Stack Developer</Role>
    <InformationRole>
      <strong className="title">Miare</strong>
      <FaCalendar /> May 2017 - January 2018
    </InformationRole>

    <Role>Frontend Developer</Role>
    <InformationRole>
      <strong className="title">Zoodfood</strong>
      <FaCalendar /> October 2016 - June 2017
    </InformationRole>

    <Role>Frontend Developer</Role>
    <InformationRole>
      <strong className="title">Pixel & Code</strong>
      <FaCalendar /> May 2016 - June 2017
    </InformationRole>

    <Role>Frontend Developer</Role>
    <InformationRole>
      <strong className="title">Fastivery</strong>
      <FaCalendar /> November 2015 - December 2016
    </InformationRole>

    <Role>Web Developer</Role>
    <InformationRole>
      <strong className="title">Appana Holding</strong>
      <FaCalendar /> December 2013 - November 2015
    </InformationRole>

    <Role>Teacher</Role>
    <InformationRole>
      <strong className="title">MFT Vanak</strong>
      <FaCalendar /> June 2013 - October 2014
    </InformationRole>
  </div>
);

export default Experience;
