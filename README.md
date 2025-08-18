# Uzence Design Studio

This project contains reusable React components built with TypeScript and styled with TailwindCSS. It uses **Vitest** for testing and **Storybook** for component documentation.

---

## Components

### InputField
A versatile input component supporting labels, helper text, error messages, disabled state, variants, sizes, and controlled values.

**Props:**
- `value?: string` – Input value (controlled)
- `onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void` – Change handler
- `label?: string` – Input label
- `placeholder?: string` – Placeholder text
- `helperText?: string` – Helper text
- `errorMessage?: string` – Error message for invalid input
- `disabled?: boolean` – Disable the input
- `invalid?: boolean` – Marks the input as invalid
- `variant?: "filled" | "outlined" | "ghost"` – Visual variant
- `size?: "sm" | "md" | "lg"` – Size of input
- `type?: "text" | "password"` – Input type

**Stories:**
- Default
- Invalid
- Disabled
- Variants

**Tests:**
- Rendering label, placeholder, helper text
- Error message rendering
- Disabled input
- `onChange` handler
- Variant and size classes

### DataTable
A table component supporting headers, rows, sorting, loading, empty states, and row selection.

**Tests:**
- Header rendering
- Row rendering
- Loading state
- Empty state
- Sorting
- Row selection

---

## Scripts

- `npm run dev` – Run Vite development server  
- `npm run build` – Build production  
- `npm run storybook` – Run Storybook  
- `npm run test` – Run Vitest tests

---

## Setup

Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/Sumitmore161/Uzence_Design_Studio.git
cd Uzence_Design_Studio
```
### 2. Install Dependencies 

```bash
npm install
```

### 3.Run Storybook (for component previews)
```bash
npm run storybook
```
Storybook runs at http://localhost:6006, where you can preview components like DataTable and InputField.

### 4.Run tests

```bash
npm run test
```