export default function getImageUrl(name) {
  return new URL(`${name}`, import.meta.url).href
}
