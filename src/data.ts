import { CVData } from './app/types';
import img from './assets/avatar.jpg';

const en: CVData = {
  profile: 'I am Front-End Developer who is able to create all variety of websites and applications ' +
    ' - from simple landing page to complex server side rendering progressive web application with offline support. ',
  experience: [
    {
      startDate: 'May 2018',
      endDate: 'present',
      company: 'LightIT',
      role: 'Front-End Developer',
      link: 'https://light-it.net/',
      list: [
        {
          text: 'Landing website for trip related project',
          technologies: 'HTML5, CSS3, Typescript, React, Redux, Next.js, Material-UI.',
        },
        {
          text: 'Trip related project with firestore database. ' +
            'Responsible for UI development. ',
          technologies: 'HTML5, CSS3, Typescript, React, Redux, Redux-form, Material-UI, Firebase, Firestore.',
        },
        {
          text: 'Financial institution project specializing in short term high-risk lending. ' +
            'Responsible for UI development and future supporting. ',
          technologies: 'HTML5, CSS3, Typescript, React, Redux, Redux-form, Material-UI, AWS Amplify.'
        },
        {
          text: 'Form widget for Wordpress website. ',
          technologies: 'HTML5, CSS3, Typescript, React, Redux, Redux-form.'
        },
        {
          text: 'Cryptocurrency news analysis project. ' +
            'Implemented new design and rebuilt from SPA to SSR + PWA. ',
          technologies: 'HTML5, CSS3, React, Redux, SSR (Next.js),' +
            ' Styled-components, Semantic-UI, Highcharts, Jest, Enzyme.',
        },
        {
          text: 'Different short-term projects.'
        },
        {
          title: 'LightIT Frontend Labs',
          text: 'took part as one of speakers.',
        },
        {
          text: 'Interns code review and training, interviews conducting.'
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
          title: 'Local Insights',
          text: 'data provider focused on real time property records, building permits, tax assessments and more.' +
            'I was responsible for adding new features, design update, ' +
            'bug fixing, code refactoring of existing application. ',
          link: 'https://localinsights.io/',
          technologies: 'HTML5, CSS3, React, Redux, SSR (Next.js), Material-UI, Firebase.'
        }
      ],
    },
    {
      startDate: 'April 2018',
      endDate: 'May 2018',
      company: 'CHP',
      role: 'Front-End Developer',
      list: [
        {
          text: 'Landing for local air conditioning company.',
          link: 'https://chp.zp.ua/',
          technologies: 'HTML5, CSS3, React, Redux, Typescript.'
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
          name: 'JavaScript',
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
        {name: 'SSR (Next.js)', important: true},
        {name: 'Jest + enzyme'},
        {name: 'AWS-Amplify'},
        {name: 'Semantic-UI'},
        {name: 'Highcharts'},
        {name: 'Bootstrap'},
        {name: 'Functional programming'},
        {name: 'GraphQL'},
        {name: 'Apollo'},
      ]
    },
    {
      title: 'Web',
      list: [
        {name: 'HTML5'},
        {name: 'CSS3'},
        {name: 'PWA'},
        {name: 'Firebase', important: true},
        {name: 'Firestore'},
        {name: 'Storybook'},
        {name: 'SCSS'},
        {name: 'Styled-components'},
        {name: 'Responsive Design'},
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
      level: 'Advanced'
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

const uk: CVData = {
  profile: 'Я Front-End Розробник, що може створити вебсайти та додатки різноманітної складності' +
    ' - від простих лендінгів до комплексних PWA додатків з SSR та підтримкою оффлайн. ',
  experience: [
    {
      startDate: 'Травень 2018',
      endDate: 'теп. час',
      company: 'LightIT',
      role: 'Front-End Розробник',
      link: 'https://light-it.net/',
      list: [
        {
          text: 'Лендінг сторінка для проекту, пов\'язаному з подорожами',
          technologies: 'HTML5, CSS3, Typescript, React, Redux, Next.js, Material-UI.',
        },
        {
          text: 'Проект, пов\'язаний з подорожами та використанням бази данних firestore. ' +
            'Відповідальний за розробку UI. ',
          technologies: 'HTML5, CSS3, Typescript, React, Redux, Redux-form, Material-UI, Firebase, Firestore.',
        },
        {
          text: 'Проект фінансової установи, ' +
            'що спеціалізується на короткостроковому високоризиковому кредитуванні. ' +
            'Відповідальний за розробку UI та подальшу підтримку.',
          technologies: 'HTML5, CSS3, Typescript, React, Redux, Redux-form, Material-UI, AWS Amplify.',
        },
        {
          text: 'Форма-віджет для сайту на Wordpress. ',
          technologies: 'HTML5, CSS3, Typescript, React, Redux, Redux-form.'
        },
        {
          text: 'Проект для аналізу новин по кріптовалютам. ' +
            'Впроваджено новий дизайн та перебудовано з SPA на SSR + PWA. ',
          technologies: 'HTML5, CSS3, React, Redux, SSR (Next.js),' +
            ' Styled-components, Semantic-UI, Highcharts, Jest, Enzyme.',
        },
        {
          text: 'Різні короткострокові проекти.'
        },
        {
          title: 'LightIT Frontend Labs',
          text: 'Приймав участь в курсах як один із спікеров.',
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
          title: 'Local Insights',
          text: 'провайдер даних зосереджений на обліку нерухомості в режимі реального часу, дозволах на будівництво,' +
            ' податкових нарахувань та інше. ' +
            'Я був відповідальний за додавання нових функцій, оновлення дизайну, ' +
            'виправлення багів, рефакторинг коду.',
          link: 'https://localinsights.io/',
          technologies: 'HTML5, CSS3, React, Redux, SSR (Next.js), Material-UI, Firebase.'
        }
      ],
    },
    {
      startDate: 'Квітень 2018',
      endDate: 'Травень 2018',
      company: 'CHP',
      role: 'Front-End Розробник',
      list: [
        {
          text: 'Лендінг для локальної компанії з продажу кондиціонерів.',
          link: 'https://chp.zp.ua/',
          technologies: 'HTML5, CSS3, React, Redux, Typescript.'
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
          name: 'JavaScript',
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
        {name: 'SSR (Next.js)', important: true},
        {name: 'Jest + enzyme'},
        {name: 'AWS-Amplify'},
        {name: 'Semantic-UI'},
        {name: 'Highcharts'},
        {name: 'Bootstrap'},
        {name: 'Функціональне програмування'},
        {name: 'GraphQL'},
        {name: 'Apollo'},
      ]
    },
    {
      title: 'Веб-технології',
      list: [
        {name: 'HTML5'},
        {name: 'CSS3'},
        {name: 'PWA'},
        {name: 'Firebase', important: true},
        {name: 'Firestore'},
        {name: 'Storybook'},
        {name: 'SCSS'},
        {name: 'Styled-components'},
        {name: 'Responsive Design'},
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
      level: 'Передовий'
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
  dateOfBirth: '1987-07-28',
  addition: 'React',
  phone: '+38 (050) 543-60-17',
  email: 'severynov.sergii@gmail.com',
  github: 'https://github.com/severjason',
  website: 'https://sergii.severynov.com/en',
  facebook: 'https://www.facebook.com/severjason',
  linkedIn: 'https://www.linkedin.com/in/severjason',
  en,
  uk,
};// tslint:disable-next-line:max-line-length


export const photo = img;
