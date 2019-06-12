import React  from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Titles from './Titles';
import Photo from './Photo';
import Socials from './Socials';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
  },
}));

const Header: React.FC<{}> = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <Grid container={true}>
          <Photo/>
          <Titles/>
        </Grid>
      </Grid>
      <Socials/>
    </React.Fragment>
  );
};

export default Header;
