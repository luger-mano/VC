# Getting Started - Vovó Crochê

## Project Setup

Your Angular application with Tailwind CSS has been successfully initialized!

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**

### Installation

1. Install dependencies:
```bash
npm install
```

Or with yarn:
```bash
yarn install
```

### Development Server

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200/`

### Build for Production

Build the project for production:
```bash
npm run build
```

The output will be in the `dist/` directory.

### Running Tests

Run the test suite:
```bash
npm test
```

### Project Structure

```
src/
├── app/               # Application components
│   └── app.component.* # Root component
├── assets/            # Static assets
├── environments/      # Environment configurations
├── index.html         # Main HTML file
├── main.ts           # Application entry point
└── styles.scss       # Global styles

Configuration files:
├── angular.json      # Angular CLI configuration
├── tsconfig.json     # TypeScript configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration
└── karma.conf.js     # Testing configuration
```

### Key Technologies

- **Angular 18** - Modern, fast web application framework
- **Tailwind CSS 3** - Utility-first CSS framework
- **TypeScript** - Strongly typed JavaScript
- **SCSS** - Preprocessed styling (optional)
- **Jasmine/Karma** - Testing frameworks

### Tailwind CSS Configuration

Tailwind CSS is already configured and ready to use. The configuration file `tailwind.config.js` is set up to process all HTML and TypeScript files.

You can customize Tailwind's theme by editing `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Your custom colors
    },
    // More customizations
  },
}
```

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run watch` - Build in watch mode
- `npm run lint` - Run linter

### Recommended VS Code Extensions

We recommend installing these extensions for the best development experience:

1. **Angular Language Service** - Angular support
2. **Prettier** - Code formatter
3. **ESLint** - Code quality
4. **Tailwind CSS IntelliSense** - Tailwind CSS autocomplete
5. **Docker** - Docker support (optional)

These will be suggested automatically when you open the project in VS Code.

### Next Steps

1. Start the development server: `npm start`
2. Open your browser to `http://localhost:4200/`
3. Start building your components in the `src/app/` folder
4. Use Tailwind CSS classes for styling
5. Checkout the demo component we provided for reference

### Useful Resources

- [Angular Documentation](https://angular.io)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Angular CLI Documentation](https://angular.io/cli)

### Troubleshooting

**Port 4200 is already in use?**
```bash
npm start -- --port 4201
```

**Clear node_modules and reinstall:**
```bash
rm -r node_modules .angular
npm install
```

For more help, refer to the official Angular documentation.

---

Happy coding! 🎨✨
