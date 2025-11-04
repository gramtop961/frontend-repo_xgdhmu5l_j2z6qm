import Spline from '@splinetool/react-spline'

function CodeLine({ children }) {
  return <div className="flex gap-4"><span className="w-8 text-right text-xs text-[#6a9955] select-none">//</span><pre className="flex-1 whitespace-pre-wrap font-mono text-sm">{children}</pre></div>
}

export default function EditorPane({ active }) {
  return (
    <div className="relative flex-1 bg-[#1e1e1e] text-gray-200 overflow-auto">
      {active === 'home' && (
        <div className="p-0 md:p-4">
          <div className="h-[320px] md:h-[420px] bg-[#111] border-b border-[#2a2a2a]">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent" />
          </div>
          <div className="p-4 space-y-2">
            <pre className="font-mono text-sm leading-relaxed">
              <code>
                <span className="text-[#569cd6]">console</span>
                <span className="text-white">.</span>
                <span className="text-[#dcdcaa]">log</span>
                <span className="text-white">(</span>
                <span className="text-[#ce9178]">"Halo, saya Aese — Frontend Engineer."</span>
                <span className="text-white">)</span>
              </code>
            </pre>
            <pre className="font-mono text-sm">
              <code>
                <span className="text-[#c586c0]">const</span> <span className="text-[#9cdcfe]">stack</span> <span className="text-white">=</span> <span className="text-white">[</span>
                <span className="text-[#ce9178]">'React'</span>, <span className="text-[#ce9178]">'TypeScript'</span>, <span className="text-[#ce9178]">'Tailwind'</span>, <span className="text-[#ce9178]">'Next.js'</span>
                <span className="text-white">]</span>
              </code>
            </pre>
            <CodeLine>
              <span>
                <span className="text-[#6a9955]">// Klik tab lain untuk melihat konten berbeda</span>
              </span>
            </CodeLine>
          </div>
        </div>
      )}

      {active === 'about' && (
        <div className="p-6 space-y-2">
          <pre className="font-mono text-sm">
            <code>
              <span className="text-gray-500">&lt;!-- Tentang Saya --&gt;</span>{'\n'}
              <span className="text-[#569cd6]">&lt;section</span> <span className="text-[#9cdcfe]">id</span><span className="text-white">=</span><span className="text-[#ce9178]">"about"</span><span className="text-[#569cd6]">&gt;</span>{'\n'}
              &nbsp;&nbsp;<span className="text-[#569cd6]">&lt;h1&gt;</span><span className="text-[#dcdcaa]">Hi, I’m Aese</span><span className="text-[#569cd6]">&lt;/h1&gt;</span>{'\n'}
              &nbsp;&nbsp;<span className="text-[#569cd6]">&lt;p&gt;</span><span className="text-[#d4d4d4]">I design and build delightful web experiences.</span><span className="text-[#569cd6]">&lt;/p&gt;</span>{'\n'}
              <span className="text-[#569cd6]">&lt;/section&gt;</span>
            </code>
          </pre>
        </div>
      )}

      {active === 'projects' && (
        <div className="p-6">
          <pre className="font-mono text-sm">
            <code>
{`{
  "projects": [
    {
      "name": "VSCode Portfolio",
      "role": "UI/UX & Frontend",
      "tech": ["React", "Tailwind", "Spline"],
      "preview": "// lihat output di terminal mini"
    },
    {
      "name": "Design System",
      "role": "Design Engineer",
      "tech": ["Figma", "React", "Storybook"]
    }
  ]
}`}
            </code>
          </pre>
          <div className="mt-4 border-t border-[#2a2a2a]">
            <div className="bg-[#0e0e0e] text-gray-300 text-xs px-3 py-2">Terminal</div>
            <div className="bg-black text-[#b5cea8] font-mono text-xs p-3 space-y-1">
              <div># npm run preview</div>
              <div>✓ building...</div>
              <div>✓ preview ready on http://localhost:3000</div>
            </div>
          </div>
        </div>
      )}

      {active === 'contact' && (
        <div className="p-6">
          <pre className="font-mono text-sm">
{`/* Contact.css */
.form { display: grid; gap: 12px; }
.input { background: #1e1e1e; border: 1px solid #2a2a2a; color: #d4d4d4; }
.button { background: #0e639c; color: white; }
`}
          </pre>
          <form className="mt-4 grid gap-3 max-w-md">
            <input placeholder="Nama" className="input rounded px-3 py-2 bg-[#1e1e1e] border border-[#2a2a2a] text-gray-200 placeholder-gray-500 outline-none focus:border-[#0e639c]" />
            <input placeholder="Email" className="input rounded px-3 py-2 bg-[#1e1e1e] border border-[#2a2a2a] text-gray-200 placeholder-gray-500 outline-none focus:border-[#0e639c]" />
            <textarea placeholder="Pesan" rows={4} className="input rounded px-3 py-2 bg-[#1e1e1e] border border-[#2a2a2a] text-gray-200 placeholder-gray-500 outline-none focus:border-[#0e639c]" />
            <button type="button" className="button px-4 py-2 rounded bg-[#0e639c] hover:bg-[#1177bb] transition-colors font-medium">Kirim</button>
          </form>
        </div>
      )}
    </div>
  )
}
