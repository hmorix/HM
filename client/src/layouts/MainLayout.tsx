import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AIAssistant from '../components/AIAssistant'

interface MainLayoutProps {
  onCommandOpen: () => void
}

export default function MainLayout({ onCommandOpen }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar onCommandOpen={onCommandOpen} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  )
}
