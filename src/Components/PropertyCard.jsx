const PropertyCard = ({ property }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-all">
      <img
        src={property.image_url}
        alt={property.property_name}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {property.property_name}
        </h3>
        <p className="text-green-600 font-medium">₦{property.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
