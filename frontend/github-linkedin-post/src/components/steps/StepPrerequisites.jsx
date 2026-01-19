export default function StepPrerequisites() {
  return (
    <section>
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex flex-col justify-between gap-4 p-5 transition-colors bg-white border shadow-sm md:flex-row md:items-center rounded-xl border-slate-200 dark:border-slate-700 dark:bg-card-dark hover:border-primary/50 group">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center text-green-600 rounded-lg size-14 bg-green-50 dark:bg-green-900/20 dark:text-green-400 shrink-0">
              <span className="material-symbols-outlined text-[32px]">
                javascript
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold transition-colors text-slate-900 dark:text-white group-hover:text-primary">
                Node.js
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono">
                  Required: v16.0+
                </span>
              </div>
            </div>
          </div>
          <a
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium transition-colors bg-white border rounded-lg text-slate-700 dark:text-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 md:w-auto"
            href="https://nodejs.org/en/download"
            target="_blank"
          >
            <span className="material-symbols-outlined mr-2 text-[20px]">
              download
            </span>
            Download Node.js
          </a>
        </div>
        <div className="flex flex-col justify-between gap-4 p-5 transition-colors bg-white border shadow-sm md:flex-row md:items-center rounded-xl border-slate-200 dark:border-slate-700 dark:bg-card-dark hover:border-primary/50 group">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center text-orange-600 rounded-lg size-14 bg-orange-50 dark:bg-orange-900/20 dark:text-orange-500 shrink-0">
              <span className="material-symbols-outlined text-[32px]">
                source
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold transition-colors text-slate-900 dark:text-white group-hover:text-primary">
                Git SCM
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono">
                  Latest Stable
                </span>
              </div>
            </div>
          </div>
          <a
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium transition-colors bg-white border rounded-lg text-slate-700 dark:text-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 md:w-auto"
            href="https://git-scm.com/install/windows"
            target="_blank"
          >
            <span className="material-symbols-outlined mr-2 text-[20px]">
              download
            </span>
            Download Git
          </a>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            check_circle
          </span>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Verify Installation
          </h3>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          Once installed, run the following commands in your terminal to confirm
          the tools are ready.
        </p>
        <div className="rounded-lg bg-[#0d1117] border border-slate-200 dark:border-[#30363d] overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="font-mono text-xs text-slate-400">bash</span>
          </div>
          <div className="p-5 overflow-x-auto font-mono text-sm">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 text-white">
                <span className="text-blue-400 select-none">$</span>
                <span>node -v</span>
              </div>
              <div className="pl-4 select-none text-slate-500">v18.14.0</div>
              <div className="flex gap-2 mt-2 text-white">
                <span className="text-blue-400 select-none">$</span>
                <span>git --version</span>
              </div>
              <div className="pl-4 select-none text-slate-500">
                git version 2.39.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
