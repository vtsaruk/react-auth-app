export function setLocalStorage (key: string, result: string) {
  localStorage.setItem(key, result);
} 
export function getLocalStorage (key: string): string {
  return  localStorage.getItem(key) || '';
}
export function removeLocalStorage (key: string) {
  localStorage.removeItem(key);
}
