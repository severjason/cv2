import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CalendarIcon from '@material-ui/icons/DateRange';
import OpenIcon from '@material-ui/icons/Launch';

import { ExperienceItem } from '../types';
import { ListIcon } from '../shared';

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
  company: {
    // color: theme.palette.text.primary,
    fontWeight: 600,
  },
  divider: {
    margin: theme.spacing(0, 1),
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
  iconButton: {
    padding: theme.spacing(0.625),
  },
  listItem: {
    padding: 0,
  },
  visit: {
    fontSize: 16,
  },
}));

interface Props extends ExperienceItem {
}

const Item: React.FC<Props> = ({company, endDate, role, startDate, list, link}) => {

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container={true} wrap="wrap" direction="column">
        <Grid container={true}>
          <Typography variant="body2" className={classes.role}>
            {role}
            <span className={classes.divider}>{`|`}</span>
          </Typography>
          <Typography color="primary" variant="body2" className={classes.company}>
            {company}
          </Typography>
          {link && (
            <IconButton
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
              className={classes.iconButton}
            >
              <OpenIcon className={classes.visit}/>
            </IconButton>
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
          {list.map(item => (
            <ListItem key={item.text} className={classes.listItem}>
              <ListIcon/>
              <ListItemText>
                {item.text}
                {item.link && (
                  <IconButton
                    color="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.link}
                    className={classes.iconButton}
                  >
                    <OpenIcon className={classes.visit}/>
                  </IconButton>
                )}
                <br/>
                {item.technologies && (
                  `Technologies: ${item.technologies}.`
                )}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default Item;
