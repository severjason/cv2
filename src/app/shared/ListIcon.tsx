import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/icons/ChevronRightOutlined';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: theme.spacing(4),
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: 18,
  }
}));

const ListIcon = () => {

  const classes = useStyles();

  return (
    <ListItemIcon className={classes.root}>
      <Icon className={classes.icon}/>
    </ListItemIcon>
  );
};

export default ListIcon;