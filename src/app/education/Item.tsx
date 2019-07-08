import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CalendarIcon from '@material-ui/icons/DateRange';

import { EducationItem } from '../interfaces';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  role: {
    fontWeight: 600,
  },
  link: {
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },
  time: {
    alignItems: 'center',
    display: 'flex',
    paddingRight: theme.spacing(1),
  },
  icon: {
    fontSize: 18,
    paddingRight: theme.spacing(1),
  },
  listItem: {
    padding: 0,
  },
}));

interface Props extends EducationItem {
}

const Item: React.FC<Props> = ({company, endDate, role, startDate, addition}) => {

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container={true} wrap="wrap" direction="column">
        <Typography variant="body2" className={classes.role}>
          {role}
        </Typography>
        <Grid item={true} className={classes.time}>
          <CalendarIcon color="primary" className={classes.icon}/>
          <Typography color="primary">
            {`${startDate} - ${endDate}`}
          </Typography>
        </Grid>
        <Typography >
          {company}
        </Typography>

      </Grid>
    </Paper>
  );
};

export default Item;
