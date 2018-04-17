import React from 'react';

import styled from 'styled-components';
import {FaLinkedinSquare, FaGithub, FaStackOverflow, FaMapMarker, FaEnvelope, FaPhone, FaGlobe, FaUser, FaSkype} from 'react-icons/lib/fa'

const Fullname = styled.h1`
  margin-top 0;
  margin-bottom: 0;
`;

const Titleinfo = styled.h2 `
  margin-top: 15px;
  margin-bottom: 5px;
`

const Row = styled.div`
  justify-content: space-between;
  align-content: space-between;
  margin-right: 10%;
  a, span{
    padding: 5px 0;
    font-size: 20px;
    font-weight: 500;
  }
  * {
    flex: 1;
  }
`;

const Column = styled.div`
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  margin-right: 10%
  span{
    padding: 5px 0;
    font-size: 20px;
    font-weight: 500;
  }
  * {
    flex: 1;
  }
`;

const Header = () => (
  <div>
    <Fullname>Idin Khayami</Fullname>
    <Column className="flex">
      <span><FaPhone/> +989122339398</span>
      <span><FaEnvelope/> idin.khanoom.khayami@gmail.com</span>
    </Column>
    <Titleinfo>Basic Info</Titleinfo>
    <Column className="flex">
      <span><FaUser/> Female, 26, Single</span>
      <span><FaMapMarker/> Tehran, Vanak</span>
      {/* <span><FaGlobe/> Iran</span> */}
    </Column>
    <Titleinfo>Contact Info</Titleinfo>
    <Row className="flex m-t-12">
      <span><FaSkype/>Idin Khayami</span>
      <span><FaLinkedinSquare/><a>bit.ly/2HhDIr7</a></span>
      <span><FaGithub/><a>bit.ly/2GYnNP2</a></span>
      <span><FaStackOverflow/><a>bit.ly/2GT8rr5</a></span>
    </Row>
  </div>
)

export default Header;
