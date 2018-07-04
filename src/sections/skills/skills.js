const backendSkills = {
  python: { title: 'Python/Django', proficiency: 60 },
  php: { title: 'PHP', proficiency: 40 },
  golang: { title: 'Golang', proficiency: 10 },
  nodejs: { title: 'Node.js', proficiency: 50 }
};

const frontendSkills = {
  react: { title: 'React', proficiency: 80 },
  vue: { title: 'Vue', proficiency: 40 },
  angular: { title: 'Angular 1 & 2+', proficiency: 60 },
  gulp: { title: 'Gulp', proficiency: 85 },
  sass: { title: 'Sass', proficiency: 90 },
  webpack: { title: 'Webpack', proficiency: 50 },
  pug: { title: 'Pug', proficiency: 60 },
  typescript: { title: 'Typescript', proficiency: 60 }
};

const MobileSkills = {
  android: { title: 'Android', proficiency: 50 },
  reactnative: { title: 'ReactNative', proficiency: 50 }
};

const DevopsSkills = {
  kubernetes: { title: 'Kubernetes', proficiency: 50 },
  docker: { title: 'Container and docker', proficiency: 50 },
  ansible: {
    title: 'Ansible( Automation Configuration Tools)',
    proficiency: 50
  },
  linux: { title: 'Linux Administration', proficiency: 60 },
  monitoring: { title: 'Monitoring solution', proficiency: 50 }
};

const DatabaseSkills = {
  mariadb: { title: 'Mariadb and mysql', proficiency: 40 },
  elasticsearch: { title: 'Elasticsearch', proficiency: 50 },
  redis: { title: 'Redis', proficiency: 50 }
};

const commonSkills = {
  git: { title: 'Git', proficiency: 80 },
  scrum: { title: 'Scrum', proficiency: 90 }
};

export const frontendSkillList = [
  ...Object.values(frontendSkills),
  ...Object.values(commonSkills),
  backendSkills.python,
  backendSkills.php,
  backendSkills.nodejs,
  DatabaseSkills.mariadb,
  DevopsSkills.linux
];

export const backendSkillList = [
  ...Object.values(backendSkills),
  ...Object.values(DevopsSkills),
  ...Object.values(DatabaseSkills),
  ...Object.values(commonSkills),
  frontendSkills.react,
  MobileSkills.reactnative
];
