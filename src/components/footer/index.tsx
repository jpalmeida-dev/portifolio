// components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Minhas Redes</h2>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white hover:text-blue-500 transition-colors" size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white hover:text-blue-400 transition-colors" size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white hover:text-pink-500 transition-colors" size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white hover:text-blue-600 transition-colors" size={24} />
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">© {new Date().getFullYear()} Meu Nome. Todos os direitos reservados.</p>
            <p className="text-sm">Contato: meuemail@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;