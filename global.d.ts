declare namespace JSX {
  import * as CSS from "csstype";

  type Element = { _tag: "element"; value: string };

  type Fragment = { _tag: "fragment"; value: string };

  type Node =
    | JSX.Element
    | JSX.Fragment
    | string
    | number
    | boolean
    | null
    | undefined;

  type Nodes = Node | Nodes[];

  interface ElementChildrenAttribute {
    children?: unknown;
  }

  // Sources:
  // - https://github.com/nicojs/typed-html/tree/88a6a6219bbf4d9368537ee29419d29671573093/src/jsx
  // - https://github.com/kitajs/html/blob/16bd27e45ee6a7da62e95b165a4ee430a77f7ac9/jsx.d.ts

  interface IntrinsicElements {
    a: HtmlAnchorTag;
    abbr: HtmlTag;
    address: HtmlTag;
    animate: HtmlSvgTag;
    animateMotion: HtmlSvgTag;
    animateTransform: HtmlSvgTag;
    area: HtmlAreaTag;
    article: HtmlTag;
    aside: HtmlTag;
    audio: HtmlAudioTag;
    b: HtmlTag;
    base: BaseTag;
    bb: HtmlBrowserButtonTag;
    bdi: HtmlTag;
    bdo: HtmlTag;
    blockquote: HtmlQuoteTag;
    body: HtmlBodyTag;
    br: VoidHtmlTag;
    button: HtmlButtonTag;
    canvas: HtmlCanvasTag;
    caption: HtmlTag;
    circle: HtmlSvgTag;
    cite: HtmlTag;
    clipPath: HtmlSvgTag;
    code: HtmlTag;
    col: HtmlTableColTag;
    colgroup: HtmlTableColTag;
    commands: HtmlCommandTag;
    data: DataTag;
    datalist: HtmlDataListTag;
    dd: HtmlTag;
    defs: HtmlSvgTag;
    del: HtmlModTag;
    desc: HtmlSvgTag;
    details: HtmlDetailsTag;
    dfn: HtmlTag;
    div: HtmlTag;
    dl: HtmlTag;
    dt: HtmlTag;
    ellipse: HtmlSvgTag;
    em: HtmlTag;
    embed: HtmlEmbedTag;
    feBlend: HtmlSvgTag;
    feColorMatrix: HtmlSvgTag;
    feComponentTransfer: HtmlSvgTag;
    feComposite: HtmlSvgTag;
    feConvolveMatrix: HtmlSvgTag;
    feDiffuseLighting: HtmlSvgTag;
    feDisplacementMap: HtmlSvgTag;
    feDistantLight: HtmlSvgTag;
    feDropShadow: HtmlSvgTag;
    feFlood: HtmlSvgTag;
    feFuncA: HtmlSvgTag;
    feFuncB: HtmlSvgTag;
    feFuncG: HtmlSvgTag;
    feFuncR: HtmlSvgTag;
    feGaussianBlur: HtmlSvgTag;
    feImage: HtmlSvgTag;
    feMerge: HtmlSvgTag;
    feMergeNode: HtmlSvgTag;
    feMorphology: HtmlSvgTag;
    feOffset: HtmlSvgTag;
    fePointLight: HtmlSvgTag;
    feSpecularLighting: HtmlSvgTag;
    feSpotLight: HtmlSvgTag;
    feTile: HtmlSvgTag;
    feTurbulence: HtmlSvgTag;
    fieldset: HtmlFieldSetTag;
    figcaption: HtmlTag;
    figure: HtmlTag;
    filter: HtmlSvgTag;
    footer: HtmlTag;
    foreignObject: HtmlSvgTag;
    form: HtmlFormTag;
    g: HtmlSvgTag;
    h1: HtmlTag;
    h2: HtmlTag;
    h3: HtmlTag;
    h4: HtmlTag;
    h5: HtmlTag;
    h6: HtmlTag;
    head: HtmlTag;
    header: HtmlTag;
    hgroup: HtmlTag;
    hr: VoidHtmlTag;
    html: HtmlHtmlTag;
    i: HtmlTag;
    iframe: HtmlIFrameTag;
    image: HtmlSvgTag;
    img: HtmlImageTag;
    input: HtmlInputTag;
    ins: HtmlModTag;
    kbd: HtmlTag;
    keygen: KeygenTag;
    label: HtmlLabelTag;
    legend: HtmlLegendTag;
    li: HtmlLITag;
    line: HtmlSvgTag;
    linearGradient: HtmlSvgTag;
    link: HtmlLinkTag;
    main: HtmlTag;
    map: HtmlMapTag;
    mark: HtmlTag;
    marker: HtmlSvgTag;
    mask: HtmlSvgTag;
    menu: HtmlMenuTag;
    meta: HtmlMetaTag;
    metadata: HtmlSvgTag;
    meter: HtmlMeterTag;
    mpath: HtmlSvgTag;
    nav: HtmlTag;
    noscript: HtmlTag;
    object: HtmlObjectTag;
    ol: HtmlOListTag;
    optgroup: HtmlOptgroupTag;
    option: HtmlOptionTag;
    output: HtmlOutputTag;
    p: HtmlTag;
    param: HtmlParamTag;
    path: HtmlSvgTag;
    pattern: HtmlSvgTag;
    polygon: HtmlSvgTag;
    polyline: HtmlSvgTag;
    pre: HtmlTag;
    progress: HtmlProgressTag;
    q: HtmlQuoteTag;
    radialGradient: HtmlSvgTag;
    rb: HtmlTag;
    rect: HtmlSvgTag;
    rp: HtmlTag;
    rt: HtmlTag;
    rtc: HtmlTag;
    ruby: HtmlTag;
    s: HtmlTag;
    samp: HtmlTag;
    script: HtmlScriptTag;
    section: HtmlTag;
    select: HtmlSelectTag;
    set: HtmlSvgTag;
    small: HtmlTag;
    source: HtmlSourceTag;
    span: HtmlTag;
    stop: HtmlSvgTag;
    strong: HtmlTag;
    style: HtmlStyleTag;
    sub: HtmlTag;
    summary: HtmlTag;
    sup: HtmlTag;
    svg: HtmlSvgTag;
    switch: HtmlSvgTag;
    symbol: HtmlSvgTag;
    table: HtmlTableTag;
    tag: HtmlUnspecifiedTag;
    tbody: HtmlTag;
    td: HtmlTableDataCellTag;
    template: HtmlTag;
    text: HtmlSvgTag;
    textarea: HtmlTextAreaTag;
    textPath: HtmlSvgTag;
    tfoot: HtmlTableSectionTag;
    th: HtmlTableHeaderCellTag;
    thead: HtmlTableSectionTag;
    time: HtmlTimeTag;
    title: HtmlTag;
    tr: HtmlTableRowTag;
    track: HtmlTrackTag;
    tspan: HtmlSvgTag;
    u: HtmlTag;
    ul: HtmlTag;
    use: HtmlSvgTag;
    var: HtmlTag;
    video: HtmlVideoTag;
    view: HtmlSvgTag;
    wbr: VoidHtmlTag;
  }

  interface VoidHtmlTag extends Htmx.Attributes {
    accesskey?: string;
    class?: string;
    contenteditable?: string;
    dir?: string;
    hidden?: string | boolean;
    id?: string;
    role?: Aria.Role;
    lang?: string;
    draggable?: string | boolean;
    spellcheck?: string | boolean;
    style?: CSS.Properties;
    tabindex?: string;
    title?: string;
    translate?: string | boolean;
  }

  interface HtmlTag extends VoidHtmlTag {
    children?: Nodes;
    dangerouslySetInnerHTML?: { __html: string };
  }

  interface HtmlAnchorTag extends HtmlTag {
    href?: string;
    target?: string;
    download?: string;
    ping?: string;
    rel?: string;
    media?: string;
    hreflang?: string;
    type?: string;
  }

  interface HtmlAreaTag extends VoidHtmlTag {
    alt?: string;
    coords?: string;
    shape?: string;
    href?: string;
    target?: string;
    ping?: string;
    rel?: string;
    media?: string;
    hreflang?: string;
    type?: string;
  }

  interface HtmlAudioTag extends HtmlTag {
    src?: string;
    autobuffer?: string;
    autoplay?: string;
    loop?: string;
    controls?: string;
  }

  interface BaseTag extends VoidHtmlTag {
    href?: string;
    target?: string;
  }

  interface HtmlQuoteTag extends HtmlTag {
    cite?: string;
  }

  interface HtmlBodyTag extends HtmlTag {}

  interface HtmlButtonTag extends HtmlTag {
    action?: string;
    autofocus?: string;
    disabled?: boolean;
    enctype?: string;
    form?: string;
    method?: string;
    name?: string;
    novalidate?: string | boolean;
    target?: string;
    type?: string;
    value?: string;
  }

  interface HtmlDataListTag extends HtmlTag {}

  interface HtmlCanvasTag extends HtmlTag {
    width?: string;
    height?: string;
  }

  interface HtmlTableColTag extends VoidHtmlTag {
    span?: string;
  }

  interface HtmlTableSectionTag extends HtmlTag {}

  interface HtmlTableRowTag extends HtmlTag {}

  interface DataTag extends HtmlTag {
    value?: string;
  }

  interface HtmlEmbedTag extends VoidHtmlTag {
    src?: string;
    type?: string;
    width?: string;
    height?: string;
  }

  interface HtmlFieldSetTag extends HtmlTag {
    disabled?: boolean;
    form?: string;
    name?: string;
  }

  interface HtmlFormTag extends HtmlTag {
    acceptCharset?: string;
    action?: string;
    autocomplete?: string;
    enctype?: string;
    method?: string;
    name?: string;
    novalidate?: string | boolean;
    target?: string;
  }

  interface HtmlHtmlTag extends HtmlTag {
    manifest?: string;
  }

  interface HtmlIFrameTag extends HtmlTag {
    src?: string;
    srcdoc?: string;
    name?: string;
    sandbox?: string;
    seamless?: string;
    width?: string;
    height?: string;
  }

  interface HtmlImageTag extends VoidHtmlTag {
    alt?: string;
    src?: string;
    crossorigin?: string;
    usemap?: string;
    ismap?: string;
    width?: string;
    height?: string;
  }

  interface HtmlInputTag extends VoidHtmlTag {
    accept?: string;
    action?: string;
    alt?: string;
    autocomplete?: string;
    autofocus?: string;
    checked?: boolean;
    disabled?: boolean;
    enctype?: string;
    form?: string;
    height?: string;
    list?: string;
    max?: number;
    maxlength?: number;
    method?: string;
    min?: number;
    multiple?: boolean;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    src?: string;
    step?: number;
    target?: string;
    type?:
      | "button"
      | "checkbox"
      | "color"
      | "date"
      | "datetime-local"
      | "email"
      | "file"
      | "hidden"
      | "image"
      | "month"
      | "number"
      | "password"
      | "radio"
      | "range"
      | "reset"
      | "search"
      | "submit"
      | "tel"
      | "text"
      | "time"
      | "url"
      | "week";
    value?: number | string;
    width?: string;
  }

  interface HtmlModTag extends HtmlTag {
    cite?: string;
    datetime?: string | Date;
  }

  interface KeygenTag extends VoidHtmlTag {
    autofocus?: string;
    challenge?: string;
    disabled?: boolean;
    form?: string;
    keytype?: string;
    name?: string;
  }

  interface HtmlLabelTag extends HtmlTag {
    form?: string;
    for?: string;
  }

  interface HtmlLITag extends HtmlTag {
    value?: string | number;
  }

  interface HtmlLinkTag extends VoidHtmlTag {
    href?: string;
    crossorigin?: string;
    rel?: string;
    media?: string;
    hreflang?: string;
    type?: string;
    sizes?: string;
    integrity?: string;
  }

  interface HtmlMapTag extends HtmlTag {
    name?: string;
  }

  interface HtmlMetaTag extends VoidHtmlTag {
    name?: string;
    httpEquiv?: string;
    content?: string;
    charset?: string;
  }

  interface HtmlMeterTag extends HtmlTag {
    value?: string | number;
    min?: string | number;
    max?: string | number;
    low?: string | number;
    high?: string | number;
    optimum?: string | number;
  }

  interface HtmlObjectTag extends HtmlTag {
    data?: string;
    type?: string;
    name?: string;
    usemap?: string;
    form?: string;
    width?: string;
    height?: string;
  }

  interface HtmlOListTag extends HtmlTag {
    reversed?: string;
    start?: string | number;
  }

  interface HtmlOptgroupTag extends HtmlTag {
    disabled?: boolean;
    label?: string;
  }

  interface HtmlOptionTag extends HtmlTag {
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    value?: string;
  }

  interface HtmlOutputTag extends HtmlTag {
    for?: string;
    form?: string;
    name?: string;
  }

  interface HtmlParamTag extends VoidHtmlTag {
    name?: string;
    value?: string;
  }

  interface HtmlProgressTag extends HtmlTag {
    value?: string | number;
    max?: string | number;
  }

  interface HtmlCommandTag extends VoidHtmlTag {
    type?: string;
    label?: string;
    icon?: string;
    disabled?: boolean;
    checked?: boolean;
    radiogroup?: string;
    default?: boolean;
  }

  interface HtmlLegendTag extends HtmlTag {}

  interface HtmlBrowserButtonTag extends HtmlTag {
    type?: string;
  }

  interface HtmlMenuTag extends HtmlTag {
    type?: string;
    label?: string;
  }

  interface HtmlScriptTag extends HtmlTag {
    src?: string;
    type?: string;
    charset?: string;
    async?: boolean;
    defer?: boolean;
    crossorigin?: string;
    integrity?: string;
    text?: string;
  }

  interface HtmlDetailsTag extends HtmlTag {
    open?: boolean;
  }

  interface HtmlSelectTag extends HtmlTag {
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: string;
  }

  interface HtmlSourceTag extends VoidHtmlTag {
    src?: string;
    type?: string;
    media?: string;
  }

  interface HtmlStyleTag extends HtmlTag {
    media?: string;
    type?: string;
    disabled?: boolean;
    scoped?: boolean;
  }

  interface HtmlTableTag extends HtmlTag {}

  interface HtmlTableDataCellTag extends HtmlTag {
    colspan?: string | number;
    rowspan?: string | number;
    headers?: string;
  }

  interface HtmlTextAreaTag extends HtmlTag {
    autofocus?: boolean;
    cols?: string;
    dirname?: string;
    disabled?: boolean;
    form?: string;
    maxlength?: string;
    minlength?: string;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    rows?: string;
    wrap?: string;
  }

  interface HtmlTableHeaderCellTag extends HtmlTag {
    colspan?: string | number;
    rowspan?: string | number;
    headers?: string;
    scope?: string;
  }

  interface HtmlTimeTag extends HtmlTag {
    datetime?: string | Date;
  }

  interface HtmlTrackTag extends VoidHtmlTag {
    default?: boolean;
    kind?: string;
    label?: string;
    src?: string;
    srclang?: string;
  }

  interface HtmlVideoTag extends HtmlTag {
    src?: string;
    poster?: string;
    autobuffer?: string;
    autoplay?: string;
    loop?: string;
    controls?: string;
    width?: string;
    height?: string;
  }

  // We allow any attributes on svg because its hard to keep track of them all.
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  interface HtmlSvgTag extends HtmlTag, Record<string, any> {}
}

