"use client";
import React from 'react'
import styled from 'styled-components';

const Tasks = () => {
  return (
    <TasksStyled>Tasks</TasksStyled>
  )
}

const TasksStyled = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  padding: 2rem;
  overflow-y: auto;
  height: 100%;



  &::-webkit-scrollbar {
    width: 0.5rem;
  }

`

export default Tasks;