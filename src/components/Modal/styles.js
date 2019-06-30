import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 10px 40px;
  width: 600px;
  h1 {
    font-size: 26px;
    font-weight: 500;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    > span {
      font-size: 20px;
      line-height: 25px;
      font-weight: 600;
      margin-top: 15px;
    }
    > input,
    textarea {
      height: 40px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ebeaed;
      background-color: #f5f4f6;
      color: #170c3a;
      margin-top: 8px;
      transition: border 0.15s ease;
      font-size: 16px;
      &:focus {
        border-color: #dedce1;
      }
    }
    textarea {
      height: auto;
    }
    div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 20px 0 0;
      > button[type="button"] {
        width: 100px;
        border-radius: 5px;
        background: #feefee;
        color: #f95e5a;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        font-size: 18px;
        border: 0;
        &:hover {
          background: #fcd7d6;
        }
        margin-right: 10px;
      }
      > button[type="submit"] {
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
    }
  }
`;
