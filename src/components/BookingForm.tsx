import React, { useState } from 'react';
import { BookingFormData } from '../types';

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    bringingDog: false,
    swimmingSession: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would connect to backend in production)
    console.log('Booking submitted:', formData);
    alert('Booking submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Make a Reservation</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            required
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            required
            className="w-full p-2 border rounded"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Time</label>
          <select
            required
            className="w-full p-2 border rounded"
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
          >
            <option value="">Select time</option>
            <option value="10:00">10:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="16:00">4:00 PM</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Number of Guests</label>
          <input
            type="number"
            min="1"
            required
            className="w-full p-2 border rounded"
            value={formData.guests}
            onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="bringingDog"
            className="mr-2"
            checked={formData.bringingDog}
            onChange={(e) => setFormData({...formData, bringingDog: e.target.checked})}
          />
          <label htmlFor="bringingDog">Bringing a dog?</label>
        </div>

        {formData.bringingDog && (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">Dog's Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.dogName || ''}
                onChange={(e) => setFormData({...formData, dogName: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Dog's Breed</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.dogBreed || ''}
                onChange={(e) => setFormData({...formData, dogBreed: e.target.value})}
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="swimmingSession"
                className="mr-2"
                checked={formData.swimmingSession}
                onChange={(e) => setFormData({...formData, swimmingSession: e.target.checked})}
              />
              <label htmlFor="swimmingSession">Add swimming session?</label>
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Book Now
        </button>
      </div>
    </form>
  );
}