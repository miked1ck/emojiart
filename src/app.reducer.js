// Init state
///////////////////////////

const init = {
  'shading': '🖖',
  'fill': '👽',
  'phrase': '',
  'art': ''
};


// Actions
///////////////////////////

const actions = {
  broadcast_phrase: function(state, action) {
    return { ...state, phrase: action.phrase };
  },

  change_language: function(state, action) {
    return {...state, fill: action.fill, shading: action.shading}
  }
};


// Reducer
///////////////////////////

function reducer(state = init, action) {
  switch (action.type) {
    case 'BROADCAST_PHRASE':
      return actions.broadcast_phrase(state, action);
    case 'CHANGE_LANGUAGE':
      return actions.change_language(state, action);
    default:
      return state;
  }
}


// Export
///////////////////////////

export default reducer;
