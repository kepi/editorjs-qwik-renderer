import { createDOM } from "@builder.io/qwik/testing";
import { describe,expect,it } from "vitest";
import Header, {type HeaderBlockData} from "./header"

describe('<Header />', async () => {
  describe('when receives an header level 2 block', async () => {
    const data: HeaderBlockData = {
      text: 'Editor.js',
      level: 2,
    };

    it('renders a <h2> tag', async () => {
      const { screen, render } = await createDOM();
      await render(<Header data={data} />)
      expect(screen.innerHTML).toMatchSnapshot()
    });
  });

  describe('when receives a header block with className', async () => {
    const data: HeaderBlockData = {
      text: 'Editor.js',
      level: 2,
    };

    it('renders a <h2 className>', async () => {
      const { screen, render } = await createDOM();
      await render(<Header data={data} class={'header-block'} />)
      expect(screen.innerHTML).toMatchSnapshot()
    });
  });

  describe('when receives a header block with no title', async () => {
    const data: HeaderBlockData = {
      level: 3,
    };

    it('renders a null element', async () => {
      const { screen, render } = await createDOM();
      await render(<Header data={data} />)
      expect(screen.innerHTML).toMatchSnapshot()
    });
  });
});
