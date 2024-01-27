import { component$ } from "@builder.io/qwik";
import { sanitize } from "../../utils"
import { RenderFn } from "../..";

export interface HeaderBlockData {
  text?: string;
  level: number;
}

const Header: RenderFn<HeaderBlockData> = component$((props) => {
  const text = props.data?.text

  if (text === undefined) {
    return <></>
  }

  const Tag = `h${props.data?.level || 1}` as keyof HTMLHeadingElement;
  return <Tag class={props.class} dangerouslySetInnerHTML={sanitize(text)} />;
})

export default Header;
