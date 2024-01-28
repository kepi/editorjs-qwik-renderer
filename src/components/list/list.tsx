import { component$, FunctionComponent, PropsOf, Slot } from "@builder.io/qwik"
import { sanitize } from "../../utils"
import { RenderFn } from "../.."

export interface ListBlockData {
  style: "ordered" | "unordered"
  items: NestedListItem[]
}

export type NestedListItem =
  | {
      content: string
      items: NestedListItem[]
    }
  | string

const Bullet = component$((props) => (
  <li {...props}>
    <Slot />
  </li>
))

export const Group = component$(
  <C extends string | FunctionComponent = string | FunctionComponent>({
    as: Tag = "ul" as C,
    items,
    ...props
  }: { as?: C; key?: string; items: NestedListItem[] } & PropsOf<
    string extends C ? "ul" : C
  >) => (
    <Tag {...props}>
      {items.map((item: NestedListItem, i: number) => (
        <Bullet key={i}>
          <span
            dangerouslySetInnerHTML={sanitize(
              typeof item === "string" ? item : item?.content
            )}
          />
          {typeof item !== "string" && item?.items?.length > 0 && (
            <Tag items={item.items} {...props} />
          )}
        </Bullet>
      ))}
    </Tag>
  )
)

// FIXME: nefunguje správně, renderuje to as= a items=....
const List: RenderFn<ListBlockData> = component$(({ data, ...props }) => {
  const tag = data?.style === "ordered" ? `ol` : `ul`

  return data && <Group as={tag} items={data.items} {...props} />
})

export default List
