import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Dog, Coffee, ScrollText } from 'lucide-react';
import Menu from './components/Menu';
import Services from './components/Services';
import ReservationPage from './pages/ReservationPage';

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gray-50">
          {/* Fixed Booking Button */}
          <div className="fixed top-4 right-4 z-50">
            <button
              onClick={() => navigate('/reservation')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Book Now
            </button>
          </div>

          {/* Hero Section */}
          <div 
            className="h-screen bg-cover bg-center relative"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4 animate-fade-in">Paws & Coffee</h1>
                <p className="text-xl mb-8 animate-slide-up">Where dogs and humans share memorable moments</p>
                <button 
                  onClick={() => navigate('/reservation')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors animate-bounce"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <Dog className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">Dog-Friendly Space</h3>
                  <p className="text-gray-600">Specially designed areas for your furry friends to play and socialize</p>
                </div>
                <div className="p-6">
                  <Coffee className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">Gourmet Menu</h3>
                  <p className="text-gray-600">Delicious options for both humans and dogs</p>
                </div>
                <div className="p-6">
                  <ScrollText className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
                  <p className="text-gray-600">Simple reservation system for tables and pool sessions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <section id="menu" className="py-16">
            <Menu />
          </section>

          {/* Services Section */}
          <section id="services">
            <Services />
          </section>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <p className="mb-4">Paws & Coffee © 2024</p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="hover:text-blue-400">Contact</a>
                <a href="#" className="hover:text-blue-400">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400">Terms of Service</a>
              </div>
            </div>
          </footer>
        </div>
      } />
      <Route path="/reservation" element={<ReservationPage />} />
    </Routes>
  );
}

export default App;