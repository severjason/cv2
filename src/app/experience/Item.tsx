import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import CalendarIcon from '@material-ui/icons/DateRange';

import { ExperienceItem } from '../interfaces';
import { ListIcon } from '../shared';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  role: {
    fontWeight: 600,
  },
  company: {
    // color: theme.palette.text.primary,
    fontWeight: 600,
  },
  link: {
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },
  divider: {
    margin: `0 ${theme.spacing(1)}px`,
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

interface Props extends ExperienceItem {
}

const Item: React.FC<Props> = ({company, endDate, role, startDate, list, link}) => {

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container={true} wrap="wrap" direction="column">
        <Grid container={true} >
          <Typography variant="body2" className={classes.role}>
            {role}
            <span className={classes.divider}>{`|`}</span>
          </Typography>
          {link ? (
            <a color="primary" href={link} target="_blank" className={classes.link} rel="noopener noreferrer">
              <Typography color="primary" variant="body2" className={classes.company}>
                {company}
              </Typography>
            </a>
          ) : (
            <Typography color="primary" variant="body2" className={classes.company}>
              {company}
            </Typography>
          )}

        </Grid>
        <Grid item={true} className={classes.time}>
          <CalendarIcon color="primary" className={classes.icon}/>
          <Typography color="primary">
            {`${startDate} - ${endDate}`}
          </Typography>
        </Grid>
      </Grid>
      {list.length > 0 && (
        <List disablePadding={true}>
          {list.map(text => (
            <ListItem key={text} className={classes.listItem}>
              <ListIcon/>
              <ListItemText>
                {text}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default Item;