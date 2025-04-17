# Real Estate Website

A modern real estate website built with React and Vite that allows users to browse property listings, filter search results, and contact real estate agents. This platform provides a seamless experience for both buyers and sellers in the real estate market.

## Features

- Property listing and search functionality
  - Advanced filters for price, location, property type
  - Sort by various criteria (price, date listed, size)
  - Save search preferences
- Detailed property pages with image galleries
  - 360° virtual tours
  - Floor plans and property documents
  - Neighborhood information and statistics
- Contact forms for inquiries
  - Direct messaging system with agents
  - Schedule viewing appointments
  - Request additional property information
- Responsive design for mobile and desktop
  - Optimized for all screen sizes
  - Touch-friendly interface
  - Fast loading times
- Interactive maps showing property locations
  - Nearby amenities and points of interest
  - School district information
  - Transit and walking scores
- User authentication and favorites system
  - Personalized dashboard
  - Saved properties list
  - Search history tracking
  - Email notifications for new listings

## Technologies Used

- React 18
  - Context API for state management
  - Custom hooks for reusable logic
  - Suspense for lazy loading
- Vite
  - Fast development server
  - Optimized build process
  - Hot Module Replacement
- React Router for navigation
  - Protected routes
  - Dynamic routing
  - Route-based code splitting
- Tailwind CSS for styling
  - Custom theme configuration
  - Responsive utilities
  - Dark mode support
- Firebase for backend services
  - Firestore database
  - Authentication
  - Cloud Functions
  - Storage for images
- React Query for data fetching
  - Caching and synchronization
  - Infinite loading
  - Real-time updates
- React Hook Form for form handling
  - Form validation
  - Error handling
  - Dynamic form fields

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Jo-shua09/real-estate.git
   cd real-estate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables: FOR BACKEND BUT NO BACKEND ADDED HERE

   - Create a `.env` file in the root directory
   - Add your Firebase configuration:
     ```
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```
