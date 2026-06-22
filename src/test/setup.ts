import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Unmount React trees and reset jsdom between tests so DOM/focus state never leaks.
afterEach(() => {
  cleanup();
  window.localStorage.clear();
});
