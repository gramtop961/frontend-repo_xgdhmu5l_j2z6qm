import { Github, TerminalSquare } from 'lucide-react'

export default function StatusBar() {
  return (
    <div className="h-8 bg-[#007acc] text-white text-xs flex items-center justify-between px-3">
      <div className="flex items-center gap-3">
        <span className="font-medium">VS Code — Backend Mode</span>
        <span className="opacity-80">Python 3.11</span>
        <span className="opacity-80">FastAPI</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="flex items-center gap-1">
          <TerminalSquare size={14} /> API Docs
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
          <Github size={14} /> Repo
        </a>
      </div>
    </div>
  )
}
