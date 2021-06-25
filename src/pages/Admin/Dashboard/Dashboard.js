import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { AccountProfile, AccountDetails } from './components';
import { uploadImage } from '../../../store/actions';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  }
});

class Dashboard extends Component {

  state = { image: null };

  static propTypes = {
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  };

  render() {
    const { image } = this.state;
    const { classes, user, uploadImage } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={4} md={6} xl={4} xs={12}>
            <AccountProfile
              file={image}
              user={user}
              onUpload={event => {
                const file = event.target.files[0];
                this.setState({ image: file });
              }}
            />
          </Grid>
          <Grid item lg={8} md={6} xl={8} xs={12}>
            <AccountDetails
              file={image}
              user={user}
              uploadImage={uploadImage}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ authState }) => ({
  user: authState.user
});

export default connect(mapStateToProps, { uploadImage })(
  withStyles(styles)(Dashboard)
);