declare namespace Htmx {
  // Source: https://github.com/kitajs/html/blob/af39cb1ad11036d5704bee7c318417feb802c777/htmx.d.ts

  /** Either `true`, `false`, `"true"` or `"false"`. */
  type BoolStr = boolean | "true" | "false";
  type AnyStr =
    string & {}; /* eslint-disable-line @typescript-eslint/ban-types */
  type HxSwap =
    | "innerHTML"
    | "outerHTML"
    | "beforebegin"
    | "afterbegin"
    | "beforeend"
    | "afterend"
    | "delete"
    | "none"
    | "morph"
    | "morphdom";

  /**
   * Either `this` which refers to the element itself, or a modifier followed by a CSS
   * selector, e.g. `closest form`.
   */
  type HxTarget = "this" | "closest " | "find " | "next " | "previous ";

  /** A CSS selector, followed by one of these sync strategies, e.g. `form:abort`. */
  type HxSync =
    | ":drop"
    | ":abort"
    | ":replace"
    | ":queue"
    | ":queue first"
    | ":queue last"
    | ":queue all";

  /** Evaluate the values given, you can prefix the values with javascript: or js:. */
  type HxHeaders = AnyStr | "javascript:" | "js:";

  /** An event followed by one of these modifiers, e.g. `click once`. */
  type HxTriggerModifier =
    | " once"
    | " changed"
    | " delay:"
    | " throttle:"
    | " from:"
    | " target:"
    | " consume"
    | " queue:first"
    | " queue:last"
    | " queue:all"
    | " queue:none";

