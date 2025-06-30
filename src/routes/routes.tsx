import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../Modules/Home';
import Login from '../Modules/Login';
import ComingSoon from './ComingSoon';
import Page from './Page';

// Crear el enrutador correctamente con createBrowserRouter
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/ai-optimization',
        element: <ComingSoon title="AI Optimization" />,
      },
      {
        path: '/orbital-iq',
        element: <ComingSoon title="Orbital IQ" />,
      },
      {
        path: '/rackscale-iq',
        element: <ComingSoon title="Rackscale IQ" />,
      },
      {
        path: '/quantum-iq/hybrid-simulation',
        element: <ComingSoon title="Hybrid Simulation" />,
      },
      {
        path: '/quantum-iq/quantum-path',
        element: <ComingSoon title="Quantum Path" />,
      },
      {
        path: '/integrations/tool-manager',
        element: <ComingSoon title="Tool Manager" />,
      },
      {
        path: '/integrations/downloads',
        element: <ComingSoon title="Downloads" />,
      },
      {
        path: '/integrations/partners-plugins',
        element: <ComingSoon title="Partners Plugins" />,
      },
      {
        path: '/docs',
        element: <ComingSoon title="Docs" />,
      },
      {
        path: '/learn',
        element: <ComingSoon title="Learn" />,
      },
      {
        path: '/ai-setup-assistant',
        element: <ComingSoon title="AI Setup Assistant" />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '*',
        element: (
          <Page
            title="404 Error"
            text="Page not found"
            image="no-data"
            button={{ children: 'Back to Home', iconLeft: 'A' }}
          />
        ),
      },
    ],
  },
]);

export default routes;
