import React from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';

const styles = (theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(1)
  },
  avatar: {
    width: '100%',
    maxWidth: 400,
  }
});

const Header: React.FC<WithStyles<typeof styles>> = ({classes}) => {
  return (
    <Grid className={classes.root}>
      <Grid container={true}>
        <Grid className={classes.avatar}>
          Avatar
        </Grid>
        <Grid>
          <Typography>
            <FormattedMessage id="cv.firstName" />
            {` `}
            <FormattedMessage id="cv.lastName" />
          </Typography>
        </Grid>
      </Grid>
      <Grid container={true}>
        socials
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Header);