  /**
   * An extensible directory of htmx extensions.
   *
   * ## Declaring a new extension
   *
   * ```tsx
   * declare global {
   *   namespace JSX {
   *     interface HtmxExtensions {
   *       myExtension: "my-extension";
   *     }
   *     interface HtmlTag {
   *       ["my-extension-attr"]?: string
   *       // Add any other attributes your extension uses here
   *     }
   *   }
   * }
   *
   * <div hx-ext="my-extension">
   *   <span my-extension-attr="foo">Hello</span>
   * </div>
   * ```
   */
  interface Extensions {
    /**
     * Includes the commonly-used `X-Requested-With` header that identifies ajax requests
     * in many backend frameworks.
     *
     * CDN: https://unpkg.com/htmx.org/dist/ext/ajax-header.js
     *
     * @see https://htmx.org/extensions/ajax-header/
     */
    ajaxHeaders: "ajax-headers";

    /**
     * Server-Sent Events.
     *
     * CDN: https://unpkg.com/htmx.org/dist/ext/sse.js
     *
     * @see https://htmx.org/extensions/server-sent-events/
     */
    serverSentEvents: "sse";

    /**
     * WebSockets support.
     *
     * CDN: https://unpkg.com/htmx.org/dist/ext/ws.js
     *
     * @see https://htmx.org/extensions/web-sockets/
     */
    ws: "ws";

