import { AppProvider } from '@/providers/app';
import './App.css';
import { AppRoutes } from '@/routes';
import AnimatedCursor from 'react-animated-cursor';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Mousetrail from './components/Mousetrail';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AppProvider>
      <AppRoutes />
      <Mousetrail />
      <AnimatedCursor
        innerSize={0}
        outerSize={30}
        color="255, 168, 0"
        outerAlpha={0.4}
        innerScale={0.1}
        outerScale={2}
        showSystemCursor={true}
        outerStyle={{
          border: '3px solid var(--cursor-color)',
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
    </AppProvider>
  );
}

export default App;