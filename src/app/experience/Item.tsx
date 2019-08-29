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
import { useIntl } from 'react-intl';

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
  title: {
    fontWeight: 600,
  },
  technologies: {
    fontStyle: 'italic',
  },
}));

const Item: React.FC<ExperienceItem> = ({company, endDate, role, startDate, list, link}) => {

  const intl = useIntl();

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
              title={`${intl.messages['cv.visit']}`}
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
              {list.length > 1 && (
                <ListIcon/>
              )}
              <ListItemText>
                {item.title && (
                  <span>
                    <span className={classes.title}>
                      {item.title}
                    </span>
                    {` - `}
                  </span>
                )}
                {item.text}
                {item.link && (
                  <IconButton
                    color="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.link}
                    className={classes.iconButton}
                    title={`${intl.messages['cv.visit']}`}
                  >
                    <OpenIcon className={classes.visit}/>
                  </IconButton>
                )}
                <br/>
                {item.technologies && (
                  <span className={classes.technologies}>
                    {item.technologies}
                  </span>
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
