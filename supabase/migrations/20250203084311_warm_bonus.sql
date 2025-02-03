/*
  # Initial Schema Setup for Paws & Coffee

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `name` (text)
      - `email` (text)
      - `date` (date)
      - `time` (time)
      - `guests` (integer)
      - `bringing_dog` (boolean)
      - `dog_name` (text, nullable)
      - `dog_breed` (text, nullable)
      - `swimming_session` (boolean)
      - `created_at` (timestamptz)
      - `status` (text)
    
    - `menu_items` 
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (integer)
      - `category` (text)
      - `available` (boolean)
      
    - `services`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (integer)
      - `duration` (text)
      - `available` (boolean)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Add policies for public read access to menu and services
*/

-- Create tables
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users,
  name text NOT NULL,
  email text NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  guests integer NOT NULL,
  bringing_dog boolean DEFAULT false,
  dog_name text,
  dog_breed text,
  swimming_session boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending',
  CONSTRAINT valid_guests CHECK (guests > 0)
);

CREATE TABLE menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price integer NOT NULL,
  category text NOT NULL,
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price integer NOT NULL,
  duration text NOT NULL,
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Policies for bookings
CREATE POLICY "Users can view their own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policies for menu items (public read)
CREATE POLICY "Anyone can view menu items"
  ON menu_items
  FOR SELECT
  TO anon
  USING (true);

-- Policies for services (public read)
CREATE POLICY "Anyone can view services"
  ON services
  FOR SELECT
  TO anon
  USING (true);

-- Insert initial menu items
INSERT INTO menu_items (name, description, price, category) VALUES
  ('Pawfect Pancakes', 'Fluffy buttermilk pancakes served with maple syrup and fresh berries', 499, 'human'),
  ('Bark-fast Bowl', 'Scrambled eggs, bacon, avocado, and sourdough toast', 599, 'human'),
  ('Puppy Patty', 'Homemade beef patty with rice and vegetables (dog-friendly)', 349, 'dog'),
  ('Tail-Wagging Turkey', 'Ground turkey with sweet potato and green beans (dog-friendly)', 299, 'dog');

-- Insert initial services
INSERT INTO services (name, description, price, duration) VALUES
  ('Swimming Session', 'Supervised pool time for your furry friend', 999, '30 minutes'),
  ('Pool Party Package', 'Private pool session for up to 3 dogs', 2499, '1 hour');