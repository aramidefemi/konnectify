import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const DropdownMenu = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a
        className="ant-dropdown-link"
        style={{
          background: '#F8F3F1',
          color: 'black',
          padding: '8px 16px',
          display: 'inline-block',
          borderRadius: '4px', // Optional: Add border radius for a rounded appearance
        }}
        onClick={(e) => e.preventDefault()}
      >
        Dropdown <DownOutlined style={{ marginLeft: '8px', fontSize: '14px' }} />
      </a>
    </Dropdown>
  );
};

export default DropdownMenu;
