import React from 'react';
import { differenceInCalendarYears } from 'date-fns';

import styled from 'styled-components';
import {
  FaLinkedinSquare,
  FaGithub,
  FaStackOverflow,
  FaMapMarker,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaSkype
} from 'react-icons/lib/fa';

const Fullname = styled.h1`
  margin-top 5px;
  margin-bottom: 5px;
`;

const Titleinfo = styled.h2`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Row = styled.div`
  justify-content: space-between;
  align-content: space-between;
  margin-right: 10%;
  a,
  span {
    padding: 5px 0;
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    text-decoration: none;
    span {
      margin 5px;
    }
  }
  * {
    flex: 1;
  }
`;

const Column = styled.div`
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  margin-right: 10%;
  a, span {
    padding: 5px 0;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    color: black;
  }
  * {
    flex: 1;
  }
`;

const Header = () => {
  const age = differenceInCalendarYears(new Date(), new Date(1992, 10, 8));

  return (
    <div>
      <Fullname>Idin Khayami</Fullname>
      <Column className="flex">
        <span>
          <a href="tel:+989122339398">
            <FaPhone /> +989122339398
          </a>
        </span>
        <span>
          <a href="mailto:idin.khanoom.khayami@gmail.com">
            <FaEnvelope /> idin.khanoom.khayami@gmail.com
          </a>
        </span>
      </Column>
      <Titleinfo>Basic Info</Titleinfo>
      <Row className="flex">
        <span>
          <FaUser /> Female, {age} , Single
        </span>
        <a target="_blank" rel="noopener noreferrer" href="https://bit.ly/32UnvjA">
          <FaMapMarker /> Tehran, Vanak
        </a>
      </Row>
      <Titleinfo>Contact Info</Titleinfo>
      <Row className="flex m-t-12">
        <span>
          <FaSkype />Idin Khayami
        </span>
        <a target="_blank" rel="noopener noreferrer" href="http://bit.ly/2HhDIr7">
          <FaLinkedinSquare />
          <span>bit.ly/2HhDIr7</span>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="http://bit.ly/2GYnNP2">
          <FaGithub />
          <span>bit.ly/2GYnNP2</span>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="http://bit.ly/2GT8rr5">
          <FaStackOverflow />
          <span>bit.ly/2GT8rr5</span>
        </a>
      </Row>
    </div>
  )
};

export default Header;
