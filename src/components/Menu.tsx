import React from 'react';
import { menuItems } from '../data';

export default function Menu() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Menu</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">For Humans</h3>
          <div className="space-y-4">
            {menuItems
              .filter(item => item.category === 'human')
              .map(item => (
                <div key={item.name} className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-medium">{item.name}</h4>
                    <span className="text-blue-600 font-semibold">₹{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">For Dogs</h3>
          <div className="space-y-4">
            {menuItems
              .filter(item => item.category === 'dog')
              .map(item => (
                <div key={item.name} className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-medium">{item.name}</h4>
                    <span className="text-blue-600 font-semibold">₹{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}