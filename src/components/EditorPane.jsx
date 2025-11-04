import Spline from '@splinetool/react-spline'

function CodeLine({ children }) {
  return (
    <div className="flex gap-4">
      <span className="w-8 text-right text-xs text-[#6a9955] select-none">//</span>
      <pre className="flex-1 whitespace-pre-wrap font-mono text-sm">{children}</pre>
    </div>
  )
}

export default function EditorPane({ active }) {
  return (
    <div className="relative flex-1 bg-[#1e1e1e] text-gray-200 overflow-auto">
      {active === 'home' && (
        <div className="p-0 md:p-4">
          <div className="h-[320px] md:h-[420px] bg-[#111] border-b border-[#2a2a2a] relative">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent" />
          </div>
          <div className="p-4 space-y-2">
            <pre className="font-mono text-sm leading-relaxed">
              <code>
                <span className="text-[#569cd6]">import</span> <span className="text-[#9cdcfe]">logging</span>
                {'\n'}
                <span className="text-[#9cdcfe]">logging</span><span className="text-white">.</span><span className="text-[#dcdcaa]">info</span><span className="text-white">(</span><span className="text-[#ce9178]">"Halo, saya Backend Engineer — fokus pada API, data, dan reliability."</span><span className="text-white">)</span>
              </code>
            </pre>
            <pre className="font-mono text-sm">
              <code>
                <span className="text-[#c586c0]">stack</span> <span className="text-white">=</span> <span className="text-white">[</span>
                <span className="text-[#ce9178]">'Python'</span>, <span className="text-[#ce9178]">'FastAPI'</span>, <span className="text-[#ce9178]">'PostgreSQL'</span>, <span className="text-[#ce9178]">'MongoDB'</span>, <span className="text-[#ce9178]">'Redis'</span>, <span className="text-[#ce9178]">'Docker'</span>, <span className="text-[#ce9178]">'Kubernetes'</span>, <span className="text-[#ce9178]">'Kafka'</span>, <span className="text-[#ce9178]">'Celery'</span>
                <span className="text-white">]</span>
              </code>
            </pre>
            <CodeLine>
              <span>
                <span className="text-[#6a9955]">// Buka tab lain untuk melihat cuplikan konfigurasi, layanan, dan kontak</span>
              </span>
            </CodeLine>
          </div>
        </div>
      )}

      {active === 'about' && (
        <div className="p-6 space-y-2">
          <pre className="font-mono text-sm">
            <code>
{`# about.md\n\n**Halo!** Saya backend engineer yang senang merancang API yang cepat, aman, dan mudah dipelihara.\n\n- Domain: REST, GraphQL, event-driven, batch pipelines\n- Praktik: testing pyramid, CI/CD, observability, performance tuning\n- Fokus: desain skema, transaksi, konsistensi data, idempotensi\n\nContoh API (FastAPI):\n\n\u0060\u0060\u0060python\nfrom fastapi import FastAPI\napp = FastAPI()\n\n@app.get('/health')\ndef health():\n    return {'status': 'ok'}\n\n# uvicorn main:app --reload\n\u0060\u0060\u0060`}
            </code>
          </pre>
        </div>
      )}

      {active === 'projects' && (
        <div className="p-6">
          <pre className="font-mono text-sm">
            <code>
{`{\n  "services": [\n    {\n      "name": "Account Service",\n      "stack": ["FastAPI", "PostgreSQL", "Redis"],\n      "observability": ["Prometheus", "Grafana"],\n      "notes": "JWT auth, rate limiting, background jobs via Celery"\n    },\n    {\n      "name": "Catalog Service",\n      "stack": ["FastAPI", "MongoDB"],\n      "search": "text indexes, pagination",\n      "notes": "ETL sync to analytics warehouse"\n    },\n    {\n      "name": "Events Pipeline",\n      "stack": ["Kafka", "Flink"],\n      "notes": "Exactly-once processing, schema registry"\n    }\n  ]\n}`}
            </code>
          </pre>
          <div className="mt-4 border-t border-[#2a2a2a]">
            <div className="bg-[#0e0e0e] text-gray-300 text-xs px-3 py-2">Terminal</div>
            <div className="bg-black text-[#b5cea8] font-mono text-xs p-3 space-y-1">
              <div>$ pytest -q</div>
              <div>✓ 128 passed in 4.53s</div>
              <div>$ uvicorn main:app --reload</div>
              <div>INFO:     Uvicorn running on http://localhost:8000</div>
            </div>
          </div>
        </div>
      )}

      {active === 'contact' && (
        <div className="p-6">
          <pre className="font-mono text-sm">
{`# contact.yaml\nname: "Backend Consulting"\nchannels:\n  - email\n  - linkedin\n  - github\nslas:\n  response_time: "<24h"\n  timezone: "UTC+7"\n`}
          </pre>
          <form className="mt-4 grid gap-3 max-w-md">
            <input placeholder="Nama" className="rounded px-3 py-2 bg-[#1e1e1e] border border-[#2a2a2a] text-gray-200 placeholder-gray-500 outline-none focus:border-[#0e639c]" />
            <input placeholder="Email" className="rounded px-3 py-2 bg-[#1e1e1e] border border-[#2a2a2a] text-gray-200 placeholder-gray-500 outline-none focus:border-[#0e639c]" />
            <textarea placeholder="Kebutuhan proyek atau pertanyaan" rows={4} className="rounded px-3 py-2 bg-[#1e1e1e] border border-[#2a2a2a] text-gray-200 placeholder-gray-500 outline-none focus:border-[#0e639c]" />
            <button type="button" className="px-4 py-2 rounded bg-[#0e639c] hover:bg-[#1177bb] transition-colors font-medium">Kirim</button>
          </form>
        </div>
      )}
    </div>
  )
}
