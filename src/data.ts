import { CVData } from './app/types';

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
  dateOfBirth: '28.07.1987',
  phone: '+38 (050) 543-60-17',
  email: 'severynov.sergii@gmail.com',
  github: 'https://github.com/severjason',
  website: 'https://jswebdev.net',
  facebook: 'https://www.facebook.com/severjason',
  linkedIn: 'https://www.linkedin.com/in/severjason',
  en,
  uk,
};

// tslint:disable-next-line:max-line-length
export const photo: string = 'data:image/jpeg;base64,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FFUJhKoVTjsAaZL8vQUUUwFVv3SvgZNEZ3Oq9AT2ooqiSR2KLx7Vy/i0/wCmWC9grf0oopPYqG5kjgio7qRoyoGDn1ooqDQbEDJPGjMcMwBxXpNhGIF8uPIXIooqokVDYgG5sHtWjaORIAMUUVqjnZi6uix6nMqgAZziiiivDqfGz2IfCj//2f/hDi9odHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24geG1sbnM6ZXhpZj0naHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8nPgogIDxleGlmOk1ha2U+QXBwbGU8L2V4aWY6TWFrZT4KICA8ZXhpZjpNb2RlbD5pUGhvbmUgWFM8L2V4aWY6TW9kZWw+CiAgPGV4aWY6T3JpZW50YXRpb24+VG9wLWxlZnQ8L2V4aWY6T3JpZW50YXRpb24+CiAgPGV4aWY6WFJlc29sdXRpb24+NzI8L2V4aWY6WFJlc29sdXRpb24+CiAgPGV4aWY6WVJlc29sdXRpb24+NzI8L2V4aWY6WVJlc29sdXRpb24+CiAgPGV4aWY6UmVzb2x1dGlvblVuaXQ+SW5jaDwvZXhpZjpSZXNvbHV0aW9uVW5pdD4KICA8ZXhpZjpTb2Z0d2FyZT4xMi4yPC9leGlmOlNvZnR3YXJlPgogIDxleGlmOkRhdGVUaW1lPjIwMTk6MDY6MjggMTU6MDk6MDQ8L2V4aWY6RGF0ZVRpbWU+CiAgPGV4aWY6WUNiQ3JQb3NpdGlvbmluZz5DZW50ZXJlZDwvZXhpZjpZQ2JDclBvc2l0aW9uaW5nPgogIDxleGlmOkNvbXByZXNzaW9uPkpQRUcgY29tcHJlc3Npb248L2V4aWY6Q29tcHJlc3Npb24+CiAgPGV4aWY6WFJlc29sdXRpb24+NzI8L2V4aWY6WFJlc29sdXRpb24+CiAgPGV4aWY6WVJlc29sdXRpb24+NzI8L2V4aWY6WVJlc29sdXRpb24+CiAgPGV4aWY6UmVzb2x1dGlvblVuaXQ+SW5jaDwvZXhpZjpSZXNvbHV0aW9uVW5pdD4KICA8ZXhpZjpFeHBvc3VyZVRpbWU+MS8yOTIgc2VjLjwvZXhpZjpFeHBvc3VyZVRpbWU+CiAgPGV4aWY6Rk51bWJlcj5mLzIsNDwvZXhpZjpGTnVtYmVyPgogIDxleGlmOkV4cG9zdXJlUHJvZ3JhbT5Ob3JtYWwgcHJvZ3JhbTwvZXhpZjpFeHBvc3VyZVByb2dyYW0+CiAgPGV4aWY6SVNPU3BlZWRSYXRpbmdzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGk+MTY8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvZXhpZjpJU09TcGVlZFJhdGluZ3M+CiAgPGV4aWY6RXhpZlZlcnNpb24+RXhpZiBWZXJzaW9uIDIuMjE8L2V4aWY6RXhpZlZlcnNpb24+CiAgPGV4aWY6RGF0ZVRpbWVPcmlnaW5hbD4yMDE5OjA2OjI4IDE1OjA5OjA0PC9leGlmOkRhdGVUaW1lT3JpZ2luYWw+CiAgPGV4aWY6RGF0ZVRpbWVEaWdpdGl6ZWQ+MjAxOTowNjoyOCAxNTowOTowNDwvZXhpZjpEYXRlVGltZURpZ2l0aXplZD4KICA8ZXhpZjpDb21wb25lbnRzQ29uZmlndXJhdGlvbj4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpPlkgQ2IgQ3IgLTwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC9leGlmOkNvbXBvbmVudHNDb25maWd1cmF0aW9uPgogIDxleGlmOlNodXR0ZXJTcGVlZFZhbHVlPjgsMTkgRVYgKDEvMjkyIHNlYy4pPC9leGlmOlNodXR0ZXJTcGVlZFZhbHVlPgogIDxleGlmOkFwZXJ0dXJlVmFsdWU+Miw1MyBFViAoZi8yLDQpPC9leGlmOkFwZXJ0dXJlVmFsdWU+CiAgPGV4aWY6QnJpZ2h0bmVzc1ZhbHVlPjksMDIgRVYgKDE3ODEsMjcgY2QvbV4yKTwvZXhpZjpCcmlnaHRuZXNzVmFsdWU+CiAgPGV4aWY6RXhwb3N1cmVCaWFzVmFsdWU+MCwwMCBFVjwvZXhpZjpFeHBvc3VyZUJpYXNWYWx1ZT4KICA8ZXhpZjpNZXRlcmluZ01vZGU+UGF0dGVybjwvZXhpZjpNZXRlcmluZ01vZGU+CiAgPGV4aWY6Rmxhc2ggcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogIDwvZXhpZjpGbGFzaD4KICA8ZXhpZjpGb2NhbExlbmd0aD42LDAgbW08L2V4aWY6Rm9jYWxMZW5ndGg+CiAgPGV4aWY6U3ViamVjdEFyZWE+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaT5XaXRoaW4gcmVjdGFuZ2xlICh3aWR0aCAzNDcsIGhlaWdodCAzMzApIGFyb3VuZCAoeCx5KSA9ICgxNzkwLDYwNCk8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvZXhpZjpTdWJqZWN0QXJlYT4KICA8ZXhpZjpNYWtlck5vdGU+OTc4IGJ5dGVzIHVuZGVmaW5lZCBkYXRhPC9leGlmOk1ha2VyTm90ZT4KICA8ZXhpZjpTdWJTZWNUaW1lT3JpZ2luYWw+MjMyPC9leGlmOlN1YlNlY1RpbWVPcmlnaW5hbD4KICA8ZXhpZjpTdWJTZWNUaW1lRGlnaXRpemVkPjIzMjwvZXhpZjpTdWJTZWNUaW1lRGlnaXRpemVkPgogIDxleGlmOkZsYXNoUGl4VmVyc2lvbj5GbGFzaFBpeCBWZXJzaW9uIDEuMDwvZXhpZjpGbGFzaFBpeFZlcnNpb24+CiAgPGV4aWY6Q29sb3JTcGFjZT5JbnRlcm5hbCBlcnJvciAodW5rbm93biB2YWx1ZSA2NTUzNSk8L2V4aWY6Q29sb3JTcGFjZT4KICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzAyNDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjQwMzI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogIDxleGlmOlNlbnNpbmdNZXRob2Q+T25lLWNoaXAgY29sb3IgYXJlYSBzZW5zb3I8L2V4aWY6U2Vuc2luZ01ldGhvZD4KICA8ZXhpZjpTY2VuZVR5cGU+RGlyZWN0bHkgcGhvdG9ncmFwaGVkPC9leGlmOlNjZW5lVHlwZT4KICA8ZXhpZjpDdXN0b21SZW5kZXJlZD43PC9leGlmOkN1c3RvbVJlbmRlcmVkPgogIDxleGlmOkV4cG9zdXJlTW9kZT5BdXRvIGV4cG9zdXJlPC9leGlmOkV4cG9zdXJlTW9kZT4KICA8ZXhpZjpXaGl0ZUJhbGFuY2U+QXV0byB3aGl0ZSBiYWxhbmNlPC9leGlmOldoaXRlQmFsYW5jZT4KICA8ZXhpZjpGb2NhbExlbmd0aEluMzVtbUZpbG0+NTI8L2V4aWY6Rm9jYWxMZW5ndGhJbjM1bW1GaWxtPgogIDxleGlmOlNjZW5lQ2FwdHVyZVR5cGU+U3RhbmRhcmQ8L2V4aWY6U2NlbmVDYXB0dXJlVHlwZT4KICA8ZXhpZjpJbnRlcm9wZXJhYmlsaXR5SW5kZXg+TjwvZXhpZjpJbnRlcm9wZXJhYmlsaXR5SW5kZXg+CiAgPGV4aWY6SW50ZXJvcGVyYWJpbGl0eVZlcnNpb24+NDAsIDE1LCA1Miw2NDwvZXhpZjpJbnRlcm9wZXJhYmlsaXR5VmVyc2lvbj4KICA8ZXhpZjpHUFNMb25naXR1ZGVSZWY+RTwvZXhpZjpHUFNMb25naXR1ZGVSZWY+CiAgPGV4aWY6R1BTTG9uZ2l0dWRlPjExNywgMTQsIDE5LDgyPC9leGlmOkdQU0xvbmdpdHVkZT4KICA8ZXhpZjpHUFNBbHRpdHVkZVJlZj5TZWEgbGV2ZWw8L2V4aWY6R1BTQWx0aXR1ZGVSZWY+CiAgPGV4aWY6R1BTQWx0aXR1ZGU+NDk1LDkwMjI8L2V4aWY6R1BTQWx0aXR1ZGU+CiAgPGV4aWY6R1BTVGltZVN0YW1wPjA3OjA5OjAyLDQyPC9leGlmOkdQU1RpbWVTdGFtcD4KICA8ZXhpZjpHUFNTcGVlZFJlZj5LPC9leGlmOkdQU1NwZWVkUmVmPgogIDxleGlmOkdQU1NwZWVkPjAsNTkxMjc8L2V4aWY6R1BTU3BlZWQ+CiAgPGV4aWY6R1BTSW1nRGlyZWN0aW9uUmVmPlQ8L2V4aWY6R1BTSW1nRGlyZWN0aW9uUmVmPgogIDxleGlmOkdQU0ltZ0RpcmVjdGlvbj4zMzMsNjEzPC9leGlmOkdQU0ltZ0RpcmVjdGlvbj4KICA8ZXhpZjpHUFNEZXN0QmVhcmluZ1JlZj5UPC9leGlmOkdQU0Rlc3RCZWFyaW5nUmVmPgog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';
