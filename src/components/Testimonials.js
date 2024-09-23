import { Star } from "lucide-react";
import lawyerImage from '../assets/vecteezy_lawyer.png'; // Import the image

const testimonials = [
  {
    name: "Robert A. Voltaire",
    role: "Store link",
    image: lawyerImage, // Use the imported image
    rating: 5,
    comment:
      "Printify has been an incredible service for us musicians unable to keep a large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
  },
  {
    name: "Quinten Barney",
    role: "Etsy Merchant",
    image: lawyerImage,
    rating: 5,
    comment:
      "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
  },
  {
    name: "Nikki",
    role: "Store link",
    image: lawyerImage, // Use the same image or add different ones if available
    rating: 4,
    comment:
      "Printify has been an amazing partner as we grow our business, from the quality they can make for our customers to their Customer Service team that makes the whole process a breeze.",
  },
];

export default function Testimonials() {
  return (
    <div className="py-12 bg-gradient-to-r from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by over 8M sellers worldwide
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
            Whether you're just starting out or managing a large e-commerce business, we are committed to making your experience exceptional.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {testimonials.map(({ name, role, image, rating, comment }) => (
            <div key={name} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src={image}
                  alt={name}
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{name}</h3>
                  <p className="text-sm text-green-500">{role}</p>
                </div>
              </div>
              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
              {/* Comment */}
              <p className="text-gray-600 text-sm">{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
