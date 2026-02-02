import CopyBlock from "../copyBlock";

export default function StepCloneRepo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Clone the official repository to your local machine. This will
          download all the scripts needed to run the GitHub → LinkedIn bot.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <p className="mb-2 text-sm text-slate-500">
            # Clone the repository via HTTPS
          </p>
          <CopyBlock
            code={`git clone https://github.com/FerOuvina/Github-LinkedIn-Publisher`}
          />
        </div>

        <div>
          <p className="mb-2 text-sm text-slate-500">
            # Navigate into the directory
          </p>
          <CopyBlock code={`cd Github-LinkedIn-Publisher`} />
        </div>
      </div>
    </div>
  );
}
