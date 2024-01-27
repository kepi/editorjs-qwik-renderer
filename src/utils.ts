import sanitizeHtml from 'sanitize-html';

const sanitize = (dirty: string) => {
  return sanitizeHtml(dirty, {
    allowedTags: [ 'b', 'i', 'em', 'strong', 'a' ],
    allowedAttributes: {
      'a': [ 'href' ]
    }
  })
}

export { sanitize }
