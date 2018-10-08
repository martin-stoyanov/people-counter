import React from 'react';
import { Box, Heading, Text, Button } from 'grommet';
import Link from 'next/link';

const Header = () => (
  <Box direction='row' pad='medium' align='center' justify='between' background='dark-2'>
    <Box direction='row' justify='left' gap='small'>
      <Heading margin='none' level='3'>Counter</Heading>
    </Box>
  </Box>
);

export default Header;
