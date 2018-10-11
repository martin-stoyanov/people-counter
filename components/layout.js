import React from 'react';
import { Grommet, Box } from 'grommet';
// import { materiallight } from 'grommet-controls/themes';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Grommet style={{ height: 'auto', minHeight: '100vh' }}>
        <Box style={{ height: 'auto', minHeight: '100vh' }}>
          <Head>
            <title>counter</title>
          </Head>
          <Header />
          <Box flex={true}>
            {children}
          </Box>
          <Footer />
        </Box>
      </Grommet>
    );
  }
}
export default Layout;
