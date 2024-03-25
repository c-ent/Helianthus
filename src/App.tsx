
import { AppProvider } from '@/providers/app'
import './App.css'
import { AppRoutes } from '@/routes'
import AnimatedCursor from "react-animated-cursor"
function App() {

  return (
    <AppProvider>
    <AppRoutes />
    <AnimatedCursor
      innerSize={0}
      outerSize={30}
      color='100, 50, 50'
      outerAlpha={0.4}
      innerScale={0.1}
      outerScale={2}
      showSystemCursor={true}
      outerStyle={{
        border: '3px solid var(--cursor-color)'
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
        '.link'
      ]}
    />
    </AppProvider>
  )
}

export default App