    /**
     * Class utilities.
     *
     * CDN: https://unpkg.com/htmx.org/dist/ext/class-tools.js
     *
     * @see https://htmx.org/extensions/class-tools/
     */
    classTools: "class-tools";

    /**
     * Tool for debugging htmx requests.
     *
     * CDN: https://unpkg.com/htmx.org/dist/ext/debug.js
     *
     * @see https://htmx.org/extensions/debug/
     */
    debug: "debug";

    /**
     * Disable elements during requests.
     *
     * CDN: https://unpkg.com/htmx.org/dist/ext/disable-element.js
     *
     * @see https://htmx.org/extensions/disable-element/
     */
    disableElement: "disable-element";

    /**
     * Includes a JSON serialized version of the triggering event, if any.
     *
     * CDN: https://unpkg.com/htmx.org/dist/ext/event-header.js
     *
     * @see https://htmx.org/extensions/event-header/
     */
    eventHeader: "event-header";

    /**
     * Support for adding tags to `<head>`.
     *
     * CDN: https://unpkg.com/htmx.org/dist/ext/head-support.js
     *
     * @see https://htmx.org/extensions/head-support/
     */
    headSupport: "head-support";

    /**
     * Support for [Idiomorph](https://github.com/bigskysoftware/idiomorph), an
     * alternative swapping mechanism for htmx.
     *
     * CDN: https://unpkg.com/idiomorph/dist/idiomorph-ext.min.js
     *
     * @see https://github.com/bigskysoftware/idiomorph#htmx
     */
    idiomorph: "morph";

