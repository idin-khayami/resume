import React from 'react';
import style from 'styled-components';
import SkillBar from './skillbar'
import Separator from '../../components/separator';

const Grid = style.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;
const Column = style.div`
  flex-basis: 33%;
  padding:0 15px;
`;

const Title = style.h2`
  margin-bottom: 0;
`;
const programmingSkills = [
  {title: 'HTML5 , CSS3, ES6', proficiency: 90},
  {title: 'React, Redux', proficiency: 80},
  {title: 'Jade(Pug), Sass , CoffeeScript, Typescript', proficiency: 80},
  {title: 'Webpack, Gulp, Grunt', proficiency: 80},
  {title: 'Angular 1 & 2+', proficiency: 70},
  {title: 'Python( Django Framework)', proficiency: 50},
  {title: 'PHP(Laravel, Symfony)', proficiency: 30},
  {title: 'NodeJS(Express, Hapie)', proficiency: 20},
];

const databaseSkills = [
  {title: 'Postgres', proficiency: 70},
  {title: 'MySql/ MariaDB', proficiency: 70},
  {title: 'Redis', proficiency: 50},
  {title: 'Elasticsearch', proficiency: 30},
  {title: 'Couchbase', proficiency: 30},
];

const operationSystemSkills = [
  {title: 'Linux(Ubunto, Centos)', proficiency: 70},
  {title: 'mac OS', proficiency: 70},
];

const softwareSkills = [
  {title: 'Git', proficiency: 90},
  {title: 'Jira', proficiency: 85},
  {title: 'Vim', proficiency: 50},
  {title: 'Pivotal Tracker', proficiency: 85},
  {title: 'Base Camp', proficiency: 90},
];

const methodologiSkills = [
  {title: 'Scrum', proficiency: 70},
  {title: 'Kanban', proficiency: 70},
];

const languageSkills = [
  {title: 'Persian', proficiency: 100},
  {title: 'English', proficiency: 70},
];

const Skill = () => (
  <div>
    <h1>
      Technical Skills
    </h1>
    <Title>Development & Programming</Title>
    <Grid>
      {programmingSkills.map(skill => (
        <Column>
          <SkillBar proficiency={skill.proficiency} title={skill.title}/>
        </Column>
      ))}
    </Grid>
    {/* <Title>Database and Big Data Solution</Title>
    <Grid>
      {databaseSkills.map(skill => (
        <Column>
          <SkillBar proficiency={skill.proficiency} title={skill.title}/>
        </Column>
      ))}
    </Grid> */}
    <Title>Operating Systems</Title>
    <Grid>
      {operationSystemSkills.map(skill => (
        <Column>
          <SkillBar proficiency={skill.proficiency} title={skill.title}/>
        </Column>
      ))}
    </Grid>
    <Title>Softwares</Title>
    <Grid>
      {softwareSkills.map(skill => (
        <Column>
          <SkillBar proficiency={skill.proficiency} title={skill.title}/>
        </Column>
      ))}
    </Grid>
    <Title>Methodologies</Title>
    <Grid>
      {methodologiSkills.map(skill => (
        <Column>
          <SkillBar proficiency={skill.proficiency} title={skill.title}/>
        </Column>
      ))}
    </Grid>
    <Title>Languages</Title>
    <Grid>
      {languageSkills.map(skill => (
        <Column>
          <SkillBar proficiency={skill.proficiency} title={skill.title}/>
          <Separator className="m-t-20"/>
        </Column>
      ))}
    </Grid>
  </div>
);

export default Skill;
