const backendSkills = {
  python: { title: 'Python/Django', proficiency: 60 },
  php: { title: 'PHP', proficiency: 40 },
  golang: { title: 'Golang', proficiency: 10 },
  nodejs: { title: 'Node.js', proficiency: 50 }
};

const frontendSkills = {
  javascript: { title: 'Javascript', proficiency: 80 },
  react: { title: 'React', proficiency: 70 },
  redux: { title: 'Redux', proficiency: 70 },
  typescript: { title: 'Typescript', proficiency: 30 },
  html: { title: 'Html', proficiency: 70 },
  css: { title: 'Css', proficiency: 70 },
  webpack: { title: 'Webpack', proficiency: 50 },
  vue: { title: 'Vue', proficiency: 30 },
  angular: { title: 'Angular 1 & 2+', proficiency: 30 },
  gulp: { title: 'Gulp', proficiency: 70 },
  sass: { title: 'Sass', proficiency: 90 },
  pug: { title: 'Pug', proficiency: 60 },
};

const mobileSkills = {
  android: { title: 'Android', proficiency: 50 },
  reactnative: { title: 'ReactNative', proficiency: 40 }
};

const devopsSkills = {
  kubernetes: { title: 'Kubernetes', proficiency: 40 },
  docker: { title: 'Container and docker', proficiency: 40 },
  // ansible: {
  //   title: 'Ansible( Automation Configuration Tools)',
  //   proficiency: 50
  // },
  linux: { title: 'Linux Administration', proficiency: 40 },
  monitoring: { title: 'Monitoring solution', proficiency: 40 }
};

const databaseSkills = {
  mariadb: { title: 'Mariadb and mysql', proficiency: 40 },
  elasticsearch: { title: 'Elasticsearch', proficiency: 50 },
  redis: { title: 'Redis', proficiency: 50 },
  postgresql: {title: 'PostgreSQL', proficiency: 50}
};

const commonSkills = {
  git: { title: 'Git', proficiency: 80 },
  scrum: { title: 'Scrum', proficiency: 90 },
  jest: {title: 'Jest', proficiency: 60}
};

export const frontendSkillList = [
  ...Object.values(frontendSkills),
  ...Object.values(devopsSkills),
  ...Object.values(backendSkills),
  ...Object.values(commonSkills),
  databaseSkills.mariadb,
  databaseSkills.postgresql,
  mobileSkills.reactnative
];

export const backendSkillList = [
    ...Object.values(devopsSkills),
  ...Object.values(backendSkills),
  ...Object.values(commonSkills),
  databaseSkills.mariadb,
  databaseSkills.postgresql,
];