    /**
     * Use JSON encoding in the body of requests, rather than the default
     * `x-www-form-urlencoded`.
     *
     * CDN: https://unpkg.com/htmx.org/dist/ext/json-enc.js
     *
     * @see https://htmx.org/extensions/json-enc/
     */
    jsonEncode: "json-enc";

    /**
     * Support for inflight loading states.
     *
     * CDN: https://unpkg.com/htmx.org/dist/ext/loading-states.js
     *
     * @see https://htmx.org/extensions/loading-states/
     */
    loadingStates: "loading-states";

    /**
     * Support for [morphdom](https://github.com/patrick-steele-idem/morphdom), an
     * alternative swapping mechanism for htmx.
     *
     * CDN: https://unpkg.com/htmx.org/dist/ext/morphdom-swap.js
     *
     * @see https://htmx.org/extensions/morphdom-swap/
     */
    morphdom: "morphdom";
  }

  /** Definitions for htmx attributes up to 1.9.3. */
  interface Attributes {
    /**
     * Issues a `GET` to the specified URL.
     *
     * @see https://htmx.org/attributes/hx-get/
     */
    ["hx-get"]?: string;

    /**
     * Issues a `POST` to the specified URL.
     *
     * @see https://htmx.org/attributes/hx-post/
     */
    ["hx-post"]?: string;

