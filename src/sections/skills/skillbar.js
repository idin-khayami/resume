import React from 'react';
import styled from 'styled-components';

const SkillBar = ({
  proficiency = 0,
  borderRadius = '5px',
  height = '10px',
  color = '#000000',
  title
}) => {
  const Container = styled.div`
    width: 100%;
    border-radius: ${borderRadius};
    background-color: #ddd;
  `;

  const Bar = styled.div`
    border-radius: ${borderRadius};
    height: ${height};
    background-color: ${color};
    width: ${proficiency}%;
  `;

  return (
    <div>
      <p>
        <strong className="title">{title}</strong>
      </p>
      <Container>
        <Bar />
      </Container>
    </div>
  );
};

export default SkillBar;
