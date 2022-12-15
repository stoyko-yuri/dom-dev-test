import styled from "styled-components";

export const TodoCardWrapper = styled.div<{ isEven: boolean }>`
  padding: 14px 20px;
  width: 100%;
  background-color: ${(props) => (props.isEven ? "#8c8c8c" : "#9c9c9c")};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TodoCardTitle = styled.h2<{ isCompleted: boolean }>`
  font-size: 1rem;
  font-weight: 400;
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;

export const TodoCardControls = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`;

export const TodoCardEdit = styled.div`
  margin: 0 10px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`;
