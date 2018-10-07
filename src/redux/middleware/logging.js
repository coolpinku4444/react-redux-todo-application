export const logging = (store) => (next) => (action) => {
    console.log("action is in middleware");
    next(action);
}