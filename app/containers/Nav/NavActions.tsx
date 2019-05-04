import React from 'react';
import styled from 'styled-components';

import { AuthLink, SubmitLink } from 'Routes';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';

import { faPlus, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { User } from 'types';

const SideList = styled(List)`
  width: 200px;
` as typeof List;

type Props = {
  user?: User;
  handleLogout: () => void;
};

class NavActions extends React.Component<Props> {
  state = {
    open: false,
  };

  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { user, handleLogout } = this.props;

    const list = (
      <SideList>
        <ListItem button={true} component={SubmitLink}>
          <ListItemIcon>
            <FontAwesomeIcon size="lg" icon={faPlus} />
          </ListItemIcon>
          <ListItemText primary="SUBMIT" />
        </ListItem>
        {user ? (
          <ListItem button={true} onClick={handleLogout}>
            <ListItemIcon>
              <FontAwesomeIcon size="lg" icon={faSignOutAlt} />
            </ListItemIcon>
            <ListItemText primary="LOGOUT" />
          </ListItem>
        ) : (
          <ListItem button={true} component={AuthLink}>
            <ListItemIcon>
              <FontAwesomeIcon size="lg" icon={faSignInAlt} />
            </ListItemIcon>
            <ListItemText primary="LOGIN" />
          </ListItem>
        )}
      </SideList>
    );
    return (
      <Grid item={true} container={true} xs={2} justify="flex-end">
        <Button onClick={this.toggleDrawer}>
          <MenuIcon />
        </Button>
        <SwipeableDrawer anchor="right" open={this.state.open} onClose={this.toggleDrawer} onOpen={this.toggleDrawer}>
          <div>{list}</div>
        </SwipeableDrawer>
      </Grid>
    );
  }
}

export default NavActions;
