export function getLocalStorage(key: string) {
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key);
  }
}

export function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}