    /**
     * Issues a `PUT` to the specified URL.
     *
     * @see https://htmx.org/attributes/hx-put/
     */
    ["hx-put"]?: string;

    /**
     * Issues a `DELETE` to the specified URL.
     *
     * @see https://htmx.org/attributes/hx-delete/
     */
    ["hx-delete"]?: string;

    /**
     * Issues a `PATCH` to the specified URL.
     *
     * @see https://htmx.org/attributes/hx-patch/
     */
    ["hx-patch"]?: string;

    /**
     * Add or remove [progressive enhancement] for links and forms.
     *
     * @see https://htmx.org/attributes/hx-boost/
     *
     * [progressive enhancement]: https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement
     */
    ["hx-boost"]?: BoolStr;

    /**
     * Handle any event with a script inline.
     *
     * @remarks
     * Event listeners on htmx-specific events need to be specified with a spread
     * attribute, and are otherwise not supported in vanilla JSX.
     *
     * ```jsx
     * <div {...{ 'hx-on::before-request': '...' }} />;
     * ```
     * @since 1.9.3
     * @see https://htmx.org/attributes/hx-on/
     */
    [`hx-on:`]?: string;

    /**
     * Handle any event with a script inline. Each listener is specified on a separate
     * line.
     *
     * @remarks
     * Superseded by `hx-on:$event`, unless IE11 support is required.
     * @since 1.9.0
     * @see https://htmx.org/attributes/hx-on/
     */
    ["hx-on"]?: string;

    /**
     * Pushes the URL into the browser location bar, creating a new history entry.
     *
     * @see https://htmx.org/attributes/hx-push-url/
     */
    ["hx-push-url"]?: BoolStr | AnyStr;

    /**
     * Select content to swap in from a response.
     *
     * @see https://htmx.org/attributes/hx-select/
     */
    ["hx-select"]?: string;

    /**
     * Select content to swap in from a response, out of band (somewhere other than the
     * target).
     *
     * @see https://htmx.org/attributes/hx-select-oob/
     */
    ["hx-select-oob"]?: string;

    /**
     * Controls how content is swapped in (`outerHTML`, `beforeend`, `afterend`, …).
     *
     * @remarks
     * - `morph` swaps are part of the {@linkcode Extensions.idiomorph idiomorph} extension.
     * - `morphdom` swaps are part of the {@linkcode Extensions.morphdom morphdom} extension.
     *
     * @see https://htmx.org/attributes/hx-swap/
     * @see {@linkcode InsertPosition} which is used in [{@linkcode Element.insertAdjacentHTML}](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentHTML)
     */
    ["hx-swap"]?: HxSwap | AnyStr;

