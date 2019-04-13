/**
 *
 * ArticlePage
 *
 */

import React from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

/* Utils */
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

/* Shared Components */
import Nav from 'containers/Nav';

/* Locals */
import saga from './saga';
import reducer from './reducer';
import { createComment, likeArticle, loadArticle } from './actions';
import makeSelectArticlePage, { makeSelectArticle } from './selectors';

/* Local Components */
import Header from './Header';
import Gallary from './Gallary';
import Info from './Info';
import Comments from './Comments';
import { RouteComponentProps } from 'react-router-dom';
import { Query } from './types';

/* eslint-disable react/prefer-stateless-function */
export class ArticlePage extends React.PureComponent<Props> {
  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    this.props.handleLoadArticle({ id: id as string });
  }

  render() {
    const { article } = this.props;
    return (
      <ArticlePageContainer>
        <Nav />
        {article && (
          <React.Fragment>
            <Header {...this.props} />
            <Gallary {...this.props} />
            <Info {...this.props} />
            <Comments {...this.props} />
          </React.Fragment>
        )}
      </ArticlePageContainer>
    );
  }
}

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = createStructuredSelector({
  articlePage: makeSelectArticlePage(),
  article: makeSelectArticle(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleCreateComment: (comment: string) => {
      // ignore empty comments
      if (comment.length > 0) {
        dispatch(createComment(comment));
      }
    },
    handleLoadArticle: (query: Query) => dispatch(loadArticle(query)),
    handleLikeArticle: () => dispatch(likeArticle()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'articlePage', reducer });
const withSaga = injectSaga({ key: 'articlePage', saga, mode: '' });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ArticlePage);
