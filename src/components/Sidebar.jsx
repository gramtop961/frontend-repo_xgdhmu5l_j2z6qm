import { Home, User, Folder, Mail } from 'lucide-react'

const files = [
  { id: 'home', name: 'home.js', icon: Home },
  { id: 'about', name: 'About.jsx', icon: User },
  { id: 'projects', name: 'Projects/index.js', icon: Folder },
  { id: 'contact', name: 'Contact.css', icon: Mail },
]

export default function Sidebar({ active, onSelect }) {
  return (
    <aside className="w-64 bg-[#1e1e1e] border-r border-[#2a2a2a] text-gray-200 hidden md:flex md:flex-col">
      <div className="px-3 py-2 text-xs uppercase tracking-wider text-gray-400 border-b border-[#2a2a2a]">
        Explorer
      </div>
      <nav className="flex-1 overflow-y-auto py-2">
        <ul className="space-y-1">
          {files.map((f) => {
            const Icon = f.icon
            const isActive = active === f.id
            return (
              <li key={f.id}>
                <button
                  onClick={() => onSelect(f.id)}
                  className={`group w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#2a2a2a] transition-colors ${
                    isActive ? 'bg-[#2a2a2a] text-white' : 'text-gray-300'
                  }`}
                >
                  <Icon size={16} className="text-gray-400 group-hover:text-gray-300" />
                  <span className="font-mono">{f.name}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
