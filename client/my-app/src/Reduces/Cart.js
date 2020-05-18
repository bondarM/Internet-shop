const initialState = { add: false, count: 0 };

export default function fields(state = initialState, action) {
  if (action.type === "SET_ADD") return { ...state, count: action.payload };
  if (action.type === "SET_CART") return { ...state, add: action.payload };

  return state;
}
