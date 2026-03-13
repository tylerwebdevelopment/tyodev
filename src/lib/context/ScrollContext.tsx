import React, {createContext, useContext} from 'react';

export type ScrollCallbacks = {
  ScrollToAbout?: () => void;
  setScrollCallbacks?: React.Dispatch<React.SetStateAction<ScrollCallbacks>>;
  active?: string;
  setActive?: React.Dispatch<React.SetStateAction<string>>;
}

export const ScrollContext = createContext<ScrollCallbacks>({});
export const useScroll = () => useContext(ScrollContext);