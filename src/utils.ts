import xss from "xss"

const sanitize = (dirty: string) => {
  const options = {
    whiteList: {
      a: ["href"],
      b: [],
      i: [],
      em: [],
      strong: [],
      cite: [],
    },
  }
  return xss(dirty, options)
}

export { sanitize }
