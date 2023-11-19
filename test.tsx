import * as _lib from "./jsx-runtime.js";
import assert from "assert";
import { render } from "./index.js";

// Basic
assert.strictEqual(render(<div />), "<div></div>");

// Multiple children
assert.strictEqual(
  render(
    <div>
      <span>Child 1</span>
      <span>Child 2</span>
    </div>,
  ),
  "<div><span>Child 1</span><span>Child 2</span></div>",
);

// Fragment
assert.strictEqual(
  render(
    <>
      <span>Child 1</span>
      <span>Child 2</span>
    </>,
  ),
  "<span>Child 1</span><span>Child 2</span>",
);

// Void element
assert.strictEqual(render(<input type="text" />), '<input type="text">');

// dangerouslySetInnerHTML
assert.strictEqual(
  render(<div dangerouslySetInnerHTML={{ __html: 'It "works"!' }} />),
  '<div>It "works"!</div>',
);

// String attributes
assert.strictEqual(
  render(<div id="foo" class="bar" />),
  '<div id="foo" class="bar"></div>',
);

// Boolean attributes
assert.strictEqual(
  render(<script async defer />),
  "<script async defer></script>",
);

// Number attributes
assert.strictEqual(
  render(<input min={0} max={100} />),
  '<input min="0" max="100">',
);

// Style attribute
assert.strictEqual(
  render(
    <div
      style={{ backgroundColor: "black", lineHeight: 1.5, color: "white" }}
    />,
  ),
  '<div style="background-color:black;line-height:1.5;color:white"></div>',
);

// Component with node props

function LabelValuePair({
  label,
  value,
}: {
  label: JSX.Node;
  value: JSX.Node;
}) {
  return (
    <div>
      <span class="label">{label}</span>
      <span>{value}</span>
    </div>
  );
}

assert.strictEqual(
  render(
    <LabelValuePair
      label="Hello"
      value={
        <>
          <span>Value 1</span>
          <span>Value 2</span>
        </>
      }
    />,
  ),
  '<div><span class="label">Hello</span><span><span>Value 1</span><span>Value 2</span></span></div>',
);

// Component with children

function FancyList(props: { children?: JSX.Node | JSX.Node[] }) {
  return <ul>{props?.children}</ul>;
}

assert.strictEqual(
  render(
    <FancyList>
      <li>Item 1</li>
      <li>Item 2</li>
    </FancyList>,
  ),
  "<ul><li>Item 1</li><li>Item 2</li></ul>",
);

// Component with arbitrary children type

function PostListItem({
  children: post,
}: {
  children: { name: string; author: string };
}) {
  return (
    <div>
      <span>{post.name}</span>
      <span>{post.author}</span>
    </div>
  );
}

assert.strictEqual(
  render(
    <PostListItem>
      {{
        name: 'Count lines of code as "lines spent"',
        author: "Edsger W. Dijkstra",
      }}
    </PostListItem>,
  ),
  "<div><span>Count lines of code as &quot;lines spent&quot;</span><span>Edsger W. Dijkstra</span></div>",
);
