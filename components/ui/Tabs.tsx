import { clsx } from 'clsx';

interface TabsProps {
  tabs: { key: string; label: string }[];
  active: string;
  onChange: (key: string) => void;
}

export default function Tabs({ tabs, active, onChange }: TabsProps) {
  return (
    <div className="flex gap-6 text-sm font-semibold text-slate">
      {tabs.map(tab => {
        const isActive = tab.key === active;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={clsx(
              'relative pb-3 transition-colors hover:text-navy',
              isActive ? 'text-navy' : 'text-slate'
            )}
          >
            {tab.label}
            {isActive && (
              <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary" />
            )}
          </button>
        );
      })}
    </div>
  );
}
