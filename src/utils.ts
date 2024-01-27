import DOMPurify from "isomorphic-dompurify"

const sanitize = (dirty: string) => {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ["b", "i", "em", "strong", "a"],
    ALLOWED_ATTR: ["href"],
  })
}

export { sanitize }
