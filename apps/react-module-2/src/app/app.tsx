import styled from 'styled-components';
import { toUpperCase } from '@monorepo-nx-react-mfe/utils';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <div>{toUpperCase('React Module 2')}</div>
    </StyledApp>
  );
}

export default App;
