/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,      // ✅ allows using describe/it/expect without imports
    environment: "jsdom", // ✅ for React component testing
    setupFiles: "./src/setupTest.ts",
  },
});
