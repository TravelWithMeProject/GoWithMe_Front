import styled from 'styled-components';

export const StyledContentBar = styled.div`
  width: 100%;
  height: 200px;
`;

export const Title = styled.div<{
  isopen: boolean;
}>`
  position: relative;
  display: flex;
  width: 100%;
  height: 30px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  color: #747474;
  font-weight: bold;
  border-bottom: solid 1px #cccccc;
  transition: all .3s;
  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
    cursor: pointer;
  }
  &:active {
    background-color: rgb(0, 0, 0, 0.2);
  }
  &:before {
    content: 'V';
    position: absolute;
    top: 15px;
    right: 10px;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-top: -12px;
    transition: all 0.3s;
    transform: ${(props) => (props.isopen ? "scaleY(-1)" : "none")};
  }
`

export const Content = styled.div<{
  isopen: boolean;
  minheight: number;
  maxheight: number;
}>`
  overflow: hidden;
  min-height: ${(props) => (props.isopen ? props.minheight+"px" : "0")};
  max-height: ${(props) => (props.isopen ? props.maxheight+"px" : "0")};
  margin: 0;
  padding: 0 30px;
  border: solid 1px #eeeeee;
  border-top: 0;
  background: #e8f4fc;
  transition: all .5s;

  p {
    padding: 5px 0;
    margin: 0;
  }

`