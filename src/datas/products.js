import boot21 from '../assets/boot21.webp';
import boot22 from '../assets/boot22.webp';
import boot23 from '../assets/boot23.webp';
import boot24 from '../assets/boot24.webp';

import san1 from '../assets/san1.webp';
import san2 from '../assets/san2.webp';
import san3 from '../assets/san3.webp';
import san5 from '../assets/san5.webp';

import form41 from '../assets/form41.webp';
import form42 from '../assets/form42.webp';
import form43 from '../assets/form43.webp';
import form44 from '../assets/form44.webp';

import sn61 from '../assets/sn61.webp';
import sn62 from '../assets/sn62.webp';
import sn63 from '../assets/sn63.webp';
import sn64 from '../assets/sn64.webp';

const boots = [
    { id: 'boot-1', name: 'Leather Boot 21', price: 3299, image: boot21, description: 'Premium leather boots with durable sole.' },
    { id: 'boot-2', name: 'Leather Boot 22', price: 3499, image: boot22, description: 'Classic lace-up design with comfort fit.' },
    { id: 'boot-3', name: 'Leather Boot 23', price: 3399, image: boot23, description: 'Rugged outdoor-ready style.' },
    { id: 'boot-4', name: 'Leather Boot 24', price: 3599, image: boot24, description: 'Elegant boot with refined finish.' },
];

const sandals = [
    { id: 'san-1', name: 'Sandals 1', price: 1299, image: san1, description: 'Lightweight everyday sandals.' },
    { id: 'san-2', name: 'Sandals 2', price: 1399, image: san2, description: 'Comfort footbed with secure straps.' },
    { id: 'san-3', name: 'Sandals 3', price: 1199, image: san3, description: 'Breathable and casual.' },
    { id: 'san-5', name: 'Sandals 5', price: 1499, image: san5, description: 'Stylish and durable.' },
];

const formal = [
    { id: 'form-41', name: 'Formal 41', price: 2799, image: form41, description: 'Elegant formal shoes for events.' },
    { id: 'form-42', name: 'Formal 42', price: 2899, image: form42, description: 'Polished finish with cushioned insole.' },
    { id: 'form-43', name: 'Formal 43', price: 2699, image: form43, description: 'Timeless style with comfort.' },
    { id: 'form-44', name: 'Formal 44', price: 2999, image: form44, description: 'Premium leather upper.' },
];

const sneakers = [
    { id: 'sn-61', name: 'Sneaker 61', price: 1999, image: sn61, description: 'Everyday comfort sneaker.' },
    { id: 'sn-62', name: 'Sneaker 62', price: 2099, image: sn62, description: 'Breathable mesh upper.' },
    { id: 'sn-63', name: 'Sneaker 63', price: 2199, image: sn63, description: 'Cushioned sole for long walks.' },
    { id: 'sn-64', name: 'Sneaker 64', price: 2299, image: sn64, description: 'Sporty and stylish.' },
];

const products = { boots, sandals, formal, sneakers };

export const allProducts = [...boots, ...sandals, ...formal, ...sneakers];

export default products;
