const toggleMustWatch = (state, action) => {
  const currentInfo = action.message;

  switch (action.type) {
    case 'addMustWatch':
      return [ ...state, currentInfo ];

    case 'removeMustWatch':
      const clonedState = JSON.parse(JSON.stringify(state));
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === currentInfo) {
          clonedState.splice(i, 1);
          return clonedState;
        }
      }
      return state;

    default:
      return state;
  }
};

export default toggleMustWatch;
