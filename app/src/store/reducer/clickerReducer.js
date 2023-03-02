const users = [];

export const clickerReducer = (state = users, action) => {
    if (action.type === 'ADD') {
			return [...state, action.payload]
		} else{
			return state;
		}
}

