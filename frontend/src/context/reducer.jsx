const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                userFirstName: action.payload.fname,
                userLastName: action.payload.lname,
            };
        case "UPDATE_WHEEL":
            return {
                ...state,
                wheels: action.payload.wheel
            };
        case "VEHICLE_TYPE":
            return {
                ...state,
                type: action.payload.type
            };
        case "VEHICLE_MODEL":
            return {
                ...state,
                vehicle: action.payload.model
            };
        case "DATE_RANGER":
            return {
                ...state,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
            };
        default:
            return state;
    }
};

export default reducer;
