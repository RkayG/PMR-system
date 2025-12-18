'use client';

export default function ContactInfoCard() {
  return (
    <div className="flex flex-col rounded-xl bg-surface-light dark:bg-surface-dark p-5 shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold text-slate-900 dark:text-white">Contact Information</h3>
        <div className="rounded-full bg-blue-50 dark:bg-blue-900/20 p-2 text-primary">
          <span className="material-symbols-outlined text-[20px]">badge</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div
            className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIFy3EPpKVv6fpFxwtT3I3KehHClnpGSu3ct0AQ5C3Isw022cccU8QFtoYpueVoO6dPf27H8T4jcJm9hXjcc85GFYmk1k_OaXkLqqRoViH9aAi0KwK7cJIN8XpvwE5OGY7klg-eZcintJt-Elab7gauF7LwHdhgwbxnjzgb7IzbqEzt9YKUqMLk_nmqvAGS0KlXMoY26jQj93UuCNgjB2EBZcnNgHkBQYdobHtUHAMhv5w_yKfBXmBwLHWlgChkfjHRrP8yhuRwro")',
            }}
          />
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">Sarah Jenkins</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Primary Account Manager</p>
          </div>
        </div>
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3 text-sm">
            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-[18px]">
              call
            </span>
            <span className="text-slate-900 dark:text-white">020 7946 0123</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-[18px]">
              mail
            </span>
            <a
              className="text-primary hover:underline"
              href="mailto:orders@phoenix-med.co.uk"
            >
              orders@phoenix-med.co.uk
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-[18px]">
              language
            </span>
            <a className="text-primary hover:underline" href="#">
              www.phoenix-med.co.uk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

