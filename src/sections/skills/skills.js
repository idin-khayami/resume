const backendSkills = {
  python: { title: 'Python/Django', proficiency: 50 },
  php: { title: 'PHP', proficiency: 50 },
  golang: { title: 'Golang', proficiency: 50 },
  nodejs: { title: 'Node.js', proficiency: 50 }
};

const frontendSkills = {
  react: { title: 'React', proficiency: 50 },
  vue: { title: 'Vue', proficiency: 50 },
  angular: { title: 'Angular 1 & 2+', proficiency: 50 },
  gulp: { title: 'Gulp', proficiency: 50 },
  sass: { title: 'Sass', proficiency: 50 },
  webpack: { title: 'Webpack', proficiency: 50 },
  pug: { title: 'Pug', proficiency: 50 },
  typescript: { title: 'Typescript', proficiency: 50 }
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
  linux: { title: 'Linux Administration', proficiency: 50 },
  monitoring: { title: 'Monitoring solution', proficiency: 50 }
};

const DatabaseSkills = {
  mariadb: { title: 'Mariadb and mysql', proficiency: 50 },
  elasticsearch: { title: 'Elasticsearch', proficiency: 50 },
  redis: { title: 'Redis', proficiency: 50 }
};

const commonSkills = {
  git: { title: 'Git', proficiency: 50 },
  scrum: { title: 'Scrum', proficiency: 50 }
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
