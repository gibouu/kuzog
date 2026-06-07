import { ReactNode } from 'react';

interface ExpandableListProps {
  children: ReactNode;
}

export function ExpandableList({ children }: ExpandableListProps) {
  return (
    <div className="flex flex-col gap-3">
      {children}
    </div>
  );
}
