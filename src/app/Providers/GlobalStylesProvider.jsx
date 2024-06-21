"use client"
import React from "react";
import styled from "styled-components";

const GlobalStylesProvider = ({ children }) => {
  return <GlobalSyles>{children}</GlobalSyles>
};


const GlobalSyles = styled.div`
  padding: 2.5rem;
  display: flex;
  height: 100%;
  gap: 2.5rem;
`;


export default GlobalStylesProvider
