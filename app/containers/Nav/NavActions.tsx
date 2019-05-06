import React from 'react';
import styled from 'styled-components';

import { AuthLink, SubmitLink } from 'Routes';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';

import { faPlus, faSignInAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { User } from 'types';

const SideList = styled(List)`
  width: 200px;
  padding: 0px;
` as typeof List;

const StyledListItem = styled(ListItem)`
  height: 48px;
` as typeof ListItem;

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
        <StyledListItem button={true} onClick={this.toggleDrawer}>
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText primary="MENU" />
        </StyledListItem>
        <Divider />
        {user ? (
          <React.Fragment>
            <StyledListItem button={true}>
              <ListItemIcon>
                <FontAwesomeIcon size="lg" icon={faUser} />
              </ListItemIcon>
              <ListItemText primary="PROFILE" />
            </StyledListItem>
            <StyledListItem button={true} component={SubmitLink}>
              <ListItemIcon>
                <FontAwesomeIcon size="lg" icon={faPlus} />
              </ListItemIcon>
              <ListItemText primary="SUBMIT" />
            </StyledListItem>
            <StyledListItem button={true} onClick={handleLogout}>
              <ListItemIcon>
                <FontAwesomeIcon size="lg" icon={faSignOutAlt} />
              </ListItemIcon>
              <ListItemText primary="LOGOUT" />
            </StyledListItem>
          </React.Fragment>
        ) : (
          <StyledListItem button={true} component={AuthLink}>
            <ListItemIcon>
              <FontAwesomeIcon size="lg" icon={faSignInAlt} />
            </ListItemIcon>
            <ListItemText primary="LOGIN" />
          </StyledListItem>
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
