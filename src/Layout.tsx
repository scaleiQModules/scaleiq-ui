import { Link, Outlet } from 'react-router-dom';
import {
  Button,
  Footer,
  Header,
  Icon,
  Sidebar,
  ThemeSwitcher,
  useTheme,
} from '@scaleiq/scaleiq-ui';
import './Layout.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarItemInterface } from '@scaleiq/scaleiq-ui/dist/components/Sidebar/interfaces';

const nav = [
  {
    path: '/docs',
    text: 'Docs',
    linkComponent: Link,
    linkProps: { to: '/docs' },
  },
  {
    path: '/learn',
    text: 'Learn',
    linkComponent: Link,
    linkProps: { to: '/learn' },
  },
  {
    path: '/ai-setup-assistant',
    text: 'Al Setup Assistant',
    linkComponent: Link,
    linkProps: { to: '/ai-setup-assistant' },
  },
];

const menuItems: SidebarItemInterface[] = [
  {
    text: 'AI-Engine',
    path: '/ai-engine',
    iconName: 'AiEngine',
    subItems: [
      {
        text: 'Ingestor',
        path: 'https://ingestor.scaleiqai.com/',
        target: '_blank',
      },
    ],
  },
  {
    text: 'AI-Optimization',
    iconName: 'Optimization',
    path: '/ai-optimization',
    linkComponent: Link,
    linkProps: { to: '/ai-optimization' },
  },
  {
    text: 'Orbital-IQ',
    iconName: 'OrbitalIq',
    path: '/orbital-iq',
    linkComponent: Link,
    linkProps: { to: '/orbital-iq' },
  },
  {
    text: 'Rackscale-IQ',
    iconName: 'RackScale',
    path: '/rackscale-iq',
    linkComponent: Link,
    linkProps: { to: '/rackscale-iq' },
  },
  {
    text: 'Quantum-IQ',
    iconName: 'QuantumIq',
    path: '/quantum-iq',
    subItems: [
      {
        text: 'Hybrid Simulation',
        path: '/quantum-iq/hybrid-simulation',
        linkComponent: Link,
        linkProps: { to: '/quantum-iq/hybrid-simulation' },
      },
      {
        text: 'Quantum Path',
        path: '/quantum-iq/quantum-path',
        linkComponent: Link,
        linkProps: { to: '/quantum-iq/quantum-path' },
      },
    ],
  },
  {
    text: 'Integrations',
    iconName: 'Settings',
    path: '/integrations',
    subItems: [
      {
        text: 'Tool Manager',
        path: '/integrations/tool-manager',
        linkComponent: Link,
        linkProps: { to: '/integrations/tool-manager' },
      },
      {
        text: 'Downloads',
        path: '/integrations/downloads',
        linkComponent: Link,
        linkProps: { to: '/integrations/downloads' },
      },
      {
        text: 'Partners Plugins',
        path: '/integrations/partners-plugins',
        linkComponent: Link,
        linkProps: { to: '/integrations/partners-plugins' },
      },
    ],
  },
];

const footerNav = [
  { path: '/about', text: 'About' },
  { path: '/support', text: 'Support' },
  { path: '/contact-us', text: 'Contact Us' },
];

const Layout = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  const darkMode = useTheme().darkMode;
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <Header
        hideBreadcrumbs={true}
        handlerBreadcrumbs={{ pathsArray: [{ path: '/home', text: 'Home' }] }}
        handlerClickLogo={() => {
          navigate('/home');
        }}
        moduleName="Main"
        moduleColor="blue"
        nav={nav}
      >
        <section style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Button size="s" onClick={() => {}} variant="tertiary">
            Sign Up
          </Button>
          <Button size="s" variant="outline" onClick={() => navigate('/login')}>
            Sign In
          </Button>
          <Button size="s" onClick={() => {}} variant="icon">
            <Icon iconName="Bell" />
          </Button>
          <Button size="s" onClick={() => {}} variant="icon">
            <Icon iconName="Person" />
          </Button>
          <ThemeSwitcher />
        </section>
      </Header>
      <div className="main-content" data-dark-mode={darkMode}>
        <Sidebar
          items={menuItems}
          isOpen={sidebarIsOpen}
          toggleSidebar={handleToggleSidebar}
        />
        <main className="main">
          <Outlet />
        </main>
      </div>

      <Footer nav={footerNav}></Footer>
    </div>
  );
};

export default Layout;
