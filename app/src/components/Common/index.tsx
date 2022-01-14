import styled from 'styled-components';

export const StoryWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColumnWrapper = styled(Wrapper)`
  flex-direction: column;
`;

export const FullWidthWrapper = styled(Wrapper)`
  padding: 0;
`;
