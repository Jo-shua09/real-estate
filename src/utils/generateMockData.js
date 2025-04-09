import fs from "fs";

// Define arrays for random data generation
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

// Helper function to get random item from array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Helper function to get random number between min and max
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Helper function to get random date in the next 3 months
const getRandomDate = () => {
  const today = new Date();
  const future = new Date(today.setMonth(today.getMonth() + 3));
  const randomDate = new Date(
    today.getTime() + Math.random() * (future.getTime() - today.getTime())
  );
  return randomDate.toLocaleDateString();
};

// Add this array near the top with other constants
// Replace the unsplashImages array with these verified URLs
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
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b"
];

// Add these new arrays after the unsplashImages array
const floorPlanImages = [
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
  "https://images.unsplash.com/photo-1600607687101-9df5087c2dc9",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b"
];

const virtualTourUrls = [
  "https://my.matterport.com/show/?m=zEWsxhZpGba",
  "https://my.matterport.com/show/?m=VAXg7e9PX6S",
  "https://my.matterport.com/show/?m=CoPaqg99KJF",
  "https://my.matterport.com/show/?m=8jYMzwgs7Yd",
  "https://my.matterport.com/show/?m=PXKqTBNkjyK"
];

// Generate mock data
const generateMockData = () => {
  const properties = [];

  for (let i = 1; i <= 100; i++) {
    const propertyName = `${getRandomItem(adjectives)} ${getRandomItem(
      nouns
    )} ${getRandomItem(types)}`;
    const propertyType = getRandomItem(propertyTypes);
    const feature = getRandomItem(features);
    const amenity = getRandomItem(amenities);

    // In the generateMockData function, update the image_url:
    properties.push({
      property_id: i,
      property_name: propertyName,
      image_url: `${getRandomItem(unsplashImages)}?auto=format&fit=crop&w=800&h=600&q=80`,
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
      lot_size_acres: Number((Math.random() * 9.9 + 0.1).toFixed(1)),
      hoa_fee: Number((Math.random() * 400 + 100).toFixed(2)),
      open_house_date: getRandomDate(),
      virtual_tour_url: getRandomItem(virtualTourUrls),
      floor_plan_image: `${getRandomItem(floorPlanImages)}?auto=format&fit=crop&w=800&h=600&q=80`,
    });
  }

  return properties;
};

// Generate and save the data
const mockData = generateMockData();
const outputPath =
  "c:/Users/joshu/Documents/Developer Projects/React Webs/Real Estate Website/real-estate/public/mock_data.json";

try {
  fs.writeFileSync(outputPath, JSON.stringify(mockData, null, 2));
  console.log("Mock data generated successfully!");
} catch (error) {
  console.error("Error writing mock data:", error);
}
