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
          text: 'test info',
          link: 'https://light-it.net/'
        },
        {
          text: 'test info 2',
        }
      ],
    },
    {
      startDate: 'August 2018',
      endDate: 'April 2019',
      company: 'Upwork',
      role: 'Front-End Developer',
      link: 'https://www.upwork.com/o/profiles/users/_~01fff6263f5fd6f506/',
      list: [],
    }
  ],
  skills: [
    {
      title: 'Main',
      list: [
        {
          name: 'React',
          important: true,
        },
        {
          name: 'Typescript',
        }
      ]
    },
    {
      title: 'Other',
      list: [
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        }
      ]
    }
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
      role: 'Finance',
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
      startDate: 'Май 2018',
      endDate: 'наст. время',
      company: 'LightIT',
      role: 'Front-End Розробник',
      link: 'https://light-it.net/',
      list: [],
    },
    {
      startDate: 'Август 2018',
      endDate: 'Апрель 2019',
      company: 'Upwork',
      role: 'Front-End Розробник',
      link: 'https://www.upwork.com/o/profiles/users/_~01fff6263f5fd6f506/',
      list: [],
    }
  ],
  skills: [
    {
      title: 'Основные',
      list: [
        {
          name: 'React',
          important: true,
        },
        {
          name: 'Typescript',
        }]
    }
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
      company: 'Brain Academy, Запо',
      role: 'Web Розробка',
    },
    {
      startDate: '2005',
      endDate: '2009',
      company: 'Запорожский национальный технический университет',
      role: 'Финансы и кредит',
    },
    {
      startDate: '2004',
      endDate: '2009',
      company: 'Запорожский национальный технический университет',
      role: 'Технология строения авиационных двигателей',
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
