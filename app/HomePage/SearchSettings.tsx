import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import TagList from 'components/TagList';

export const ToolbarDivider = styled.div`
  background-color: #ceece7;
  width: 2px;
  height: 30px;
  margin-left: 40px;
  margin-right: 40px;
`;

export const SortLabel = styled(Typography)`
  margin-right: 10px;
  font-size: 12px;
  font-weight: 500;
` as typeof Typography;

export const MenuLabel = styled(Typography)`
  padding-left: 10px;
  padding-right: 10px;
` as typeof Typography;

export const StyledMenuItem = styled(MenuItem)`
  height: 10px;
  background-color: white;
  p {
    color: ${props => (props.selected ? '#57c1ae' : 'black')};
  }
` as typeof MenuItem;

export const StyledSelect = styled(Select)`
  width: 64px;
  font-weight: 300;
  p,
  svg {
    color: #57c1ae;
  }
` as typeof Select;

export const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  border-bottom: solid 1px;
  border-color: #ccddda;
` as typeof AppBar;

export const StyledToolbar = styled(Toolbar)`
  min-height: 40px;
` as typeof Toolbar;

type Props = {};
type State = {
  sortBy: 'new' | 'top' | 'hot';
  open: any;
};

export class SearchSettings extends React.Component<Props, State> {
  readonly state: State = {
    sortBy: 'new',
    open: false,
  };

  handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    const { handleOnChange } = this;
    const { sortBy } = this.state;
    return (
      <StyledAppBar color="inherit" position="relative">
        <StyledToolbar>
          <SortLabel>SORT</SortLabel>
          <StyledSelect
            disableUnderline={true}
            value={sortBy}
            onChange={handleOnChange}
            inputProps={{ name: 'sortBy' }}
            MenuProps={{
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              MenuListProps: { style: { padding: '0' } },
            }}
          >
            <StyledMenuItem value={'new'} style={{ backgroundColor: 'transparent' }}>
              <MenuLabel>NEW</MenuLabel>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem value={'top'} style={{ backgroundColor: 'transparent' }}>
              <MenuLabel>TOP</MenuLabel>
            </StyledMenuItem>
            <Divider />
          </StyledSelect>
          <ToolbarDivider />
          <TagList tags={['test', 'one']} />
        </StyledToolbar>
      </StyledAppBar>
    );
  }
}

export default SearchSettings;
