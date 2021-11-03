const toggleWatched = (state, action) => {
  const currentInfo = action.message;

  switch (action.type) {
    case 'toggleWatched':
      return [ ...state, currentInfo ];

    default:
      return state;
  }
};

export default toggleWatched;
