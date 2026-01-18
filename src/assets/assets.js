import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'

import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'

import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  left_arrow,
  right_arrow,
}

export const projectsData = [
  {
    title: 'Skyline Haven',
    price: '$2,50,000',
    location: 'California',
    image: project_img_1,
  },
  {
    title: 'Vista Verde',
    price: '$2,50,000',
    location: 'San Francisco',
    image: project_img_2,
  },
  {
    title: 'Serenity Suites',
    price: '$2,50,000',
    location: 'Chicago',
    image: project_img_3,
  },
  {
    title: 'Central Square',
    price: '$2,50,000',
    location: 'Los Angeles',
    image: project_img_4,
  },
  {
    title: 'Vista Verde',
    price: '$2,50,000',
    location: 'San Francisco',
    image: project_img_5,
  },
  {
    title: 'Serenity Suites',
    price: '$2,50,000',
    location: 'Chicago',
    image: project_img_6,
  },
]

export const testimonialsData = [
  {
    name: 'Donald Jackman',
    title: 'Marketing Manager',
    image: profile_img_1,
    alt: 'Portrait of Donald Jackman',
    rating: 5,
    message:
      'The development team delivered a high-performing website that exceeded our expectations. Clean code, fast loading, and excellent support throughout.',
  },
  {
    name: 'Richard Nelson',
    title: 'UI/UX Designer',
    image: profile_img_2,
    alt: 'Portrait of Richard Nelson',
    rating: 4,
    message:
      'Their frontend and backend development skills are top-notch. The collaboration was smooth and the final product was exactly what we needed.',
  },
  {
    name: 'James Washington',
    title: 'Co-Founder',
    image: profile_img_3,
    alt: 'Portrait of James Washington',
    rating: 5,
    message:
      'Reliable development services with strong technical expertise. They helped us scale our platform and improve overall performance.',
  },
]

export default assets
