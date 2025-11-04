import { X } from 'lucide-react'

const tabs = [
  { id: 'home', label: 'server.py' },
  { id: 'about', label: 'about.md' },
  { id: 'projects', label: 'services.json' },
  { id: 'contact', label: 'contact.yaml' },
]

export default function TabBar({ active, onSelect }) {
  return (
    <div className="flex items-center bg-[#252526] border-b border-[#2a2a2a] overflow-x-auto">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onSelect(t.id)}
          className={`flex items-center gap-2 px-4 py-2 text-sm border-r border-[#2a2a2a] whitespace-nowrap ${
            active === t.id ? 'bg-[#1e1e1e] text-white' : 'text-gray-300 hover:bg-[#2a2a2a]'
          }`}
        >
          <span className="font-mono">{t.label}</span>
          <X size={14} className="text-gray-500" />
        </button>
      ))}
    </div>
  )
}
