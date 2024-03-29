import { type Component, component$ } from "@builder.io/qwik"
// import Code from './components/code/code';
// import Delimiter from './components/delimiter/delimiter';
// import Embed from './components/embed/embed';
import Header from "./components/header/header"
import Image from "./components/image/image"
import List from "./components/list/list"
import Paragraph from "./components/paragraph/paragraph"
// import Quote from './components/quote/quote';
// import Raw from './components/raw/raw';
// import Table from './components/table/table';

export type ConfigProp = Record<string, RenderConfig>

export type RenderConfig = Record<string, any>

export type RenderFn<
  T = undefined,
  K = Record<string, any> | undefined,
> = Component<{ data: T; class?: string } & K>
export type RenderFnWithoutData<
  T = undefined,
  K = Record<string, any> | undefined,
> = Component<{ data: T; class?: string } & K>

export type RenderersProp = {
  [key: string]: RenderFn<any>
}

export interface Block {
  id?: string
  type: string
  data: Record<string, any>
}

export interface DataProp {
  time: number
  version: string
  blocks: Block[]
}

const Blocks = component$(
  ({
    data,
    config = {},
    renderers = {},
  }: {
    data: DataProp
    config?: ConfigProp
    renderers?: RenderersProp
  }) => {
    if (data === null) {
      return <></>
    }

    const defaultRenderers: RenderersProp = {
      // code: Code,
      // delimiter: Delimiter,
      // embed: Embed,
      header: Header,
      image: Image,
      list: List,
      paragraph: Paragraph,
      // quote: Quote,
      // table: Table,
      // raw: Raw,
    }

    const availableRenderers = {
      ...defaultRenderers,
      ...renderers,
    }

    const hasBlockId = data.version?.includes("2.21")

    return (
      <>
        {data.blocks.map((block, i) => {
          if (block.type.toString() in availableRenderers) {
            const Tag = availableRenderers[block.type]
            const blockData = block.data
            return (
              <Tag
                key={hasBlockId && block.id ? block.id : i}
                data={blockData}
                {...config[block.type]}
              />
            )
          }
        })}
      </>
    )
  }
)

export {
  Blocks,
  // Code as CodeBlock,
  // Delimiter as DelimiterBlock,
  // Embed as EmbedBlock,
  Header as HeaderBlock,
  Image as ImageBlock,
  List as ListBlock,
  Paragraph as ParagraphBlock,
  // Quote as QuoteBlock,
  // Table as TableBlock,
  // Raw as RawBlock,
}
