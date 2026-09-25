export const Storage = {
  get(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  },

  save(key, data) {
    const currentData = this.get(key);
    currentData.push(data);
    localStorage.setItem(key, JSON.stringify(currentData));
  }
};