import React from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaTiktok, 
  FaYoutube, 
  FaReddit 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column: Integrations */}
          <div>
            <h3 className="font-semibold mb-4">Integrations</h3>
            <ul className="space-y-2">
              <li>Shopify</li>
              <li>Etsy</li>
              <li>eBay</li>
              <li>Amazon</li>
              <li>TikTok Shop</li>
              <li>PrestaShop</li>
              <li>BigCommerce</li>
              <li>Wix</li>
              <li>WooCommerce</li>
              <li>Squarespace</li>
              <li>Printify API</li>
              <li>Printify Pop-Up Store</li>
              <li>Shutterstock</li>
            </ul>
          </div>

          {/* Second Column: Discover */}
          <div>
            <h3 className="font-semibold mb-4">Discover</h3>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Guides</li>
              <li>Products</li>
              <li>Etsy print-on-demand</li>
              <li>Shopify print-on-demand</li>
              <li>Woocommerce print-on-demand</li>
              <li>Wix print-on-demand</li>
              <li>Squarespace print-on-demand</li>
              <li>Make Your Own Shirt</li>
              <li>Brands</li>
              <li>Pricing</li>
              <li>Shipping Rates</li>
              <li>Mockup Generator</li>
            </ul>
          </div>

          {/* Third Column: Start selling */}
          <div>
            <h3 className="font-semibold mb-4">Start selling</h3>
            <ul className="space-y-2">
              <li>Custom T-shirts</li>
              <li>Custom Hoodies</li>
              <li>Custom Mugs</li>
              <li>Custom Socks</li>
              <li>Custom Backpacks</li>
              <li>Custom Branding</li>
              <li>Sell on Etsy</li>
              <li>Sell on Social Media</li>
              <li>Free T-shirt Designs</li>
              <li>Custom Products</li>
              <li>Custom All-Over-Print Hoodies</li>
              <li>Start a Clothing Line</li>
              <li>Start POD Business</li>
              <li>Bulk Orders</li>
              <li>Transferring To Printify</li>
            </ul>
          </div>

          {/* Fourth Column: Printify */}
          <div>
            <h3 className="font-semibold mb-4">Printify</h3>
            <ul className="space-y-2">
              <li>Print on Demand</li>
              <li>Print Providers</li>
              <li>Experts Program</li>
              <li>Printify Express Delivery</li>
              <li>Become a Partner</li>
              <li>About</li>
              <li>Printify Quality Promise</li>
              <li>Jobs</li>
              <li>Webinars</li>
              <li>Printing Profits Podcast</li>
              <li>Contact Us</li>
              <li>Affiliate</li>
              <li>Contact Sales</li>
              <li>POD Glossary</li>
              <li>Network Fulfillment Status</li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 space-x-4">
          <a href="https://facebook.com" className="text-green-600">
            <FaFacebookF size={24} />
          </a>
          <a href="https://instagram.com" className="text-green-600">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" className="text-green-600">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://twitter.com" className="text-green-600">
            <FaTwitter size={24} />
          </a>
          <a href="https://tiktok.com" className="text-green-600">
            <FaTiktok size={24} />
          </a>
          <a href="https://youtube.com" className="text-green-600">
            <FaYoutube size={24} />
          </a>
          <a href="https://reddit.com" className="text-green-600">
            <FaReddit size={24} />
          </a>
        </div>

        {/* Simple Footer Message */}
        <div className="py-4 bg-gray-800 text-white text-center mt-8">
          <p>© 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
