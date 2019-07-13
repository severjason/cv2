import { CVData } from './app/interfaces';

const en: CVData = {
  experience: [
    {
      startDate: 'May 2018',
      endDate: 'present',
      company: 'LightIT',
      role: 'Front-End Developer',
      link: 'https://light-it.net/',
      list: [
        {
          text: 'Developing UI for a financial institution project specializing in short term high-risk lending. ' +
            'Technologies - Typescript, React, Redux, Redux-form, Material-UI, AWS Amplify.',
        },
        {
          text: 'Cryptocurrency news analysis project. Implemented new design and rebuilt from SPA to SSR+PWA. ' +
            'Technologies - React, Redux, Next.js, Styled-components, Semantic-UI, Highcharts, Jest + enzyme.',
          link: 'https://hypeanalysis.com/',
        },
        {
          text: 'Different short-term projects.'
        },
        {
          text: 'Taking part in LightIT Frontend Labs as one of speakers.',
        },
        {
          text: 'Interns code review and training, conducting an interviews.'
        }
      ],
    },
    {
      startDate: 'August 2018',
      endDate: 'April 2019',
      company: 'Upwork',
      role: 'Front-End Developer',
      link: 'https://www.upwork.com/o/profiles/users/_~01fff6263f5fd6f506/',
      list: [
        {
          text: 'localinsights.io - long term Next.js/Material design team member, ' +
            'I was responsible for adding new features, design update, ' +
            'bug fixing, code refactoring of existing application. ' +
            'Technologies - React, Redux, Next.js, Material-UI, firebase.',
          link: 'https://localinsights.io/',
        }
      ],
    },
    {
      startDate: 'August 2014',
      endDate: 'February 2015',
      company: 'oDesk',
      role: 'PHP/JS Developer',
      list: [
        {
          text: 'Short-term projects.',
        }
      ],
    },
  ],
  skills: [
    {
      title: 'Programming languages',
      list: [
        {
          name: 'JavaScript (ES6)',
          important: true,
        },
        {
          name: 'Typescript',
          important: true,
        },
      ]
    },
    {
      title: 'Technologies',
      list: [
        {
          name: 'React',
          important: true,
        },
        {
          name: 'Redux',
          important: true,
        },
        {
          name: 'Material-UI',
          important: true,
        },
        {name: 'SSR (Next.js)'},
        {name: 'Jest + enzyme'},
        {name: 'AWS-Amplify'},
        {name: 'Semantic-UI'},
        {name: 'Highcharts'},
        {name: 'Bootstrap'},
        {name: 'Functional programming'},
      ]
    },
    {
      title: 'Web',
      list: [
        {name: 'HTML'},
        {name: 'CSS'},
        {name: 'PWA'},
        {name: 'Firebase'},
        {name: 'SVG'},
        {name: 'SCSS'},
        {name: 'Styled-components'},
      ]
    },
    {
      title: 'Development tools',
      list: [
        {
          name: 'WebStorm',
          important: true,
        },
      ]
    },
    {
      title: 'Operating systems',
      list: [
        {name: 'Linux (Ubuntu)'},
        {name: 'Windows'},
      ]
    },
    {
      title: 'Other',
      list: [
        {name: 'git'},
        {name: 'CRA'},
        {name: 'Webpack'},
        {name: 'CI/CD'},
        {name: 'lodash'},
        {name: 'Docker (basic level)'},
        {name: 'SEO (basic level)'},
      ]
    },
  ],
  langs: [
    {
      title: 'English',
      level: 'Upper-intermediate'
    },
    {
      title: 'Ukrainian',
      level: 'Native'
    },
    {
      title: 'Russian',
      level: 'Native'
    }
  ],
  education: [
    {
      startDate: '2016',
      endDate: '2017',
      company: 'Brain Academy, Zaporizhzhia',
      role: 'Web Development',
    },
    {
      startDate: '2005',
      endDate: '2009',
      company: 'Zaporizhzhian National Technical University',
      role: 'Finance and Credit',
    },
    {
      startDate: '2004',
      endDate: '2009',
      company: 'Zaporizhzhian National Technical University',
      role: 'Aviation Engines Production Technology',
    }
  ],
};

