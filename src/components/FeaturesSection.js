import higherProfits from '../assets/higher-profits.svg';
import robustScaling from '../assets/robust-scaling.svg';
import bestSelection from '../assets/best-selection.svg';

const features = [
  {
    icon: higherProfits,
    title: 'Higher Profits',
    description: 'We offer some of the lowest prices in the industry because print providers continuously compete to win your business.',
  },
  {
    icon: robustScaling,
    title: 'Robust Scaling',
    description: 'Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.',
  },
  {
    icon: bestSelection,
    title: 'Best Selection',
    description: 'With 900+ products and top quality brands, you can choose the best products for your business.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
