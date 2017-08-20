
// initial state
const INITIAL_MESSAGES = [
  {
    id: 1,
    type: 'message',
    text: 'могу',
    userAvatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    userName: 'Иван',
    fromMe: true
  }, {
    id: 2,
    type: 'message',
    text: 'можете?',
    userAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    userName: 'Евгений'
  }, {
    id: 3,
    type: 'message',
    text: 'можете? можете? можете? можете?м ожете?можете?можете?можете?можетеможетеможетеможете?можете????можете?',
    userAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    userName: 'Евгений'
  }, {
    id: 4,
    type: 'message',
    text: 'можете?',
    userAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    userName: 'Евгений'
  }
];

const initialState = {
  messages: INITIAL_MESSAGES
};


// actions

export const CHAT_SEND_MESSAGE = 'chat/SEND_MESSAGE';


// action creators

// TODO fromMe -> userId
export const sendChatMessage = ({ text, userAvatar, userName, fromMe }) => ({
  type: CHAT_SEND_MESSAGE, message: { text, userAvatar, userName, fromMe }
});

// reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case CHAT_SEND_MESSAGE: {
      return {
        ...state,
        messages: [action.message, ...state.messages]
      };
    }

    default: {
      return state;
    }
  }
};

