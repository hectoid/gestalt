/**
 * FetchItems is a logic component that renders no content itself. Its job
 * is to manage when the given fetchMore method should be called based on
 * the given scroll/size props.
 *
 * While no element is actually passed to FetchItems, it is intended to be used
 * in conjunction with a large scroll container that uses async fetching to
 * load and render additional data. Based on the height of this container and
 * its current scroll position, FetchItems is responsible for triggering future
 * fetch calls.
 */

import { useEffect } from 'react';

type Props = {
  containerHeight: number;
  fetchMore?: () => void;
  isAtEnd?: boolean;
  isFetching: boolean;
  scrollHeight: number;
  scrollTop: number;
};

export default function FetchItems({
  containerHeight,
  fetchMore,
  isAtEnd,
  isFetching,
  scrollHeight,
  scrollTop,
}: Props): null {
  const check: () => void = () => {
    if (isAtEnd || isFetching || !fetchMore) {
      return;
    }
    const scrollBuffer = containerHeight * 3;

    if (scrollTop + scrollBuffer > scrollHeight) {
      fetchMore();
    }
  };

  // Note: purposefully supplying no dependency array so `check` is run on every render
  useEffect(() => {
    const timeoutId = setTimeout(check);
    return () => {
      clearTimeout(timeoutId);
    };
  });

  return null;
}