const ua: CVData = {
  experience: [
    {
      startDate: 'Травень 2018',
      endDate: 'теп. час',
      company: 'LightIT',
      role: 'Front-End Розробник',
      link: 'https://light-it.net/',
      list: [
        {
          text: 'Розробка UI для проекту фінансової установи, ' +
            'що спеціалізується на короткостроковому високоризиковому кредитуванні. ' +
            'Технології - Typescript, React, Redux, Redux-form, Material-UI, AWS Amplify.',
        },
        {
          text: 'Проект для аналізу новин по кріптовалютам. ' +
            'Впроваджено новий дизайн та перебудовано з SPA на SSR+PWA. ' +
            'Технології - React, Redux, Next.js, Styled-components, Semantic-UI, Highcharts, Jest + enzyme.',
          link: 'https://hypeanalysis.com/',
        },
        {
          text: 'Різні короткострокові проекти.'
        },
        {
          text: 'Приймав участь в курсах LightIT Frontend Labs як один із спікеров.',
        },
        {
          text: 'Код ревью та навчання стажерів, проведення інтерв\'ю.'
        }
      ],
    },
    {
      startDate: 'Серпень 2018',
      endDate: 'Квітень 2019',
      company: 'Upwork',
      role: 'Front-End Розробник',
      link: 'https://www.upwork.com/o/profiles/users/_~01fff6263f5fd6f506/',
      list: [
        {
          text: 'localinsights.io - довгостроковий член команди проекту на Next.js/Material, ' +
            'Я був відповідальний за додавання нових функцій, оновлення дизайну, ' +
            'виправлення багів, рефакторинг коду. ' +
            'Технології - React, Redux, Next.js, Material-UI, firebase.',
          link: 'https://localinsights.io/',
        }
      ],
    },
    {
      startDate: 'Серпень 2014',
      endDate: 'Лютий 2015',
      company: 'oDesk',
      role: 'PHP/JS Розробник',
      list: [
        {
          text: 'Короткострокові проекти.',
        }
      ],
    },
  ],
  skills: [
    {
      title: 'Мови програмування',
      list: [
        {
          name: 'JavaScript (ES6)',
          important: true,
        },
        {
          name: 'Typescript',
          important: true,
        },
      ]
    },
    {
      title: 'Технології',
      list: [
        {
          name: 'React',
          important: true,
        },
        {
          name: 'Redux',
          important: true,
        },
        {
          name: 'Material-UI',
          important: true,
        },
        {name: 'SSR (Next.js)'},
        {name: 'Jest + enzyme'},
        {name: 'AWS-Amplify'},
        {name: 'Semantic-UI'},
        {name: 'Highcharts'},
        {name: 'Bootstrap'},
        {name: 'Функціональне програмування'},
      ]
    },
    {
      title: 'Веб-технології',
      list: [
        {name: 'HTML'},
        {name: 'CSS'},
        {name: 'PWA'},
        {name: 'Firebase'},
        {name: 'SVG'},
        {name: 'SCSS'},
        {name: 'Styled-components'},
      ]
    },
    {
      title: 'Засоби розробки',
      list: [
        {
          name: 'WebStorm',
          important: true,
        },
      ]
    },
    {
      title: 'Операційні системи',
      list: [
        {name: 'Linux (Ubuntu)'},
        {name: 'Windows'},
      ]
    },
    {
      title: 'Інше',
      list: [
        {name: 'git'},
        {name: 'CRA'},
        {name: 'Webpack'},
        {name: 'CI/CD'},
        {name: 'lodash'},
        {name: 'Docker (базовий рівень)'},
        {name: 'SEO (базовий рівень)'},
      ]
    },
  ],
  langs: [
    {
      title: 'Англійська',
      level: 'Вище середнього'
    },
    {
      title: 'Українська',
      level: 'Рідний'
    },
    {
      title: 'Російський',
      level: 'Рідний'
    }
  ],
  education: [
    {
      startDate: '2016',
      endDate: '2017',
      company: 'Brain Academy, Запоріжжя',
      role: 'Веб Розробка',
    },
    {
      startDate: '2005',
      endDate: '2009',
      company: 'Запорізький Національний Технічний Університет',
      role: 'Фінанси та кредит',
    },
    {
      startDate: '2004',
      endDate: '2009',
      company: 'Запорізький Національний Технічний Університет',
      role: 'Технологія будування авіаційних двигунів',
    }
  ],
};

export default {
  dateOfBirth: '28.07.1987',
  phone: '+38 (050) 543-60-17',
  email: 'severynov.sergii@gmail.com',
  github: 'https://github.com/severjason',
  website: 'https://jswebdev.net',
  facebook: 'https://www.facebook.com/severjason',
  linkedIn: 'https://www.linkedin.com/in/severjason',
  en,
  ua,
};
