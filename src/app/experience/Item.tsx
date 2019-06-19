import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import { ExperienceItem } from '../interfaces';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  company: {
    fontWeight: 600,
  },
}));

interface Props extends ExperienceItem, InjectedIntlProps {
}

const Item: React.FC<Props> = ({company, endDate, role, startDate, intl}) => {

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container={true} wrap="wrap">
        <Grid item={true} xs={12} sm={4}>
          <Typography color="primary">
            {`${startDate} - ${endDate}`}
          </Typography>
        </Grid>
        <Grid item={true} xs={12} sm={8}>
          <Typography>
            {role}
            {` ${intl.messages['cv.at']} `}
            <span className={classes.company}>
              {company}
            </span>
          </Typography>
        </Grid>

      </Grid>
    </Paper>
  );
};

export default injectIntl(Item);
