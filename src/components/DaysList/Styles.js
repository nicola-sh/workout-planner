import styled from "styled-components";

export const DayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
`;

export const DayContainer = styled.div`
  display: flex;
  justify-content: normal;
  align-items: center;
`;

export const DayBlock = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  border-radius: 12px;
  background: white;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;

export const TimeToStart = styled.h3`
  width: 140px;
  height: 24px;
  color: #758095;
  font-family: "SF Pro Display";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const DayName = styled.h4`
  flex-grow: 1;
  height: 24px;
  color: #1c1c1c;
  font-family: "SF Pro Display";
  font-size: 19px;
  font-weight: 600;
  line-height: 24px;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ff3b30;
  font-size: 16px;
  cursor: pointer;
  margin-left: 16px;
  margin-right: 16px;
`;

export const AddButton = styled.button`
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 16px;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #367937;
  }
`;

export const Input = styled.input`
  appearance: none;
  flex-grow: 1;
  background-color: #f0f0f0;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  color: #1c1c1c;
  margin-right: 10px;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #e0e0e0;
    outline: none;
  }
`;

export const Selector = styled.select`
  appearance: none;
  background-color: #f0f0f0;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  color: #1c1c1c;
  cursor: pointer;
  width: 80px;
  margin-right: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    border: solid #1c1c1c;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -4px;
    pointer-events: none;
  }
`;