    /**
     * Marks content in a response to be out of band (should swap in somewhere other than
     * the target).
     *
     * @see https://htmx.org/attributes/hx-swap-oob/
     */
    ["hx-swap-oob"]?: "true" | HxSwap | AnyStr;

    /**
     * Specifies the target element to be swapped.
     *
     * @see https://htmx.org/attributes/hx-target/
     */
    ["hx-target"]?: HxTarget | AnyStr;

    /**
     * Specifies the event that triggers the request.
     *
     * @see https://htmx.org/attributes/hx-trigger/
     */
    ["hx-trigger"]?: "every " | HxTriggerModifier | AnyStr;

    /**
     * Adds values to the parameters to submit with the request (JSON-formatted).
     *
     * @see https://htmx.org/attributes/hx-vals/
     */
    ["hx-vals"]?: HxHeaders;

    /**
     * Shows a `confirm()` dialog before issuing a request.
     *
     * @see https://htmx.org/attributes/hx-confirm/
     */
    ["hx-confirm"]?: string;

    /**
     * Disables htmx processing for the given node and any children nodes.
     *
     * @see https://htmx.org/attributes/hx-disable/
     */
    ["hx-disable"]?: boolean;

    /**
     * Control and disable automatic attribute inheritance for child nodes.
     *
     * @see https://htmx.org/attributes/hx-disinherit/
     */
    ["hx-disinherit"]?: "*" | AnyStr;

    /**
     * Changes the request encoding type.
     *
     * @see https://htmx.org/attributes/hx-encoding/
     */
    ["hx-encoding"]?: "multipart/form-data";

    /**
     * Extensions to use for this element.
     *
     * @see https://htmx.org/attributes/hx-ext/
     * @see {@linkcode Extensions} for how to declare extensions in JSX.
     */
    ["hx-ext"]?: Htmx.Extensions[keyof Htmx.Extensions] | "ignore:" | AnyStr;

    /**
     * Adds to the headers that will be submitted with the request.
     *
     * @see https://htmx.org/attributes/hx-headers/
     */
    ["hx-headers"]?: HxHeaders | AnyStr;

    /**
     * Prevent sensitive data being saved to the history cache.
     *
     * @see https://htmx.org/attributes/hx-history/
     */
    ["hx-history"]?: "false";

    /**
     * The element to snapshot and restore during history navigation.
     *
     * @see https://htmx.org/attributes/hx-history-elt/
     */
    ["hx-history-elt"]?: boolean;

    /**
     * Include additional data in requests.
     *
     * @see https://htmx.org/attributes/hx-include/
     */
    ["hx-include"]?: string;

    /**
     * The element to put the `htmx-request` class on during the request.
     *
     * @see https://htmx.org/attributes/hx-indicator/
     */
    ["hx-indicator"]?: string;

    /**
     * Filters the parameters that will be submitted with a request.
     *
     * @see https://htmx.org/attributes/hx-params/
     */
    ["hx-params"]?: "*" | "none" | "not " | AnyStr;

    /**
     * Specifies elements to keep unchanged between requests.
     *
     * @remarks
     * `true` is only observed by the `head-support` extension, where it prevents an
     * element from being removed from the `<head>`.
     * @see https://htmx.org/attributes/hx-preserve/
     */
    ["hx-preserve"]?: boolean | "true";

    /**
     * Shows a `prompt()` before submitting a request.
     *
     * @see https://htmx.org/attributes/hx-prompt/
     */
    ["hx-prompt"]?: string;

    /**
     * Replace the URL in the browser location bar.
     *
     * @see https://htmx.org/attributes/hx-replace-url/
     */
    ["hx-replace-url"]?: BoolStr | AnyStr;

