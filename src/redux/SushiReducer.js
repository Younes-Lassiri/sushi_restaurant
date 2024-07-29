import foodone from '../sushi_project_images/food_one.png';
import foodtwo from '../sushi_project_images/slider_two.jpg';
import foodthree from '../sushi_project_images/slider_three.jpg';
import foodseven from '../sushi_project_images/food_seven.png';
const initialState = {
    foods: [
        {
            id: 1,
            quantite: 1,
            name: 'TERIYAKI ROLL',
            description: 'Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ac turpis egestas ma',
            image: foodone,
            price: 35.00,
            promo: false
          },
          {
            id: 2,
            quantite: 1,
            name: 'FUJIZAN',
            description: 'Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ac turpis egestas ma',
            image: foodtwo,
            price: 27.00,
            promo: true,
            oldPrice: 31.00,
            sale: true,
          },
          {
            id: 3,
            quantite: 1,
            name: 'NIGIRI SALMON',
            description: 'Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ac turpis egestas ma',
            image: foodthree,
            price: 30.00,
            sale: false,
            promo: false
          },
          {
            id: 4,
            quantite: 1,
            name: 'THAIL ROLL',
            description: 'Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ac turpis egestas ma',
            image: foodseven,
            price: 38.00,
            sale: false,
            promo: false
          }
    ],
    cart: []
}
const SushiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_to_cart':
            const itemToAdd = state.foods[action.payload];
            return {
                ...state,
                cart: [...state.cart, itemToAdd]
            };
        case 'add_quantite':
            return {
                ...state,
                foods: state.foods.map(f => {
                  if (f.id === action.payload) {
                    return {
                      ...f,
                      quantite: f.quantite + 1
                  };
              }
              return f;
                })
            };
        case 'minuce_quantite':
            return {
                ...state,
                foods: state.foods.map(f => {
                  if (f.id === action.payload) {
                    return {
                      ...f,
                      quantite: f.quantite - 1
                  };
              }
              return f;
                })
            };
        default:
            return state;
    }
};

export default SushiReducer;

