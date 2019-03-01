const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  xIsNext: true,
  stepNumber: 0
}

function rootReducer(state = initialState, action){
  return state;
};

export default rootReducer;

