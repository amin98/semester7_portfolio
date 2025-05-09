/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Add your custom design tokens from the JSON style guide here

      // Colors
      colors: {
        // Mapping JSON colors directly to Tailwind names
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40',
        textPrimary: '#212529',
        textSecondary: '#6c757d',
        background: '#ffffff', // You might want to name this 'white' or similar if 'background' conflicts/is confusing
        palette: {
          softLight: '#E7ECEF',
          deepBlue: '#274C77',
          steelBlue: '#6096BA',
          skyBlue: '#A3CEF1',
          softGray: '#8B8C89',
        },
      },

      // Spacing (converting your "x" units to pixel values)
      spacing: {
        // Mapping JSON spacing names to calculated pixel values based on unit
        unit: '8px', // Keep the unit available if needed, or just define the multiples
        small: '8px', // 1 * 8px
        medium: '16px', // 2 * 8px
        large: '24px', // 3 * 8px
        xlarge: '32px', // 4 * 8px
        'header-y': '3rem',
        'cta-x': '2.5rem',
      },

      // Font Sizes (Mapping headings and body text size)
      fontSize: {
        // Mapping JSON typography names to font sizes
        // Tailwind's fontSize utility can also include line-height,
        // but we'll keep it simple based on your JSON structure
        base: '1rem', // Corresponds to fontSizeBase
        h1: '2.5rem', // From headings.h1
        h2: '2rem', // From headings.h2
        h3: '1.75rem', // From headings.h3
        h4: '1.5rem', // From headings.h4
        h5: '1.25rem', // From headings.h5
        h6: '1rem', // From headings.h6 - Note: Conflicts with 'base', maybe name 'text-h6' or rely on 'base'
        // Let's rename h6 to avoid conflict and explicitly add body size
        body: '1rem', // From bodyText.fontSize - Same as base, could omit or use base
        // You might need to add custom line heights if not using the base one universally
      },

      // Font Family
      fontFamily: {
        // Define a custom font family name, e.g., 'sans' to override or 'arial' to add
        sans: ['Inter', 'Roboto', 'Arial', 'ui-sans-serif', 'system-ui'], // Overrides default sans with your preferred font
        // Or add a new one: 'arial': ['Arial', 'sans-serif'],
      },

      // Border Radius
      borderRadius: {
        // Mapping JSON radius name
        radius: '4px', // From borders.radius
        xl: '1rem',
        '2xl': '1.5rem',
      },

      // Box Shadows
      boxShadow: {
        // Mapping JSON shadow names
        small: '0 .125rem .25rem rgba(0,0,0,.075)', // From shadows.small
        medium: '0 .5rem 1rem rgba(0,0,0,.15)', // From shadows.medium
        large: '0 1rem 3rem rgba(0,0,0,.175)', // From shadows.large
      },

      // You might also add line-height, fontWeight if you need specific utilities for them
      // based on your JSON, though many weights are standard Tailwind utilities (font-bold, font-semibold etc.)
      // and line-heightBase could often be applied globally or via leading-* utilities.
      lineHeight: {
        base: '1.5', // From lineHeightBase
      },
      fontWeight: {
        400: '400', // Default font-normal
        500: '500', // Default font-medium
        600: '600', // Default font-semibold
        700: '700', // Default font-bold
        // Only add if you need custom weight utilities beyond default Tailwind ones
      },
    },
  },
  plugins: [],
};
