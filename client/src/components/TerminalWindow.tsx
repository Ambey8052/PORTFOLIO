import type { ReactNode } from 'react';

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export default function TerminalWindow({ title, children, footer, className = '' }: TerminalWindowProps) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
        <span className="terminal-dot bg-red-400" />
        <span className="terminal-dot bg-yellow-400" />
        <span className="terminal-dot bg-green-400" />
        <span className="ml-2 text-xs font-mono text-muted-foreground truncate">{title}</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">
        {children}
      </div>
      {footer && (
        <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-muted/30">
          {footer}
        </div>
      )}
    </div>
  );
}
