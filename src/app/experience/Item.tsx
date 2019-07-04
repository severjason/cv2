import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListIcon from '@material-ui/icons/Done';
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
  time: {
    alignItems: 'center',
    display: 'flex',
    paddingRight: theme.spacing(1),
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: 14,
  }
}));

interface Props extends ExperienceItem, InjectedIntlProps {
}

const Item: React.FC<Props> = ({company, endDate, role, startDate, intl, list}) => {

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container={true} wrap="wrap">
        <Grid item={true} xs={12} sm={5} className={classes.time}>
          <Typography color="primary">
            {`${startDate} - ${endDate}`}
          </Typography>
        </Grid>
        <Grid item={true} xs={12} sm={7} >
          <Typography>
            {role}
            {` ${intl.messages['cv.at']} `}
            <span className={classes.company}>
              {company}
            </span>
          </Typography>
        </Grid>
      </Grid>
      {list.length > 0 && (
        <List disablePadding={true}>
          {list.map(text => (
            <ListItem key={text} className={classes.listItem}>
              <ListItemIcon>
                <ListIcon className={classes.icon} />
              </ListItemIcon>
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

export default injectIntl(Item);
