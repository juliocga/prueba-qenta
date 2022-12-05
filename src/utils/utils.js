export const getAge = (birthday) => {
  const date = new Date(birthday.slice(0, 19));
  const today = new Date();
  return today.getFullYear() - date.getFullYear();
};