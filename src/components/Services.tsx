import React from 'react';
import { services } from '../data';
import { School as Pool } from 'lucide-react';

export default function Services() {
  return (
    <div className="bg-blue-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Pool Services</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map(service => (
            <div key={service.name} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <Pool className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-semibold">₹{service.price}</span>
                <span className="text-gray-500">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}