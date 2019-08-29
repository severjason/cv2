import React  from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Titles from './Titles';
import Photo from './Photo';
import Socials from './Socials';
import LangSwitcher from './LangSwitcher';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
  },
}));

const Header = () => {

  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.root}>
        <LangSwitcher/>
        <Grid container={true}>
          <Photo/>
          <Titles/>
        </Grid>
      </Grid>
      <Socials/>
    </div>
  );
};

export default Header;
