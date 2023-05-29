export const Save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const Load = key => {
  return JSON.parse(localStorage.getItem(key));
};

export const Delete = (id, key) => {
  const contacts = Load(key);
  const contactsIndex = contacts.findIndex(item => item.id === id);
  contacts.splice(contactsIndex, 1);
  localStorage.removeItem(key);
  Save(key, contacts);
};
