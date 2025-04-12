# BAAZ Electrical Services Website

A modern, professional website for BAAZ Electrical Services, showcasing their electrical services in the Riverland area. This website features a responsive design, interactive elements, and a clean, professional layout.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Animated service cards, testimonials, and statistics
- **Contact Form**: User-friendly contact form with validation
- **Service Showcase**: Comprehensive display of electrical services
- **Testimonials**: Customer testimonials section
- **Mobile-Friendly Navigation**: Easy-to-use navigation on all devices
- **Professional Styling**: Advanced SCSS styling with variables and mixins
- **Performance Optimized**: Fast loading and smooth scrolling
- **SEO Ready**: Properly structured HTML for search engine optimization

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start the SCSS compiler:
```bash
npm start
```

3. Open `index.html` in your browser to view the website.

## Project Structure

```
baaz-electrical-services/
├── index.html              # Main HTML file
├── scss/
│   └── main.scss           # Main SCSS file with all styles
├── css/
│   └── style.css           # Compiled CSS file
├── js/
│   └── main.js             # JavaScript for interactivity
└── images/
    ├── hero-bg.jpg         # Hero section background (to be added)
    └── map-bg.jpg          # Map section background (to be added)
```

## Technologies Used

- **HTML5**: Semantic markup for better structure and SEO
- **CSS3/SCSS**: Advanced styling with variables, mixins, and animations
- **JavaScript**: Interactive features and animations
- **Bootstrap 5**: Responsive grid system and components
- **Font Awesome**: Professional icons
- **Intersection Observer API**: For scroll-based animations

## Customization

### Colors
To change the website's color scheme, modify the variables in `scss/main.scss`:
```scss
$primary-color: #007bff;
$secondary-color: #6c757d;
$dark-color: #343a40;
$light-color: #f8f9fa;
$accent-color: #ffc107;
```

### Content
- To add/modify services, edit the services section in `index.html`
- To update testimonials, modify the testimonials section
- To change contact information, update the contact section

### Images
Replace the placeholder images in the `images` directory:
- `hero-bg.jpg`: Hero section background (recommended size: 1920x1080px)
- `map-bg.jpg`: Map section background (recommended size: 1920x600px)

## Contact Form

The contact form is currently set up with a simulated submission. To make it functional:

1. Set up a backend server (Node.js, PHP, etc.)
2. Modify the form submission handling in `js/main.js`
3. Add your server endpoint to handle the form data

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Optimization

The website includes several performance optimizations:
- Lazy loading of images
- Optimized animations using CSS transforms
- Efficient JavaScript with debouncing and throttling
- Minified CSS and JavaScript for production

## Deployment

To deploy the website:

1. Build the production version:
```bash
npm run build
```

2. Upload the following files to your web server:
   - `index.html`
   - `css/style.css`
   - `js/main.js`
   - `images/` directory

## Credits

- Font Awesome for icons
- Bootstrap for responsive framework
- Google Fonts for typography

## License

This project is licensed under the MIT License - see the LICENSE file for details. 