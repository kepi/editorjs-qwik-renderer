import { createDOM } from "@builder.io/qwik/testing"
import { describe, expect, it } from "vitest"
import Image, { type ImageBlockData } from "./image"

describe("<Image />", async () => {
  describe("when receives a Image block with actions", async () => {
    const data: ImageBlockData = {
      file: {
        url: "https://cdn.directions.pt/uploads/2020/08/681-2000x1300-2.jpg",
        name: "681-2000x1300-2",
      },
      caption: "Deep in the <b>universe</b>",
      withBorder: true,
      stretched: true,
      withBackground: true,
    }

    it("renders a <figure> block with <img> and <figcaption>", async () => {
      const { screen, render } = await createDOM()
      await render(<Image data={data} class="special-image" />)
      expect(screen.innerHTML).toMatchSnapshot()
    })
  })

  describe("when receives a Image block without actions", async () => {
    const data: ImageBlockData = {
      file: {
        url: "https://cdn.directions.pt/uploads/2020/08/681-2000x1300-2.jpg",
        name: "681-2000x1300-2",
      },
      caption: "Deep in the universe",
      withBorder: false,
      stretched: false,
      withBackground: false,
    }

    it("renders a <figure> block with <img> and <figcaption>", async () => {
      const { screen, render } = await createDOM()
      await render(<Image data={data} />)
      expect(screen.innerHTML).toMatchSnapshot()
    })
  })

  describe("when receives a Image block without name", async () => {
    const data: ImageBlockData = {
      file: {
        url: "https://cdn.directions.pt/uploads/2020/08/681-2000x1300-2.jpg",
      },
      caption: "Deep in the universe",
      withBorder: false,
      stretched: false,
      withBackground: false,
    }

    it("renders a <figure> block with <img> and <figcaption>", async () => {
      const { screen, render } = await createDOM()
      await render(<Image data={data} />)
      expect(screen.innerHTML).toMatchSnapshot()
    })
  })

  describe("when receives a SimpleImage block", async () => {
    const data: ImageBlockData = {
      url: "https://cdn.directions.pt/uploads/2020/08/681-2000x1300-2.jpg",
      caption: "Deep in the universe",
      withBorder: false,
      stretched: false,
      withBackground: false,
    }

    it("renders a <figure> block with <img> and <figcaption>", async () => {
      const { screen, render } = await createDOM()
      await render(<Image data={data} />)
      expect(screen.innerHTML).toMatchSnapshot()
    })
  })
})
