import { useState } from 'react';
import { Flex, SearchField, SearchGuideLink } from 'gestalt';

export default function Example() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Flex alignItems="start" direction="column" gap={6}>
      <SearchField
        accessibilityClearButtonLabel="Clear search field"
        accessibilityLabel="Search all of Pinterest"
        id="searchFieldMainExample"
        onChange={({ value }) => setSearchValue(value)}
        placeholder="Search and explore"
        value={searchValue}
      />
      <Flex
        alignContent="stretch"
        alignItems="center"
        gap={2}
        height="100%"
        justifyContent="center"
        overflow="scroll"
        width={380}
      >
        <SearchGuideLink color="01" href="http://pinterest.com" text="Designs and..." />
        <SearchGuideLink color="03" href="http://pinterest.com" text="Vintage Ins..." />
      </Flex>
    </Flex>
  );
}
