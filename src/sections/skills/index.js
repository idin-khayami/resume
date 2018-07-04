import React from 'react';
import style from 'styled-components';
import SkillBar from './skillbar';
import Separator from '../../components/separator';
import { frontendSkillList, backendSkillList } from './skills';

const Grid = style.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;
const Column = style.div`
  flex-basis: 33%;
  padding:0 15px;
`;

const skillList =
  process.env.REACT_APP_POSITION === 'backend'
    ? backendSkillList
    : frontendSkillList;

const Skill = () => (
  <div>
    <h1 className="section-header">Skills</h1>
    <Grid>
      {skillList.map((skill, index) => (
        <Column key={index}>
          <SkillBar proficiency={skill.proficiency} title={skill.title} />
          <Separator className="m-t-20" />
        </Column>
      ))}
    </Grid>
  </div>
);

export default Skill;
