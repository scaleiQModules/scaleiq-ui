import { useState } from 'react';

import {
  Button,
  Footer,
  Header,
  Sidebar,
  ThemeSwitcher,
  useTheme,
} from '@scaleiq/scaleiq-ui';
import './App.css';

const nav = [
  { path: '/about', text: 'About' },
  { path: '/support', text: 'Support' },
  { path: '/contact-us', text: 'Contact Us' },
];

const menuItems = [
  {
    text: 'AI-Engine',
    icon: 'Upload',
    path: '/ai-engine',
    subItems: [{ text: 'Ingestor', path: '/ai-engine/ingestor' }],
  },
  {
    text: 'AI-Optimization',
    icon: 'Archive',
    path: '/ai-optimization',
  },
  {
    text: 'Orbital-IQ',
    icon: 'Map',
    path: '/orbital-iq',
  },
  {
    text: 'Rackscale-IQ',
    icon: 'Globe2',
    path: '/rackscale-iq',
  },
  {
    text: 'Quantum-IQ',
    icon: 'Options',
    path: '/quantum-iq',
    subItems: [
      { text: 'Azure Quantum', path: '/quantum-iq/azure-quantum' },
      { text: 'Partner', path: '/quantum-iq/partner' },
    ],
  },
  {
    text: 'Integrations',
    icon: 'Settings',
    path: '/integrations',
    subItems: [
      { text: 'Tool Manager', path: '/integrations/tool-manager' },
      { text: 'Downloads', path: '/integrations/downloads' },
      { text: 'Partners Plugins', path: '/integrations/partners-plugins' },
    ],
  },
];

const footerNav = [
  { path: '/about', text: 'About' },
  { path: '/support', text: 'Support' },
  { path: '/contact-us', text: 'Contact Us' },
];

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  const darkMode = useTheme().darkMode;

  return (
    <div className="app-container">
      <Header
        hideBreadcrumbs={true}
        handlerBreadcrumbs={{ pathsArray: [{ path: '/home', text: 'Home' }] }}
        handlerClickLogo={() => {}}
        moduleName="Main"
        moduleColor="blue"
        nav={nav}
      >
        <section style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Button size="xs" onClick={() => {}} variant="tertiary">
            Sign in
          </Button>
          <Button size="xs" onClick={() => {}} variant="outline">
            Login
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
      </div>
      <Footer nav={footerNav}></Footer>
    </div>
  );
}

export default App;
