import { Component } from 'react';
import { withRouter } from 'react-router';
import { arrayOf, element, shape, string } from 'prop-types';

class ScrollToTop extends Component {
  componentDidUpdate({ location: prevLocation }) {
    const { location } = this.props;
    if (location.pathname !== prevLocation.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollToTop.propTypes = {
  location: shape({
    pathname: string.isRequired
  }).isRequired,
  children: arrayOf(element).isRequired
};

export default withRouter(ScrollToTop);
