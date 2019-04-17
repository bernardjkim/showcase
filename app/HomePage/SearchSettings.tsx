import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import TagList from 'components/TagList';

import { setSort } from './actions';
import { makeSelectSort, makeSelectTags } from './selectors';

export const ClearAction = styled(Button)`
  font-size: 12px;
  background-color: transparent;
` as typeof Button;

export const ToolbarDivider = styled.div`
  background-color: #ceece7;
  width: 2px;
  height: 30px;
`;

export const ToolbarDividerLeft = styled(ToolbarDivider)`
  margin-left: 20px;
`;

export const ToolbarDividerRight = styled(ToolbarDivider)`
  margin-right: 20px;
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

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
type State = {};

const mapStateToProps = createStructuredSelector({
  tags: makeSelectTags(),
  sort: makeSelectSort(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSetSort: (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    if (sort === 'new' || 'top') {
      dispatch(setSort(sort));
    }
  },
});

export class SearchSettings extends React.Component<Props, State> {
  handleDeleteTag = (tag: string) => () => {
    const { tags, history } = this.props;
    const tagToDelete = this.props.tags.indexOf(tag);
    tags.splice(tagToDelete, 1);
    if (tags.length > 0) {
      history.push(`/search?term=${tags}`);
    } else {
      history.push(`/`);
    }
  };

  handleClearTags = () => {
    this.props.history.push(`/`);
  };

  render() {
    const { handleDeleteTag, handleClearTags } = this;
    const { tags, sort, handleSetSort } = this.props;
    return (
      <StyledAppBar color="inherit" position="relative">
        <StyledToolbar>
          <SortLabel>SORT</SortLabel>
          <StyledSelect
            disableUnderline={true}
            value={sort}
            onChange={handleSetSort}
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
          </StyledSelect>
          {tags.length > 0 && (
            <React.Fragment>
              <ToolbarDividerLeft />
              <TagList tags={tags} handleDeleteTag={handleDeleteTag} />
              <ToolbarDividerRight />
              <ClearAction onClick={handleClearTags}>CLEAR</ClearAction>
            </React.Fragment>
          )}
        </StyledToolbar>
      </StyledAppBar>
    );
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(compose(withConnect)(SearchSettings));
