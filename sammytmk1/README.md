# Netflix Clone

This project is a Netflix clone built with Nuxt.js, showcasing a variety of movies and series. It includes features such as user authentication, movie details, and a responsive design.

## Features

- **Home Page**: Displays a list of movies with a featured banner.
- **Movie Details**: Dynamic route to view detailed information about a specific movie.
- **User Authentication**: Login page for user access.
- **Responsive Design**: Optimized for various screen sizes.

## Project Structure

```
sammytmk1
├── components
│   ├── Navbar.vue        # Navigation links for the application
│   ├── MovieCard.vue     # Displays individual movie details
│   ├── Banner.vue        # Showcases a featured movie
│   └── Footer.vue        # Contains copyright and additional links
├── layouts
│   └── default.vue       # Default layout wrapping around pages
├── pages
│   ├── index.vue         # Homepage displaying movies
│   ├── movie
│   │   └── [id].vue      # Dynamic route for movie details
│   └── login.vue         # User login page
├── store
│   └── index.js          # Vuex store for state management
├── assets
│   ├── styles
│   │   └── main.css      # Main CSS styles
│   └── images            # Directory for image assets
├── static
│   └── favicon.ico       # Application favicon
├── nuxt.config.js        # Nuxt.js configuration file
└── README.md             # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd sammytmk1
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Feel free to submit issues or pull requests for improvements and features.