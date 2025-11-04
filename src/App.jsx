import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TabBar from './components/TabBar'
import EditorPane from './components/EditorPane'
import StatusBar from './components/StatusBar'

export default function App() {
  const [active, setActive] = useState('home')

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-gray-200 flex" role="application" aria-label="VSCode style portfolio">
      <Sidebar active={active} onSelect={setActive} />

      <main className="flex-1 flex flex-col min-w-0">
        <TabBar active={active} onSelect={setActive} />
        <EditorPane active={active} />
        <StatusBar />
      </main>
    </div>
  )
}
