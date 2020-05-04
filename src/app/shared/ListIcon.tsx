import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
// import Icon from '@material-ui/icons/ChevronRightOutlined';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: theme.spacing(4),
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: 24,
    paddingBottom: theme.spacing(0.25),
    textAlign: 'center',
    width: '100%',
  }
}));

const ListIcon = () => {

  const classes = useStyles();

  return (
    <ListItemIcon className={classes.root}>
      <Typography className={classes.icon}>
        {'\u2022'}
      </Typography>

    </ListItemIcon>
  );
};

export default ListIcon;
