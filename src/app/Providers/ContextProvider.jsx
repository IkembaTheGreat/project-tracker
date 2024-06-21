"use client";

import { GlobalProvider } from '../context/globalProvider';

import React from 'react'

const ContextProvider = ({ children }) => {

  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 200)
  }, []);

  if(!isReady) {
    return null;
  };
  return (
    <GlobalProvider>{children}</GlobalProvider>
  )
}

export default ContextProvider