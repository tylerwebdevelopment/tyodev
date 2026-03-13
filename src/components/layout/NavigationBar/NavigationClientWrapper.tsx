'use client';
import React, { useState } from 'react'
import NavigationBar from '@/components/layout/NavigationBar';
import { ScrollCallbacks, ScrollContext } from '@/lib/context/ScrollContext';

const NavigationClientWrapper = ({children} : {children: React.ReactNode}) => {
  const [scrollCallbacks, setScrollCallbacks] = useState<ScrollCallbacks>({});
  const [active, setActive] = useState<string>('');
  return (
    <ScrollContext.Provider value={{...scrollCallbacks, setScrollCallbacks, setActive, active}}>
      <NavigationBar active={active} setActive={setActive}/>
      {children}
    </ScrollContext.Provider>
  )
}

export default NavigationClientWrapper