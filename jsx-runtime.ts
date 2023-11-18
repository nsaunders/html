// Source: https://github.com/kitajs/html/blob/af39cb1ad11036d5704bee7c318417feb802c777/index.js
function isVoid(tag: string) {
  return (
    tag === "meta" ||
    tag === "link" ||
    tag === "img" ||
    tag === "br" ||
    tag === "input" ||
    tag === "hr" ||
    tag === "area" ||
    tag === "base" ||
    tag === "col" ||
    tag === "command" ||
    tag === "embed" ||
    tag === "keygen" ||
    tag === "param" ||
    tag === "source" ||
    tag === "track" ||
    tag === "wbr"
  );
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isFragment(x: unknown): x is JSX.Fragment {
  if (!x) {
    return false;
  }
  if (typeof x !== "object") {
    return false;
  }
  if (!("_tag" in x)) {
    return false;
  }
  return x._tag === "fragment";
}

function isElement(x: unknown): x is JSX.Element {
  if (!x) {
    return false;
  }
  if (typeof x !== "object") {
    return false;
  }
  if (!("_tag" in x)) {
    return false;
  }
  return x._tag === "element";
}

function renderNode(node: JSX.Node) {
  if (node === null || node === undefined) {
    return "";
  }
  if (isElement(node) || isFragment(node)) {
    return node.value;
  }
  switch (typeof node) {
    case "number":
      return `${node}`;
    case "boolean":
      return node ? `${node}` : "";
    case "string":
      return escape(node);
    default:
      return "";
  }
}

function renderNodes(node?: JSX.Node | JSX.Node[]) {
  return (node instanceof Array ? node : [node]).map(renderNode).join("");
}

function camelToKebab(x: string): string {
  return x.replace(/[A-Z]/g, x => `-${x.toLowerCase()}`);
}

function renderAttribute(name: string, value: unknown) {
  if (value === null || value === undefined) {
    return "";
  }
  if (name === "style" && value && typeof value === "object") {
    let style = "";
    for (const p in value) {
      const v: unknown = value[p as keyof typeof value];
      switch (typeof v) {
        case "number":
          style += `;${camelToKebab(p)}:${v}`;
          break;
        case "string":
          style += `;${camelToKebab(p)}:${escape(v)}`;
          break;
        default:
          break;
      }
    }
    return `${name}="${style.substring(1)}"`;
  }
  switch (typeof value) {
    case "number":
      return `${name}="${value}"`;
    case "boolean":
      return value ? name : "";
    case "string":
      return `${name}="${escape(value)}"`;
    default:
      return "";
  }
}

function renderAttributes(attrs: Record<string, unknown>): string {
  let rendered = "";
  for (const name in attrs) {
    const thisRendered = renderAttribute(name, attrs[name]);
    if (thisRendered) {
      rendered += " " + thisRendered;
    }
  }
  return rendered;
}

export function Fragment({
  children,
}: {
  children?: JSX.Node | JSX.Node[];
}): JSX.Fragment {
  return { _tag: "fragment", value: renderNodes(children) };
}

export function jsx(
  tag: unknown,
  {
    children,
    ...restProps
  }: {
    children?: JSX.Node | JSX.Node[];
  },
): JSX.Element {
  if (typeof tag === "string") {
    const attributes = renderAttributes(restProps);
    return {
      _tag: "element",
      value: isVoid(tag)
        ? `<${tag}${attributes}>`
        : `<${tag}${attributes}>${renderNodes(children)}</${tag}>`,
    };
  }
  if (typeof tag === "function") {
    const Component = tag as (
      props: /*eslint-disable-line @typescript-eslint/no-explicit-any*/ any,
    ) => JSX.Element;
    return Component({ children, ...restProps });
  }
  return { _tag: "element", value: "" };
}

export const jsxs = jsx;