    /**
     * Configures various aspects of the request.
     *
     * @see https://htmx.org/attributes/hx-request/
     */
    ["hx-request"]?:
      | `"timeout": `
      | `"credentials": `
      | `"noHeaders": `
      | HxHeaders;

    /**
     * Control how requests made by different elements are synchronized.
     *
     * @see https://htmx.org/attributes/hx-sync/
     */
    ["hx-sync"]?: HxSync;

    /**
     * Force elements to validate themselves before a request.
     *
     * @see https://htmx.org/attributes/hx-validate/
     */
    ["hx-validate"]?: boolean;

    /**
     * Adds values dynamically to the parameters to submit with the request.
     *
     * @deprecated Superseded by `hx-vals`
     */
    ["hx-vars"]?: AnyStr;

    /**
     * The URL of the SSE server.
     *
     * @see https://htmx.org/extensions/server-sent-events/
     */
    ["sse-connect"]?: string;

    /**
     * The name of the message to swap into the DOM.
     *
     * @see https://htmx.org/extensions/server-sent-events/
     */
    ["sse-swap"]?: string;

    /**
     * A URL to establish a WebSocket connection against.
     *
     * @see https://htmx.org/extensions/web-sockets/
     */
    ["ws-connect"]?: string;

    /**
     * Sends a message to the nearest websocket based on the trigger value for the
     * element.
     *
     * @see https://htmx.org/extensions/web-sockets/
     */
    ["ws-send"]?: boolean;

    /**
     * Apply class transitions on this element.
     *
     * @see https://htmx.org/extensions/class-tools/
     */
    ["classes"]?: `add ` | `remove ` | `toggle ` | AnyStr;

    /**
     * The element or elements to disable during requests. Accepts CSS selectors. This
     * extensions functionality has been folded into the core of htmx via the
     * hx-disabled-elt attribute
     *
     * @see https://htmx.org/extensions/disable-element/
     */
    ["hx-disable-element"]?: "self" | AnyStr;

    /**
     * The element or elements to disable during requests. Accepts CSS selectors.
     *
     * @see https://htmx.org/attributes/hx-disabled-elt/
     */
    ["hx-disabled-elt"]?: "this" | AnyStr;

    /**
     * The strategy for merging new head content.
     *
     * @see https://htmx.org/extensions/head-support/
     */
    ["hx-head"]?: "merge" | "append" | "re-eval";

    /**
     * Hyperscript expression
     *
     * @see https://hyperscript.org/
     */
    _?: string;
  }
}

declare namespace Aria {
  // Source: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e36b21fd1ca9e0f1788fa8873fe1a4bd3c8561d6/types/react/index.d.ts

  // All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
  type Role =
    | "alert"
    | "alertdialog"
    | "application"
    | "article"
    | "banner"
    | "button"
    | "cell"
    | "checkbox"
    | "columnheader"
    | "combobox"
    | "complementary"
    | "contentinfo"
    | "definition"
    | "dialog"
    | "directory"
    | "document"
    | "feed"
    | "figure"
    | "form"
    | "grid"
    | "gridcell"
    | "group"
    | "heading"
    | "img"
    | "link"
    | "list"
    | "listbox"
    | "listitem"
    | "log"
    | "main"
    | "marquee"
    | "math"
    | "menu"
    | "menubar"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "navigation"
    | "none"
    | "note"
    | "option"
    | "presentation"
    | "progressbar"
    | "radio"
    | "radiogroup"
    | "region"
    | "row"
    | "rowgroup"
    | "rowheader"
    | "scrollbar"
    | "search"
    | "searchbox"
    | "separator"
    | "slider"
    | "spinbutton"
    | "status"
    | "switch"
    | "tab"
    | "table"
    | "tablist"
    | "tabpanel"
    | "term"
    | "textbox"
    | "timer"
    | "toolbar"
    | "tooltip"
    | "tree"
    | "treegrid"
    | "treeitem"
    | (string & {}) /* eslint-disable-line @typescript-eslint/ban-types */;
}
