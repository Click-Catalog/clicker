const toggleInterested = (state, action) => {
  const currentInfo = action.message;

  switch (action.type) {
    case 'toggleInterested':
      return [ ...state, currentInfo ];

    default:
      return state;
  }
};

export default toggleInterested;
