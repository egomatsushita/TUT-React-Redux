// action creator is the entire function
export const selectUser = (user) => {
  console.log(`you clicked on user: ${user.first}`);
  return { // return an action
    type: "USER_SELECTED",
    payload: user
  };
}