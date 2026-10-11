import React from 'react';
import { CheckCircle2, Copy } from 'lucide-react';

export const Toast = ({ message, show, icon }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="bg-sunburst text-carbon border-[2px] border-carbon rounded-card px-5 py-3 shadow-[5px_5px_0px_#000000] flex items-center gap-3 font-bold text-sm">
        {icon || <CheckCircle2 className="w-5 h-5 text-carbon" />}
        <span>{message}</span>
      </div>
    </div>
  );
};
