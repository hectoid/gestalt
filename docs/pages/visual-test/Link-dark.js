// @flow strict
import { type Node } from 'react';
import { Text, Link, Box, ColorSchemeProvider } from 'gestalt';

export default function Screenshot(): Node {
  return (
    <ColorSchemeProvider colorScheme="dark">
      <Box color="white" display="inlineBlock" padding={1}>
        <Text>
          <Link href="https://pinterest.com">
            <Box padding={2}>Visit our help center</Box>
          </Link>
        </Text>
      </Box>
    </ColorSchemeProvider>
  );
}