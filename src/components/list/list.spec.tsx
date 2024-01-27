import { createDOM } from "@builder.io/qwik/testing";
import { describe,expect,it } from "vitest";
import List, { type ListBlockData } from './list';

describe('List', async () => {
  describe.each([
    {style: 'unordered', tag: '<ul>'},
    {style: 'ordered', tag: '<ol>'},]
  )('when receives a flat $style list block', ({style, tag}) => {
    const data: ListBlockData = {
      // @ts-expect-error
      style,
      items: [
        'It is a block-styled editor',
        'It returns clean <b>data output</b> in JSON',
        'Designed to be extendable and pluggable with a simple API',
      ],
    };


    it(`renders a ${tag} block`, async () => {
      const { screen, render } = await createDOM();
      await render(<List data={data} />)
      expect(screen.innerHTML).toMatchSnapshot()
    });
  });

  describe.each([
    {style: 'unordered', tag: '<ul>'},
    {style: 'ordered', tag: '<ol>'},]
  )('when receives a nested $style list block', ({style, tag}) => {
    const data: ListBlockData = {
      // @ts-expect-error
      style,
      items: [
        {
          content: 'It is a block-styled editor',
          items: [],
        },
        {
          content: 'It returns clean data output in JSON',
          items: [
            {
              content: 'Designed to be extendable and pluggable with a simple API',
              items: [
                {
                  content: 'Red',
                  items: [],
                },
                {
                  content: 'Green',
                  items: [],
                },
              ],
            },
          ],
        },
        {
          content: 'It returns clean data output in JSON',
          items: [],
        },
        {
          content: 'Designed to be extendable and pluggable with a simple API',
          items: [],
        },
      ],
    };

    it(`renders a ${tag} block`, async () => {
      const { screen, render } = await createDOM();
      await render(<List data={data} />);
      expect(screen.innerHTML).toMatchSnapshot()
    });

    describe('and when className is provided', async () => {
      it.each(['list', 'list-ul px-3 py-2'])(`renders class to all ${tag} blocks`, async (className) => {
        const { screen, render } = await createDOM();
        await render(<List data={data} class={className} />)
        expect(screen.innerHTML).toMatchSnapshot()
      });
    });
  });
});
