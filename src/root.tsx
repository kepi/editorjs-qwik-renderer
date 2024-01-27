import Image, { ImageBlockData } from "./components/image/image"
const data: ImageBlockData = {
  file: {
    url: 'https://cdn.directions.pt/uploads/2020/08/681-2000x1300-2.jpg',
    name: '681-2000x1300-2',
  },
  caption: 'Deep in the <b>universe</b>',
  withBorder: true,
  stretched: true,
  withBackground: true,
};

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Editor.js Qwik Renderer</title>
      </head>
      <body>
        nothing to see here
        <Image data={data} />
      </body>
    </>
  )
}
