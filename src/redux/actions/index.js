export const userSaver = (users) => {
  return {
    type: "AddUser",
    payload: users,
  };
};
