import { createContext, useContext, useState, ReactNode } from 'react';

export type AudienceType = 'farmer' | 'startup' | 'manufacturer' | 'importer' | null;

export interface NavigationState {
  selectedAudience: AudienceType;
  selectedSubSection: string;
  showSolutions: boolean;
}

interface NavigationContextType extends NavigationState {
  setSelectedAudience: (audience: AudienceType) => void;
  setSelectedSubSection: (section: string) => void;
  setShowSolutions: (show: boolean) => void;
  resetNavigation: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [selectedAudience, setSelectedAudience] = useState<AudienceType>(null);
  const [selectedSubSection, setSelectedSubSection] = useState<string>('overview');
  const [showSolutions, setShowSolutions] = useState<boolean>(false);

  const resetNavigation = () => {
    setSelectedAudience(null);
    setSelectedSubSection('overview');
    setShowSolutions(false);
  };

  return (
    <NavigationContext.Provider
      value={{
        selectedAudience,
        selectedSubSection,
        showSolutions,
        setSelectedAudience,
        setSelectedSubSection,
        setShowSolutions,
        resetNavigation,
      }}
    >
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
