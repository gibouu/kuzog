# KUZOG Audience-Centric Navigation - Integration Guide

This guide shows you how to integrate the new audience-centric navigation system into your KUZOG website.

## 📦 What Was Built

### New Components
1. **NavigationContext** (`src/contexts/NavigationContext.tsx`) - Global state management for audience selection
2. **audienceContent** (`src/data/audienceContent.ts`) - Content data for all 4 audience types
3. **CallToActionCard** (`src/components/CallToActionCard.tsx`) - Main selector with 4 audience buttons
4. **SolutionsCard** (`src/components/SolutionsCard.tsx`) - Dynamic content renderer with sub-tabs
5. **Updated ContactModal** (`src/components/ContactModal.tsx`) - Now includes Industry field with auto-population

### Updated Dependencies
- ✅ Framer Motion installed for smooth animations

---

## 🚀 Integration Steps

### Step 1: Wrap Your App with NavigationProvider

Update your main entry point to wrap the entire app with the NavigationProvider.

**File: `src/main.tsx`**

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './contexts/NavigationContext'; // ADD THIS
import App from './App';
import AgriPage from './pages/AgriPage';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <NavigationProvider> {/* WRAP WITH PROVIDER */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/agri" element={<AgriPage />} />
        </Routes>
      </BrowserRouter>
    </NavigationProvider>
  </React.StrictMode>
);
```

---

### Step 2: Add Components to App.tsx

Update your App.tsx to include the new components.

**File: `src/App.tsx`**

#### 2.1 Add Imports (at the top)

```tsx
import { useNavigation } from './contexts/NavigationContext'; // ADD
import { CallToActionCard } from './components/CallToActionCard'; // ADD
import { SolutionsCard } from './components/SolutionsCard'; // ADD
import { AnimatePresence } from 'framer-motion'; // ADD
```

#### 2.2 Use the Navigation Hook (inside App function, after existing state)

```tsx
export default function App() {
  const [activeNav, setActiveNav] = useState<'home' | 'industries' | 'services' | 'contact'>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  // ADD THIS LINE
  const { showSolutions } = useNavigation();

  // ... rest of existing code
```

#### 2.3 Add the New Sections to the Main Content

Insert the new components **right after the hero section** (before the "Strategic Position" section):

```tsx
      <main className="mt-14 flex-1 space-y-16 md:space-y-20">
        {/* EXISTING HERO SECTION */}
        <section id="hero" className="px-6">
          {/* ... existing hero code ... */}
        </section>

        {/* ========== ADD THIS BLOCK ========== */}
        {!showSolutions && <CallToActionCard />}

        <AnimatePresence mode="wait">
          {showSolutions && (
            <SolutionsCard onContactClick={() => setIsContactOpen(true)} />
          )}
        </AnimatePresence>
        {/* ========== END NEW BLOCK ========== */}

        {/* EXISTING SECTIONS CONTINUE */}
        <SectionCard id="industries" title="Strategic Position" sectionLabel="Section 01">
          {/* ... existing content ... */}
        </SectionCard>

        {/* ... rest of existing sections ... */}
      </main>
```

---

## 🎨 How It Works

### User Journey

1. **User lands on homepage** → Sees hero section
2. **Scrolls down** → Sees "Find Your Solution" card with 4 audience options
3. **Clicks an audience** (e.g., "I'm a Farmer") → CallToActionCard fades out, SolutionsCard slides in
4. **SolutionsCard displays**:
   - Header with audience icon and tagline
   - 4 sub-section tabs (e.g., "Equipment & Technology", "Seeds & Soil Solutions", etc.)
   - Content area with smooth CSS fade transitions between tabs
   - "Contact Us" button at bottom
5. **Clicks Contact Us** → Modal opens with Industry field pre-populated as "Agriculture"
6. **Clicks "Back to options"** → Returns to CallToActionCard

### State Management Flow

```
NavigationContext
    ↓
    ├── selectedAudience: 'farmer' | 'startup' | 'manufacturer' | 'importer' | null
    ├── selectedSubSection: string (current tab)
    └── showSolutions: boolean (toggle between CallToAction and Solutions)

    ↓ Used by:

    ├── CallToActionCard (sets selectedAudience, showSolutions)
    ├── SolutionsCard (reads selectedAudience, displays content)
    └── ContactModal (reads selectedAudience, pre-populates industry)
```

---

## 🎭 Animations

### Framer Motion Animations
- **CallToActionCard**: Fade in on mount (`opacity 0 → 1, y: 20 → 0`)
- **Audience buttons**: Scale on hover (`scale: 1.02`), tap feedback (`scale: 0.98`)
- **SolutionsCard**: Slide up entrance (`opacity 0 → 1, y: 40 → 0`)
- **Content switching**: Fade transition with AnimatePresence (`opacity 0 ↔ 1`)

### CSS Transitions
- Sub-section tabs: Background color and scale on selection (300ms ease)
- All transitions: Smooth, no layout shifts

---

## 🧪 Testing Checklist

- [ ] Hero section still displays correctly
- [ ] "Find Your Solution" card appears below hero
- [ ] All 4 audience buttons are clickable and styled correctly
- [ ] Clicking an audience smoothly transitions to SolutionsCard
- [ ] SolutionsCard displays correct content for selected audience
- [ ] Sub-section tabs switch content with smooth fade
- [ ] "Back to options" button returns to CallToActionCard
- [ ] Contact modal opens with pre-populated industry field
- [ ] All existing sections (Industries, Services, etc.) still work
- [ ] Bottom navigation bar still functions
- [ ] Mobile responsive (test on small screens)

---

## 🔧 Customization

### Modify Audience Content

Edit the content for each audience type in:

**File: `src/data/audienceContent.ts`**

Each audience has:
- `label`: Button text (e.g., "I'm a Farmer")
- `tagline`: Subtitle displayed in SolutionsCard
- `industry`: Used for contact form pre-population
- `subSections`: Array of 4 tabs with titles and content
- `ctaText`: Text shown above "Contact Us" button

### Change Animations

Adjust animation parameters in the component files:
- `CallToActionCard.tsx`: Lines 18-19 (initial animation)
- `SolutionsCard.tsx`: Lines 45-47 (card entrance)
- Motion.button hover/tap: Adjust `whileHover`/`whileTap` props

### Style Customization

All components use your existing Tailwind classes and CSS variables:
- `--brand`: Primary brand color
- `--accent`: Secondary accent color
- `--ink`: Text color
- `--muted-ink`: Muted text
- Glassmorphism: `bg-white/60 backdrop-blur-2xl`

---

## 🐛 Troubleshooting

### "useNavigation must be used within NavigationProvider"
**Solution**: Make sure you wrapped your app with `<NavigationProvider>` in `main.tsx`

### Content not switching when clicking tabs
**Solution**: Check that `activeSubSection` state is updating in `SolutionsCard.tsx`

### Industry field not pre-populating
**Solution**: Ensure you're clicking an audience button first, and the audience has an `industry` field in `audienceContent.ts`

### Animation not smooth
**Solution**: Ensure Framer Motion is installed (`npm install framer-motion`) and `AnimatePresence` wraps the conditional SolutionsCard

---

## 📚 File Structure Summary

```
src/
├── contexts/
│   └── NavigationContext.tsx         # Global state management
├── data/
│   └── audienceContent.ts            # Content for all audiences
├── components/
│   ├── CallToActionCard.tsx          # 4-button selector
│   ├── SolutionsCard.tsx             # Dynamic content with tabs
│   └── ContactModal.tsx              # Updated with industry field
├── App.tsx                           # Main page (updated)
└── main.tsx                          # Entry point (wrap with provider)
```

---

## 🎯 Next Steps

1. Test the integration in development: `npm run dev`
2. Verify all audience flows work correctly
3. Customize content in `audienceContent.ts` to match your messaging
4. Test on mobile devices for responsive behavior
5. Consider adding more sub-sections or audiences as needed

---

**Questions or Issues?**

Check the component files for inline comments and refer to the Framer Motion docs for advanced animations:
- https://www.framer.com/motion/
