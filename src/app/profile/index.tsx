import React from 'react';
import Grid from '@material-ui/core/Grid';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import { useIntl } from 'react-intl';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { Title } from '../shared';
import data from '../../data';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Profile = () => {

  const intl = useIntl();

  const profileData = data[intl.locale] && data[intl.locale].profile;

  const classes = useStyles();

  return (
    <Grid container={true}>
      <Title icon={AssignmentInd} text={`${intl.messages['cv.profile']}`}/>
      <Paper className={classes.paper}>
        {profileData}
      </Paper>
    </Grid>
  );
};

export default Profile;