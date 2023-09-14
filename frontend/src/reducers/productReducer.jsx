
export default function productReducer(state, action) {
    switch (action.type) {
        case 'delete':
            // remove an object from the array
            // filter the array with the passed id
            // return the new filtered array
            console.log(action.id);

        default:
            return state;
    }
}