import { component$ } from "@builder.io/qwik";
import { sanitize } from "../../utils"
import { RenderFn } from "../..";

// FIXME: add support for default width or height setting so qwik doesn't
// complain about layout shifts

export interface ImageBlockData {
  file?: {
    url: string;
    name?: string;
  };
  url?: string;
  caption: string;
  withBorder: boolean;
  withBackground: boolean;
  stretched: boolean;
  [s: string]: any;
}

export interface ImageBlockConfig {
  actionsClassNames?: {
    [s: string]: string;
  };
}

type ImageProps = {
  data: ImageBlockData
  actionsClassNames?: {
    stretched?: string,
    withBorder?: string,
    withBackground?: string,
  }
  class?: string
}

type ActionNames = keyof ImageProps["actionsClassNames"]

const Image: RenderFn<ImageBlockData, ImageBlockConfig> = component$(({
  data,
  actionsClassNames = {
    stretched: 'image-block--stretched',
    withBorder: 'image-block--with-border',
    withBackground: 'image-block--with-background',
  },
  ...props
}: ImageProps) => {
  const classNames: string[] = [];
  if (props.class) classNames.push(props.class);

  Object.keys(actionsClassNames).forEach((actionName) => {
    if (data && data[actionName] === true && actionName in actionsClassNames) {
      classNames.push(actionsClassNames[actionName as ActionNames]);
    }
  });

  return (
    <figure class={classNames.length > 0 ? classNames.join(' ') : undefined}>
      {data?.file?.url && <img src={data.file.url} alt={data.caption || data.file.name} />}
      {data?.url && <img src={data.url} alt={data.caption} />}
      {data?.caption && <figcaption dangerouslySetInnerHTML={sanitize(data.caption)} />}
    </figure>
  );
})

export default Image;
