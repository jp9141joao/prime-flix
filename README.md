# Prime Flix

Prime Flix is a front-end React application that showcases a collection of movies fetched dynamically from the TMDB API. The project illustrates essential React concepts such as component reuse, dynamic routing, state management, and API consumption. It also demonstrates user experience improvements like loading states, error handling, and favorites management.

## Features

- **Movie Listings:** Displays currently playing movies on the Home page by consuming the TMDB API.
- **Dynamic Routing:** Uses React Router to create routes for the home page, detailed movie pages, error handling (Not Found), and a favorites page.
- **Reusable Components:** Includes a common Header component rendered across all pages with navigation links.
- **Movie Details:** Fetches and displays detailed information (title, poster, synopsis, rating) for each movie when a user clicks on it.
- **Loading State:** Implements a loading state to improve the user experience during API calls.
- **Error Handling:** Provides a Not Found page for undefined routes.
- **Favorites Management:** Allows users to save and manage their favorite movies using localStorage.
- **YouTube Trailer Integration:** Offers functionality to search and display movie trailers on YouTube.
- **Alerts with React Toastify:** Uses react-toastify for professional, non-intrusive alert messages.

## Technologies Used

- **React:** For building the user interface.
- **React Router DOM:** For client-side routing.
- **Axios:** To handle HTTP requests to the TMDB API.
- **TMDB API:** For fetching movie data.
- **Local Storage:** For persisting user favorites locally.
- **React Toastify:** For displaying alerts.
- **CSS:** For styling the application across various components and pages.

## Project Structure

A possible project structure is as follows:

```
primeFlix/
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   └── Header/
    │   │       ├── index.tsx
    │   │       └── header.css
    │   ├── pages/
    │   │   ├── Home/
    │   │   │   ├── index.tsx
    │   │   │   └── home.css
    │   │   ├── Movie/        // Detailed movie page
    │   │   │   ├── index.js
    │   │   │   └── movie.css
    │   │   ├── Error/        // Not Found page
    │   │   │   ├── index.js
    │   │   │   └── error.css
    │   │   └── Favorites/    // Favorites page
    │   │       ├── index.js
    │   │       └── favorites.css
    │   ├── services/
    │   │   └── api.ts        // Axios configuration for the TMDB API
    │   ├── routes.tsx         // Centralized route configuration
    │   └── App.tsx            // Main application entry point
    ├── package.json
    └── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A TMDB API key. Sign up and obtain your API key from [TMDB](https://www.themoviedb.org).

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/jp9141joao/prime-flix
   cd prime-flix
   cd frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure the TMDB API Key:**

   Open the `src/services/api.tsx` file and insert your TMDB API key into the appropriate parameter when making requests. This key is required for fetching movie data.

### Running the Application

Start the development server with:

```bash
cd prime-flix
cd frontend
npm run dev
```

Your application will be available at `http://localhost:3000/`.

## Application Walkthrough

### Home Page

- **Movie List:** Fetches a list of movies using the TMDB API.  
- **Loading Indicator:** Shows a "Loading..." message while API data is being retrieved.
- **Navigation:** Each movie item is clickable, redirecting the user to the detailed movie page.

### Movie Details Page

- **Dynamic Content:** Displays detailed movie information based on the ID passed through the URL.
- **Buttons for Additional Actions:**
  - **Trailer Button:** Opens a YouTube search for the movie trailer.
  - **Favorite Button:** Saves the movie to the favorites list using localStorage.
- **Error Redirect:** Uses React Router’s `useNavigate` to redirect the user to the Home page if an invalid movie ID is provided.

### Not Found (Error) Page

- **Route Handling:** Renders when the user navigates to a route that is not defined.
- **User Guidance:** Displays an error message with a link to return to the Home page.
- **Styling:** Custom CSS ensures the error page is both clear and user-friendly.

### Favorites Page

- **Favorites Management:** Displays a list of movies stored in localStorage.
- **Remove Functionality:** Allows users to remove movies from their favorites.
- **User Feedback:** Alerts via react-toastify notify users when movies are added or removed successfully.
- **Conditional Messaging:** Informs the user if no movies are saved as favorites.

## Additional Notes

- **Styling:** Modular CSS files are used for each component/page. Modify these files in the corresponding directories (e.g., `header.css`, `home.css`) to customize the appearance.
- **Alerts:** For a more professional UX, alerts have been implemented with `react-toastify`, which provides easy-to-use and visually appealing notifications.
- **Routing:** All routes are defined in `src/routes.js`, ensuring that the Header component is consistently rendered across all views.

## Contributing

Contributions are welcome! If you wish to improve the project, please fork the repository and submit a pull request. For major changes, open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

---

This README should serve as a clear, comprehensive guide for setting up, understanding, and contributing to your Prime Flix project. Enjoy coding!
