import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import MarkerIcon from '@material-ui/icons/Room';
import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import data from '../../data';
import { useLang } from '../../hooks';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(1),
  },
  itemRoot: {
    paddingTop: theme.spacing(0.5),
  },
  iconDiv: {
    display: 'flex',
  },
  title: {
    paddingLeft: theme.spacing(1),
  },
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

type ItemProps = {
  title: string | ReactElement;
  icon: ReactElement;
};

const Item: React.FC<ItemProps> = ({title, icon}) => {

  const classes = useStyles();

  return (
    <Grid container={true} className={classes.itemRoot} alignItems="center">
      <Grid item={true} className={classes.iconDiv}>
        {icon}
      </Grid>
      <Grid item={true} className={classes.title}>
        {title}
      </Grid>
    </Grid>
  );
};

const Info = () => {

  const classes = useStyles();

  const {currentLang} = useLang();

  const {t} = useTranslation();

  return (
    <Grid container className={classes.root}>
      <Item
        icon={<PhoneIcon/>}
        title={
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
            href={`tel:${data.phone}`}
            title={t('links.phone')}
          >
            {data.phone}
          </a>
        }
      />
      <Item
        icon={<EmailIcon/>}
        title={
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
            href={`mailto:${data.email}`}
            title={t('links.email')}
          >
            {data.email}
          </a>
        }
      />
      <Item
        icon={<MarkerIcon/>}
        title={
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
            href={data.locationLink}
            title={t('links.location')}
          >
            {data[currentLang].location}
          </a>
        }
      />
    </Grid>
  );
};

export default Info;
