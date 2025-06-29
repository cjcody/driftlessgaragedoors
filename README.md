# Tailwind React Template

A modern web development template using **React**, **Vite**, and **Tailwind CSS**, featuring additional plugins for animations, forms, and typography.

## Features

- ⚛️ [React](https://react.dev/) - A JavaScript library for building user interfaces
- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- ✨ [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) - Beautiful animations
- 📝 [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) - Beautiful typography defaults
- 📋 [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) - Form element styling

## Getting Started

1. Clone this template:
   ```bash
   cp -r tailwind-template your-project-name
   cd your-project-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## React + Tailwind Integration

This template is pre-configured for React development with Tailwind CSS. You can start building components immediately:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to Your React App
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500 text-lg">Start building your components here!</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
```

## Available Plugins

### Animations (tailwindcss-animate)
Use animation classes like:
- `animate-fade-in`
- `animate-slide-up`
- `animate-slide-down`
- And many more!

Example:
```html
<div class="animate-fade-in animate-duration-1000">
  This will fade in over 1 second
</div>
```

### Forms (@tailwindcss/forms)
Automatically styles form elements with consistent, modern design:
- Input fields
- Select dropdowns
- Checkboxes
- Radio buttons
- And more!

Example:
```html
<input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
```

### Typography (@tailwindcss/typography)
Add beautiful typography to your content using the `prose` class:
```html
<article class="prose prose-lg">
  <h1>Your heading</h1>
  <p>Your content...</p>
</article>
```

## Building for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Customization

- Edit `tailwind.config.js` to customize your theme
- Add custom animations in the `keyframes` section
- Modify the typography styles using the `prose` modifier classes
- Customize form styles using the form plugin's configuration options

## License

MIT 