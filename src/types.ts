export interface BookingFormData {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  bringingDog: boolean;
  dogName?: string;
  dogBreed?: string;
  swimmingSession: boolean;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: 'human' | 'dog';
}

export interface Service {
  name: string;
  description: string;
  price: number;
  duration: string;
}