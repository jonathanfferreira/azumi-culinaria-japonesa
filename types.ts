import React from 'react';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isVegetarian?: boolean;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}