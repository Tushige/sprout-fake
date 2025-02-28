import { v4 as uuidv4 } from 'uuid';
import StrawberryLogo from '../components/StrawberryLogo';
import BlueberryLogo from '../components/BlueberryLogo';
import AppleLogo from '../components/AppleLogo';

// mock data for module 1
export const module1Extension = [
  {
    id: uuidv4(),
    productImageSrc: 'images/sprout/protein.webp',
    features: [
      {
        text: 'vibrant, elevated flavors',
        icon: StrawberryLogo,
        iconBgColor: '#ff2056',
      },
      {
        text: 'packed full of superfoods',
        icon: BlueberryLogo,
        iconBgColor: '#51a2ff',
      },
      {
        text: 'healthy',
        icon: AppleLogo,
        iconBgColor: '#7ccf00',
      },
    ],
  },
  {
    id: uuidv4(),
    productImageSrc: 'images/sprout/beet.webp',
    features: [
      {
        text: 'vibrant, elevated flavors',
        icon: StrawberryLogo,
        iconBgColor: '#ff2056',
      },
      {
        text: 'packed full of superfoods',
        icon: BlueberryLogo,
        iconBgColor: '#51a2ff',
      },
      {
        text: 'healthy',
        icon: AppleLogo,
        iconBgColor: '#7ccf00',
      },
    ],
  },
  {
    id: uuidv4(),
    productImageSrc: 'images/sprout/veggie.webp',
    features: [
      {
        text: 'vibrant, elevated flavors',
        icon: StrawberryLogo,
        iconBgColor: '#ff2056',
      },
      {
        text: 'packed full of superfoods',
        icon: BlueberryLogo,
        iconBgColor: '#51a2ff',
      },
      {
        text: 'healthy',
        icon: AppleLogo,
        iconBgColor: '#7ccf00',
      },
    ],
  },
];

const createBlueberry = () => ({
  id: uuidv4(),
  imageSrc: 'images/sprout/blueberry.webp',
  title: 'Blueberry Delight',
  subtitle: '+ prebiotic fiber',
  rating: 5,
  price: 799,
  backdropImages: {
    left: 'images/seed/blueberry-accent-graphic-5.webp',
    right: 'images/seed/blueberry-accent-graphic-6.webp',
    bottom: 'images/seed/banana-accent-graphic-2.webp',
  },
  styles: {
    backgroundColor: '#ff8904',
  },
});
const createStrawberry = () => ({
  id: uuidv4(),
  imageSrc: 'images/sprout/strawberry.webp',
  title: 'Strawberry Burst',
  subtitle: '+ antioxidant',
  rating: 5,
  price: 899,
  backdropImages: {
    left: 'images/seed/strawberry-pineapple-accent-graphics-2.webp',
    right: 'images/seed/strawberry-pineapple-accent-graphics-3.webp',
    bottom: 'images/seed/banana-accent-graphic-2.webp',
  },
  styles: {
    backgroundColor: '#7ccf00',
  },
});
const createMango = () => ({
  id: uuidv4(),
  imageSrc: 'images/sprout/mango.webp',
  title: 'Mango Breeze',
  subtitle: '+ immune support',
  rating: 5,
  price: 999,
  backdropImages: {
    left: 'images/seed/mango-accent-graphic-2.webp',
    right: 'images/seed/strawberry-pineapple-accent-graphics-1.webp',
    bottom: 'images/seed/banana-accent-graphic-2.webp',
  },
  styles: {
    backgroundColor: '#51a2ff',
  },
});

export const productList = [
  createBlueberry(),
  createStrawberry(),
  createMango(),
  createBlueberry(),
  createStrawberry(),
  createMango(),
  createBlueberry(),
  createStrawberry(),
  createMango(),
];

export const module2Extension = [
  {
    id: uuidv4(),
    title: 'Rewards Club',
    subtitle:
      'As a Sprout Rewards member, you get closer scoring exclusive rewards every time you shop.',
    imageUrl: 'images/sprout/art.webp',
    linkUrl: '#',
    linkTitle: 'Subscribe',
  },
];
