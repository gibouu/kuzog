import { createContext, useContext, ReactNode } from 'react';

interface NavigationContextType {
  // Intentionally minimal. Audience-based navigation was removed in
  // the redesign (issue #1). This stub remains so any leftover
  // imports compile during Plans 2-4 cleanup. Safe to delete the
  // entire context once no consumers remain.
  noop: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  return (
    <NavigationContext.Provider value={{ noop: () => {} }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
