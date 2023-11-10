// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
  </>
);

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};

export default App;
