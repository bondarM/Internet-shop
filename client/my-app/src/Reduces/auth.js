const initialState = { login: false };

export default function fields(state = initialState, action) {
  if (action.type === "SET_LOGIN") return { ...state, login: action.payload };
  return state;
}
