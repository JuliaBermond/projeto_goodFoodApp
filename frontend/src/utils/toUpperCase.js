export function firstLetterCap(nome) {
  if (!nome || typeof nome !== "string") {
    return "";
  }
  const firstLetter = nome.charAt(0).toUpperCase();
  const rest = nome.slice(1);
  return firstLetter + rest;
}
