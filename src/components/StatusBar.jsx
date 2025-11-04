import { Github, Globe } from 'lucide-react'

export default function StatusBar() {
  return (
    <div className="h-8 bg-[#007acc] text-white text-xs flex items-center justify-between px-3">
      <div className="flex items-center gap-3">
        <span className="font-medium">Visual Studio Code — Portfolio Mode</span>
        <span className="opacity-80">UTF-8</span>
        <span className="opacity-80">LF</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://frontendaese.space/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
          <Globe size={14} /> Live
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
          <Github size={14} /> Repo
        </a>
      </div>
    </div>
  )
}
