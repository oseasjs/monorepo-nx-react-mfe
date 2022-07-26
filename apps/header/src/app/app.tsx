import styled from 'styled-components';
import CustomHeader from '../components/custom-header';
import { IMenu } from '../components/menu.interfaces';

const StyledApp = styled.div`
  // Your style here
`;

export function App(menu: IMenu) {
  return (
    <StyledApp>
      <CustomHeader menuItems={menu.menuItems} />
    </StyledApp>
  );
}

export default App;
