import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import data from '../../data';
import { Title } from '../shared';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Profile = () => {

  const {t, i18n} = useTranslation();

  const profileData = data[i18n.language] && data[i18n.language].profile;

  const classes = useStyles();

  return (
    <Grid container>
      <Title icon={AssignmentInd} text={`${t('profile')}`}/>
      <Paper className={classes.paper}>
        {profileData}
      </Paper>
    </Grid>
  );
};

export default Profile;
