import { Colors, Food, Animals } from './categoryNames';

export const categoryQuestions = {
  Colors: [
    {
      word: 'rojo',
      sentence: 'Las manzanas son rojas.',
    },
    {
      word: 'anaranjado',
      sentence: 'Mira esas calabazas anaranjadas en la ventana.',
    },
    {
      word: 'amarillo',
      sentence: 'Elsa llama a un taxi amarillo para ir a casa.',
    },
    {
      word: 'verde',
      sentence: 'Estaba lluviendo por dos semanas, y por eso el cesped está tan verde.',
    },
    {
      word: 'azul',
      sentence: 'El mar parece tan azul en el Caribe.',
    },
  ],
};

export const getCategoryQuestions = function (categoryName) {
  return categoryQuestions[categoryName];
};
