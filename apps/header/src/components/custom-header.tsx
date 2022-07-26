import { useNavigate, generatePath, useParams } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

import './custom-header.css';
import { IMenu } from './menu.interfaces';

const { Header } = Layout;

const CustomHeader = (menu: IMenu) => {
  const navigate = useNavigate();
  const urlParams = useParams();

  const onClick: MenuProps['onClick'] = ({ key }) => {
    const updatedUrlParams = { ...urlParams, tabId: key };
    navigate(generatePath(`/${key}`, updatedUrlParams));
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={onClick}
          defaultSelectedKeys={['react']}
          items={menu.menuItems}
        />
      </Header>
    </Layout>
  );
};

export default CustomHeader;
