// Import the 'fs' module so we can write files to the computer
import fs from "fs";

// === ARRAYS OF SAMPLE DATA ===
// These are used to create realistic fake property info

const adjectives = [
  "Luxury",
  "Modern",
  "Cozy",
  "Elegant",
  "Spacious",
  "Classic",
  "Contemporary",
  "Charming",
  "Grand",
  "Pristine",
];
const nouns = [
  "Vista",
  "Gardens",
  "Heights",
  "Park",
  "Manor",
  "Estate",
  "Place",
  "Residence",
  "Retreat",
  "Haven",
];
const types = [
  "Villa",
  "House",
  "Mansion",
  "Home",
  "Resort",
  "Lodge",
  "Dwelling",
  "Complex",
];
const features = [
  "swimming pool",
  "garden",
  "rooftop terrace",
  "fitness center",
  "tennis court",
  "spa",
  "bbq area",
  "playground",
];
const amenities = [
  "concierge",
  "24/7 security",
  "parking",
  "elevator",
  "storage",
  "laundry",
  "pet friendly",
  "bike storage",
];
const propertyTypes = [
  "condo",
  "apartment",
  "house",
  "townhouse",
  "duplex",
  "villa",
];

// === HELPER FUNCTIONS ===

// Get a random item from any array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get a random number between two values
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Get a random future date (within the next 3 months)
const getRandomDate = () => {
  const today = new Date();
  const future = new Date(today.setMonth(today.getMonth() + 3));
  const randomDate = new Date(
    today.getTime() + Math.random() * (future.getTime() - today.getTime())
  );
  return randomDate.toLocaleDateString(); // Format date as MM/DD/YYYY
};

// === IMAGES & EXTRAS ===

// Images of houses (randomly used for each listing)
const unsplashImages = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
  "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
];

// Optional floor plans and virtual tours
const floorPlanImages = [
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
  "https://images.unsplash.com/photo-1600607687101-9df5087c2dc9",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
];

const virtualTourUrls = [
  "https://my.matterport.com/show/?m=zEWsxhZpGba",
  "https://my.matterport.com/show/?m=VAXg7e9PX6S",
  "https://my.matterport.com/show/?m=CoPaqg99KJF",
  "https://my.matterport.com/show/?m=8jYMzwgs7Yd",
  "https://my.matterport.com/show/?m=PXKqTBNkjyK",
];

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

const avatarImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
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
const generateComments = () => {
  const numberOfComments = getRandomNumber(2, 5); // Random 2–5 comments
  const comments = [];

  for (let i = 0; i < numberOfComments; i++) {
    comments.push({
      id: i + 1,
      author: getRandomItem(commenters),
      location: getRandomItem(locations),
      avatar: `${getRandomItem(
        avatarImages
      )}?auto=format&fit=crop&w=150&h=150&q=80`,
      rating: getRandomNumber(3, 5), // Star rating between 3 and 5
      comment: getRandomItem(commentTexts),
      date: new Date(
        Date.now() - getRandomNumber(1, 30) * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
    });
  }

  return comments;
};

// === Function to Generate 100 Fake Property Listings ===
// Add this FAQ data array after your existing constants
const faqData = [
  {
    id: 1,
    question: "What sets Estatein apart from other real estate agencies?",
    answer:
      "Estatein distinguishes itself through our personalized approach, extensive market expertise, and commitment to transparency. We offer innovative virtual tours, 24/7 customer support, and a carefully curated portfolio of premium properties.",
  },
  {
    id: 2,
    question: "How do I schedule a property viewing?",
    answer:
      "Scheduling a viewing is easy! Simply select your desired property, click the 'Schedule Viewing' button, and choose your preferred date and time. Our team will confirm your appointment within 24 hours.",
  },
  {
    id: 3,
    question: "What documents do I need to rent a property?",
    answer:
      "Required documents typically include proof of income (pay stubs or tax returns), employment verification, photo ID, rental history, and references. Additional documents may be required based on specific property requirements.",
  },
  {
    id: 4,
    question: "How long does the buying process typically take?",
    answer:
      "The buying process usually takes 30-60 days from offer acceptance to closing. This timeline can vary based on factors such as financing, property conditions, and negotiation terms.",
  },
  {
    id: 5,
    question: "Do you handle property management services?",
    answer:
      "Yes, we offer comprehensive property management services including tenant screening, maintenance coordination, rent collection, and regular property inspections.",
  },
  {
    id: 6,
    question: "What are the typical down payment requirements?",
    answer:
      "Down payment requirements vary by property and loan type, typically ranging from 3.5% to 20% of the purchase price. We can help connect you with financial advisors to explore your options.",
  },
  {
    id: 7,
    question: "How do you determine property values?",
    answer:
      "We use a comprehensive approach including comparative market analysis, property condition assessment, location evaluation, and current market trends to determine accurate property values.",
  },
  {
    id: 8,
    question: "What areas do you serve?",
    answer:
      "We serve major metropolitan areas and surrounding suburbs, with a focus on luxury and premium properties in prime locations. Contact us to learn about specific areas in your region.",
  },
];

// In your generateMockData function, add the FAQ data
const generateMockData = () => {
  const properties = [];

  for (let i = 1; i <= 100; i++) {
    const propertyName = `${getRandomItem(adjectives)} ${getRandomItem(
      nouns
    )} ${getRandomItem(types)}`;
    const propertyType = getRandomItem(propertyTypes);
    const feature = getRandomItem(features);
    const amenity = getRandomItem(amenities);

    properties.push({
      property_id: i,
      property_name: propertyName,
      image_url: `${getRandomItem(
        unsplashImages
      )}?auto=format&fit=crop&w=800&h=600&q=80`,
      features: feature,
      amenities: amenity,
      property_type: propertyType,
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
      floor_plan_image: `${getRandomItem(
        floorPlanImages
      )}?auto=format&fit=crop&w=800&h=600&q=80`,
      comments: generateComments(), // Add the list of comments
    });
  }

  return {
    properties,
    faqs: faqData,
  };
};

// === Save the Generated Data to a JSON File ===
const mockData = generateMockData();

// Update the path to match your project folder
const outputPath =
  "c:/Users/joshu/Documents/Developer Projects/React Webs/Real Estate Website/real-estate/public/mock_data.json";

try {
  // Convert to JSON and write to file
  fs.writeFileSync(outputPath, JSON.stringify(mockData, null, 2));
  console.log("Mock data generated successfully!");
} catch (error) {
  console.error("Error writing mock data:", error);
}

// TO RUN/ GENERATE THE MOCK DATA
// TYPE AND RUN "npm run generate-mock" IN YOUR TERMINAL
