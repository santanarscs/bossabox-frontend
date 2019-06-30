import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  h2 {
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 20px;
  }
`;
export const ToolsContainerAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 18px;
  > div {
    input[type="text"] {
      border-radius: 4px;
      border: 1px solid #ebeaed;
      font-size: 20px;
      line-height: 26px;
      padding: 5px 10px;
      margin-right: 10px;
    }
    input[type="checkbox"] {
      margin-right: 5px;
    }
  }
  button {
    width: 100px;
    border-radius: 5px;
    background: #365df0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #fff;
    font-size: 18px;
    border: 0;
    &:hover {
      background: #2f55cc;
    }
  }
`;

export const ToolsList = styled.ul`
  list-style: none;
  > li {
    background: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.5);
    &:last-child {
      margin-bottom: 0;
    }
    p {
      line-height: 25px;
    }
  }
`;

export const TitleList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  a {
    text-decoration: none;
    color: currentColor;
    font-weight: 700;
  }
  button {
    background: transparent;
    border: 0;
    color: #f95e5a;
  }
`;
export const TagList = styled.ul`
  list-style: none;
  display: flex;
  padding: 10px 0;
  > li {
    margin-right: 10px;
    font-weight: bold;
    &:last-child {
      margin-right: 0;
    }
  }
`;
