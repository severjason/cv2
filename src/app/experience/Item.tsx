import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CalendarIcon from '@material-ui/icons/DateRange';
import OpenIcon from '@material-ui/icons/Launch';
import MarkerIcon from '@material-ui/icons/Room';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ListIcon } from '../shared';
import { ExperienceItem } from '../types';

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
    paddingRight: theme.spacing(0.5),
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
  location: {
    display: 'flex',
    alignItems: 'center',
  },
  company: {
    fontWeight: 600,
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

const Item: React.FC<ExperienceItem> =
  ({
     company,
     endDate,
     role,
     startDate,
     list,
     location,
     link
   }) => {

    const {t} = useTranslation();

    const classes = useStyles();

    return (
      <Paper className={classes.root}>
        <Grid container wrap="wrap" direction="column">
          <Grid container>
            <Typography variant="body2" className={classes.role}>
              {role}
              <span>{` ${t('at')}`}</span>
            </Typography>
            {link ? (
              <Link
                color="textPrimary"
                target="_blank"
                rel="noopener noreferrer"
                href={link}
                variant="body2"
                underline="always"
                className={classes.company}
                title={`${t('visit')}`}
              >
                {company}
              </Link>
            ) : (
              <Typography variant="body2" className={classes.company}>
                {company}
              </Typography>
            )}
          </Grid>
          <Grid container>
            <Typography className={classes.location}>
              <MarkerIcon className={classes.icon}/>
            </Typography>
            <Typography>
              {location}
            </Typography>
          </Grid>
          <Grid container className={classes.time}>
            <CalendarIcon color="primary" className={classes.icon}/>
            <Typography color="primary">
              {`${startDate} - ${endDate}`}
            </Typography>
          </Grid>
        </Grid>
        {list.length > 0 && (
          <List disablePadding>
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
                      title={`${t('visit')}`}
                    >
                      <OpenIcon className={classes.visit}/>
                    </IconButton>
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
