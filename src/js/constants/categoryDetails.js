import { Colors, Food, Animals } from './categoryNames';

const categoryToWords = {
  Colors: [
    'rojo',
    'anaranjado',
    'amarillo',
    'verde',
    'azul',
    'morado',
    'marrón',
    'negro',
  ],
};

export const getCategoryWords = function (categoryName) {
  return categoryToWords[categoryName];
};
