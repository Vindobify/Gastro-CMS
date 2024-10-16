"use client"

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">LeckereBissen</h3>
            <p className="text-sm">Leckeres Essen direkt zu Ihnen nach Hause geliefert.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Links</h4>
            <ul className="space-y-2">
              <li><Link href="/menu" className="hover:text-orange-500 transition-colors">Menü</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">Über uns</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Kontakt</Link></li>
              <li><Link href="/privacy" className="hover:text-orange-500 transition-colors">Datenschutz</Link></li>
              <li><Link href="/terms" className="hover:text-orange-500 transition-colors">AGB</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Kontakt</h4>
            <p className="text-sm">
              Essensstraße 123<br />
              1234 Wien<br />
              Tel: +43 1 234 5678<br />
              Email: info@leckerebissen.com
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Folgen Sie uns</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LeckereBissen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;