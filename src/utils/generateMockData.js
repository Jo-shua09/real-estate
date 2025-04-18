// Import the 'fs' module so we can write files to the computer
import fs from "fs";

// === ARRAYS OF SAMPLE DATA ===
// These are used to create realistic fake property info

const adjectives = ["Luxury", "Modern", "Cozy", "Elegant", "Spacious", "Classic", "Contemporary", "Charming", "Grand", "Pristine"];
const nouns = ["Vista", "Gardens", "Heights", "Park", "Manor", "Estate", "Place", "Residence", "Retreat", "Haven"];
const types = ["Villa", "House", "Mansion", "Home", "Resort", "Lodge", "Dwelling", "Complex"];
const features = ["swimming pool", "garden", "rooftop terrace", "fitness center", "tennis court", "spa", "bbq area", "playground"];
const amenities = ["concierge", "24/7 security", "parking", "elevator", "storage", "laundry", "pet friendly", "bike storage"];
const propertyTypes = ["condo", "apartment", "house", "townhouse", "duplex", "villa"];

// === HELPER FUNCTIONS ===

// Get a random item from any array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get a random number between two values
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Get a random future date (within the next 3 months)
const getRandomDate = () => {
  const today = new Date();
  const future = new Date(today.setMonth(today.getMonth() + 3));
  const randomDate = new Date(today.getTime() + Math.random() * (future.getTime() - today.getTime()));
  return randomDate.toLocaleDateString(); // Format date as MM/DD/YYYY
};

// === COMMENT DATA ===
// Used to generate fake reviews for each property

const commenters = [
  "Emma Thompson",
  "James Wilson",
  "Sophia Garcia",
  "Lucas Chen",
  "Isabella Martinez",
  "Oliver Brown",
  "Ava Johnson",
  "Ethan Davis",
  "Mia Anderson",
  "Noah Taylor",
  "Charlotte Lee",
  "William Wright",
];

const locations = [
  "New York, USA",
  "California, USA",
  "Florida, USA",
  "Texas, USA",
  "Illinois, USA",
  "Washington, USA",
  "Massachusetts, USA",
  "Oregon, USA",
  "Colorado, USA",
  "Arizona, USA",
  "Nevada, USA",
  "Michigan, USA",
];

// === IMAGES & EXTRAS ===

// Images of houses (randomly used for each listing)
const unsplashImages = [
  "https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7546776/pexels-photo-7546776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7598378/pexels-photo-7598378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7546776/pexels-photo-7546776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/209274/pexels-photo-209274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7031595/pexels-photo-7031595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

// Floor plan images (verified architectural drawings)
const floorPlanImages = [
  "https://images.pexels.com/photos/19227216/pexels-photo-19227216/free-photo-of-photo-of-a-luxury-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6957093/pexels-photo-6957093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6186818/pexels-photo-6186818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6312076/pexels-photo-6312076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6957094/pexels-photo-6957094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6297086/pexels-photo-6297086.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/7534541/pexels-photo-7534541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/",
  "https://images.pexels.com/photos/6587899/pexels-photo-6587899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

// Updated virtual tour URLs with working demo tours
const virtualTourUrls = [
  "https://images.pexels.com/photos/6782279/pexels-photo-6782279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7533764/pexels-photo-7533764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7227612/pexels-photo-7227612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7535026/pexels-photo-7535026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7031736/pexels-photo-7031736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6588579/pexels-photo-6588579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7214156/pexels-photo-7214156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7512036/pexels-photo-7512036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

// Updated avatar images (verified portrait photos)
const avatarImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=85",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=85",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=85",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=85",
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=150&h=150&q=85",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=85",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=85",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=85",
];

const commentTexts = [
  "Absolutely stunning property! The attention to detail is remarkable.",
  "Had an amazing experience viewing this property. The amenities are top-notch!",
  "The location is perfect and the interior design is spectacular.",
  "This property exceeded all my expectations. Truly a luxury living experience.",
  "Incredible value for such a prime location. The views are breathtaking!",
  "The virtual tour was very helpful. Can't wait to see it in person!",
  "Modern design meets classic comfort. This is exactly what I'm looking for.",
  "The floor plan is well thought out and the finishes are exceptional.",
];

// === Function to Generate Fake Comments ===
// In the generateComments function, update the maximum number of comments
const generateComments = () => {
  const numberOfComments = getRandomNumber(2, 3); // Changed max from 5 to 3 comments
  const comments = [];

  for (let i = 0; i < numberOfComments; i++) {
    comments.push({
      id: i + 1,
      author: getRandomItem(commenters),
      location: getRandomItem(locations),
      avatar: `${getRandomItem(avatarImages)}?auto=format&fit=crop&w=150&h=150&q=80`,
      rating: getRandomNumber(3, 5),
      comment: getRandomItem(commentTexts),
      date: new Date(Date.now() - getRandomNumber(1, 30) * 24 * 60 * 60 * 1000).toLocaleDateString(),
    });
  }

  return comments;
};

// === Function to Generate 100 Fake Property Listings ===

// In your generateMockData function, add the FAQ data
const generateMockData = () => {
  const properties = [];

  for (let i = 1; i <= 100; i++) {
    const propertyName = `${getRandomItem(adjectives)} ${getRandomItem(nouns)} ${getRandomItem(types)}`;
    const propertyType = getRandomItem(propertyTypes);
    const feature = getRandomItem(features);
    const amenity = getRandomItem(amenities);

    // In the property generation, update the image URLs with quality parameters
    properties.push({
      property_id: i,
      property_name: propertyName,
      image_url: `${getRandomItem(unsplashImages)}`,
      features: feature,
      amenities: amenity,
      property_type: propertyType,
      location: getRandomItem(locations), // Fixed: changed 'location' to 'locations'
      size_sqft: getRandomNumber(2000, 5000),
      year_built: getRandomNumber(1900, 2020),
      description: `Welcome to ${propertyName}, an exceptional ${propertyType} that exemplifies luxury living at its finest. This stunning property features a ${feature} and includes ${amenity} for your convenience. With its sophisticated design and attention to detail, this home offers the perfect blend of comfort and elegance.`,
      price: getRandomNumber(300000, 1000000),
      bedrooms: getRandomNumber(1, 6),
      bathrooms: getRandomNumber(1, 5),
      garage_spaces: getRandomNumber(0, 3),
      lot_size_acres: Number((Math.random() * 9.9 + 0.1).toFixed(1)), // Lot size between 0.1 and 10 acres
      hoa_fee: Number((Math.random() * 400 + 100).toFixed(2)), // Random HOA fee
      open_house_date: getRandomDate(),
      virtual_tour_url: getRandomItem(virtualTourUrls),
      floor_plan_image: `${getRandomItem(floorPlanImages)}`,
      comments: generateComments(),
    });
  }

  return {
    properties,
  };
};

// === Save the Generated Data to a JSON File ===
const mockData = generateMockData();

// Update the path to match your project folder
const outputPath = "c:/Users/joshu/Documents/Developer Projects/React Webs/Real Estate Website/real-estate/public/mock_data.json";

try {
  // Convert to JSON and write to file
  fs.writeFileSync(outputPath, JSON.stringify(mockData, null, 2));
  console.log("Mock data generated successfully!");
} catch (error) {
  console.error("Error writing mock data:", error);
}

// TO RUN/ GENERATE THE MOCK DATA
// TYPE AND RUN "npm run generate-mock" IN YOUR TERMINAL
