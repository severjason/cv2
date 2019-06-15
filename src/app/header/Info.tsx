import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import CakeIcon from '@material-ui/icons/Cake';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
/*
import PublicIcon from '@material-ui/icons/Public';
*/
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

import data from '../../data';
import { DEFAULT_DATE_FORMAT } from '../../constants';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(1),
  },
  itemRoot: {
    paddingTop: theme.spacing(0.5),
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

interface ItemProps {
  title: string | ReactElement;
  icon: ReactElement;
}

const Item: React.FC<ItemProps> = ({title, icon}) => {

  const classes = useStyles();

  return (
    <Grid container={true} className={classes.itemRoot} alignItems="center">
      <Grid item={true}>
        {icon}
      </Grid>
      <Grid item={true} className={classes.title}>
        {title}
      </Grid>
    </Grid>
  );
};

const Info: React.FC = () => {

  const classes = useStyles();

  return (
    <Grid container={true} className={classes.root}>
      <Item icon={<CakeIcon/>} title={moment(data.dateOfBirth, DEFAULT_DATE_FORMAT).format('ll')}/>
      <Item icon={<PhoneIcon/>} title={<a className={classes.link} href={`tel:${data.phone}`}>{data.phone}</a>}/>
      <Item icon={<EmailIcon/>} title={<a className={classes.link} href={`mailto:${data.email}`}>{data.email}</a>}/>
{/*      <Item
        icon={<PublicIcon/>}
        title={<a className={classes.link} href={data.website}>{data.website.split('//').pop()}</a>}
      />*/}
    </Grid>
  );
};

export default Info;
