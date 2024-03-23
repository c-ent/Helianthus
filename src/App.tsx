
import { AppProvider } from '@/providers/app'
import './App.css'
import { AppRoutes } from '@/routes'

function App() {

  return (
    <AppProvider>
    <AppRoutes />
    </AppProvider>
  )
}

export default App
