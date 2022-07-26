import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { toUpperCase } from '@monorepo-nx-react-mfe/utils';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title={toUpperCase('React Module 1')} />
    </StyledApp>
  );
}

export default App;
