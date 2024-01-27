import { component$ } from "@builder.io/qwik";
import { sanitize } from "../../utils"
import { RenderFn } from "../..";

export interface ParagraphBlockData {
  text: string
}

const Paragraph: RenderFn<ParagraphBlockData> = component$((props) => {
  return <p class={props.class} dangerouslySetInnerHTML={sanitize(props.data.text)}></p>
})

export default Paragraph
