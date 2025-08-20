var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import React__default, { Component, useState, useEffect, useRef } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import fastCompare from "react-fast-compare";
import invariant from "invariant";
import shallowEqual from "shallowequal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import clsx$1, { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, Menu, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import { NavLink, Link, useNavigate, useLocation, useParams, Routes, Route } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaUserTie, FaThumbsUp, FaTrophy, FaBriefcase } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { FiChevronRight } from "react-icons/fi";
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
  return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
  (carry, [key, value]) => {
    carry[value] = key;
    return carry;
  },
  {}
);
var HELMET_ATTRIBUTE = "data-rh";
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
  for (let i = propsList.length - 1; i >= 0; i -= 1) {
    const props = propsList[i];
    if (Object.prototype.hasOwnProperty.call(props, property)) {
      return props[property];
    }
  }
  return null;
};
var getTitleFromPropsList = (propsList) => {
  let innermostTitle = getInnermostProperty(
    propsList,
    "title"
    /* TITLE */
  );
  const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (Array.isArray(innermostTitle)) {
    innermostTitle = innermostTitle.join("");
  }
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, () => innermostTitle);
  }
  const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {
});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({ ...tagAttrs, ...current }), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props[
  "base"
  /* BASE */
] !== "undefined").map((props) => props[
  "base"
  /* BASE */
]).reverse().reduce((innermostBaseTag, tag) => {
  if (!innermostBaseTag.length) {
    const keys = Object.keys(tag);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const lowerCaseAttributeKey = attributeKey.toLowerCase();
      if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
        return innermostBaseTag.concat(tag);
      }
    }
  }
  return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
  const approvedSeenTags = {};
  return propsList.filter((props) => {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn(
        `Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`
      );
    }
    return false;
  }).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
    const instanceSeenTags = {};
    instanceTags.filter((tag) => {
      let primaryAttributeKey;
      const keys2 = Object.keys(tag);
      for (let i = 0; i < keys2.length; i += 1) {
        const attributeKey = keys2[i];
        const lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) {
          primaryAttributeKey = attributeKey;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      const value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach((tag) => approvedTags.push(tag));
    const keys = Object.keys(instanceSeenTags);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const tagUnion = {
        ...approvedSeenTags[attributeKey],
        ...instanceSeenTags[attributeKey]
      };
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
  if (Array.isArray(propsList) && propsList.length) {
    for (let index = 0; index < propsList.length; index += 1) {
      const prop = propsList[index];
      if (prop[checkedTag]) {
        return true;
      }
    }
  }
  return false;
};
var reducePropsToState = (propsList) => ({
  baseTag: getBaseTagFromPropsList([
    "href"
    /* HREF */
  ], propsList),
  bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
  defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
  encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
  linkTags: getTagsFromPropsList(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    propsList
  ),
  metaTags: getTagsFromPropsList(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    propsList
  ),
  noscriptTags: getTagsFromPropsList("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], propsList),
  onChangeClientState: getOnChangeClientState(propsList),
  scriptTags: getTagsFromPropsList(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    propsList
  ),
  styleTags: getTagsFromPropsList("style", [
    "cssText"
    /* CSS_TEXT */
  ], propsList),
  title: getTitleFromPropsList(propsList),
  titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
  prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
  const keys = Object.keys(props);
  for (let i = 0; i < keys.length; i += 1) {
    if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
      return true;
    }
  }
  return false;
};
var prioritizer = (elementsList, propsToMatch) => {
  if (Array.isArray(elementsList)) {
    return elementsList.reduce(
      (acc, elementAttrs) => {
        if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
          acc.priority.push(elementAttrs);
        } else {
          acc.default.push(elementAttrs);
        }
        return acc;
      },
      { priority: [], default: [] }
    );
  }
  return { default: elementsList, priority: [] };
};
var without = (obj, key) => {
  return {
    ...obj,
    [key]: void 0
  };
};
var SELF_CLOSING_TAGS = [
  "noscript",
  "script",
  "style"
  /* STYLE */
];
var encodeSpecialCharacters = (str, encode = true) => {
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
  const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
  return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title2, attributes, encode) => {
  const attributeString = generateElementAttributesAsString(attributes);
  const flattenedTitle = flattenArray(title2);
  return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
  const tag = t;
  const attributeHtml = Object.keys(tag).filter(
    (attribute) => !(attribute === "innerHTML" || attribute === "cssText")
  ).reduce((string, attribute) => {
    const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
    return string ? `${string} ${attr}` : attr;
  }, "");
  const tagContent = tag.innerHTML || tag.cssText || "";
  const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
  return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
  const mapped = REACT_TAG_MAP[key];
  obj[mapped || key] = attributes[key];
  return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title2, attributes) => {
  const initProps = {
    key: title2,
    [HELMET_ATTRIBUTE]: true
  };
  const props = convertElementAttributesToReactProps(attributes, initProps);
  return [React__default.createElement("title", props, title2)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
  const mappedTag = {
    key: i,
    [HELMET_ATTRIBUTE]: true
  };
  Object.keys(tag).forEach((attribute) => {
    const mapped = REACT_TAG_MAP[attribute];
    const mappedAttribute = mapped || attribute;
    if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
      const content2 = tag.innerHTML || tag.cssText;
      mappedTag.dangerouslySetInnerHTML = { __html: content2 };
    } else {
      mappedTag[mappedAttribute] = tag[attribute];
    }
  });
  return React__default.createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
  switch (type) {
    case "title":
      return {
        toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
        toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => convertElementAttributesToReactProps(tags),
        toString: () => generateElementAttributesAsString(tags)
      };
    default:
      return {
        toComponent: () => generateTagsAsReactComponent(type, tags),
        toString: () => generateTagsAsString(type, tags, encode)
      };
  }
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
  const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
  const link2 = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
  const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
  const priorityMethods = {
    toComponent: () => [
      ...generateTagsAsReactComponent("meta", meta.priority),
      ...generateTagsAsReactComponent("link", link2.priority),
      ...generateTagsAsReactComponent("script", script.priority)
    ],
    toString: () => (
      // generate all the tags as strings and concatenate them
      `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag(
        "link",
        link2.priority,
        encode
      )} ${getMethodsForTag("script", script.priority, encode)}`
    )
  };
  return {
    priorityMethods,
    metaTags: meta.default,
    linkTags: link2.default,
    scriptTags: script.default
  };
};
var mapStateOnServer = (props) => {
  const {
    baseTag,
    bodyAttributes,
    encode = true,
    htmlAttributes,
    noscriptTags,
    styleTags,
    title: title2 = "",
    titleAttributes,
    prioritizeSeoTags
  } = props;
  let { linkTags, metaTags, scriptTags } = props;
  let priorityMethods = {
    toComponent: () => {
    },
    toString: () => ""
  };
  if (prioritizeSeoTags) {
    ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
  }
  return {
    priority: priorityMethods,
    base: getMethodsForTag("base", baseTag, encode),
    bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
    htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
    link: getMethodsForTag("link", linkTags, encode),
    meta: getMethodsForTag("meta", metaTags, encode),
    noscript: getMethodsForTag("noscript", noscriptTags, encode),
    script: getMethodsForTag("script", scriptTags, encode),
    style: getMethodsForTag("style", styleTags, encode),
    title: getMethodsForTag("title", { title: title2, titleAttributes }, encode)
  };
};
var server_default = mapStateOnServer;
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
  constructor(context, canUseDOM) {
    __publicField(this, "instances", []);
    __publicField(this, "canUseDOM", isDocument);
    __publicField(this, "context");
    __publicField(this, "value", {
      setHelmet: (serverState) => {
        this.context.helmet = serverState;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? instances : this.instances,
        add: (instance) => {
          (this.canUseDOM ? instances : this.instances).push(instance);
        },
        remove: (instance) => {
          const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
          (this.canUseDOM ? instances : this.instances).splice(index, 1);
        }
      }
    });
    this.context = context;
    this.canUseDOM = canUseDOM || false;
    if (!canUseDOM) {
      context.helmet = server_default({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
  }
};
var defaultValue = {};
var Context = React__default.createContext(defaultValue);
var HelmetProvider = (_a = class extends Component {
  constructor(props) {
    super(props);
    __publicField(this, "helmetData");
    this.helmetData = new HelmetData(this.props.context || {}, _a.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ React__default.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, __publicField(_a, "canUseDOM", isDocument), _a);
var updateTags = (type, tags) => {
  const headElement = document.head || document.querySelector(
    "head"
    /* HEAD */
  );
  const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
  const oldTags = [].slice.call(tagNodes);
  const newTags = [];
  let indexToDelete;
  if (tags && tags.length) {
    tags.forEach((tag) => {
      const newElement = document.createElement(type);
      for (const attribute in tag) {
        if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
          if (attribute === "innerHTML") {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === "cssText") {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            const attr = attribute;
            const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some((existingTag, index) => {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach((tag) => {
    var _a2;
    return (_a2 = tag.parentNode) == null ? void 0 : _a2.removeChild(tag);
  });
  newTags.forEach((tag) => headElement.appendChild(tag));
  return {
    oldTags,
    newTags
  };
};
var updateAttributes = (tagName, attributes) => {
  const elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  const attributesToRemove = [...helmetAttributes];
  const attributeKeys = Object.keys(attributes);
  for (const attribute of attributeKeys) {
    const value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    const indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
    elementTag.removeAttribute(attributesToRemove[i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTitle = (title2, attributes) => {
  if (typeof title2 !== "undefined" && document.title !== title2) {
    document.title = flattenArray(title2);
  }
  updateAttributes("title", attributes);
};
var commitTagChanges = (newState, cb) => {
  const {
    baseTag,
    bodyAttributes,
    htmlAttributes,
    linkTags,
    metaTags,
    noscriptTags,
    onChangeClientState,
    scriptTags,
    styleTags,
    title: title2,
    titleAttributes
  } = newState;
  updateAttributes("body", bodyAttributes);
  updateAttributes("html", htmlAttributes);
  updateTitle(title2, titleAttributes);
  const tagUpdates = {
    baseTag: updateTags("base", baseTag),
    linkTags: updateTags("link", linkTags),
    metaTags: updateTags("meta", metaTags),
    noscriptTags: updateTags("noscript", noscriptTags),
    scriptTags: updateTags("script", scriptTags),
    styleTags: updateTags("style", styleTags)
  };
  const addedTags = {};
  const removedTags = {};
  Object.keys(tagUpdates).forEach((tagType) => {
    const { newTags, oldTags } = tagUpdates[tagType];
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  if (cb) {
    cb();
  }
  onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(() => {
      commitTagChanges(newState, () => {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var client_default = handleStateChangeOnClient;
var HelmetDispatcher = class extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "rendered", false);
  }
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances } = this.props.context;
    helmetInstances.remove(this);
    this.emitChange();
  }
  emitChange() {
    const { helmetInstances, setHelmet } = this.props.context;
    let serverState = null;
    const state = reducePropsToState(
      helmetInstances.get().map((instance) => {
        const props = { ...instance.props };
        delete props.context;
        return props;
      })
    );
    if (HelmetProvider.canUseDOM) {
      client_default(state);
    } else if (server_default) {
      serverState = server_default(state);
    }
    setHelmet(serverState);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered) {
      return;
    }
    this.rendered = true;
    const { helmetInstances } = this.props.context;
    helmetInstances.add(this);
    this.emitChange();
  }
  render() {
    this.init();
    return null;
  }
};
var Helmet = (_b = class extends Component {
  shouldComponentUpdate(nextProps) {
    return !fastCompare(without(this.props, "helmetData"), without(nextProps, "helmetData"));
  }
  mapNestedChildrenToProps(child, nestedChildren) {
    if (!nestedChildren) {
      return null;
    }
    switch (child.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: nestedChildren
        };
      case "style":
        return {
          cssText: nestedChildren
        };
      default:
        throw new Error(
          `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
    return {
      ...arrayTypeChildren,
      [child.type]: [
        ...arrayTypeChildren[child.type] || [],
        {
          ...newChildProps,
          ...this.mapNestedChildrenToProps(child, nestedChildren)
        }
      ]
    };
  }
  mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
    switch (child.type) {
      case "title":
        return {
          ...newProps,
          [child.type]: nestedChildren,
          titleAttributes: { ...newChildProps }
        };
      case "body":
        return {
          ...newProps,
          bodyAttributes: { ...newChildProps }
        };
      case "html":
        return {
          ...newProps,
          htmlAttributes: { ...newChildProps }
        };
      default:
        return {
          ...newProps,
          [child.type]: { ...newChildProps }
        };
    }
  }
  mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
    let newFlattenedProps = { ...newProps };
    Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
      newFlattenedProps = {
        ...newFlattenedProps,
        [arrayChildName]: arrayTypeChildren[arrayChildName]
      };
    });
    return newFlattenedProps;
  }
  warnOnInvalidChildren(child, nestedChildren) {
    invariant(
      VALID_TAG_NAMES.some((name) => child.type === name),
      typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(
        ", "
      )} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`
    );
    invariant(
      !nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"),
      `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
    );
    return true;
  }
  mapChildrenToProps(children, newProps) {
    let arrayTypeChildren = {};
    React__default.Children.forEach(children, (child) => {
      if (!child || !child.props) {
        return;
      }
      const { children: nestedChildren, ...childProps } = child.props;
      const newChildProps = Object.keys(childProps).reduce((obj, key) => {
        obj[HTML_TAG_MAP[key] || key] = childProps[key];
        return obj;
      }, {});
      let { type } = child;
      if (typeof type === "symbol") {
        type = type.toString();
      } else {
        this.warnOnInvalidChildren(child, nestedChildren);
      }
      switch (type) {
        case "Symbol(react.fragment)":
          newProps = this.mapChildrenToProps(nestedChildren, newProps);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          arrayTypeChildren = this.flattenArrayTypeChildren(
            child,
            arrayTypeChildren,
            newChildProps,
            nestedChildren
          );
          break;
        default:
          newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
          break;
      }
    });
    return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
  }
  render() {
    const { children, ...props } = this.props;
    let newProps = { ...props };
    let { helmetData } = props;
    if (children) {
      newProps = this.mapChildrenToProps(children, newProps);
    }
    if (helmetData && !(helmetData instanceof HelmetData)) {
      const data = helmetData;
      helmetData = new HelmetData(data.context, true);
      delete newProps.helmetData;
    }
    return helmetData ? /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context: helmetData.value }) : /* @__PURE__ */ React__default.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context }));
  }
}, __publicField(_b, "defaultProps", {
  defer: true,
  encodeSpecialCharacters: true,
  prioritizeSeoTags: false
}), _b);
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const constantValue = {
  companyName: "Bharat Pipe & Fittings",
  companyAddress: `GROUND FLOOR, SHOP NO. 105, 103/105 JAMANDAS
PRABHUDAS BUILDING, DR. MITRASEN MAHIMTURA
MARG, DURGADEVI UDYAN, 3RD KUMBHARWADA,
GIRGAON, Mumbai, Mumbai, Maharashtra, 400004`,
  companyPhone: "Mukesh Prajapati :  +917877399226",
  phone: "+917877399226",
  alternativePhone: "Alternate : +917021187849 / +918369684934",
  companyEmail: "bharatpipeandfittings@gmail.com",
  whatsAppMessage: "Hello, I came across your Bharat Pipe & Fittings products and I'm interested in knowing more about your offerings, pricing, and availability. Please share the product catalog or connect me with your sales team.",
  ManufacturingPlant1: `Ground Floor, Gala No. A/17, Survey No. 46,
Sagar Industrial Estate No.06,
Dhumal Nagar, waliv, Vasai East,
Palghar, Maharashtra, 401208.`,
  ManufacturingPlant2: `Shop No 15, Sukhlal Compound,
Waliv Road, Khairpada, Bilalapada,
Vasai East, Vasai Virar, Palghar,
Maharashtra, 401208.`,
  salesEmail: "sales@bharatpipeandfittings.com",
  companyUrl: "http://www.bharatpipeandfittings.com/"
};
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count$1 = 0;
function genId() {
  count$1 = (count$1 + 1) % Number.MAX_SAFE_INTEGER;
  return count$1.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster$1() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title: title2, description: description2, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title2 && /* @__PURE__ */ jsx(ToastTitle, { children: title2 }),
          description2 && /* @__PURE__ */ jsx(ToastDescription, { children: description2 })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const topBar = "_topBar_1sauf_1";
const container$a = "_container_1sauf_15";
const message = "_message_1sauf_35";
const links = "_links_1sauf_49";
const link = "_link_1sauf_49";
const icon$1 = "_icon_1sauf_87";
const styles$g = {
  topBar,
  container: container$a,
  message,
  links,
  link,
  icon: icon$1
};
const TopBar = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: styles$g.topBar, children: /* @__PURE__ */ jsxs("div", { className: styles$g.container, children: [
    /* @__PURE__ */ jsxs("span", { className: styles$g.message, children: [
      /* @__PURE__ */ jsx(FaMapMarkerAlt, { className: styles$g.icon }),
      " India, Mumbai"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$g.links, children: [
      /* @__PURE__ */ jsxs("a", { href: "tel:+919119171675", className: styles$g.link, children: [
        /* @__PURE__ */ jsx(FaPhoneAlt, { className: styles$g.icon }),
        " ",
        constantValue.companyPhone
      ] }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: `mailto:${constantValue.companyEmail}`,
          className: styles$g.link,
          children: [
            /* @__PURE__ */ jsx(FaEnvelope, { className: styles$g.icon }),
            " ",
            constantValue.salesEmail
          ]
        }
      )
    ] })
  ] }) }) });
};
const logo$1 = "_logo_6pp5d_1";
const navbar = "_navbar_6pp5d_19";
const scrolled = "_scrolled_6pp5d_41";
const container$9 = "_container_6pp5d_51";
const navLinks = "_navLinks_6pp5d_105";
const navLink = "_navLink_6pp5d_105";
const active$3 = "_active_6pp5d_175";
const navDropdown = "_navDropdown_6pp5d_193";
const dropdownMenu = "_dropdownMenu_6pp5d_205";
const dropdownItem = "_dropdownItem_6pp5d_239";
const menuToggle = "_menuToggle_6pp5d_265";
const toggleIcon = "_toggleIcon_6pp5d_281";
const navLinksOpen = "_navLinksOpen_6pp5d_331";
const dropdownToggle = "_dropdownToggle_6pp5d_395";
const styles$f = {
  logo: logo$1,
  navbar,
  scrolled,
  container: container$9,
  navLinks,
  navLink,
  active: active$3,
  navDropdown,
  dropdownMenu,
  dropdownItem,
  menuToggle,
  toggleIcon,
  navLinksOpen,
  dropdownToggle
};
const logo = "/assets/bharatpipeandfittingslogo-BofpSmJH.jpeg";
const mainProducts = [
  { label: "Sheets, Plates & Coils" },
  { label: "Angles, Channels & Flat" },
  { label: "Pipes & Tubes" },
  { label: "Pipe Fittings" },
  { label: "Flanges" },
  { label: "Forged Fittings" },
  { label: "Fasteners" },
  { label: "Valves" },
  { label: "Round Bars & Rods" }
];
const materials = [
  { label: "Stainless Steel" },
  { label: "Carbon Steel" },
  { label: "Hastelloy" },
  { label: "Titanium" },
  { label: "Inconel" },
  { label: "Monel" },
  { label: "Alloy Steel" },
  { label: "Copper" },
  { label: "Super Duplex Steel" }
];
const hasEmptyKey = (obj) => {
  if (typeof obj !== "object" || obj === null) return false;
  return Object.keys(obj).some((key) => key === "");
};
const slugify = (text) => {
  return text.toLowerCase().replace(/[,&]/g, "").replace(/\s+/g, "-").trim();
};
const handleWhatsAppClick = () => {
  const phoneNumber = constantValue.phone;
  const message2 = constantValue.whatsAppMessage;
  const encodedMessage = encodeURIComponent(message2);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  if (typeof window !== "undefined") {
    window.open(whatsappURL, "_blank");
  }
};
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);
  const navLinks2 = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About", href: "/about", isRoute: true },
    { name: "Products", href: "/#products", isRoute: false },
    { name: "Materials", isDropdown: true },
    { name: "Catalogue", href: "/catalog.pdf", isRoute: false, isPdf: true },
    { name: "Contact", href: "/contact", isRoute: true }
  ];
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMaterialsOpen(false);
  };
  const toggleMaterials = () => {
    setIsMaterialsOpen(!isMaterialsOpen);
    setIsMenuOpen(true);
  };
  const handlePdfOpen = (e, href) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.open(href, "_blank");
    }
    setIsMenuOpen(false);
  };
  return /* @__PURE__ */ jsx("nav", { className: `${styles$f.navbar} ${isScrolled ? styles$f.scrolled : ""}`, children: /* @__PURE__ */ jsxs("div", { className: styles$f.container, children: [
    /* @__PURE__ */ jsx(NavLink, { to: "/", className: styles$f.logo, children: /* @__PURE__ */ jsxs("span", { children: [
      /* @__PURE__ */ jsx("img", { src: logo, alt: "Bharat Pipe & Fittings Logo" }),
      constantValue.companyName
    ] }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `${styles$f.navLinks} ${isMenuOpen ? styles$f.navLinksOpen : ""}`,
        children: navLinks2.map((link2, index) => {
          if (link2.isDropdown) {
            return /* @__PURE__ */ jsxs("div", { className: styles$f.navDropdown, children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: `${styles$f.navLink} ${styles$f.dropdownToggle}`,
                  type: "button",
                  onClick: toggleMaterials,
                  children: [
                    link2.name,
                    /* @__PURE__ */ jsx("span", { className: styles$f.toggleIcon, children: isMaterialsOpen ? "−" : "+" })
                  ]
                }
              ),
              (isMaterialsOpen || typeof window !== "undefined" && window.innerWidth >= 769) && /* @__PURE__ */ jsx("div", { className: styles$f.dropdownMenu, children: materials.map((item, idx) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: `/product/${slugify(item.label)}`,
                  className: styles$f.dropdownItem,
                  onClick: () => {
                    setIsMenuOpen(false);
                    setIsMaterialsOpen(false);
                    if (typeof window !== "undefined") {
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }
                  },
                  children: item.label
                },
                idx
              )) })
            ] }, index);
          } else if (link2.isPdf) {
            return /* @__PURE__ */ jsx(
              "a",
              {
                href: link2.href,
                className: styles$f.navLink,
                onClick: (e) => handlePdfOpen(e, link2.href),
                children: link2.name
              },
              index
            );
          } else if (link2.isRoute) {
            return /* @__PURE__ */ jsx(
              NavLink,
              {
                to: link2.href,
                end: true,
                className: ({ isActive }) => `${styles$f.navLink} ${isActive ? styles$f.active : ""}`,
                onClick: () => setIsMenuOpen(false),
                children: link2.name
              },
              index
            );
          } else {
            return /* @__PURE__ */ jsx(
              "a",
              {
                href: link2.href,
                className: styles$f.navLink,
                onClick: () => setIsMenuOpen(false),
                children: link2.name
              },
              index
            );
          }
        })
      }
    ),
    /* @__PURE__ */ jsx("button", { className: styles$f.menuToggle, onClick: toggleMenu, children: isMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 }) })
  ] }) });
};
const heroSlider = "_heroSlider_1p44u_1";
const slider = "_slider_1p44u_15";
const slide = "_slide_1p44u_15";
const active$2 = "_active_1p44u_59";
const slideContent = "_slideContent_1p44u_69";
const slideUp = "_slideUp_1p44u_1";
const title$5 = "_title_1p44u_107";
const subtitle$2 = "_subtitle_1p44u_125";
const description$1 = "_description_1p44u_141";
const ctaButton = "_ctaButton_1p44u_163";
const navButton = "_navButton_1p44u_199";
const prevButton = "_prevButton_1p44u_243";
const nextButton = "_nextButton_1p44u_251";
const indicators = "_indicators_1p44u_259";
const indicator = "_indicator_1p44u_259";
const styles$e = {
  heroSlider,
  slider,
  slide,
  active: active$2,
  slideContent,
  slideUp,
  title: title$5,
  subtitle: subtitle$2,
  description: description$1,
  ctaButton,
  navButton,
  prevButton,
  nextButton,
  indicators,
  indicator
};
const c0 = "/assets/bharat-factory-BOMPMkVz.jpg";
const c1 = "/assets/c1-DE5xusl3.jpg";
const c4 = "/assets/c4-BY7YpYTr.jpg";
const slides = [
  {
    id: 1,
    title: "Pipe Fittings That Outlast",
    subtitle: "Tee • Elbow • Reducer • Cross",
    description: "Precision-crafted pipe fittings made to handle pressure, corrosion, and tough industrial environments.",
    buttonText: "View Pipe Fittings",
    backgroundImage: c0,
    navigate: "/product/pipe-fittings"
  },
  {
    id: 2,
    title: "Fasteners Built for Strength",
    subtitle: "Bolt • Nut • Screw • Washer",
    description: "From heavy-duty bolts to precision screws, our fasteners are engineered for performance and durability.",
    buttonText: "Explore Fasteners",
    backgroundImage: c1,
    navigate: "/product/fasteners"
  },
  // {
  //   id: 3,
  //   title: "Certified. Trusted. Reliable.",
  //   subtitle: "ISO 9001:2015 Certified",
  //   description:
  //     "Quality you can trust — every product we ship meets global standards and customer expectations.",
  //   buttonText: "View Certification",
  //   backgroundImage: c2,
  // },
  {
    id: 4,
    title: "Worldwide Delivery, On Time",
    subtitle: "Supplying Across the Globe",
    description: "We ensure safe and timely delivery of industrial products — wherever your site is, we reach you.",
    buttonText: "Request a Quote",
    backgroundImage: c4,
    navigate: "/contact",
    ContactToWhatsApp: () => handleWhatsAppClick()
  }
];
const HeroSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth <= 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  let navigate = useNavigate();
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const minSwipeDistance = 50;
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5e3);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 1e4);
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 1e4);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 1e4);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$e.heroSlider,
      onTouchStart: (e) => setTouchStartX(e.touches[0].clientX),
      onTouchMove: (e) => setTouchEndX(e.touches[0].clientX),
      onTouchEnd: () => {
        if (touchStartX !== null && touchEndX !== null) {
          const distance = touchStartX - touchEndX;
          if (Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
              nextSlide();
            } else {
              prevSlide();
            }
          }
        }
        setTouchStartX(null);
        setTouchEndX(null);
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: styles$e.slider, children: slides.map((slide2, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: `${styles$e.slide} ${index === currentSlide ? styles$e.active : ""}`,
            style: {
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${slide2.backgroundImage})`
            },
            children: /* @__PURE__ */ jsxs("div", { className: styles$e.slideContent, children: [
              /* @__PURE__ */ jsx("h1", { className: styles$e.title, children: slide2.title }),
              /* @__PURE__ */ jsx("h2", { className: styles$e.subtitle, children: slide2.subtitle }),
              /* @__PURE__ */ jsx("p", { className: styles$e.description, children: slide2.description }),
              slide2.buttonText && /* @__PURE__ */ jsx(
                "button",
                {
                  className: styles$e.ctaButton,
                  onClick: slide2.id === 4 ? slide2.ContactToWhatsApp : () => navigate(slide2.navigate),
                  children: slide2.buttonText
                }
              )
            ] })
          },
          slide2.id
        )) }),
        !isMobile && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `${styles$e.navButton} ${styles$e.prevButton}`,
              onClick: prevSlide,
              children: "‹"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `${styles$e.navButton} ${styles$e.nextButton}`,
              onClick: nextSlide,
              children: "›"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles$e.indicators, children: slides.map((_, index) => /* @__PURE__ */ jsx(
          "button",
          {
            className: `${styles$e.indicator} ${index === currentSlide ? styles$e.active : ""}`,
            onClick: () => goToSlide(index)
          },
          index
        )) })
      ]
    }
  );
};
const aboutSection = "_aboutSection_zun10_3";
const container$8 = "_container_zun10_13";
const header$1 = "_header_zun10_25";
const title$4 = "_title_zun10_35";
const subtitle$1 = "_subtitle_zun10_49";
const cardsGrid = "_cardsGrid_zun10_65";
const card$3 = "_card_zun10_65";
const cardIcon = "_cardIcon_zun10_107";
const cardTitle = "_cardTitle_zun10_119";
const cardDescription = "_cardDescription_zun10_133";
const styles$d = {
  aboutSection,
  container: container$8,
  header: header$1,
  title: title$4,
  subtitle: subtitle$1,
  cardsGrid,
  card: card$3,
  cardIcon,
  cardTitle,
  cardDescription
};
const aboutCards = [
  {
    id: 1,
    title: "Industrial-Grade Quality",
    description: "Our products are built to last, crafted with the highest-grade materials suitable for industrial use.",
    icon: "🏭"
  },
  {
    id: 2,
    title: "Timely Delivery",
    description: "We ensure fast and reliable delivery across India with strong logistic partnerships.",
    icon: "🚚"
  },
  {
    id: 3,
    title: "Certified Products",
    description: "All our pipes and fittings are ISO 9001:2015 certified to meet strict industry standards.",
    icon: "📄"
  },
  {
    id: 4,
    title: "Customer-Centric Support",
    description: "Our experienced support team is always ready to assist with your technical and order-related queries.",
    icon: "📞"
  },
  {
    id: 5,
    title: "Trusted by Professionals",
    description: "We're the preferred supplier for contractors, builders, and manufacturers nationwide.",
    icon: "🤝"
  },
  {
    id: 6,
    title: "Wide Product Range",
    description: "From PVC to GI, we offer an extensive range of pipes, fittings, and accessories under one roof.",
    icon: "📦"
  },
  {
    id: 7,
    title: "Secure Transactions",
    description: "Our billing and payment system ensures a smooth and secure experience for every client.",
    icon: "💳"
  },
  {
    id: 8,
    title: "Global Reach",
    description: "With clients across various countries and regions, we deliver trust and quality beyond borders.",
    icon: "🌍"
  },
  {
    id: 9,
    title: "Decades of Experience",
    description: "We bring over 30+ years of expertise in supplying quality pipe solutions to various sectors.",
    icon: "⏳"
  }
];
const AboutSection = () => {
  return /* @__PURE__ */ jsx("section", { className: styles$d.aboutSection, id: "about", children: /* @__PURE__ */ jsxs("div", { className: styles$d.container, children: [
    /* @__PURE__ */ jsxs("div", { className: styles$d.header, children: [
      /* @__PURE__ */ jsx("h2", { className: styles$d.title, children: "Why Choose Bharat Pipe & Fittings?" }),
      /* @__PURE__ */ jsx("p", { className: styles$d.subtitle, children: "At Bharat Pipe & Fittings, we combine industrial-grade quality, certified standards, and exceptional service to support your project needs with confidence." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: styles$d.cardsGrid, children: aboutCards.map((card2) => /* @__PURE__ */ jsxs("div", { className: styles$d.card, children: [
      /* @__PURE__ */ jsx("div", { className: styles$d.cardIcon, children: card2.icon }),
      /* @__PURE__ */ jsx("h3", { className: styles$d.cardTitle, children: card2.title }),
      /* @__PURE__ */ jsx("p", { className: styles$d.cardDescription, children: card2.description })
    ] }, card2.id)) })
  ] }) });
};
const productSection = "_productSection_17mxj_3";
const container$7 = "_container_17mxj_13";
const header = "_header_17mxj_25";
const title$3 = "_title_17mxj_35";
const subtitle = "_subtitle_17mxj_49";
const categoryTabs = "_categoryTabs_17mxj_63";
const categoryTab = "_categoryTab_17mxj_63";
const active$1 = "_active_17mxj_111";
const productsGrid = "_productsGrid_17mxj_123";
const productCard = "_productCard_17mxj_135";
const productImage$1 = "_productImage_17mxj_163";
const productOverlay = "_productOverlay_17mxj_199";
const viewButton = "_viewButton_17mxj_235";
const productInfo$1 = "_productInfo_17mxj_265";
const productName = "_productName_17mxj_273";
const productDescription$1 = "_productDescription_17mxj_287";
const productPrice$1 = "_productPrice_17mxj_301";
const addToCartButton$1 = "_addToCartButton_17mxj_315";
const styles$c = {
  productSection,
  container: container$7,
  header,
  title: title$3,
  subtitle,
  categoryTabs,
  categoryTab,
  active: active$1,
  productsGrid,
  productCard,
  productImage: productImage$1,
  productOverlay,
  viewButton,
  productInfo: productInfo$1,
  productName,
  productDescription: productDescription$1,
  productPrice: productPrice$1,
  addToCartButton: addToCartButton$1
};
const __vite_glob_0_252 = "/assets/sheets-plates-coils-BfMfjB8X.jpg";
const __vite_glob_0_74 = "/assets/angles-channel-flats-Cw2uxfZG.jpg";
const __vite_glob_0_251 = "/assets/round-bars-rods-CMqiU-6Z.jpg";
const __vite_glob_0_250 = "/assets/pipes-tubes-1LtWOIRC.jpg";
const __vite_glob_0_249 = "/assets/pipe-fittings-C5PdtigS.jpg";
const __vite_glob_0_159 = "/assets/flanges-KC_CNCrK.jpg";
const __vite_glob_0_160 = "/assets/forged-fittings-ByzvyO_1.jpg";
const __vite_glob_0_158 = "/assets/fasteners-Ddd75VDb.jpg";
const __vite_glob_0_357 = "/assets/valves-YWyvwCLA.jpg";
const products = [
  {
    id: 5,
    name: "Pipe Fittings",
    image: __vite_glob_0_249
  },
  {
    id: 6,
    name: "Flanges",
    image: __vite_glob_0_159
  },
  {
    id: 8,
    name: "Fasteners",
    image: __vite_glob_0_158
  },
  {
    id: 7,
    name: "Forged Fittings",
    image: __vite_glob_0_160
  },
  {
    id: 2,
    name: "Angles, Channels & Flat",
    image: __vite_glob_0_74
  },
  {
    id: 9,
    name: "Valves",
    image: __vite_glob_0_357
  },
  {
    id: 4,
    name: "Pipes & Tubes",
    image: __vite_glob_0_250
  },
  {
    id: 1,
    name: "Sheets, Plates & Coils",
    image: __vite_glob_0_252
  },
  {
    id: 3,
    name: "Round Bars & Rods",
    image: __vite_glob_0_251
  }
];
const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProducts = activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory);
  return /* @__PURE__ */ jsx("section", { className: styles$c.productSection, id: "products", children: /* @__PURE__ */ jsxs("div", { className: styles$c.container, children: [
    /* @__PURE__ */ jsxs("div", { className: styles$c.header, children: [
      /* @__PURE__ */ jsx("h2", { className: styles$c.title, children: "Our Product Range" }),
      /* @__PURE__ */ jsx("p", { className: styles$c.subtitle, children: "Explore top-quality industrial pipes, fittings, and accessories trusted by professionals." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: styles$c.productsGrid, children: filteredProducts.map((product) => /* @__PURE__ */ jsxs("div", { className: styles$c.productCard, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$c.productImage, children: [
        /* @__PURE__ */ jsx("img", { src: product.image, alt: product.name }),
        /* @__PURE__ */ jsx("div", { className: styles$c.productOverlay, children: /* @__PURE__ */ jsx(
          Link,
          {
            to: `/product/${slugify(product.name)}`,
            className: styles$c.viewButton,
            children: "View Details"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: styles$c.productInfo, children: /* @__PURE__ */ jsx("h3", { className: styles$c.productName, children: product.name }) })
    ] }, product.id)) })
  ] }) });
};
const footer = "_footer_afb9v_1";
const container$6 = "_container_afb9v_13";
const footerContent = "_footerContent_afb9v_25";
const column = "_column_afb9v_39";
const fadeInUp = "_fadeInUp_afb9v_1";
const columnTitle = "_columnTitle_afb9v_47";
const aboutText = "_aboutText_afb9v_85";
const socialLinks = "_socialLinks_afb9v_99";
const socialLink = "_socialLink_afb9v_99";
const linksList = "_linksList_afb9v_145";
const footerLink = "_footerLink_afb9v_165";
const contactInfo$1 = "_contactInfo_afb9v_213";
const contactItem = "_contactItem_afb9v_221";
const newsletter = "_newsletter_afb9v_251";
const newsletterTitle = "_newsletterTitle_afb9v_259";
const newsletterForm = "_newsletterForm_afb9v_273";
const newsletterInput = "_newsletterInput_afb9v_289";
const newsletterButton = "_newsletterButton_afb9v_319";
const footerBottom = "_footerBottom_afb9v_353";
const copyright = "_copyright_afb9v_373";
const paymentMethods = "_paymentMethods_afb9v_383";
const paymentIcons = "_paymentIcons_afb9v_399";
const paymentIcon = "_paymentIcon_afb9v_399";
const styles$b = {
  footer,
  container: container$6,
  footerContent,
  column,
  fadeInUp,
  columnTitle,
  aboutText,
  socialLinks,
  socialLink,
  linksList,
  footerLink,
  contactInfo: contactInfo$1,
  contactItem,
  newsletter,
  newsletterTitle,
  newsletterForm,
  newsletterInput,
  newsletterButton,
  footerBottom,
  copyright,
  paymentMethods,
  paymentIcons,
  paymentIcon
};
const container$5 = "_container_1xnur_1";
const row = "_row_1xnur_15";
const alignItemsCenter = "_alignItemsCenter_1xnur_25";
const colLeft = "_colLeft_1xnur_33";
const colRight = "_colRight_1xnur_61";
const titleBox = "_titleBox_1xnur_87";
const titleSections = "_titleSections_1xnur_95";
const title$2 = "_title_1xnur_87";
const btnWrapper = "_btnWrapper_1xnur_115";
const themeBtn = "_themeBtn_1xnur_123";
const styles$a = {
  container: container$5,
  row,
  alignItemsCenter,
  colLeft,
  colRight,
  titleBox,
  titleSections,
  title: title$2,
  btnWrapper,
  themeBtn
};
function ThemedButton({
  children,
  className = "",
  style = {},
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: clsx$1(styles$e.ctaButton, className),
      style,
      ...props,
      children
    }
  );
}
const TrustedManufacturer = () => {
  const handleWhatsAppClick2 = () => {
    const phoneNumber = constantValue.phone;
    const message2 = constantValue.whatsAppMessage;
    const encodedMessage = encodeURIComponent(message2);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    if (typeof window !== "undefined") {
      window.open(whatsappURL, "_blank");
    }
  };
  return /* @__PURE__ */ jsx("div", { className: styles$a.container, children: /* @__PURE__ */ jsxs("div", { className: `${styles$a.row} ${styles$a.alignItemsCenter}`, children: [
    /* @__PURE__ */ jsx("div", { className: styles$a.colLeft, children: /* @__PURE__ */ jsx("div", { className: styles$a.titleBox, children: /* @__PURE__ */ jsxs("div", { className: styles$a.titleSections, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$a.title, children: [
        "Searching for a Reliable ",
        /* @__PURE__ */ jsx("br", {}),
        " Manufacturing Partner?"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "We specialize in premium-quality Sheet, Plate, Angle, Channel, Flat, Rod, Pipes, and Pipe Fittings. ",
        /* @__PURE__ */ jsx("br", {}),
        "Get fast responses, expert support, and dependable solutions tailored to your project needs."
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: styles$a.colRight, children: /* @__PURE__ */ jsx("div", { className: styles$a.btnWrapper, children: /* @__PURE__ */ jsx(
      ThemedButton,
      {
        style: { backgroundColor: "var(--color-primary)" },
        onClick: handleWhatsAppClick2,
        children: "Get In Touch"
      }
    ) }) })
  ] }) });
};
const floatingButton = "_floatingButton_gvai3_1";
const styles$9 = {
  floatingButton
};
const FloatingWhatsappButton = () => {
  const phoneNumber = constantValue.phone;
  const message2 = constantValue.whatsAppMessage;
  const encodedMessage = encodeURIComponent(message2);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: whatsappLink,
      className: styles$9.floatingButton,
      target: "_blank",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ jsx(FaWhatsapp, { size: 28 })
    }
  );
};
const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/#products" },
    { name: "Contact", href: "/contact" }
    // { name: "Privacy Policy", href: "#privacy" },
    // { name: "Terms of Service", href: "#terms" },
  ];
  const applicationIndustries = [
    // { name: "Chemical Industry", href: "" },
    // { name: "Energy & Power Industry", href: "" },
    { name: "Oil & Gas Industry", href: "" },
    { name: "Pharmaceutical Industry", href: "" },
    { name: "Petrochemical Industry", href: "" },
    { name: "Sugar Industry", href: "" },
    { name: "Refineries", href: "" },
    { name: "Paper & Pulp Industry", href: "" },
    { name: "Automobile Industry", href: "" },
    { name: "Engineering", href: "" },
    // { name: "Agriculture Industry", href: "" },
    // { name: "Marine Industry", href: "" },
    { name: "Shipbuilding Industry", href: "" },
    { name: "Furnace Industry", href: "" },
    { name: "Nuclear Power Industry", href: "" },
    { name: "Water Piping Systems", href: "" }
  ];
  const socialLinks2 = [
    { icon: /* @__PURE__ */ jsx(Facebook, { size: 20 }), href: "#", name: "Facebook" },
    { icon: /* @__PURE__ */ jsx(Twitter, { size: 20 }), href: "#", name: "Twitter" },
    { icon: /* @__PURE__ */ jsx(Instagram, { size: 20 }), href: "#", name: "Instagram" },
    { icon: /* @__PURE__ */ jsx(Linkedin, { size: 20 }), href: "#", name: "LinkedIn" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TrustedManufacturer, {}),
    /* @__PURE__ */ jsx(FloatingWhatsappButton, {}),
    /* @__PURE__ */ jsx("footer", { className: styles$b.footer, id: "contact", children: /* @__PURE__ */ jsxs("div", { className: styles$b.container, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$b.footerContent, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$b.column, children: [
          /* @__PURE__ */ jsx("h3", { className: styles$b.columnTitle, children: "About Bharat Pipe & Fittings" }),
          /* @__PURE__ */ jsx("p", { className: styles$b.aboutText, children: "Bharat Pipe & Fittings is a trusted name in the manufacturing and supply of industrial pipes, fittings, rods, plates, and structural products across India. We are committed to delivering top-quality solutions with unmatched service." }),
          /* @__PURE__ */ jsx("div", { className: styles$b.socialLinks, children: socialLinks2.map((social, index) => /* @__PURE__ */ jsx(
            "a",
            {
              href: social.href,
              className: styles$b.socialLink,
              "aria-label": social.name,
              children: social.icon
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$b.column, children: [
          /* @__PURE__ */ jsx("h3", { className: styles$b.columnTitle, children: "Quick Links" }),
          /* @__PURE__ */ jsx("ul", { className: styles$b.linksList, children: quickLinks.map((link2, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link2.href, className: styles$b.footerLink, children: link2.name }) }, index)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$b.column, children: [
          /* @__PURE__ */ jsx("h3", { className: styles$b.columnTitle, children: "Contact Information" }),
          /* @__PURE__ */ jsxs("div", { className: styles$b.contactInfo, children: [
            /* @__PURE__ */ jsxs("div", { className: styles$b.contactItem, children: [
              /* @__PURE__ */ jsx(MapPin, { size: 18 }),
              /* @__PURE__ */ jsx("span", { children: constantValue.companyAddress })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles$b.contactItem, children: [
              /* @__PURE__ */ jsx(Phone, { size: 18 }),
              /* @__PURE__ */ jsx("span", { children: constantValue.companyPhone })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles$b.contactItem, children: [
              /* @__PURE__ */ jsx(Mail, { size: 18 }),
              /* @__PURE__ */ jsx("span", { children: constantValue.companyEmail })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$b.column, children: [
          /* @__PURE__ */ jsx("h3", { className: styles$b.columnTitle, children: "Dealers & Distributors" }),
          /* @__PURE__ */ jsx("p", { className: styles$b.aboutText, children: "Gujarat, Haryana, Karnataka, Jharkhand, Tamil Nadu, Maharashtra, Kerala, Rajasthan, Uttar Pradesh, Madhya Pradesh, Andhra Pradesh, Mumbai, Bangalore, Bhavnagar, Hyderabad, Ahmedabad, Chennai, Baroda, Pune, Nashik, Surat, Rajkot, Coimbatore, Bhubaneswar, Thane, Rajkot, Assam, Delhi, Bhiwandi, Bikaner, Indore." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$b.column, children: [
          /* @__PURE__ */ jsx("h3", { className: styles$b.columnTitle, children: "Countries We Export" }),
          /* @__PURE__ */ jsx("p", { className: styles$b.aboutText, children: "Peru, Iran, Puerto Rico, Ukraine, Kuwait, Qatar, Bolivia, Iraq, New Zealand, Libya, Austria, Denmark, Namibia, Afghanistan, Lithuania, Finland, Egypt, Nigeria, Netherlands, Poland, Singapore, Venezuela, France, Turkey, Hungary, Serbia, Nigeria, Philippines, Malaysia, Pakistan, Taiwan, South Africa, Zimbabwe, Bhutan, Portugal, Kenya, Mexico, Australia, Japan." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$b.column, children: [
          /* @__PURE__ */ jsx("h3", { className: styles$b.columnTitle, children: "Application Industry" }),
          /* @__PURE__ */ jsx("ul", { className: styles$b.linksList, children: applicationIndustries.map((industry, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("p", { className: styles$b.footerLink, children: industry.name }) }, index)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$b.footerBottom, children: [
        /* @__PURE__ */ jsx("div", { className: styles$b.copyright, children: /* @__PURE__ */ jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Bharat Pipe & Fittings. All rights reserved | Designed and developed by",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://sonumahto.netlify.app/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Sonu Mahto"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: styles$b.paymentMethods, children: [
          /* @__PURE__ */ jsx("span", { children: "We Accept:" }),
          /* @__PURE__ */ jsxs("div", { className: styles$b.paymentIcons, children: [
            /* @__PURE__ */ jsx("span", { className: styles$b.paymentIcon, children: "💳" }),
            /* @__PURE__ */ jsx("span", { className: styles$b.paymentIcon, children: "🏦" }),
            /* @__PURE__ */ jsx("span", { className: styles$b.paymentIcon, children: "📱" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
const container$4 = "_container_1kdvp_1";
const leftSection = "_leftSection_1kdvp_23";
const verticalLine = "_verticalLine_1kdvp_33";
const labelWrapper = "_labelWrapper_1kdvp_47";
const horizontalLine = "_horizontalLine_1kdvp_59";
const label$3 = "_label_1kdvp_47";
const heading$1 = "_heading_1kdvp_83";
const rightSection = "_rightSection_1kdvp_97";
const styles$8 = {
  container: container$4,
  leftSection,
  verticalLine,
  labelWrapper,
  horizontalLine,
  label: label$3,
  heading: heading$1,
  rightSection
};
const title$1 = "_title_dxu1t_1";
const styles$7 = {
  title: title$1
};
const ThirdPartyInspection = ({ img, title: title2, customWidth }) => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      style: {
        padding: "20px 0",
        width: customWidth || "60vw",
        maxWidth: "100%"
        // borderRadius: "8px",
        // border: "2px solid #ccc",
      },
      className: "third-party-section",
      children: [
        /* @__PURE__ */ jsx("h2", { className: styles$7.title, children: title2 }),
        /* @__PURE__ */ jsx(
          Swiper,
          {
            modules: [Autoplay, FreeMode, Navigation, Pagination],
            autoplay: { delay: 2e3 },
            freeMode: true,
            loop: true,
            speed: 1e3,
            slidesPerView: 4,
            spaceBetween: 10,
            breakpoints: {
              0: { slidesPerView: 2 },
              // Show 2 images on mobile
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 5 }
            },
            children: img == null ? void 0 : img.map((url, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 100
                  // Increased slide height
                  // border: "2px solid #ccc",
                },
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: url,
                    alt: `unsplash-slide-${index + 1}`,
                    style: {
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                      borderRadius: "8px"
                    }
                  }
                )
              }
            ) }, index))
          }
        )
      ]
    }
  );
};
const ResponsiveStyles = () => {
  React__default.useEffect(() => {
    if (typeof document !== "undefined") {
      const style = document.createElement("style");
      style.innerHTML = `
        @media (max-width: 576px) {
          .third-party-section {
            width: 90vw !important;
            max-width: 90vw !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);
  return null;
};
const ThirdPartyInspectionWithStyles = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ThirdPartyInspection, {}),
    /* @__PURE__ */ jsx(ResponsiveStyles, {})
  ] });
};
const cardContainer = "_cardContainer_prk3w_1";
const card$2 = "_card_prk3w_1";
const image$1 = "_image_prk3w_51";
const title = "_title_prk3w_63";
const styles$6 = {
  cardContainer,
  card: card$2,
  image: image$1,
  title
};
const powerImg = "/assets/power-Bor28kqu.jpg";
const oilGasImg = "/assets/oilgas-Hjil7Kpj.jpg";
const petrochemicalImg = "/assets/petrochemical-CAn3gDmP.jpg";
const automotiveImg = "/assets/automotive-moQTMmi9.jpg";
const industries = [
  { title: "Petrochemical", image: petrochemicalImg },
  { title: "Power Plants", image: powerImg },
  { title: "Automotive", image: automotiveImg },
  { title: "Oil & Gas", image: oilGasImg }
];
const IndustryCards = () => {
  return /* @__PURE__ */ jsx("div", { className: styles$6.cardContainer, children: industries.map((industry, index) => /* @__PURE__ */ jsxs("div", { className: styles$6.card, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: industry.image,
        alt: industry.title,
        className: styles$6.image
      }
    ),
    /* @__PURE__ */ jsx("div", { className: styles$6.title, children: industry.title })
  ] }, index)) });
};
const TrustedClientsHeader = ({
  label: label2,
  heading: heading2,
  description: description2,
  images,
  showIndustryCards = false
}) => {
  return /* @__PURE__ */ jsxs("div", { className: styles$8.container, children: [
    /* @__PURE__ */ jsxs("div", { className: styles$8.leftSection, children: [
      /* @__PURE__ */ jsx("div", { className: styles$8.verticalLine }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: styles$8.labelWrapper, children: [
          /* @__PURE__ */ jsx("div", { className: styles$8.horizontalLine }),
          /* @__PURE__ */ jsx("span", { className: styles$8.label, children: label2 })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: styles$8.heading, children: heading2 })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: styles$8.rightSection, children: /* @__PURE__ */ jsx("p", { children: description2 }) }),
    showIndustryCards ? /* @__PURE__ */ jsx(IndustryCards, {}) : /* @__PURE__ */ jsx(ThirdPartyInspectionWithStyles, { img: images, customWidth: "80vw" })
  ] });
};
const lt2 = "/assets/lt-BTgwl4Eh.png";
const indiaoil = "/assets/indiaoil-CZ_2CwaQ.png";
const bhel = "/assets/bhel-bGmwcIf5.png";
const godrej = "/assets/godrej-C1NzYE6t.png";
const adityaBirla = "/assets/adityaBirla-D7UOzX2l.png";
const npcil = "/assets/npcil-jo63x7iC.jpg";
const eil = "/assets/eil-DLnNAnx-.jpg";
const ibr = "/assets/ibr-DLWzKnRt.jpg";
const deputy = "/assets/deputy-of-atomic-energy-B4pS3Upr.jpg";
const dnv = "/assets/dnv-BIKWMfDI.jpg";
const tuv = "/assets/tuv-DVEXtkRC.jpg";
const tata = "/assets/tata-BjSntPH5.jpg";
const lr = "/assets/lr-BMdapR-r.jpg";
const achievementsSection = "_achievementsSection_1plj1_1";
const content$1 = "_content_1plj1_11";
const heading = "_heading_1plj1_23";
const description = "_description_1plj1_37";
const grid = "_grid_1plj1_49";
const card$1 = "_card_1plj1_61";
const icon = "_icon_1plj1_85";
const count = "_count_1plj1_97";
const label$2 = "_label_1plj1_111";
const styles$5 = {
  achievementsSection,
  content: content$1,
  heading,
  description,
  grid,
  card: card$1,
  icon,
  count,
  label: label$2
};
const Achievements = ({ heading: heading2, description: description2, achievements: achievements2 }) => {
  const [counts, setCounts] = useState(achievements2.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    let observer;
    if (typeof window !== "undefined" && sectionRef.current) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(sectionRef.current);
    }
    return () => {
      if (observer && sectionRef.current)
        observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);
  useEffect(() => {
    if (!hasAnimated) return;
    const intervals = achievements2.map((item, index) => {
      const increment = Math.ceil(item.count / 50);
      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < item.count) {
            updated[index] = Math.min(updated[index] + increment, item.count);
          }
          return updated;
        });
      }, 30);
    });
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [achievements2, hasAnimated]);
  return /* @__PURE__ */ jsx("section", { className: styles$5.achievementsSection, ref: sectionRef, children: /* @__PURE__ */ jsxs("div", { className: styles$5.content, children: [
    /* @__PURE__ */ jsx("h2", { className: styles$5.heading, children: heading2 }),
    /* @__PURE__ */ jsx("p", { className: styles$5.description, children: description2 }),
    /* @__PURE__ */ jsx("div", { className: styles$5.grid, children: achievements2.map((item, index) => /* @__PURE__ */ jsxs("div", { className: styles$5.card, children: [
      /* @__PURE__ */ jsx("div", { className: styles$5.icon, children: item.icon }),
      /* @__PURE__ */ jsxs("div", { className: styles$5.count, children: [
        counts[index],
        "+"
      ] }),
      /* @__PURE__ */ jsx("div", { className: styles$5.label, children: item.label })
    ] }, index)) })
  ] }) });
};
const achievements = [
  {
    count: 462,
    label: "Happy Customers",
    icon: /* @__PURE__ */ jsx(FaUserTie, {})
  },
  {
    count: 534,
    label: "Project Served",
    icon: /* @__PURE__ */ jsx(FaThumbsUp, {})
  },
  {
    count: 26,
    label: "Awards Achieved",
    icon: /* @__PURE__ */ jsx(FaTrophy, {})
  },
  {
    count: 30,
    label: "Years of Experience",
    icon: /* @__PURE__ */ jsx(FaBriefcase, {})
  }
];
const Index = () => {
  console.log("Index page rendering");
  const location = useLocation();
  useEffect(() => {
    if (typeof document !== "undefined" && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  const metaDescription = `${constantValue.companyName}: Leading manufacturer and supplier of industrial pipes, tubes, and fittings in India. Explore our wide range of quality products and trusted services.`;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        constantValue.companyName,
        " | Leading Pipe & Fittings Manufacturer India"
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: metaDescription }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: constantValue.companyUrl }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: constantValue.companyName,
        url: constantValue.companyUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: `${constantValue.companyUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }) })
    ] }),
    /* @__PURE__ */ jsx(TopBar, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(HeroSlider, {}),
    /* @__PURE__ */ jsx(AboutSection, {}),
    /* @__PURE__ */ jsx(ProductSection, {}),
    /* @__PURE__ */ jsx(
      TrustedClientsHeader,
      {
        label: "Most Valuable",
        heading: "Trusted Clients",
        description: "We are proud to have earned the trust of numerous esteemed clients across various industries. Our commitment to excellence and personalized service has fostered long-lasting.",
        images: [
          lt2,
          indiaoil,
          bhel,
          godrej,
          adityaBirla,
          lt2,
          indiaoil,
          bhel,
          godrej,
          adityaBirla
        ]
      }
    ),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      TrustedClientsHeader,
      {
        label: "Trusted by Industry Leaders",
        heading: "THIRD PARTY INSPECTION",
        description: "We take pride in being the trusted inspection partner for some of the most respected organizations across diverse sectors. Our consistent delivery of quality and compliance has earned us lasting relationships with top-tier clients.",
        images: [lt2, npcil, eil, ibr, deputy, dnv, tuv, tata, lr]
      }
    ),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      Achievements,
      {
        heading: "Our Achievements",
        description: "We take pride in the milestones we've accomplished so far.",
        achievements
      }
    ),
    /* @__PURE__ */ jsx(
      TrustedClientsHeader,
      {
        label: constantValue.companyName,
        heading: "Industries We Serve",
        description: "Our skilled and adaptable team delivers outstanding solutions across diverse industries, with a deep understanding of each sector's unique challenges and opportunities.",
        showIndustryCards: true
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const subProductHeading = "_subProductHeading_12he2_3";
const responsiveLayout = "_responsiveLayout_12he2_31";
const sidebarResponsive = "_sidebarResponsive_12he2_45";
const productPageContent = "_productPageContent_12he2_53";
const connectDiv = "_connectDiv_12he2_63";
const productDetails = "_productDetails_12he2_105";
const pageContainer$2 = "_pageContainer_12he2_115";
const main$2 = "_main_12he2_127";
const container$3 = "_container_12he2_137";
const breadcrumb = "_breadcrumb_12he2_149";
const productImage = "_productImage_12he2_195";
const productInfo = "_productInfo_12he2_219";
const productTitle = "_productTitle_12he2_229";
const productCategory = "_productCategory_12he2_243";
const productPrice = "_productPrice_12he2_263";
const productDescription = "_productDescription_12he2_277";
const productFeatures = "_productFeatures_12he2_279";
const productActions = "_productActions_12he2_355";
const addToCartButton = "_addToCartButton_12he2_367";
const backButton = "_backButton_12he2_403";
const notFound = "_notFound_12he2_447";
const productPageHeader = "_productPageHeader_12he2_479";
const styles$4 = {
  subProductHeading,
  responsiveLayout,
  sidebarResponsive,
  productPageContent,
  connectDiv,
  productDetails,
  pageContainer: pageContainer$2,
  main: main$2,
  container: container$3,
  breadcrumb,
  productImage,
  productInfo,
  productTitle,
  productCategory,
  productPrice,
  productDescription,
  productFeatures,
  productActions,
  addToCartButton,
  backButton,
  notFound,
  productPageHeader
};
const sidebarContainer = "_sidebarContainer_1rjlf_1";
const sidebarTitle = "_sidebarTitle_1rjlf_17";
const serviceList = "_serviceList_1rjlf_31";
const serviceItem = "_serviceItem_1rjlf_43";
const serviceLink = "_serviceLink_1rjlf_51";
const active = "_active_1rjlf_89";
const styles$3 = {
  sidebarContainer,
  sidebarTitle,
  serviceList,
  serviceItem,
  serviceLink,
  active
};
const ServiceSidebar = ({ data, title: title2 = "Our Services" }) => {
  const { id: location } = useParams();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: styles$3.sidebarTitle, children: title2 }),
    /* @__PURE__ */ jsx("div", { className: styles$3.sidebarContainer, children: /* @__PURE__ */ jsx("ul", { className: styles$3.serviceList, children: data.map((service, index) => {
      const slug = slugify(service.label);
      const path = `/product/${slug}`;
      const isActive = location === slug;
      return /* @__PURE__ */ jsx("li", { className: styles$3.serviceItem, children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: path,
          onClick: () => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0, behavior: "instant" });
            }
          },
          className: `${styles$3.serviceLink} ${isActive ? styles$3.active : ""}`,
          children: [
            /* @__PURE__ */ jsx("span", { children: service.label.toUpperCase() }),
            /* @__PURE__ */ jsx(FiChevronRight, {})
          ]
        }
      ) }, index);
    }) }) })
  ] });
};
const __vite_glob_0_0 = "/assets/alloy-steel-angle-channel-manufa-DQqAylKd.jpg";
const __vite_glob_0_1 = "/assets/alloy-steel-bars-rods1-BdtVR3WR.jpg";
const __vite_glob_0_2 = "/assets/alloy-steel-bars-rods2-BrGMZBtg.jpg";
const __vite_glob_0_3 = "/assets/alloy-steel-bars-rods3-DSxL6nbA.jpg";
const __vite_glob_0_4 = "/assets/alloy-steel-bars-rods4-BcNT7XA0.jpg";
const __vite_glob_0_5 = "/assets/alloy-steel-bars-rods5-DEXk5i-w.jpg";
const __vite_glob_0_6 = "/assets/alloy-steel-bars-rods6-BV2wGnPn.jpg";
const __vite_glob_0_7 = "/assets/alloy-steel-bars-rods7-jqSEf-Uy.jpg";
const __vite_glob_0_8 = "/assets/alloy-steel-bars-rods8-DulooJE5.jpg";
const __vite_glob_0_9 = "/assets/alloy-steel-fasteners1-VyvEffc0.jpg";
const __vite_glob_0_10 = "/assets/alloy-steel-fasteners10-CWsscu_q.jpg";
const __vite_glob_0_11 = "/assets/alloy-steel-fasteners2-CYSRfht6.jpg";
const __vite_glob_0_12 = "/assets/alloy-steel-fasteners3-BCGSJalf.jpg";
const __vite_glob_0_13 = "/assets/alloy-steel-fasteners4-CDAQ_byC.jpg";
const __vite_glob_0_14 = "/assets/alloy-steel-fasteners5-BtY8GAbk.jpg";
const __vite_glob_0_15 = "/assets/alloy-steel-fasteners1-VyvEffc0.jpg";
const __vite_glob_0_16 = "/assets/alloy-steel-fasteners7-vfD59qS3.jpg";
const __vite_glob_0_17 = "/assets/alloy-steel-fasteners8-DdmHkLGy.jpg";
const __vite_glob_0_18 = "/assets/alloy-steel-fasteners9-CFouBCqN.jpg";
const __vite_glob_0_19 = "/assets/alloy-steel-flanges1-EtUACJLb.jpg";
const __vite_glob_0_20 = "/assets/alloy-steel-flanges2-CM8cZ0KG.jpg";
const __vite_glob_0_21 = "/assets/alloy-steel-flanges3-oe9uhWJH.jpg";
const __vite_glob_0_22 = "/assets/alloy-steel-flanges4-Cx_wjX9U.jpg";
const __vite_glob_0_23 = "/assets/alloy-steel-flanges5-DQRigM-r.jpg";
const __vite_glob_0_24 = "/assets/alloy-steel-flanges6-AUtCKkp3.jpg";
const __vite_glob_0_25 = "/assets/alloy-steel-flanges7-mFRJJEBc.jpg";
const __vite_glob_0_26 = "/assets/alloy-steel-flanges8-BynZa3de.jpg";
const __vite_glob_0_27 = "data:image/jpeg;base64,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";
const __vite_glob_0_28 = "/assets/alloy-steel-forged-fittings10-Cb6u9jAx.jpg";
const __vite_glob_0_29 = "data:image/jpeg;base64,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";
const __vite_glob_0_30 = "/assets/alloy-steel-forged-fittings3-B70VPA29.jpg";
const __vite_glob_0_31 = "/assets/alloy-steel-forged-fittings4-JI19s8sg.jpg";
const __vite_glob_0_32 = "/assets/alloy-steel-forged-fittings5-DOihby5z.jpg";
const __vite_glob_0_33 = "data:image/jpeg;base64,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";
const __vite_glob_0_34 = "/assets/alloy-steel-forged-fittings7-jxQ48dgg.jpg";
const __vite_glob_0_35 = "/assets/alloy-steel-forged-fittings8-DRYZYLR3.jpg";
const __vite_glob_0_36 = "/assets/alloy-steel-forged-fittings9-DZtSYm9G.jpg";
const __vite_glob_0_37 = "/assets/alloy-steel-pipe-fittings1-Mv9azAjk.jpg";
const __vite_glob_0_38 = "/assets/alloy-steel-pipe-fittings2-2ieDQ_P5.jpg";
const __vite_glob_0_39 = "/assets/alloy-steel-pipe-fittings3-CB64-bh8.jpg";
const __vite_glob_0_40 = "/assets/alloy-steel-pipe-fittings4-DAwhnvLQ.jpg";
const __vite_glob_0_41 = "/assets/alloy-steel-pipe-fittings5-wNHO-fQW.jpg";
const __vite_glob_0_42 = "/assets/alloy-steel-pipe-fittings6-CWe8_p5-.jpg";
const __vite_glob_0_43 = "/assets/alloy-steel-pipe-fittings7-CpgDQgYh.jpg";
const __vite_glob_0_44 = "/assets/alloy-steel-pipe-fittings8-CExlIk15.jpg";
const __vite_glob_0_45 = "/assets/alloy-steel-pipes-tubes1-CE_-2NFL.jpg";
const __vite_glob_0_46 = "/assets/alloy-steel-pipes-tubes2-CtFUI4gk.jpg";
const __vite_glob_0_47 = "/assets/alloy-steel-pipes-tubes3-WFw1VnAS.jpg";
const __vite_glob_0_48 = "/assets/alloy-steel-pipes-tubes4-C1d1NA59.jpg";
const __vite_glob_0_49 = "/assets/alloy-steel-pipes-tubes5-CRjZvbyJ.jpg";
const __vite_glob_0_50 = "/assets/alloy-steel-pipes-tubes6-Dz_IZr0e.jpg";
const __vite_glob_0_51 = "/assets/alloy-steel-pipes-tubes7-DbdMq49X.jpg";
const __vite_glob_0_52 = "/assets/alloy-steel-pipes-tubes8-1IZ90nDQ.jpg";
const __vite_glob_0_53 = "/assets/alloy-steel-round-bar-manufactur-BrYWGn5L.jpg";
const __vite_glob_0_54 = "/assets/alloy-steel-sheet-plate-manufact-BJIHLgwo.jpg";
const __vite_glob_0_55 = "/assets/alloy-steel-sheets-plates1-DJPZrAEt.jpg";
const __vite_glob_0_56 = "/assets/alloy-steel-sheets-plates2-CKPzAqy4.jpg";
const __vite_glob_0_57 = "/assets/alloy-steel-sheets-plates3-DhX7eLKr.jpg";
const __vite_glob_0_58 = "/assets/alloy-steel-sheets-plates4-DgCSR_KK.jpg";
const __vite_glob_0_59 = "/assets/alloy-steel-sheets-plates5-CL3Pw2mu.jpg";
const __vite_glob_0_60 = "/assets/alloy-steel-sheets-plates6-BaIo9gzJ.jpg";
const __vite_glob_0_61 = "/assets/alloy-steel-sheets-plates7-DcM8Pkq2.jpg";
const __vite_glob_0_62 = "/assets/alloy-steel-sheets-plates8-BDqN05Is.jpg";
const __vite_glob_0_63 = "/assets/alloy-steel-valves1-CNrgpSIB.jpg";
const __vite_glob_0_64 = "/assets/alloy-steel-valves10-DEQpokNZ.jpg";
const __vite_glob_0_65 = "/assets/alloy-steel-valves2-Dv2c7RAx.jpg";
const __vite_glob_0_66 = "/assets/alloy-steel-valves3-BquKWKHb.jpg";
const __vite_glob_0_67 = "/assets/alloy-steel-valves4-C2BXpFCj.jpg";
const __vite_glob_0_68 = "/assets/alloy-steel-valves5-C43jsvSL.jpg";
const __vite_glob_0_69 = "/assets/alloy-steel-valves6-BTsUDwON.jpg";
const __vite_glob_0_70 = "/assets/alloy-steel-valves7-CuIcDrRa.jpg";
const __vite_glob_0_71 = "/assets/alloy-steel-valves8-DaXvG6jO.jpg";
const __vite_glob_0_72 = "/assets/alloy-steel-valves9-BDa4PfyI.jpg";
const __vite_glob_0_73 = "/assets/alloy-steel-wire-mesh-manufactur-Dyh0BUGT.jpg";
const __vite_glob_0_75 = "/assets/carbon-steel-angle-manufacturer-DBVP1efT.jpg";
const __vite_glob_0_76 = "/assets/carbon-steel-bars-rods1-CtMeuHFe.jpg";
const __vite_glob_0_77 = "/assets/carbon-steel-bars-rods2-QqA5ZRQ9.jpg";
const __vite_glob_0_78 = "/assets/carbon-steel-bars-rods3-BfntUvpF.jpg";
const __vite_glob_0_79 = "/assets/carbon-steel-bars-rods4-Ifm84DNn.jpg";
const __vite_glob_0_80 = "/assets/carbon-steel-bars-rods5-BQDDrrp3.jpg";
const __vite_glob_0_81 = "/assets/carbon-steel-bars-rods6-C8M-agdh.jpg";
const __vite_glob_0_82 = "/assets/carbon-steel-bars-rods7-DffLnAuS.jpg";
const __vite_glob_0_83 = "/assets/carbon-steel-bars-rods8-DnVTzJVH.jpg";
const __vite_glob_0_84 = "/assets/carbon-steel-fasteners1-D0eeodUr.jpg";
const __vite_glob_0_85 = "/assets/carbon-steel-fasteners10-ic2-wplU.jpg";
const __vite_glob_0_86 = "/assets/carbon-steel-fasteners2-TtV4FGdX.jpg";
const __vite_glob_0_87 = "/assets/carbon-steel-fasteners3-BdY-KNxH.jpg";
const __vite_glob_0_88 = "/assets/carbon-steel-fasteners4-B79xK6Cb.jpg";
const __vite_glob_0_89 = "/assets/carbon-steel-fasteners5-CDOEo_-c.jpg";
const __vite_glob_0_90 = "/assets/carbon-steel-fasteners6-ClZMW_Cf.jpg";
const __vite_glob_0_91 = "/assets/carbon-steel-fasteners7-dA4NucP9.jpg";
const __vite_glob_0_92 = "/assets/carbon-steel-fasteners8-C6imNfaa.jpg";
const __vite_glob_0_93 = "/assets/carbon-steel-fasteners9-DQx00nk8.jpg";
const __vite_glob_0_94 = "/assets/carbon-steel-flanges1-BN3DkAZz.jpg";
const __vite_glob_0_95 = "/assets/carbon-steel-flanges2-iLJc-TQE.jpg";
const __vite_glob_0_96 = "/assets/carbon-steel-flanges3-Bts1wsLD.jpg";
const __vite_glob_0_97 = "/assets/carbon-steel-flanges4-Ii3esT1n.jpg";
const __vite_glob_0_98 = "/assets/carbon-steel-flanges5-Bbaz-OTc.jpg";
const __vite_glob_0_99 = "/assets/carbon-steel-flanges6-iOK7qzL9.jpg";
const __vite_glob_0_100 = "/assets/carbon-steel-flanges7-BreZSeVF.jpg";
const __vite_glob_0_101 = "/assets/carbon-steel-flanges8-CRWkT71H.jpg";
const __vite_glob_0_102 = "/assets/carbon-steel-forged-fittings1-dpktc63V.jpg";
const __vite_glob_0_103 = "/assets/carbon-steel-forged-fittings10-CGrPrn61.jpg";
const __vite_glob_0_104 = "/assets/carbon-steel-forged-fittings2-BbSNv5AP.jpg";
const __vite_glob_0_105 = "/assets/carbon-steel-forged-fittings3-Cgf7fncn.jpg";
const __vite_glob_0_106 = "/assets/carbon-steel-forged-fittings4-BzKlbkcI.jpg";
const __vite_glob_0_107 = "/assets/carbon-steel-forged-fittings5-BeBzxheN.jpg";
const __vite_glob_0_108 = "/assets/carbon-steel-forged-fittings6-CRDINhEv.jpg";
const __vite_glob_0_109 = "/assets/carbon-steel-forged-fittings7-CqGP9fYU.jpg";
const __vite_glob_0_110 = "/assets/carbon-steel-forged-fittings8-BYam37_Y.jpg";
const __vite_glob_0_111 = "/assets/carbon-steel-forged-fittings9-K2eNI9WE.jpg";
const __vite_glob_0_112 = "/assets/carbon-steel-pipe-fittings1-CBIPQb8W.jpg";
const __vite_glob_0_113 = "/assets/carbon-steel-pipe-fittings2-ZaDjg7oa.jpg";
const __vite_glob_0_114 = "/assets/carbon-steel-pipe-fittings3-DwKfGH15.jpg";
const __vite_glob_0_115 = "/assets/carbon-steel-pipe-fittings4-CTx20hZi.jpg";
const __vite_glob_0_116 = "/assets/carbon-steel-pipe-fittings5-sthOg1Nb.jpg";
const __vite_glob_0_117 = "/assets/carbon-steel-pipe-fittings6-DjtFg1bo.jpg";
const __vite_glob_0_118 = "data:image/jpeg;base64,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";
const __vite_glob_0_119 = "/assets/carbon-steel-pipe-fittings8-CvH4Oph5.jpg";
const __vite_glob_0_120 = "/assets/carbon-steel-pipes-tubes1-CsXUdydV.jpg";
const __vite_glob_0_121 = "/assets/carbon-steel-pipes-tubes2-Dguv0mkn.jpg";
const __vite_glob_0_122 = "/assets/carbon-steel-pipes-tubes3-COwur1yR.jpg";
const __vite_glob_0_123 = "/assets/carbon-steel-pipes-tubes4-Cp7GCS3b.jpg";
const __vite_glob_0_124 = "/assets/carbon-steel-pipes-tubes5-DgoQlFCM.jpg";
const __vite_glob_0_125 = "/assets/carbon-steel-pipes-tubes6-G-WTyuF3.jpg";
const __vite_glob_0_126 = "/assets/carbon-steel-pipes-tubes7-CfJnAyTF.jpg";
const __vite_glob_0_127 = "/assets/carbon-steel-pipes-tubes8-CpjY3ubS.jpg";
const __vite_glob_0_128 = "/assets/carbon-steel-round-bar-manufactu-CIJjz5Mu.jpg";
const __vite_glob_0_129 = "/assets/carbon-steel-sheet-plate-manufac-DcSF31Ax.jpg";
const __vite_glob_0_130 = "/assets/carbon-steel-sheets-plates1-ByiGwTO_.jpg";
const __vite_glob_0_131 = "/assets/carbon-steel-sheets-plates2-B-uMllf3.jpg";
const __vite_glob_0_132 = "/assets/carbon-steel-sheets-plates3-CfnkoPym.jpg";
const __vite_glob_0_133 = "/assets/carbon-steel-sheets-plates4-CDSJkTs8.jpg";
const __vite_glob_0_134 = "/assets/carbon-steel-sheets-plates5-Dvj335Cf.jpg";
const __vite_glob_0_135 = "/assets/carbon-steel-sheets-plates6-BD6f-9hs.jpg";
const __vite_glob_0_136 = "/assets/carbon-steel-sheets-plates7-DqdUhH-e.jpg";
const __vite_glob_0_137 = "/assets/carbon-steel-sheets-plates8-BZyyBbV2.jpg";
const __vite_glob_0_138 = "/assets/carbon-steel-valves1-22Ayfqy4.jpg";
const __vite_glob_0_139 = "/assets/carbon-steel-valves10-BOFpt2lw.jpg";
const __vite_glob_0_140 = "/assets/carbon-steel-valves2-rKaxAcR0.jpg";
const __vite_glob_0_141 = "/assets/carbon-steel-valves3-CxgsY_3n.jpg";
const __vite_glob_0_142 = "/assets/carbon-steel-valves4-DUsSn59p.jpg";
const __vite_glob_0_143 = "/assets/carbon-steel-valves5-OB3peUZz.jpg";
const __vite_glob_0_144 = "/assets/carbon-steel-valves6-BWZtptiC.jpg";
const __vite_glob_0_145 = "/assets/carbon-steel-valves7-BIauKgaO.jpg";
const __vite_glob_0_146 = "/assets/carbon-steel-valves8-BV-034pr.jpg";
const __vite_glob_0_147 = "/assets/carbon-steel-valves9-BWbhEnie.jpg";
const __vite_glob_0_148 = "/assets/carbon-steel-wire-mesh-manufactu-C8URqsFj.jpg";
const __vite_glob_0_149 = "/assets/copper-angle-channel-manufacture-Dg6sYek2.jpg";
const __vite_glob_0_150 = "/assets/copper-fastener-manufacturer-ind-RO25pFKd.jpg";
const __vite_glob_0_151 = "/assets/copper-flanges-manufacturer-indi-DUL_DGbh.jpg";
const __vite_glob_0_152 = "/assets/copper-forged-fitting-manufactur-D_L0x-V0.jpg";
const __vite_glob_0_153 = "/assets/copper-pipe-fitting-manufacturer-D12de72Y.jpg";
const __vite_glob_0_154 = "/assets/copper-pipe-tube-manufacturer-in-DG8AQ0Mr.jpg";
const __vite_glob_0_155 = "/assets/copper-round-bar-manufacturer-in-Dw3-O_7U.jpg";
const __vite_glob_0_156 = "/assets/copper-sheet-plate-manufacturer-qC8ZT5ew.jpg";
const __vite_glob_0_157 = "/assets/copper-wire-mesh-manufacturer-in-BtFJDTjp.jpg";
const __vite_glob_0_161 = "/assets/hastelloy-angle-channel-manufact-BzSHoRNZ.jpg";
const __vite_glob_0_162 = "/assets/hastelloy-fastener-manufacturer-DliaGJHp.jpg";
const __vite_glob_0_163 = "/assets/hastelloy-flange-manufacturer-in-Dabk4I_J.jpg";
const __vite_glob_0_164 = "/assets/hastelloy-forged-fittings-manufa-CXloSSxs.jpg";
const __vite_glob_0_165 = "/assets/hastelloy-pipe-fitting-manufactu-B6Ouy7_K.jpg";
const __vite_glob_0_166 = "/assets/hastelloy-pipe-manufacturer-indi-Be7q3Bzc.jpg";
const __vite_glob_0_167 = "/assets/hastelloy-round-bar-manufacturer-OSgGdwy4.jpg";
const __vite_glob_0_168 = "/assets/hastelloy-sheet-plate-manufactur-CJoo0Gjs.jpg";
const __vite_glob_0_169 = "/assets/hastelloy-wire-mesh-manufacturer-humHfgYi.jpg";
const __vite_glob_0_170 = "/assets/monel-angle-channel-manufacturer-HgLpdo3g.jpg";
const __vite_glob_0_171 = "/assets/titanium-fasteners-manufacturer-B2JvURxh.jpg";
const __vite_glob_0_172 = "/assets/monel-flange-manufacturer-india-BfRMAbGo.jpg";
const __vite_glob_0_173 = "/assets/monel-forged-fittings-manufactur-BT4t7pbr.jpg";
const __vite_glob_0_174 = "/assets/monel-pipe-fitting-manufacturer-D5rhAd6o.jpg";
const __vite_glob_0_175 = "/assets/monel-pipe-tube-manufacturer-ind-BEi3YJet.jpg";
const __vite_glob_0_176 = "/assets/alloy-steel-round-bar-manufactur-BrYWGn5L.jpg";
const __vite_glob_0_177 = "/assets/alloy-steel-sheet-plate-manufact-BJIHLgwo.jpg";
const __vite_glob_0_178 = "/assets/alloy-steel-wire-mesh-manufactur-Dyh0BUGT.jpg";
const __vite_glob_0_179 = "/assets/nickel-alloy-bars-rods1-BY4Cj8xX.jpg";
const __vite_glob_0_180 = "/assets/nickel-alloy-bars-rods2-Cy-MiRHq.jpg";
const __vite_glob_0_181 = "/assets/nickel-alloy-bars-rods3-Cm5x_vSO.jpg";
const __vite_glob_0_182 = "/assets/nickel-alloy-bars-rods4-C3GGYh_2.jpg";
const __vite_glob_0_183 = "/assets/nickel-alloy-bars-rods5-B3-IAXgh.jpg";
const __vite_glob_0_184 = "/assets/nickel-alloy-bars-rods6-PXjFKcSm.jpg";
const __vite_glob_0_185 = "/assets/nickel-alloy-bars-rods7-D8UdabWD.jpg";
const __vite_glob_0_186 = "/assets/nickel-alloy-bars-rods8-C4gtxTN8.jpg";
const __vite_glob_0_187 = "/assets/nickel-alloy-fasteners1-DxDqpd-C.jpg";
const __vite_glob_0_188 = "/assets/nickel-alloy-fasteners10-1g0EI78z.jpg";
const __vite_glob_0_189 = "/assets/nickel-alloy-fasteners2-A5pl9uNI.jpg";
const __vite_glob_0_190 = "/assets/nickel-alloy-fasteners3-BF5LlwGt.jpg";
const __vite_glob_0_191 = "/assets/nickel-alloy-fasteners4-CimVcdlD.jpg";
const __vite_glob_0_192 = "/assets/nickel-alloy-fasteners5-DPAJVK1L.jpg";
const __vite_glob_0_193 = "/assets/nickel-alloy-fasteners6-CPdhof4K.jpg";
const __vite_glob_0_194 = "/assets/nickel-alloy-fasteners7-WjVloXVD.jpg";
const __vite_glob_0_195 = "/assets/nickel-alloy-fasteners8-DP4hXN9Y.jpg";
const __vite_glob_0_196 = "/assets/nickel-alloy-fasteners9-D8WEcxlM.jpg";
const __vite_glob_0_197 = "/assets/nickel-alloy-flanges1-C-YrDCX_.jpg";
const __vite_glob_0_198 = "/assets/nickel-alloy-flanges2-Dw4qmyf3.jpg";
const __vite_glob_0_199 = "/assets/nickel-alloy-flanges3-CmVQVmaq.jpg";
const __vite_glob_0_200 = "/assets/nickel-alloy-flanges4-DrcpIoSF.jpg";
const __vite_glob_0_201 = "/assets/nickel-alloy-flanges5-CL6WcWqk.jpg";
const __vite_glob_0_202 = "/assets/nickel-alloy-flanges6-CIn4nozL.jpg";
const __vite_glob_0_203 = "/assets/nickel-alloy-flanges7-CBGU4G4q.jpg";
const __vite_glob_0_204 = "/assets/nickel-alloy-flanges8-6xA7gO9-.jpg";
const __vite_glob_0_205 = "/assets/nickel-alloy-forged-fittings1-D-vxK1V6.jpg";
const __vite_glob_0_206 = "/assets/nickel-alloy-forged-fittings10-Det4MOZa.jpg";
const __vite_glob_0_207 = "/assets/nickel-alloy-forged-fittings2-DFj0TJKV.jpg";
const __vite_glob_0_208 = "/assets/alloy-steel-forged-fittings4-JI19s8sg.jpg";
const __vite_glob_0_209 = "/assets/nickel-alloy-forged-fittings4-ByGdUaVL.jpg";
const __vite_glob_0_210 = "/assets/nickel-alloy-forged-fittings5-CBQGGSOW.jpg";
const __vite_glob_0_211 = "/assets/nickel-alloy-forged-fittings6-IO8DkEwk.jpg";
const __vite_glob_0_212 = "/assets/nickel-alloy-forged-fittings7-V51dvReo.jpg";
const __vite_glob_0_213 = "/assets/nickel-alloy-forged-fittings8-1vG5KcK5.jpg";
const __vite_glob_0_214 = "/assets/nickel-alloy-forged-fittings9-CB47rY9Y.jpg";
const __vite_glob_0_215 = "/assets/nickel-alloy-pipe-fittings1-Bh7_xSu5.jpg";
const __vite_glob_0_216 = "/assets/nickel-alloy-pipe-fittings2-D3EVAutL.jpg";
const __vite_glob_0_217 = "/assets/nickel-alloy-pipe-fittings3-B50j6JQ7.jpg";
const __vite_glob_0_218 = "/assets/nickel-alloy-pipe-fittings4-BNVAxC6-.jpg";
const __vite_glob_0_219 = "/assets/nickel-alloy-pipe-fittings5-D0KePZ4c.jpg";
const __vite_glob_0_220 = "/assets/nickel-alloy-pipe-fittings6-HGKNt_v2.jpg";
const __vite_glob_0_221 = "/assets/nickel-alloy-pipe-fittings7-Dy2LkwZL.jpg";
const __vite_glob_0_222 = "/assets/nickel-alloy-pipe-fittings8-BeTS0xHH.jpg";
const __vite_glob_0_223 = "/assets/nickel-alloy-pipes-tubes1-DsVNJpWa.jpg";
const __vite_glob_0_224 = "/assets/nickel-alloy-pipes-tubes2-De-qiolw.jpg";
const __vite_glob_0_225 = "/assets/nickel-alloy-pipes-tubes3-avFEijlj.jpg";
const __vite_glob_0_226 = "/assets/nickel-alloy-pipes-tubes4-CiXnjXw0.jpg";
const __vite_glob_0_227 = "/assets/nickel-alloy-pipes-tubes5-BSDlekj1.jpg";
const __vite_glob_0_228 = "/assets/nickel-alloy-pipes-tubes6-BK_2vPq_.jpg";
const __vite_glob_0_229 = "/assets/nickel-alloy-pipes-tubes7-B9WFeOHC.jpg";
const __vite_glob_0_230 = "/assets/nickel-alloy-pipes-tubes8-DZ9DG1gC.jpg";
const __vite_glob_0_231 = "/assets/nickel-alloy-sheets-plates1-s5WPdwN-.jpg";
const __vite_glob_0_232 = "/assets/nickel-alloy-sheets-plates2-C-4MdZmk.jpg";
const __vite_glob_0_233 = "/assets/nickel-alloy-sheets-plates3-BfoQUU4_.jpg";
const __vite_glob_0_234 = "/assets/nickel-alloy-sheets-plates4-B8mve_xN.jpg";
const __vite_glob_0_235 = "/assets/nickel-alloy-sheets-plates5-Dl0ThAgw.jpg";
const __vite_glob_0_236 = "/assets/nickel-alloy-sheets-plates6-CXYfxDKX.jpg";
const __vite_glob_0_237 = "/assets/nickel-alloy-sheets-plates7-7rXO5BNZ.jpg";
const __vite_glob_0_238 = "/assets/nickel-alloy-sheets-plates8-CBcjPXmq.jpg";
const __vite_glob_0_239 = "/assets/nickel-alloy-valves1-A1Rm2DZN.jpg";
const __vite_glob_0_240 = "/assets/nickel-alloy-valves10-Dabc8yUX.jpg";
const __vite_glob_0_241 = "/assets/nickel-alloy-valves2-DAAIa-xI.jpg";
const __vite_glob_0_242 = "/assets/nickel-alloy-valves3-DtRyfrTm.jpg";
const __vite_glob_0_243 = "/assets/nickel-alloy-valves4-Csgpsrwc.jpg";
const __vite_glob_0_244 = "/assets/nickel-alloy-valves5-Drjnr6z4.jpg";
const __vite_glob_0_245 = "/assets/nickel-alloy-valves6-CH_BJ8bt.jpg";
const __vite_glob_0_246 = "/assets/nickel-alloy-valves7-D8nvNI7K.jpg";
const __vite_glob_0_247 = "/assets/nickel-alloy-valves8-uAH0FHlR.jpg";
const __vite_glob_0_248 = "/assets/nickel-alloy-valves9-XeRPoJnh.jpg";
const __vite_glob_0_253 = "/assets/ss-angle-channel-manufacturer-in-DT1t3t9j.jpg";
const __vite_glob_0_254 = "/assets/ss-round-bar-manufacturer-india-CliTJRbb.jpg";
const __vite_glob_0_255 = "/assets/ss-wire-mesh-manufacturer-india-BJgImJ73.jpg";
const __vite_glob_0_256 = "/assets/stainless-steel-bars-rods1-DS9NzdWt.jpg";
const __vite_glob_0_257 = "/assets/stainless-steel-bars-rods2-CEv4mSHC.jpg";
const __vite_glob_0_258 = "/assets/stainless-steel-bars-rods3-lr41W2xn.jpg";
const __vite_glob_0_259 = "/assets/stainless-steel-bars-rods4-DvUMbhXx.jpg";
const __vite_glob_0_260 = "/assets/stainless-steel-bars-rods5-DOJ-Iu0x.jpg";
const __vite_glob_0_261 = "/assets/stainless-steel-bars-rods6-qQCaXQuU.jpg";
const __vite_glob_0_262 = "/assets/stainless-steel-bars-rods7-_lFIgUDX.jpg";
const __vite_glob_0_263 = "/assets/stainless-steel-bars-rods8-B72ttd5Z.jpg";
const __vite_glob_0_264 = "/assets/stainless-steel-fasteners1-BvMa8OUi.jpg";
const __vite_glob_0_265 = "/assets/stainless-steel-fasteners10-B-Et1W2C.jpg";
const __vite_glob_0_266 = "/assets/stainless-steel-fasteners2-DD5TXsFr.jpg";
const __vite_glob_0_267 = "/assets/stainless-steel-fasteners3-BPOGZS15.jpg";
const __vite_glob_0_268 = "/assets/stainless-steel-fasteners4-Di010Q5W.jpg";
const __vite_glob_0_269 = "/assets/stainless-steel-fasteners5-DSy7yvos.jpg";
const __vite_glob_0_270 = "/assets/stainless-steel-fasteners6-CKAxlEBv.jpg";
const __vite_glob_0_271 = "/assets/stainless-steel-fasteners7-BPQHFcgP.jpg";
const __vite_glob_0_272 = "/assets/stainless-steel-fasteners8-CVhI4Kyz.jpg";
const __vite_glob_0_273 = "/assets/stainless-steel-fasteners9-Dv1VpEYN.jpg";
const __vite_glob_0_274 = "/assets/stainless-steel-flanges1-2o9Fae9d.jpg";
const __vite_glob_0_275 = "/assets/stainless-steel-flanges2-BI7P3d3Q.jpg";
const __vite_glob_0_276 = "/assets/stainless-steel-flanges3-BvjBuCD2.jpg";
const __vite_glob_0_277 = "/assets/stainless-steel-flanges4-DtuDQYxJ.jpg";
const __vite_glob_0_278 = "/assets/stainless-steel-flanges5-BjwgjgDH.jpg";
const __vite_glob_0_279 = "/assets/stainless-steel-flanges6-Dj1u43RH.jpg";
const __vite_glob_0_280 = "/assets/stainless-steel-flanges7-c8Ddu7Te.jpg";
const __vite_glob_0_281 = "/assets/stainless-steel-flanges8-Y9hfpTPd.jpg";
const __vite_glob_0_282 = "/assets/stainless-steel-forged-fittings-FAPmpp6q.jpg";
const __vite_glob_0_283 = "/assets/stainless-steel-forged-fittings1-CCaJz0XF.jpg";
const __vite_glob_0_284 = "/assets/stainless-steel-forged-fittings10-Br_QAR97.jpg";
const __vite_glob_0_285 = "/assets/stainless-steel-forged-fittings2-CUj7ZB0J.jpg";
const __vite_glob_0_286 = "/assets/stainless-steel-forged-fittings3-BTHMITcT.jpg";
const __vite_glob_0_287 = "/assets/stainless-steel-forged-fittings4-7L42goUQ.jpg";
const __vite_glob_0_288 = "/assets/stainless-steel-forged-fittings5-BfrNsRJS.jpg";
const __vite_glob_0_289 = "/assets/stainless-steel-forged-fittings6-ClGtBi0K.jpg";
const __vite_glob_0_290 = "/assets/stainless-steel-forged-fittings7-CxNDD4iK.jpg";
const __vite_glob_0_291 = "/assets/stainless-steel-forged-fittings8-C2YDUKU5.jpg";
const __vite_glob_0_292 = "/assets/stainless-steel-forged-fittings9-C2rEkICq.jpg";
const __vite_glob_0_293 = "/assets/nickel-alloy-pipe-fittings1-Bh7_xSu5.jpg";
const __vite_glob_0_294 = "/assets/stainless-steel-pipe-fittings2-JMncp-zs.jpg";
const __vite_glob_0_295 = "/assets/stainless-steel-pipe-fittings3-CobrQQF5.jpg";
const __vite_glob_0_296 = "/assets/stainless-steel-pipe-fittings4-CB9r2joX.jpg";
const __vite_glob_0_297 = "/assets/stainless-steel-pipe-fittings5-BalrWyNq.jpg";
const __vite_glob_0_298 = "/assets/stainless-steel-pipe-fittings6-DbNuk1_U.jpg";
const __vite_glob_0_299 = "/assets/stainless-steel-pipe-fittings7-BvtckvDZ.jpg";
const __vite_glob_0_300 = "/assets/stainless-steel-pipe-fittings8-Cpqk79Rl.jpg";
const __vite_glob_0_301 = "/assets/titanium-pipe-tube-manufacturer-ByNTsfzu.jpg";
const __vite_glob_0_302 = "/assets/stainless-steel-pipes-tubes1-Wv6-ZUY4.jpg";
const __vite_glob_0_303 = "/assets/stainless-steel-pipes-tubes2-1fH3scq8.jpg";
const __vite_glob_0_304 = "/assets/stainless-steel-pipes-tubes3--0hnmrvg.jpg";
const __vite_glob_0_305 = "/assets/stainless-steel-pipes-tubes4-C6ru5GRe.jpg";
const __vite_glob_0_306 = "/assets/stainless-steel-pipes-tubes5-CKixrDwU.jpg";
const __vite_glob_0_307 = "/assets/stainless-steel-pipes-tubes6-DvlesZ5Y.jpg";
const __vite_glob_0_308 = "/assets/stainless-steel-pipes-tubes7-D2Gt2bto.jpg";
const __vite_glob_0_309 = "/assets/stainless-steel-pipes-tubes8-CtyaPGs1.jpg";
const __vite_glob_0_310 = "/assets/stainless-steel-sheet-plate-manu-Qy4-2QbC.jpg";
const __vite_glob_0_311 = "/assets/stainless-steel-sheets-plates1-B2O2tlHB.jpg";
const __vite_glob_0_312 = "/assets/stainless-steel-sheets-plates2-BE7YkcBn.jpg";
const __vite_glob_0_313 = "/assets/stainless-steel-sheets-plates3-DlO18T1L.jpg";
const __vite_glob_0_314 = "/assets/stainless-steel-sheets-plates4-B5uMGuVT.jpg";
const __vite_glob_0_315 = "/assets/stainless-steel-sheets-plates5-BjFwsBag.jpg";
const __vite_glob_0_316 = "/assets/stainless-steel-sheets-plates6-1ct4Vmkx.jpg";
const __vite_glob_0_317 = "/assets/stainless-steel-sheets-plates7-Cvci4C4D.jpg";
const __vite_glob_0_318 = "/assets/stainless-steel-sheets-plates8-BmjiMCKD.jpg";
const __vite_glob_0_319 = "/assets/stainless-steel-valves1-ChWralyr.jpg";
const __vite_glob_0_320 = "/assets/nickel-alloy-valves2-DAAIa-xI.jpg";
const __vite_glob_0_321 = "/assets/stainless-steel-valves3-DuPcQ3z3.jpg";
const __vite_glob_0_322 = "/assets/stainless-steel-valves4-CXvP5wrb.jpg";
const __vite_glob_0_323 = "/assets/stainless-steel-valves5-zTJ1Eqgt.jpg";
const __vite_glob_0_324 = "/assets/stainless-steel-valves6-D7I5Jkyu.jpg";
const __vite_glob_0_325 = "/assets/stainless-steel-valves7-BnUx1jfP.jpg";
const __vite_glob_0_326 = "/assets/stainless-steel-valves8-C0dOZNpI.jpg";
const __vite_glob_0_327 = "/assets/steel-bulb-angles-CzkfStfh.jpg";
const __vite_glob_0_328 = "/assets/steel-c-channels-C7V7SW4S.jpg";
const __vite_glob_0_329 = "/assets/steel-equal-angles-DuJfrG0g.jpg";
const __vite_glob_0_330 = "/assets/steel-flats1-CbsBI0TG.jpg";
const __vite_glob_0_331 = "/assets/steel-flats2-DMJty_DF.jpg";
const __vite_glob_0_332 = "/assets/steel-flats3-jvouX0a_.jpg";
const __vite_glob_0_333 = "/assets/steel-h-channels-B4uWui7K.jpg";
const __vite_glob_0_334 = "/assets/steel-j-channels-Bn3Up72B.jpg";
const __vite_glob_0_335 = "/assets/steel-t-channels-CB5mpvBC.jpg";
const __vite_glob_0_336 = "/assets/steel-u-channels-DuL8SimU.jpg";
const __vite_glob_0_337 = "/assets/steel-unequal-angles-AhRpV8tV.jpg";
const __vite_glob_0_338 = "/assets/steel-z-channels-Byp9OMcU.jpg";
const __vite_glob_0_339 = "/assets/super-duplex-steel-angle-channel-k32n3NaD.jpg";
const __vite_glob_0_340 = "/assets/super-duplex-steel-fastener-manu-ZW3EnDOa.jpg";
const __vite_glob_0_341 = "/assets/super-duplex-steel-flange-manufa-49gQ_475.jpg";
const __vite_glob_0_342 = "/assets/super-duplex-steel-forged-fittin-Qx27DSW6.jpg";
const __vite_glob_0_343 = "/assets/super-duplex-steel-pipe-fitting-DBa4eJDU.jpg";
const __vite_glob_0_344 = "/assets/super-duplex-steel-pipe-manufact-D7KT8Dqg.jpg";
const __vite_glob_0_345 = "/assets/super-duplex-steel-round-bar-man-6aBAxP1v.jpg";
const __vite_glob_0_346 = "/assets/super-duplex-steel-sheet-plate-m-OBLEUVTK.jpg";
const __vite_glob_0_347 = "/assets/super-duplex-steel-wire-mesh-man-OdZA-j0M.jpg";
const __vite_glob_0_348 = "/assets/titanium--angle-channel-manufact-DqtSizef.jpg";
const __vite_glob_0_349 = "/assets/titanium-fasteners-manufacturer-B2JvURxh.jpg";
const __vite_glob_0_350 = "/assets/titanium-flange-manufacturer-ind-Da5YLYcU.jpg";
const __vite_glob_0_351 = "/assets/stainless-steel-forged-fittings-FAPmpp6q.jpg";
const __vite_glob_0_352 = "/assets/titanium-pipe-fittings-manufactu-BnSa1P5R.jpg";
const __vite_glob_0_353 = "/assets/titanium-pipe-tube-manufacturer-ByNTsfzu.jpg";
const __vite_glob_0_354 = "/assets/ss-round-bar-manufacturer-india-CliTJRbb.jpg";
const __vite_glob_0_355 = "/assets/stainless-steel-sheet-plate-manu-Qy4-2QbC.jpg";
const __vite_glob_0_356 = "/assets/titanium-wire-mesh-manufacturer-DZ8seNcm.jpg";
const __vite_glob_1_0 = "/assets/Carbon-Steel-Bars-C-dkxHdw.jpg";
const __vite_glob_1_1 = "/assets/Stainless-Steel-316-316L-Round-B-DKgwmwG9.jpg";
const __vite_glob_1_2 = "/assets/alloy-steel-manufacturer-india-D-y4_CdP.jpg";
const __vite_glob_1_3 = "/assets/angles-channels-flats1-Jed1T96k.jpg";
const __vite_glob_1_4 = "/assets/angles-channels-flats2-nrcXmUt5.jpg";
const __vite_glob_1_5 = "/assets/angles-channels-flats3-BfiRuGiD.jpg";
const __vite_glob_1_6 = "/assets/copper-manufacturer-india-CZ1L3gFS.jpg";
const __vite_glob_1_7 = "/assets/fasteners1-D5t6Qi5y.jpg";
const __vite_glob_1_8 = "/assets/fasteners2-CXjc-usZ.jpg";
const __vite_glob_1_9 = "/assets/fasteners3-s2qXYF3C.jpg";
const __vite_glob_1_10 = "/assets/flanges1-DqK2qGgk.jpg";
const __vite_glob_1_11 = "/assets/flanges2-CYrh2BUJ.jpg";
const __vite_glob_1_12 = "/assets/flanges3-Wkyv8_e9.jpg";
const __vite_glob_1_13 = "/assets/forged-fittings1-DJ83L6LS.jpg";
const __vite_glob_1_14 = "/assets/forged-fittings2-BD38m2fH.jpg";
const __vite_glob_1_15 = "/assets/forged-fittings3-C_hDLLHW.jpg";
const __vite_glob_1_16 = "/assets/hastelloy-manufacturer-india-5ufbchx4.jpg";
const __vite_glob_1_17 = "/assets/inconel-manufacturer-india-DhUv_tgc.jpg";
const __vite_glob_1_18 = "/assets/monel-manufacturer-india-CmzkxeeN.jpg";
const __vite_glob_1_19 = "/assets/pipe-fittings1-hvAqj1b8.jpg";
const __vite_glob_1_20 = "/assets/pipe-fittings2-iVXG8R9E.jpg";
const __vite_glob_1_21 = "/assets/pipe-fittings3-Diu-1PUS.jpg";
const __vite_glob_1_22 = "/assets/pipes-tubes1-DzgfQvhg.jpg";
const __vite_glob_1_23 = "/assets/pipes-tubes2-dNcV51bR.jpg";
const __vite_glob_1_24 = "/assets/pipes-tubes3-DzvwjQBh.jpg";
const __vite_glob_1_25 = "/assets/round-bars-rods1-Diq7c8xw.jpg";
const __vite_glob_1_26 = "/assets/round-bars-rods2-CxanR4a0.jpg";
const __vite_glob_1_27 = "/assets/round-bars-rods3-BGIJwMcG.jpg";
const __vite_glob_1_28 = "/assets/sheets-plates-coils1-s2cfEtoa.jpg";
const __vite_glob_1_29 = "/assets/sheets-plates-coils2-C5EbKhGo.jpg";
const __vite_glob_1_30 = "/assets/sheets-plates-coils3-C5dScncG.jpg";
const __vite_glob_1_31 = "/assets/stainless-steel1-BNnSiwT7.jpg";
const __vite_glob_1_32 = "/assets/stainless-steel1-BNnSiwT7.jpg";
const __vite_glob_1_33 = "/assets/super-duplex-steel-manufacturer-Bv8SR5QS.jpg";
const __vite_glob_1_34 = "/assets/titanium-manufacturer-india-BGwKZMMO.jpg";
const __vite_glob_1_35 = "/assets/titanium-pipe-tube-manufacturer-ByNTsfzu.jpg";
const __vite_glob_1_36 = "/assets/valves1-DL9EZCc2.jpg";
const __vite_glob_1_37 = "/assets/valves2-3udU4229.jpg";
const __vite_glob_1_38 = "/assets/valves3-DQro-jrk.jpg";
const __vite_glob_1_39 = "/assets/valves4-C_XNgNhx.jpg";
const __vite_glob_1_40 = "/assets/valves5-BkjOCrT_.jpg";
const productModules = /* @__PURE__ */ Object.assign({
  "../assets/images/products/alloy-steel-angle-channel-manufa.jpg": __vite_glob_0_0,
  "../assets/images/products/alloy-steel-bars-rods1.jpg": __vite_glob_0_1,
  "../assets/images/products/alloy-steel-bars-rods2.jpg": __vite_glob_0_2,
  "../assets/images/products/alloy-steel-bars-rods3.jpg": __vite_glob_0_3,
  "../assets/images/products/alloy-steel-bars-rods4.jpg": __vite_glob_0_4,
  "../assets/images/products/alloy-steel-bars-rods5.jpg": __vite_glob_0_5,
  "../assets/images/products/alloy-steel-bars-rods6.jpg": __vite_glob_0_6,
  "../assets/images/products/alloy-steel-bars-rods7.jpg": __vite_glob_0_7,
  "../assets/images/products/alloy-steel-bars-rods8.jpg": __vite_glob_0_8,
  "../assets/images/products/alloy-steel-fasteners1.jpg": __vite_glob_0_9,
  "../assets/images/products/alloy-steel-fasteners10.jpg": __vite_glob_0_10,
  "../assets/images/products/alloy-steel-fasteners2.jpg": __vite_glob_0_11,
  "../assets/images/products/alloy-steel-fasteners3.jpg": __vite_glob_0_12,
  "../assets/images/products/alloy-steel-fasteners4.jpg": __vite_glob_0_13,
  "../assets/images/products/alloy-steel-fasteners5.jpg": __vite_glob_0_14,
  "../assets/images/products/alloy-steel-fasteners6.jpg": __vite_glob_0_15,
  "../assets/images/products/alloy-steel-fasteners7.jpg": __vite_glob_0_16,
  "../assets/images/products/alloy-steel-fasteners8.jpg": __vite_glob_0_17,
  "../assets/images/products/alloy-steel-fasteners9.jpg": __vite_glob_0_18,
  "../assets/images/products/alloy-steel-flanges1.jpg": __vite_glob_0_19,
  "../assets/images/products/alloy-steel-flanges2.jpg": __vite_glob_0_20,
  "../assets/images/products/alloy-steel-flanges3.jpg": __vite_glob_0_21,
  "../assets/images/products/alloy-steel-flanges4.jpg": __vite_glob_0_22,
  "../assets/images/products/alloy-steel-flanges5.jpg": __vite_glob_0_23,
  "../assets/images/products/alloy-steel-flanges6.jpg": __vite_glob_0_24,
  "../assets/images/products/alloy-steel-flanges7.jpg": __vite_glob_0_25,
  "../assets/images/products/alloy-steel-flanges8.jpg": __vite_glob_0_26,
  "../assets/images/products/alloy-steel-forged-fittings1.jpg": __vite_glob_0_27,
  "../assets/images/products/alloy-steel-forged-fittings10.jpg": __vite_glob_0_28,
  "../assets/images/products/alloy-steel-forged-fittings2.jpg": __vite_glob_0_29,
  "../assets/images/products/alloy-steel-forged-fittings3.jpg": __vite_glob_0_30,
  "../assets/images/products/alloy-steel-forged-fittings4.jpg": __vite_glob_0_31,
  "../assets/images/products/alloy-steel-forged-fittings5.jpg": __vite_glob_0_32,
  "../assets/images/products/alloy-steel-forged-fittings6.jpg": __vite_glob_0_33,
  "../assets/images/products/alloy-steel-forged-fittings7.jpg": __vite_glob_0_34,
  "../assets/images/products/alloy-steel-forged-fittings8.jpg": __vite_glob_0_35,
  "../assets/images/products/alloy-steel-forged-fittings9.jpg": __vite_glob_0_36,
  "../assets/images/products/alloy-steel-pipe-fittings1.jpg": __vite_glob_0_37,
  "../assets/images/products/alloy-steel-pipe-fittings2.jpg": __vite_glob_0_38,
  "../assets/images/products/alloy-steel-pipe-fittings3.jpg": __vite_glob_0_39,
  "../assets/images/products/alloy-steel-pipe-fittings4.jpg": __vite_glob_0_40,
  "../assets/images/products/alloy-steel-pipe-fittings5.jpg": __vite_glob_0_41,
  "../assets/images/products/alloy-steel-pipe-fittings6.jpg": __vite_glob_0_42,
  "../assets/images/products/alloy-steel-pipe-fittings7.jpg": __vite_glob_0_43,
  "../assets/images/products/alloy-steel-pipe-fittings8.jpg": __vite_glob_0_44,
  "../assets/images/products/alloy-steel-pipes-tubes1.jpg": __vite_glob_0_45,
  "../assets/images/products/alloy-steel-pipes-tubes2.jpg": __vite_glob_0_46,
  "../assets/images/products/alloy-steel-pipes-tubes3.jpg": __vite_glob_0_47,
  "../assets/images/products/alloy-steel-pipes-tubes4.jpg": __vite_glob_0_48,
  "../assets/images/products/alloy-steel-pipes-tubes5.jpg": __vite_glob_0_49,
  "../assets/images/products/alloy-steel-pipes-tubes6.jpg": __vite_glob_0_50,
  "../assets/images/products/alloy-steel-pipes-tubes7.jpg": __vite_glob_0_51,
  "../assets/images/products/alloy-steel-pipes-tubes8.jpg": __vite_glob_0_52,
  "../assets/images/products/alloy-steel-round-bar-manufactur.jpg": __vite_glob_0_53,
  "../assets/images/products/alloy-steel-sheet-plate-manufact.jpg": __vite_glob_0_54,
  "../assets/images/products/alloy-steel-sheets-plates1.jpg": __vite_glob_0_55,
  "../assets/images/products/alloy-steel-sheets-plates2.jpg": __vite_glob_0_56,
  "../assets/images/products/alloy-steel-sheets-plates3.jpg": __vite_glob_0_57,
  "../assets/images/products/alloy-steel-sheets-plates4.jpg": __vite_glob_0_58,
  "../assets/images/products/alloy-steel-sheets-plates5.jpg": __vite_glob_0_59,
  "../assets/images/products/alloy-steel-sheets-plates6.jpg": __vite_glob_0_60,
  "../assets/images/products/alloy-steel-sheets-plates7.jpg": __vite_glob_0_61,
  "../assets/images/products/alloy-steel-sheets-plates8.jpg": __vite_glob_0_62,
  "../assets/images/products/alloy-steel-valves1.jpg": __vite_glob_0_63,
  "../assets/images/products/alloy-steel-valves10.jpg": __vite_glob_0_64,
  "../assets/images/products/alloy-steel-valves2.jpg": __vite_glob_0_65,
  "../assets/images/products/alloy-steel-valves3.jpg": __vite_glob_0_66,
  "../assets/images/products/alloy-steel-valves4.jpg": __vite_glob_0_67,
  "../assets/images/products/alloy-steel-valves5.jpg": __vite_glob_0_68,
  "../assets/images/products/alloy-steel-valves6.jpg": __vite_glob_0_69,
  "../assets/images/products/alloy-steel-valves7.jpg": __vite_glob_0_70,
  "../assets/images/products/alloy-steel-valves8.jpg": __vite_glob_0_71,
  "../assets/images/products/alloy-steel-valves9.jpg": __vite_glob_0_72,
  "../assets/images/products/alloy-steel-wire-mesh-manufactur.jpg": __vite_glob_0_73,
  "../assets/images/products/angles-channel-flats.jpg": __vite_glob_0_74,
  "../assets/images/products/carbon-steel-angle-manufacturer.jpg": __vite_glob_0_75,
  "../assets/images/products/carbon-steel-bars-rods1.jpg": __vite_glob_0_76,
  "../assets/images/products/carbon-steel-bars-rods2.jpg": __vite_glob_0_77,
  "../assets/images/products/carbon-steel-bars-rods3.jpg": __vite_glob_0_78,
  "../assets/images/products/carbon-steel-bars-rods4.jpg": __vite_glob_0_79,
  "../assets/images/products/carbon-steel-bars-rods5.jpg": __vite_glob_0_80,
  "../assets/images/products/carbon-steel-bars-rods6.jpg": __vite_glob_0_81,
  "../assets/images/products/carbon-steel-bars-rods7.jpg": __vite_glob_0_82,
  "../assets/images/products/carbon-steel-bars-rods8.jpg": __vite_glob_0_83,
  "../assets/images/products/carbon-steel-fasteners1.jpg": __vite_glob_0_84,
  "../assets/images/products/carbon-steel-fasteners10.jpg": __vite_glob_0_85,
  "../assets/images/products/carbon-steel-fasteners2.jpg": __vite_glob_0_86,
  "../assets/images/products/carbon-steel-fasteners3.jpg": __vite_glob_0_87,
  "../assets/images/products/carbon-steel-fasteners4.jpg": __vite_glob_0_88,
  "../assets/images/products/carbon-steel-fasteners5.jpg": __vite_glob_0_89,
  "../assets/images/products/carbon-steel-fasteners6.jpg": __vite_glob_0_90,
  "../assets/images/products/carbon-steel-fasteners7.jpg": __vite_glob_0_91,
  "../assets/images/products/carbon-steel-fasteners8.jpg": __vite_glob_0_92,
  "../assets/images/products/carbon-steel-fasteners9.jpg": __vite_glob_0_93,
  "../assets/images/products/carbon-steel-flanges1.jpg": __vite_glob_0_94,
  "../assets/images/products/carbon-steel-flanges2.jpg": __vite_glob_0_95,
  "../assets/images/products/carbon-steel-flanges3.jpg": __vite_glob_0_96,
  "../assets/images/products/carbon-steel-flanges4.jpg": __vite_glob_0_97,
  "../assets/images/products/carbon-steel-flanges5.jpg": __vite_glob_0_98,
  "../assets/images/products/carbon-steel-flanges6.jpg": __vite_glob_0_99,
  "../assets/images/products/carbon-steel-flanges7.jpg": __vite_glob_0_100,
  "../assets/images/products/carbon-steel-flanges8.jpg": __vite_glob_0_101,
  "../assets/images/products/carbon-steel-forged-fittings1.jpg": __vite_glob_0_102,
  "../assets/images/products/carbon-steel-forged-fittings10.jpg": __vite_glob_0_103,
  "../assets/images/products/carbon-steel-forged-fittings2.jpg": __vite_glob_0_104,
  "../assets/images/products/carbon-steel-forged-fittings3.jpg": __vite_glob_0_105,
  "../assets/images/products/carbon-steel-forged-fittings4.jpg": __vite_glob_0_106,
  "../assets/images/products/carbon-steel-forged-fittings5.jpg": __vite_glob_0_107,
  "../assets/images/products/carbon-steel-forged-fittings6.jpg": __vite_glob_0_108,
  "../assets/images/products/carbon-steel-forged-fittings7.jpg": __vite_glob_0_109,
  "../assets/images/products/carbon-steel-forged-fittings8.jpg": __vite_glob_0_110,
  "../assets/images/products/carbon-steel-forged-fittings9.jpg": __vite_glob_0_111,
  "../assets/images/products/carbon-steel-pipe-fittings1.jpg": __vite_glob_0_112,
  "../assets/images/products/carbon-steel-pipe-fittings2.jpg": __vite_glob_0_113,
  "../assets/images/products/carbon-steel-pipe-fittings3.jpg": __vite_glob_0_114,
  "../assets/images/products/carbon-steel-pipe-fittings4.jpg": __vite_glob_0_115,
  "../assets/images/products/carbon-steel-pipe-fittings5.jpg": __vite_glob_0_116,
  "../assets/images/products/carbon-steel-pipe-fittings6.jpg": __vite_glob_0_117,
  "../assets/images/products/carbon-steel-pipe-fittings7.jpg": __vite_glob_0_118,
  "../assets/images/products/carbon-steel-pipe-fittings8.jpg": __vite_glob_0_119,
  "../assets/images/products/carbon-steel-pipes-tubes1.jpg": __vite_glob_0_120,
  "../assets/images/products/carbon-steel-pipes-tubes2.jpg": __vite_glob_0_121,
  "../assets/images/products/carbon-steel-pipes-tubes3.jpg": __vite_glob_0_122,
  "../assets/images/products/carbon-steel-pipes-tubes4.jpg": __vite_glob_0_123,
  "../assets/images/products/carbon-steel-pipes-tubes5.jpg": __vite_glob_0_124,
  "../assets/images/products/carbon-steel-pipes-tubes6.jpg": __vite_glob_0_125,
  "../assets/images/products/carbon-steel-pipes-tubes7.jpg": __vite_glob_0_126,
  "../assets/images/products/carbon-steel-pipes-tubes8.jpg": __vite_glob_0_127,
  "../assets/images/products/carbon-steel-round-bar-manufactu.jpg": __vite_glob_0_128,
  "../assets/images/products/carbon-steel-sheet-plate-manufac.jpg": __vite_glob_0_129,
  "../assets/images/products/carbon-steel-sheets-plates1.jpg": __vite_glob_0_130,
  "../assets/images/products/carbon-steel-sheets-plates2.jpg": __vite_glob_0_131,
  "../assets/images/products/carbon-steel-sheets-plates3.jpg": __vite_glob_0_132,
  "../assets/images/products/carbon-steel-sheets-plates4.jpg": __vite_glob_0_133,
  "../assets/images/products/carbon-steel-sheets-plates5.jpg": __vite_glob_0_134,
  "../assets/images/products/carbon-steel-sheets-plates6.jpg": __vite_glob_0_135,
  "../assets/images/products/carbon-steel-sheets-plates7.jpg": __vite_glob_0_136,
  "../assets/images/products/carbon-steel-sheets-plates8.jpg": __vite_glob_0_137,
  "../assets/images/products/carbon-steel-valves1.jpg": __vite_glob_0_138,
  "../assets/images/products/carbon-steel-valves10.jpg": __vite_glob_0_139,
  "../assets/images/products/carbon-steel-valves2.jpg": __vite_glob_0_140,
  "../assets/images/products/carbon-steel-valves3.jpg": __vite_glob_0_141,
  "../assets/images/products/carbon-steel-valves4.jpg": __vite_glob_0_142,
  "../assets/images/products/carbon-steel-valves5.jpg": __vite_glob_0_143,
  "../assets/images/products/carbon-steel-valves6.jpg": __vite_glob_0_144,
  "../assets/images/products/carbon-steel-valves7.jpg": __vite_glob_0_145,
  "../assets/images/products/carbon-steel-valves8.jpg": __vite_glob_0_146,
  "../assets/images/products/carbon-steel-valves9.jpg": __vite_glob_0_147,
  "../assets/images/products/carbon-steel-wire-mesh-manufactu.jpg": __vite_glob_0_148,
  "../assets/images/products/copper-angle-channel-manufacture.jpg": __vite_glob_0_149,
  "../assets/images/products/copper-fastener-manufacturer-ind.jpg": __vite_glob_0_150,
  "../assets/images/products/copper-flanges-manufacturer-indi.jpg": __vite_glob_0_151,
  "../assets/images/products/copper-forged-fitting-manufactur.jpg": __vite_glob_0_152,
  "../assets/images/products/copper-pipe-fitting-manufacturer.jpg": __vite_glob_0_153,
  "../assets/images/products/copper-pipe-tube-manufacturer-in.jpg": __vite_glob_0_154,
  "../assets/images/products/copper-round-bar-manufacturer-in.jpg": __vite_glob_0_155,
  "../assets/images/products/copper-sheet-plate-manufacturer.jpg": __vite_glob_0_156,
  "../assets/images/products/copper-wire-mesh-manufacturer-in.jpg": __vite_glob_0_157,
  "../assets/images/products/fasteners.jpg": __vite_glob_0_158,
  "../assets/images/products/flanges.jpg": __vite_glob_0_159,
  "../assets/images/products/forged-fittings.jpg": __vite_glob_0_160,
  "../assets/images/products/hastelloy-angle-channel-manufact.jpg": __vite_glob_0_161,
  "../assets/images/products/hastelloy-fastener-manufacturer.jpg": __vite_glob_0_162,
  "../assets/images/products/hastelloy-flange-manufacturer-in.jpg": __vite_glob_0_163,
  "../assets/images/products/hastelloy-forged-fittings-manufa.jpg": __vite_glob_0_164,
  "../assets/images/products/hastelloy-pipe-fitting-manufactu.jpg": __vite_glob_0_165,
  "../assets/images/products/hastelloy-pipe-manufacturer-indi.jpg": __vite_glob_0_166,
  "../assets/images/products/hastelloy-round-bar-manufacturer.jpg": __vite_glob_0_167,
  "../assets/images/products/hastelloy-sheet-plate-manufactur.jpg": __vite_glob_0_168,
  "../assets/images/products/hastelloy-wire-mesh-manufacturer.jpg": __vite_glob_0_169,
  "../assets/images/products/monel-angle-channel-manufacturer.jpg": __vite_glob_0_170,
  "../assets/images/products/monel-fasteners-manufacturer-ind.jpg": __vite_glob_0_171,
  "../assets/images/products/monel-flange-manufacturer-india.jpg": __vite_glob_0_172,
  "../assets/images/products/monel-forged-fittings-manufactur.jpg": __vite_glob_0_173,
  "../assets/images/products/monel-pipe-fitting-manufacturer.jpg": __vite_glob_0_174,
  "../assets/images/products/monel-pipe-tube-manufacturer-ind.jpg": __vite_glob_0_175,
  "../assets/images/products/monel-round-bar-manufacturer-ind.jpg": __vite_glob_0_176,
  "../assets/images/products/monel-sheet-plate-manufacturer-i.jpg": __vite_glob_0_177,
  "../assets/images/products/monel-wire-mesh-manufacturer-ind.jpg": __vite_glob_0_178,
  "../assets/images/products/nickel-alloy-bars-rods1.jpg": __vite_glob_0_179,
  "../assets/images/products/nickel-alloy-bars-rods2.jpg": __vite_glob_0_180,
  "../assets/images/products/nickel-alloy-bars-rods3.jpg": __vite_glob_0_181,
  "../assets/images/products/nickel-alloy-bars-rods4.jpg": __vite_glob_0_182,
  "../assets/images/products/nickel-alloy-bars-rods5.jpg": __vite_glob_0_183,
  "../assets/images/products/nickel-alloy-bars-rods6.jpg": __vite_glob_0_184,
  "../assets/images/products/nickel-alloy-bars-rods7.jpg": __vite_glob_0_185,
  "../assets/images/products/nickel-alloy-bars-rods8.jpg": __vite_glob_0_186,
  "../assets/images/products/nickel-alloy-fasteners1.jpg": __vite_glob_0_187,
  "../assets/images/products/nickel-alloy-fasteners10.jpg": __vite_glob_0_188,
  "../assets/images/products/nickel-alloy-fasteners2.jpg": __vite_glob_0_189,
  "../assets/images/products/nickel-alloy-fasteners3.jpg": __vite_glob_0_190,
  "../assets/images/products/nickel-alloy-fasteners4.jpg": __vite_glob_0_191,
  "../assets/images/products/nickel-alloy-fasteners5.jpg": __vite_glob_0_192,
  "../assets/images/products/nickel-alloy-fasteners6.jpg": __vite_glob_0_193,
  "../assets/images/products/nickel-alloy-fasteners7.jpg": __vite_glob_0_194,
  "../assets/images/products/nickel-alloy-fasteners8.jpg": __vite_glob_0_195,
  "../assets/images/products/nickel-alloy-fasteners9.jpg": __vite_glob_0_196,
  "../assets/images/products/nickel-alloy-flanges1.jpg": __vite_glob_0_197,
  "../assets/images/products/nickel-alloy-flanges2.jpg": __vite_glob_0_198,
  "../assets/images/products/nickel-alloy-flanges3.jpg": __vite_glob_0_199,
  "../assets/images/products/nickel-alloy-flanges4.jpg": __vite_glob_0_200,
  "../assets/images/products/nickel-alloy-flanges5.jpg": __vite_glob_0_201,
  "../assets/images/products/nickel-alloy-flanges6.jpg": __vite_glob_0_202,
  "../assets/images/products/nickel-alloy-flanges7.jpg": __vite_glob_0_203,
  "../assets/images/products/nickel-alloy-flanges8.jpg": __vite_glob_0_204,
  "../assets/images/products/nickel-alloy-forged-fittings1.jpg": __vite_glob_0_205,
  "../assets/images/products/nickel-alloy-forged-fittings10.jpg": __vite_glob_0_206,
  "../assets/images/products/nickel-alloy-forged-fittings2.jpg": __vite_glob_0_207,
  "../assets/images/products/nickel-alloy-forged-fittings3.jpg": __vite_glob_0_208,
  "../assets/images/products/nickel-alloy-forged-fittings4.jpg": __vite_glob_0_209,
  "../assets/images/products/nickel-alloy-forged-fittings5.jpg": __vite_glob_0_210,
  "../assets/images/products/nickel-alloy-forged-fittings6.jpg": __vite_glob_0_211,
  "../assets/images/products/nickel-alloy-forged-fittings7.jpg": __vite_glob_0_212,
  "../assets/images/products/nickel-alloy-forged-fittings8.jpg": __vite_glob_0_213,
  "../assets/images/products/nickel-alloy-forged-fittings9.jpg": __vite_glob_0_214,
  "../assets/images/products/nickel-alloy-pipe-fittings1.jpg": __vite_glob_0_215,
  "../assets/images/products/nickel-alloy-pipe-fittings2.jpg": __vite_glob_0_216,
  "../assets/images/products/nickel-alloy-pipe-fittings3.jpg": __vite_glob_0_217,
  "../assets/images/products/nickel-alloy-pipe-fittings4.jpg": __vite_glob_0_218,
  "../assets/images/products/nickel-alloy-pipe-fittings5.jpg": __vite_glob_0_219,
  "../assets/images/products/nickel-alloy-pipe-fittings6.jpg": __vite_glob_0_220,
  "../assets/images/products/nickel-alloy-pipe-fittings7.jpg": __vite_glob_0_221,
  "../assets/images/products/nickel-alloy-pipe-fittings8.jpg": __vite_glob_0_222,
  "../assets/images/products/nickel-alloy-pipes-tubes1.jpg": __vite_glob_0_223,
  "../assets/images/products/nickel-alloy-pipes-tubes2.jpg": __vite_glob_0_224,
  "../assets/images/products/nickel-alloy-pipes-tubes3.jpg": __vite_glob_0_225,
  "../assets/images/products/nickel-alloy-pipes-tubes4.jpg": __vite_glob_0_226,
  "../assets/images/products/nickel-alloy-pipes-tubes5.jpg": __vite_glob_0_227,
  "../assets/images/products/nickel-alloy-pipes-tubes6.jpg": __vite_glob_0_228,
  "../assets/images/products/nickel-alloy-pipes-tubes7.jpg": __vite_glob_0_229,
  "../assets/images/products/nickel-alloy-pipes-tubes8.jpg": __vite_glob_0_230,
  "../assets/images/products/nickel-alloy-sheets-plates1.jpg": __vite_glob_0_231,
  "../assets/images/products/nickel-alloy-sheets-plates2.jpg": __vite_glob_0_232,
  "../assets/images/products/nickel-alloy-sheets-plates3.jpg": __vite_glob_0_233,
  "../assets/images/products/nickel-alloy-sheets-plates4.jpg": __vite_glob_0_234,
  "../assets/images/products/nickel-alloy-sheets-plates5.jpg": __vite_glob_0_235,
  "../assets/images/products/nickel-alloy-sheets-plates6.jpg": __vite_glob_0_236,
  "../assets/images/products/nickel-alloy-sheets-plates7.jpg": __vite_glob_0_237,
  "../assets/images/products/nickel-alloy-sheets-plates8.jpg": __vite_glob_0_238,
  "../assets/images/products/nickel-alloy-valves1.jpg": __vite_glob_0_239,
  "../assets/images/products/nickel-alloy-valves10.jpg": __vite_glob_0_240,
  "../assets/images/products/nickel-alloy-valves2.jpg": __vite_glob_0_241,
  "../assets/images/products/nickel-alloy-valves3.jpg": __vite_glob_0_242,
  "../assets/images/products/nickel-alloy-valves4.jpg": __vite_glob_0_243,
  "../assets/images/products/nickel-alloy-valves5.jpg": __vite_glob_0_244,
  "../assets/images/products/nickel-alloy-valves6.jpg": __vite_glob_0_245,
  "../assets/images/products/nickel-alloy-valves7.jpg": __vite_glob_0_246,
  "../assets/images/products/nickel-alloy-valves8.jpg": __vite_glob_0_247,
  "../assets/images/products/nickel-alloy-valves9.jpg": __vite_glob_0_248,
  "../assets/images/products/pipe-fittings.jpg": __vite_glob_0_249,
  "../assets/images/products/pipes-tubes.jpg": __vite_glob_0_250,
  "../assets/images/products/round-bars-rods.jpg": __vite_glob_0_251,
  "../assets/images/products/sheets-plates-coils.jpg": __vite_glob_0_252,
  "../assets/images/products/ss-angle-channel-manufacturer-in.jpg": __vite_glob_0_253,
  "../assets/images/products/ss-round-bar-manufacturer-india.jpg": __vite_glob_0_254,
  "../assets/images/products/ss-wire-mesh-manufacturer-india.jpg": __vite_glob_0_255,
  "../assets/images/products/stainless-steel-bars-rods1.jpg": __vite_glob_0_256,
  "../assets/images/products/stainless-steel-bars-rods2.jpg": __vite_glob_0_257,
  "../assets/images/products/stainless-steel-bars-rods3.jpg": __vite_glob_0_258,
  "../assets/images/products/stainless-steel-bars-rods4.jpg": __vite_glob_0_259,
  "../assets/images/products/stainless-steel-bars-rods5.jpg": __vite_glob_0_260,
  "../assets/images/products/stainless-steel-bars-rods6.jpg": __vite_glob_0_261,
  "../assets/images/products/stainless-steel-bars-rods7.jpg": __vite_glob_0_262,
  "../assets/images/products/stainless-steel-bars-rods8.jpg": __vite_glob_0_263,
  "../assets/images/products/stainless-steel-fasteners1.jpg": __vite_glob_0_264,
  "../assets/images/products/stainless-steel-fasteners10.jpg": __vite_glob_0_265,
  "../assets/images/products/stainless-steel-fasteners2.jpg": __vite_glob_0_266,
  "../assets/images/products/stainless-steel-fasteners3.jpg": __vite_glob_0_267,
  "../assets/images/products/stainless-steel-fasteners4.jpg": __vite_glob_0_268,
  "../assets/images/products/stainless-steel-fasteners5.jpg": __vite_glob_0_269,
  "../assets/images/products/stainless-steel-fasteners6.jpg": __vite_glob_0_270,
  "../assets/images/products/stainless-steel-fasteners7.jpg": __vite_glob_0_271,
  "../assets/images/products/stainless-steel-fasteners8.jpg": __vite_glob_0_272,
  "../assets/images/products/stainless-steel-fasteners9.jpg": __vite_glob_0_273,
  "../assets/images/products/stainless-steel-flanges1.jpg": __vite_glob_0_274,
  "../assets/images/products/stainless-steel-flanges2.jpg": __vite_glob_0_275,
  "../assets/images/products/stainless-steel-flanges3.jpg": __vite_glob_0_276,
  "../assets/images/products/stainless-steel-flanges4.jpg": __vite_glob_0_277,
  "../assets/images/products/stainless-steel-flanges5.jpg": __vite_glob_0_278,
  "../assets/images/products/stainless-steel-flanges6.jpg": __vite_glob_0_279,
  "../assets/images/products/stainless-steel-flanges7.jpg": __vite_glob_0_280,
  "../assets/images/products/stainless-steel-flanges8.jpg": __vite_glob_0_281,
  "../assets/images/products/stainless-steel-forged-fittings.jpg": __vite_glob_0_282,
  "../assets/images/products/stainless-steel-forged-fittings1.jpg": __vite_glob_0_283,
  "../assets/images/products/stainless-steel-forged-fittings10.jpg": __vite_glob_0_284,
  "../assets/images/products/stainless-steel-forged-fittings2.jpg": __vite_glob_0_285,
  "../assets/images/products/stainless-steel-forged-fittings3.jpg": __vite_glob_0_286,
  "../assets/images/products/stainless-steel-forged-fittings4.jpg": __vite_glob_0_287,
  "../assets/images/products/stainless-steel-forged-fittings5.jpg": __vite_glob_0_288,
  "../assets/images/products/stainless-steel-forged-fittings6.jpg": __vite_glob_0_289,
  "../assets/images/products/stainless-steel-forged-fittings7.jpg": __vite_glob_0_290,
  "../assets/images/products/stainless-steel-forged-fittings8.jpg": __vite_glob_0_291,
  "../assets/images/products/stainless-steel-forged-fittings9.jpg": __vite_glob_0_292,
  "../assets/images/products/stainless-steel-pipe-fittings1.jpg": __vite_glob_0_293,
  "../assets/images/products/stainless-steel-pipe-fittings2.jpg": __vite_glob_0_294,
  "../assets/images/products/stainless-steel-pipe-fittings3.jpg": __vite_glob_0_295,
  "../assets/images/products/stainless-steel-pipe-fittings4.jpg": __vite_glob_0_296,
  "../assets/images/products/stainless-steel-pipe-fittings5.jpg": __vite_glob_0_297,
  "../assets/images/products/stainless-steel-pipe-fittings6.jpg": __vite_glob_0_298,
  "../assets/images/products/stainless-steel-pipe-fittings7.jpg": __vite_glob_0_299,
  "../assets/images/products/stainless-steel-pipe-fittings8.jpg": __vite_glob_0_300,
  "../assets/images/products/stainless-steel-pipe-tube-manufa.jpg": __vite_glob_0_301,
  "../assets/images/products/stainless-steel-pipes-tubes1.jpg": __vite_glob_0_302,
  "../assets/images/products/stainless-steel-pipes-tubes2.jpg": __vite_glob_0_303,
  "../assets/images/products/stainless-steel-pipes-tubes3.jpg": __vite_glob_0_304,
  "../assets/images/products/stainless-steel-pipes-tubes4.jpg": __vite_glob_0_305,
  "../assets/images/products/stainless-steel-pipes-tubes5.jpg": __vite_glob_0_306,
  "../assets/images/products/stainless-steel-pipes-tubes6.jpg": __vite_glob_0_307,
  "../assets/images/products/stainless-steel-pipes-tubes7.jpg": __vite_glob_0_308,
  "../assets/images/products/stainless-steel-pipes-tubes8.jpg": __vite_glob_0_309,
  "../assets/images/products/stainless-steel-sheet-plate-manu.jpg": __vite_glob_0_310,
  "../assets/images/products/stainless-steel-sheets-plates1.jpg": __vite_glob_0_311,
  "../assets/images/products/stainless-steel-sheets-plates2.jpg": __vite_glob_0_312,
  "../assets/images/products/stainless-steel-sheets-plates3.jpg": __vite_glob_0_313,
  "../assets/images/products/stainless-steel-sheets-plates4.jpg": __vite_glob_0_314,
  "../assets/images/products/stainless-steel-sheets-plates5.jpg": __vite_glob_0_315,
  "../assets/images/products/stainless-steel-sheets-plates6.jpg": __vite_glob_0_316,
  "../assets/images/products/stainless-steel-sheets-plates7.jpg": __vite_glob_0_317,
  "../assets/images/products/stainless-steel-sheets-plates8.jpg": __vite_glob_0_318,
  "../assets/images/products/stainless-steel-valves1.jpg": __vite_glob_0_319,
  "../assets/images/products/stainless-steel-valves2.jpg": __vite_glob_0_320,
  "../assets/images/products/stainless-steel-valves3.jpg": __vite_glob_0_321,
  "../assets/images/products/stainless-steel-valves4.jpg": __vite_glob_0_322,
  "../assets/images/products/stainless-steel-valves5.jpg": __vite_glob_0_323,
  "../assets/images/products/stainless-steel-valves6.jpg": __vite_glob_0_324,
  "../assets/images/products/stainless-steel-valves7.jpg": __vite_glob_0_325,
  "../assets/images/products/stainless-steel-valves8.jpg": __vite_glob_0_326,
  "../assets/images/products/steel-bulb-angles.jpg": __vite_glob_0_327,
  "../assets/images/products/steel-c-channels.jpg": __vite_glob_0_328,
  "../assets/images/products/steel-equal-angles.jpg": __vite_glob_0_329,
  "../assets/images/products/steel-flats1.jpg": __vite_glob_0_330,
  "../assets/images/products/steel-flats2.jpg": __vite_glob_0_331,
  "../assets/images/products/steel-flats3.jpg": __vite_glob_0_332,
  "../assets/images/products/steel-h-channels.jpg": __vite_glob_0_333,
  "../assets/images/products/steel-j-channels.jpg": __vite_glob_0_334,
  "../assets/images/products/steel-t-channels.jpg": __vite_glob_0_335,
  "../assets/images/products/steel-u-channels.jpg": __vite_glob_0_336,
  "../assets/images/products/steel-unequal-angles.jpg": __vite_glob_0_337,
  "../assets/images/products/steel-z-channels.jpg": __vite_glob_0_338,
  "../assets/images/products/super-duplex-steel-angle-channel.jpg": __vite_glob_0_339,
  "../assets/images/products/super-duplex-steel-fastener-manu.jpg": __vite_glob_0_340,
  "../assets/images/products/super-duplex-steel-flange-manufa.jpg": __vite_glob_0_341,
  "../assets/images/products/super-duplex-steel-forged-fittin.jpg": __vite_glob_0_342,
  "../assets/images/products/super-duplex-steel-pipe-fitting.jpg": __vite_glob_0_343,
  "../assets/images/products/super-duplex-steel-pipe-manufact.jpg": __vite_glob_0_344,
  "../assets/images/products/super-duplex-steel-round-bar-man.jpg": __vite_glob_0_345,
  "../assets/images/products/super-duplex-steel-sheet-plate-m.jpg": __vite_glob_0_346,
  "../assets/images/products/super-duplex-steel-wire-mesh-man.jpg": __vite_glob_0_347,
  "../assets/images/products/titanium--angle-channel-manufact.jpg": __vite_glob_0_348,
  "../assets/images/products/titanium-fasteners-manufacturer.jpg": __vite_glob_0_349,
  "../assets/images/products/titanium-flange-manufacturer-ind.jpg": __vite_glob_0_350,
  "../assets/images/products/titanium-forged-fittings-manufac.jpg": __vite_glob_0_351,
  "../assets/images/products/titanium-pipe-fittings-manufactu.jpg": __vite_glob_0_352,
  "../assets/images/products/titanium-pipe-tube-manufacturer.jpg": __vite_glob_0_353,
  "../assets/images/products/titanium-round-bar-manufacturer.jpg": __vite_glob_0_354,
  "../assets/images/products/titanium-sheet-plate-manufacture.jpg": __vite_glob_0_355,
  "../assets/images/products/titanium-wire-mesh-manufacturer.jpg": __vite_glob_0_356,
  "../assets/images/products/valves.jpg": __vite_glob_0_357
});
const bannerModules = /* @__PURE__ */ Object.assign({
  "../assets/images/banners/Carbon-Steel-Bars.jpg": __vite_glob_1_0,
  "../assets/images/banners/Stainless-Steel-316-316L-Round-B.jpg": __vite_glob_1_1,
  "../assets/images/banners/alloy-steel-manufacturer-india.jpg": __vite_glob_1_2,
  "../assets/images/banners/angles-channels-flats1.jpg": __vite_glob_1_3,
  "../assets/images/banners/angles-channels-flats2.jpg": __vite_glob_1_4,
  "../assets/images/banners/angles-channels-flats3.jpg": __vite_glob_1_5,
  "../assets/images/banners/copper-manufacturer-india.jpg": __vite_glob_1_6,
  "../assets/images/banners/fasteners1.jpg": __vite_glob_1_7,
  "../assets/images/banners/fasteners2.jpg": __vite_glob_1_8,
  "../assets/images/banners/fasteners3.jpg": __vite_glob_1_9,
  "../assets/images/banners/flanges1.jpg": __vite_glob_1_10,
  "../assets/images/banners/flanges2.jpg": __vite_glob_1_11,
  "../assets/images/banners/flanges3.jpg": __vite_glob_1_12,
  "../assets/images/banners/forged-fittings1.jpg": __vite_glob_1_13,
  "../assets/images/banners/forged-fittings2.jpg": __vite_glob_1_14,
  "../assets/images/banners/forged-fittings3.jpg": __vite_glob_1_15,
  "../assets/images/banners/hastelloy-manufacturer-india.jpg": __vite_glob_1_16,
  "../assets/images/banners/inconel-manufacturer-india.jpg": __vite_glob_1_17,
  "../assets/images/banners/monel-manufacturer-india.jpg": __vite_glob_1_18,
  "../assets/images/banners/pipe-fittings1.jpg": __vite_glob_1_19,
  "../assets/images/banners/pipe-fittings2.jpg": __vite_glob_1_20,
  "../assets/images/banners/pipe-fittings3.jpg": __vite_glob_1_21,
  "../assets/images/banners/pipes-tubes1.jpg": __vite_glob_1_22,
  "../assets/images/banners/pipes-tubes2.jpg": __vite_glob_1_23,
  "../assets/images/banners/pipes-tubes3.jpg": __vite_glob_1_24,
  "../assets/images/banners/round-bars-rods1.jpg": __vite_glob_1_25,
  "../assets/images/banners/round-bars-rods2.jpg": __vite_glob_1_26,
  "../assets/images/banners/round-bars-rods3.jpg": __vite_glob_1_27,
  "../assets/images/banners/sheets-plates-coils1.jpg": __vite_glob_1_28,
  "../assets/images/banners/sheets-plates-coils2.jpg": __vite_glob_1_29,
  "../assets/images/banners/sheets-plates-coils3.jpg": __vite_glob_1_30,
  "../assets/images/banners/stainless-steel-manufacturer-ind.jpg": __vite_glob_1_31,
  "../assets/images/banners/stainless-steel1.jpg": __vite_glob_1_32,
  "../assets/images/banners/super-duplex-steel-manufacturer.jpg": __vite_glob_1_33,
  "../assets/images/banners/titanium-manufacturer-india.jpg": __vite_glob_1_34,
  "../assets/images/banners/titanium-pipe-tube-manufacturer.jpg": __vite_glob_1_35,
  "../assets/images/banners/valves1.jpg": __vite_glob_1_36,
  "../assets/images/banners/valves2.jpg": __vite_glob_1_37,
  "../assets/images/banners/valves3.jpg": __vite_glob_1_38,
  "../assets/images/banners/valves4.jpg": __vite_glob_1_39,
  "../assets/images/banners/valves5.jpg": __vite_glob_1_40
});
const formatImages = (modules) => {
  const images = {};
  for (const path in modules) {
    const fileName = path.split("/").pop().split(".")[0];
    images[fileName] = modules[path];
  }
  return images;
};
const productImages = formatImages(productModules);
const bannerImages = formatImages(bannerModules);
let companyName$1 = constantValue.companyName;
const allProducts = [
  {
    id: 1,
    productShortName: "Sheets, Plates & Coils",
    images: [
      bannerImages["sheets-plates-coils1"],
      bannerImages["sheets-plates-coils2"],
      bannerImages["sheets-plates-coils3"]
    ],
    name: "Leading Sheets, Plates & Coils Manufacturer, Supplier & Stockist in India",
    description: `<strong>${companyName$1}</strong> is a reputed manufacturer, supplier, and stockist of high-quality Sheets, Plates & Coils in India. These products are available in various sizes, thicknesses, and materials to meet diverse industrial requirements. We offer a wide range of types including Shim Sheets, Perforated Sheets, Hot Rolled Sheets & Plates, Cold Rolled Sheets & Plates, Chequered Plates, and Foils in multiple grades.

Our manufacturing range includes Stainless Steel, Carbon Steel, Hastelloy, and other high-performance alloy Sheets, Plates & Coils tailored for multiple industry applications.`,
    productDetails: {
      tableData: {
        tableName: "Specifications for Sheets, Plates & Coils",
        materialSpecifications: {
          Dimension: "MSRR, AMS, BS, JIS, AISI, ASTM, GB, DIN, EN, etc.",
          Size: "0.1 mm to 120 mm thickness; Widths: 1000 / 1220 / 1250 / 1500 / 2000 mm; Lengths: 2000 / 2500 / 3000 / 5000 / 6000 mm",
          Width: "1000mm, 1219mm, 1500mm, 1800mm, 2000mm, 2500mm, 3000mm, 3500mm, etc.",
          Length: "2000mm, 2440mm, 3000mm, 5800mm, 6000mm, etc.",
          Thickness: "0.1mm to 12 mm",
          Hardness: "Soft, Hard, Half Hard, Quarter Hard, Spring Hard, etc.",
          Surface: "2B, 2D, BA, No.1, No.4, No.8, 8K, Mirror, Checkered, Embossed, Hair Line, Sand Blast, Brush, Etching",
          Finish: "Hot Rolled Plate (HR), Cold Rolled Sheet (CR), Satin (with Plastic Coating)",
          Forms: "Sheets, Plates, Coils, Flats, Strips, Profiles, Blanks, Circles, Rings, Shim Sheets, Perforated Sheets, B.Q. Profiles"
        }
      }
    },
    subProducts: [
      {
        id: 1,
        productShortName: "SHEETS, PLATES & COILS",
        name: "Stainless Steel Sheets, Plates & Coils Specifications",
        images: [
          productImages["stainless-steel-sheets-plates1"],
          productImages["stainless-steel-sheets-plates2"],
          productImages["stainless-steel-sheets-plates3"],
          productImages["stainless-steel-sheets-plates4"],
          productImages["stainless-steel-sheets-plates5"],
          productImages["stainless-steel-sheets-plates6"],
          productImages["stainless-steel-sheets-plates7"],
          productImages["stainless-steel-sheets-plates8"]
        ],
        description: `<strong>${companyName$1}</strong> is a trusted manufacturer and supplier of premium quality Stainless Steel Sheets, Plates & Coils. Renowned for excellent corrosion resistance, tensile strength, and durability, our SS range is ideal for various industrial applications. Their non-corrosive and anti-abrasive properties ensure low maintenance and long-lasting performance.`,
        materialSpecifications: {
          Standards: "ASTM A240 / ASME SA240",
          Grades: "201, 202, 301, 302, 304, 304L, 309, 310, 316, 316L, 316LN, 316Ti, 317L, 321, 347, 405, 409, 410, 420, 430, 440C, 17-4PH, 904L, 253MA, 353MA, AL-6XN (N08367), Alloy 28 (N08028), A286 (S66286)"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Sheets, Plates & Coils Specifications",
        images: [
          productImages["alloy-steel-sheets-plates1"],
          productImages["alloy-steel-sheets-plates2"],
          productImages["alloy-steel-sheets-plates3"],
          productImages["alloy-steel-sheets-plates4"],
          productImages["alloy-steel-sheets-plates5"],
          productImages["alloy-steel-sheets-plates6"],
          productImages["alloy-steel-sheets-plates7"],
          productImages["alloy-steel-sheets-plates8"]
        ],
        description: `<strong>${companyName$1}</strong> manufactures and stocks a diverse range of Alloy Steel Sheets, Plates & Coils in various sizes, th icknesses, and grades. Our products are crafted to meet stringent quality standards and fulfill specific industrial requirements. We supply across domestic and international markets.`,
        materialSpecifications: {
          Standards: "ASTM A387 / ASME SA387",
          Grades: "11, 12, 22, 5, 9, 91, A283 Gr. C, 16Mo3"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Steel Sheets, Plates & Coils Specifications",
        images: [
          productImages["nickel-alloy-sheets-plates1"],
          productImages["nickel-alloy-sheets-plates2"],
          productImages["nickel-alloy-sheets-plates3"],
          productImages["nickel-alloy-sheets-plates4"],
          productImages["nickel-alloy-sheets-plates5"],
          productImages["nickel-alloy-sheets-plates6"],
          productImages["nickel-alloy-sheets-plates7"],
          productImages["nickel-alloy-sheets-plates8"]
        ],
        description: `<strong>${companyName$1}</strong> is a prominent exporter and supplier of high-grade Nickel Alloy Sheets, Plates & Coils. These products are available in different dimensions and specifications and are ideal for high-temperature and high-strength applications. Nickel's versatility enables superior corrosion resistance and mechanical performance.`,
        materialSpecifications: {
          Standards: "ASTM / ASME B161, B162, B163, B725, B730",
          Grades: "Nickel 200/201, Monel 400, Monel K500, Inconel 600, Inconel 625, Inconel 718, Incoloy 800, Incoloy 825, Hastelloy C276, C22, B2, Alloy 20, 904L, Titanium Gr 2, Gr 5, Cu-Ni 90/10 (C70600), Cu-Ni 70/30 (C71500), Brass, Bronze, Titanium, Tantalum, Bismuth, Aluminium, High-Speed Steel, Zinc, Lead"
        }
      },
      {
        id: 4,
        name: "Carbon Steel Sheets, Plates & Coils Specifications",
        images: [
          productImages["carbon-steel-sheets-plates1"],
          productImages["carbon-steel-sheets-plates2"],
          productImages["carbon-steel-sheets-plates3"],
          productImages["carbon-steel-sheets-plates4"],
          productImages["carbon-steel-sheets-plates5"],
          productImages["carbon-steel-sheets-plates6"],
          productImages["carbon-steel-sheets-plates7"],
          productImages["carbon-steel-sheets-plates8"]
        ],
        description: `With years of industry experience, <strong>${companyName$1}</strong> delivers high-quality Carbon Steel Sheets, Plates & Coils manufactured from top-grade raw materials using advanced technology. Our carbon steel range is valued for its excellent weldability and formability, making it suitable for a wide array of structural and industrial applications.`,
        materialSpecifications: {
          Standards: "ASTM A36, IS 2062, CK60, Wear Resistant Steel, Boiler Quality ASTM A516",
          Grades: "ASTM A283, A285, A515, A516, A105, A234, LF1, LF2, A106, A333, A53, API 5L, 400 HB, 450 HB, 500 HB, 60, 70, Corten A, Corten B, Hadfield Manganese Steel"
        }
      }
    ]
  },
  {
    id: 2,
    name: "Round Bars & Rods Manufacturers, Suppliers & Stockist in India",
    images: [
      bannerImages["round-bars-rods1"],
      bannerImages["round-bars-rods2"],
      bannerImages["round-bars-rods3"]
    ],
    productShortName: "Round Bars & Rods",
    description: `<strong>${companyName$1}</strong> is a renowned manufacturer, supplier, and stockist of a wide range of Round Bars & Rods in India. Our products are manufactured using premium-grade raw materials and undergo strict quality testing at every stage. Each bar and rod conforms to both national and international standards to ensure performance and reliability.

We stock and supply various types of Round Bars & Rods made from materials such as Stainless Steel, Alloy Steel, Duplex & Super Duplex Steel, Hastelloy, Monel, Inconel, Titanium, Aluminum, and more.`,
    productDetails: {
      tableData: {
        tableName: "Specifications for Round Bars & Rods",
        materialSpecifications: {
          Size: "1 MM to 250 MM OD",
          RodSize: "3 mm to 500 mm",
          BrightBars: "Outside Diameter in the range of 4 mm to 100 mm",
          HexBars: "18 mm – 57 mm (11/16” to 2-3/4”)",
          SquareBars: "18 mm – 47 mm (11/16” to 1-3/4”)",
          FlatBars: "1/2” to 10” in thickness range of 2 mm to 150 mm",
          WireSize: "0.1 mm to 10 mm",
          Length: "100 MM to 6000 MM",
          Type: "Black, Polish, Export",
          Form: "Round Bar, Square Bar, Rectangular Bar, Triangular, Oval Bar, Wire, Filler Rod",
          InspectionReports: "Mill Test Certificates, EN 10204 3.1, Chemical Reports, Mechanical Reports, PMI Test Reports, Visual Inspection Reports, Third Party Inspection Reports, NABL Approved Lab Reports, Destructive Test Reports, Non-Destructive Test Reports"
        }
      }
    },
    subProducts: [
      {
        id: 1,
        name: "Stainless Steel Round Bars & Rods Specifications",
        images: [
          productImages["stainless-steel-bars-rods1"],
          productImages["stainless-steel-bars-rods2"],
          productImages["stainless-steel-bars-rods3"],
          productImages["stainless-steel-bars-rods4"],
          productImages["stainless-steel-bars-rods5"],
          productImages["stainless-steel-bars-rods6"],
          productImages["stainless-steel-bars-rods7"],
          productImages["stainless-steel-bars-rods8"]
        ],
        description: `<strong>${companyName$1}</strong> offers premium-grade Stainless Steel Round Bars & Rods known for excellent toughness at cryogenic temperatures, superior strength-to-weight ratio, corrosion resistance, and ease of fabrication. These bars are manufactured in a variety of sizes and grades using advanced processes to ensure consistent performance in demanding environments.`,
        materialSpecifications: {
          Standards: "ASTM A276 / A182 / A479",
          Grades: "201, 202, 301, 302, 304, 304L, 309, 310, 316, 316L, 316LN, 317L, 321, 330, 347, 405, 409, 410, 416, 420, 430, 431, 440C, 17-4PH, 904L, AL-6XN (N08367), Nitronic 50 / 60, 422, 416, 446, Nimonic 80 (N07080), A286 (S66286), 15-5PH, Alloy 28 (N08028)"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Round Bars & Rods Specifications",
        images: [
          productImages["alloy-steel-bars-rods1"],
          productImages["alloy-steel-bars-rods2"],
          productImages["alloy-steel-bars-rods3"],
          productImages["alloy-steel-bars-rods4"],
          productImages["alloy-steel-bars-rods5"],
          productImages["alloy-steel-bars-rods6"],
          productImages["alloy-steel-bars-rods7"],
          productImages["alloy-steel-bars-rods8"]
        ],
        description: `<strong>${companyName$1}</strong> manufactures and supplies top-grade Alloy Steel Round Bars & Rods using high-quality materials and cutting-edge technology. These bars offer superior strength, hardenability, and resistance to wear and pressure. Available in various grades, sizes, and types, they are well-suited for use in multiple industrial applications.`,
        materialSpecifications: {
          Standards: "ASTM A182, ASME SA182",
          Grades: "F11, F12, F22, F5, F9, F91, 4140, 4130, Kanthal A1, Nichrome 80/20"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Steel Round Bars & Rods Specifications",
        images: [
          productImages["nickel-alloy-bars-rods1"],
          productImages["nickel-alloy-bars-rods2"],
          productImages["nickel-alloy-bars-rods3"],
          productImages["nickel-alloy-bars-rods4"],
          productImages["nickel-alloy-bars-rods5"],
          productImages["nickel-alloy-bars-rods6"],
          productImages["nickel-alloy-bars-rods7"],
          productImages["nickel-alloy-bars-rods8"]
        ],
        description: `<strong>${companyName$1}</strong> offers high-performance Nickel Alloy Round Bars & Rods with exceptional durability, corrosion resistance, and strength at elevated temperatures. These alloys are highly versatile and can be customized to specific client requirements in terms of size, shape, and specification — all at competitive prices.`,
        materialSpecifications: {
          Standards: "ASTM B160, B164, B166, B574, B473 / SB160, SB164, SB166, SB574, SB473",
          Grades: "Nickel 200, Nickel 201, Hastelloy C276, C22, B2, Monel 400, Monel K500, Inconel 600, 625, 718, Incoloy 800, 825, Alloy 20, 904L, Titanium Gr 2, Gr 5, Cu-Ni 90/10 (C70600), Cu-Ni 70/30 (C71500), Tantalum, Bismuth, Aluminium, Brass, Bronze, High-Speed Steel, Zinc, Lead"
        }
      },
      {
        id: 4,
        name: "Carbon Steel Round Bars & Rods Specifications",
        images: [
          productImages["carbon-steel-bars-rods1"],
          productImages["carbon-steel-bars-rods2"],
          productImages["carbon-steel-bars-rods3"],
          productImages["carbon-steel-bars-rods4"],
          productImages["carbon-steel-bars-rods5"],
          productImages["carbon-steel-bars-rods6"],
          productImages["carbon-steel-bars-rods7"],
          productImages["carbon-steel-bars-rods8"]
        ],
        description: `<strong>${companyName$1}</strong> is one of India’s largest manufacturers of Carbon Steel Bars & Rods. Using advanced production techniques and high-grade raw materials, we deliver durable and precision-engineered bars in multiple sizes and grades. These bars possess strong mechanical properties such as elongation, density, thermal conductivity, and corrosion resistance — making them ideal for structural and mechanical use.`,
        materialSpecifications: {
          Standards: "ASTM A105 / ASME SA105, ASTM A350 / ASME SA350",
          Grades: "Gr. LF2, LF3"
        }
      }
    ]
  },
  {
    id: 3,
    name: "Pipes & Tubes Manufacturers, Suppliers & Stockist in India",
    images: [
      bannerImages["pipes-tubes1"],
      bannerImages["pipes-tubes2"],
      bannerImages["pipes-tubes3"]
    ],
    productShortName: "Pipes & Tubes",
    description: `<strong>${companyName$1}</strong> is a trusted manufacturer, supplier, and exporter of a wide range of Pipes & Tubes available in different forms, shapes, dimensions, and material grades. 

We utilize high-grade raw materials and advanced machinery to deliver products that meet exact client specifications. Our wide portfolio of Pipes & Tubes is widely used across multiple industries. These products are available in material variants such as Stainless Steel, Duplex & Super Duplex Steel, Hastelloy, Monel, Inconel, Nickel, Carbon Steel, Alloy Steel, and Cupronickel.`,
    productDetails: {
      tableData: {
        tableName: "Specifications for Pipes & Tubes",
        materialSpecifications: {
          Dimensions: "ASTM, ASME and API",
          PipeSize: "Seamless Pipes: 1/2″ NB to 16″ NB, Welded Pipes: 1/8″ NB to 30″ NB, EFW Pipes: 6″ NB to 24″ NB",
          TubeSize: "Seamless Tubes: 1/2″ NB to 16″ NB, Welded Tubes: 1/8″ NB to 30″ NB, EFW Pipes: 6″ NB to 24″ NB",
          Schedule: "SCH5, SCH5S, SCH10, SCH10S, SCH20, SCH30, SCH40, STD, SCH80, XS, SCH60, SCH120, SCH140, SCH160, XXS",
          Type: "Seamless / ERW / EFW / Welded / Fabricated / LSAW Pipes",
          Form: "Welded Pipes, Seamless Pipes, EFW Pipes, ERW Pipes, Pipes, Tubes, Seamless Tubes, EFW Tubes, Hollow Tubes, Rectangular Tubes, Square Tubes, Oval Tubes, Capillary Tubes, Pan Cake Coils, Coiled, Hex, U Shape, Slotted, Hydraulic, Round, Rectangular, Square Pipes & Tubes etc.",
          Length: "Single Random, Double Random & Custom Cut Length",
          End: "Plain End, Beveled End, Threaded"
        }
      }
    },
    subProducts: [
      {
        id: 1,
        name: "Stainless Steel Pipes & Tubes Specifications",
        images: [
          productImages["stainless-steel-pipes-tubes1"],
          productImages["stainless-steel-pipes-tubes2"],
          productImages["stainless-steel-pipes-tubes3"],
          productImages["stainless-steel-pipes-tubes4"],
          productImages["stainless-steel-pipes-tubes5"],
          productImages["stainless-steel-pipes-tubes6"],
          productImages["stainless-steel-pipes-tubes7"],
          productImages["stainless-steel-pipes-tubes8"]
        ],
        description: `<strong>${companyName$1}</strong> offers high-quality Stainless Steel Pipes & Tubes in a wide range of grades, sizes, thicknesses, and specifications. We also provide customization options to meet specific client needs. These pipes and tubes are widely used in oil & gas, chemical processing, pulp & paper, boiler, heat exchanger, and nuclear industries.`,
        materialSpecifications: {
          Standards: "ASTM A312 / A213 / A269 / A358 / A778",
          Grades: "TP 201, 202, 301, 302, 304, 304L, 309, 310, 316, 316L, 316LN, 316Ti, 317L, 321, 347, 405, 409, 410, 420, 430, 440C, 904L, AL-6XN (N08367)"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Pipes & Tubes Specifications",
        images: [
          productImages["alloy-steel-pipes-tubes1"],
          productImages["alloy-steel-pipes-tubes2"],
          productImages["alloy-steel-pipes-tubes3"],
          productImages["alloy-steel-pipes-tubes4"],
          productImages["alloy-steel-pipes-tubes5"],
          productImages["alloy-steel-pipes-tubes6"],
          productImages["alloy-steel-pipes-tubes7"],
          productImages["alloy-steel-pipes-tubes8"]
        ],
        description: `<strong>${companyName$1}</strong> manufactures Alloy Steel Seamless Pipes & Tubes composed of chromium, molybdenum, and additional elements like silicon and manganese. These pipes are known for excellent strength, corrosion resistance, and durability under high temperatures and pressure. They are highly demanded across numerous industrial sectors for their robustness and weldability.`,
        materialSpecifications: {
          Standards: "ASTM A335 / A213",
          Grades: "P11, P12, P22, P5, P9, P91, T11, T12, T22, T5, T9, T91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Steel Pipes & Tubes Specifications",
        images: [
          productImages["nickel-alloy-pipes-tubes1"],
          productImages["nickel-alloy-pipes-tubes2"],
          productImages["nickel-alloy-pipes-tubes3"],
          productImages["nickel-alloy-pipes-tubes4"],
          productImages["nickel-alloy-pipes-tubes5"],
          productImages["nickel-alloy-pipes-tubes6"],
          productImages["nickel-alloy-pipes-tubes7"],
          productImages["nickel-alloy-pipes-tubes8"]
        ],
        description: `<strong>${companyName$1}</strong> supplies Nickel Alloy Pipes & Tubes known for excellent magnetic properties, thermal conductivity, and corrosion resistance. These pipes are ideal for applications requiring cleanliness, purity, and high performance under thermal stress. We provide both standard and custom sizes to meet specific project needs.`,
        materialSpecifications: {
          Standards: "ASTM B161, B165, B167, B444, B407, B423 / ASME SB161, SB165, SB167, SB444, SB407, SB423",
          Grades: "Nickel 200, 201, Inconel 600, 625, 718, Incoloy 800, 825, Hastelloy C276, C22, B2, Monel 400, K500, Alloy 20, Titanium Gr 2, Gr 5, Alloy 904L, Cu-Ni 90/10 (C70600), Cu-Ni 70/30 (C71500), Tantalum, Brass, Bronze, Aluminium, Zinc, Lead, Bismuth, HighSpeed Steel"
        }
      },
      {
        id: 4,
        name: "Carbon Steel Pipes & Tubes Specifications",
        images: [
          productImages["carbon-steel-pipes-tubes1"],
          productImages["carbon-steel-pipes-tubes2"],
          productImages["carbon-steel-pipes-tubes3"],
          productImages["carbon-steel-pipes-tubes4"],
          productImages["carbon-steel-pipes-tubes5"],
          productImages["carbon-steel-pipes-tubes6"],
          productImages["carbon-steel-pipes-tubes7"],
          productImages["carbon-steel-pipes-tubes8"]
        ],
        description: `<strong>${companyName$1}</strong> is a leading provider of Carbon Steel Pipes & Tubes in India. These products are manufactured using high carbon content steel, offering excellent strength, weldability, and formability. Widely used in industrial piping systems, these pipes are available in different grades, sizes, shapes, and specifications.`,
        materialSpecifications: {
          Standards: "ASTM A106 / A53 / A179 / A333 / A210",
          Grades: "Gr. B, API 5L X42/X46/X52/X56/X60/X65/X70 PSL-1 / PSL-2, Gr. 3, 6, IS 1239, IS 3589, Boiler Tube – BS 3059 – Gr. 320, 360, Gr. A1, BS 6323"
        }
      }
    ]
  },
  {
    id: 4,
    name: "Buttweld Pipe Fittings Manufacturers, Suppliers & Stockist in India",
    images: [
      bannerImages["pipe-fittings1"],
      bannerImages["pipe-fittings2"],
      bannerImages["pipe-fittings3"]
    ],
    productShortName: "Pipe Fittings",
    description: `<strong>${companyName$1}</strong> is a reputed manufacturer, supplier, and stockist of premium-quality Buttweld Pipe Fittings in India. Known for their high tensile strength, corrosion resistance, and excellent finish, our fittings are widely demanded across industries. We manufacture, export, and supply Buttweld Fittings that conform to national and international quality standards, supported by advanced refining and fabrication equipment.

We offer ASME B16.9 Buttweld Fittings such as Elbows, Tees, Crosses, Reducers, Nipples, and Couplings in various materials including Stainless Steel, Carbon Steel, and High Nickel Alloys.`,
    productDetails: {
      tableData: {
        tableName: "Specifications for Buttweld Pipe Fittings",
        materialSpecifications: {
          "Butt weld Fittings Dimensions": "ASME B16.9, ANSI B16.9, ASME B16.28, MSS-SP-43",
          "Seamless Fittings Size": '1/2" NB to 10" NB',
          "Welded Fittings Size": '1/2" NB to 48" NB',
          "Pipe Fitting Size": '1/8" NB to 48" NB (Seamless, 100% X-Ray Welded, Fabricated)',
          "Pipe Fittings Thickness": "5s, 10s, 40s, 80s, 10, 20, 40, STD, 60, 80, XS, 100, 120, 140, 160, XXS (NACE MR 01-75 compliant)",
          "Type of Pipe Fittings": "Seamless, Welded, Fabricated",
          "Specialized manufacturer of Pipe Fittings": "Bend, Cross, Tee, Elbow, 90º Elbow, 45º Elbow, Reducer, Stub End, Cap",
          "Butt weld Fittings Form": "Elbow, Tee, Cross, Reducer, End Cap, 45° Elbow, 3D Elbow, 1.5D Elbow, 90° Elbow, 5D Elbow, Reducing Elbow, Reducing Tee, Long Radius Elbow, 180° Elbow, Short Stub End, 10D Elbow, Short Radius Elbow, Concentric Reducer, Eccentric Reducer, Bends, Piggable Bend, Reducing Nipple, U-Bend, Equal Tee, Collar, Dish Cap, 180° Bend, Long Stub End, Unequal Tee, Lateral Tee, etc.",
          "Pipe Fittings Schedule": "SCH10, SCH20, SCH30, SCH40, SCH60, SCH80, SCH120, SCH140, SCH160, STD, XS, XXS",
          "Pipe Fittings Connection": "Welded",
          "Available Materials of Pipe Fittings": "Stainless Steel, Carbon Steel, Alloy Steel, Duplex Steel, Super Duplex Steel, High Nickel Alloys, Inconel, Incoloy, Monel, Hastelloy, Alloy 20, Titanium, Copper Nickel"
        }
      }
    },
    subProducts: [
      {
        id: 1,
        name: "Stainless Steel Pipe Fittings Specifications",
        images: [
          productImages["stainless-steel-pipe-fittings1"],
          productImages["stainless-steel-pipe-fittings2"],
          productImages["stainless-steel-pipe-fittings3"],
          productImages["stainless-steel-pipe-fittings4"],
          productImages["stainless-steel-pipe-fittings5"],
          productImages["stainless-steel-pipe-fittings6"],
          productImages["stainless-steel-pipe-fittings7"],
          productImages["stainless-steel-pipe-fittings8"]
        ],
        description: `<strong>${companyName$1}</strong> offers Stainless Steel Buttweld Fittings in a wide range of shapes, sizes, grades, and specifications in compliance with ANSI/ASME and DIN standards. Our SS fittings range includes reducers, elbows, tees, crosses, stub ends, and pipe bends, designed for durability and long-term performance in demanding applications.`,
        materialSpecifications: {
          Standards: "ASTM A403 / ASME SA403",
          Grades: "WP – 201, 202, 301, 302, 304, 304L, 304H, 309, 309S, 310, 310S, 316, 316L, 316LN, 316Ti, 317, 317L, 321, 321H, 347, 347H, 405, 409, 410, 410S, 420, 430, 434, 436, 440A, 440B, 440C, 904L, UNS S31803, S32205 (2205), UNS S32750, S32760 (Super Duplex), 254 SMO (UNS S31254), Alloy 20 (UNS N08020), Incoloy 800/800H/800HT, Inconel 600/625/718, Hastelloy C22/C276"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Buttweld Fittings Specifications",
        images: [
          productImages["alloy-steel-pipe-fittings1"],
          productImages["alloy-steel-pipe-fittings2"],
          productImages["alloy-steel-pipe-fittings3"],
          productImages["alloy-steel-pipe-fittings4"],
          productImages["alloy-steel-pipe-fittings5"],
          productImages["alloy-steel-pipe-fittings6"],
          productImages["alloy-steel-pipe-fittings7"],
          productImages["alloy-steel-pipe-fittings8"]
        ],
        description: `We produce high-quality Alloy Steel Buttweld Fittings, including custom-fabricated pieces up to 48”. Our product range includes elbows, tees, reducers, crosses, stub ends, and pipe bends. Alloy Steel fittings are ideal for applications where corrosion resistance is less critical but strength and durability are essential.`,
        materialSpecifications: {
          Standards: "ASTM A335 / ASME SA335",
          Grades: "WP11, WP12, WP22, WP5, WP9, WP91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Steel Buttweld Fittings Specifications",
        images: [
          productImages["nickel-alloy-pipe-fittings1"],
          productImages["nickel-alloy-pipe-fittings2"],
          productImages["nickel-alloy-pipe-fittings3"],
          productImages["nickel-alloy-pipe-fittings4"],
          productImages["nickel-alloy-pipe-fittings5"],
          productImages["nickel-alloy-pipe-fittings6"],
          productImages["nickel-alloy-pipe-fittings7"],
          productImages["nickel-alloy-pipe-fittings8"]
        ],
        description: `<strong>${companyName$1}</strong> offers a comprehensive range of Nickel Alloy Buttweld Fittings available in various sizes, grades, and thicknesses. These fittings provide excellent corrosion resistance, strength, and heat resistance, making them suitable for industries like aerospace, chemical processing, and power generation.`,
        materialSpecifications: {
          Standards: "ASTM B366 / ASME SB366",
          Grades: `200 (WPN, N02200), 201 (WPNL, N02201), Alloy 20 (WP20CB, N08020), 600 (WPNCI, N06600), 601 (N06601), 625 (WPNCMC, N06625), 718 (N07718), 800 (WPNIC, N08800), 800H (WPNIC10, N08810), 800HT (WPNIC11, N08811), 825 (WPNICMC, N08825), 904L (N08904), 400 (WPNC, N04400), 500 (N05500), C276 (WPHC276, N10276), C4 (WPHC4, N06455), C22 (WPHC22, N06022), C2000 (WPHC2000, N06200), X (WPHX, N06002), B2 (WPHB-2, N10665), B3 (WPHB-3, N10675), Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Pipe Fittings Specifications",
        images: [
          productImages["carbon-steel-pipe-fittings1"],
          productImages["carbon-steel-pipe-fittings2"],
          productImages["carbon-steel-pipe-fittings3"],
          productImages["carbon-steel-pipe-fittings4"],
          productImages["carbon-steel-pipe-fittings5"],
          productImages["carbon-steel-pipe-fittings6"],
          productImages["carbon-steel-pipe-fittings7"],
          productImages["carbon-steel-pipe-fittings8"]
        ],
        description: `<strong>${companyName$1}</strong> is a leading manufacturer and supplier of Carbon Steel Buttweld Fittings, offering outstanding strength and weldability. These fittings are available in various shapes and dimensions and are widely used in structural and pressure applications. Our CS fittings include elbows, tees, reducers, crosses, nipples, and more.`,
        materialSpecifications: {
          Standards: "ASTM A234 / A420 / A860",
          Grades: "Gr. WPB, Gr. WPL-3, WPL-6, IS 1239, IS 3589, WPHY42, WPHY46, WPHY52, WPHY60, WPHY65, WPHY70"
        }
      }
    ]
  },
  {
    id: 5,
    name: "Flanges Manufacturers, Suppliers & Stockist in India",
    images: [
      bannerImages["flanges1"],
      bannerImages["flanges2"],
      bannerImages["flanges3"]
    ],
    productShortName: "Flanges",
    description: `<strong>${companyName$1}</strong> is a trusted manufacturer, supplier, and stockist of high-quality steel flanges in India. We offer a wide variety of flanges in different types, shapes, sizes, dimensions, and material grades. Depending on the connection method, our range includes Slip-On Flanges, Orifice Flanges, Spectacle Flanges, Lap Joint Flanges, Raised Face Flanges, Ring Joint Flanges, Weld Neck Flanges, Socket Weld Flanges, and more.

Flanges are essential components used to connect pipes, valves, pumps, and other equipment to form a complete piping system. These connections are typically made through bolting and welding methods.`,
    productDetails: {
      tableData: {
        tableName: "Specifications for Flanges",
        materialSpecifications: {
          "Size": "6 NB to 2400 NB",
          "Class": "150#, 300#, 400#, 600#, 900#, 1500#, 2500#, 3000# (also as per National & International Standards)",
          "Standard": "ANSI B16.5, B16.47 Series A (MSS SP-44), B16.47 Series B (API 605), MSS SP-43, DIN 2527–2642, BS 10, IS 1538 & IS 6392, JIS Flanges, etc.",
          "Types of Flanges": "Weld Neck, Slip-On, Blind, Lap Joint, Socket-Weld, Threaded, Long Weld Neck, Spectacle Blind, Spacer, Ring Type Joint, Reducing, Raised Face, Orifice, Deck, Large Diameter, Custom, Drawing, Forged, Plate, Flat Face",
          "Flange Dimension Standard": "ANSI B16.5 (150# to 2500#), ANSI B16.47 (Series A/B), EN 1092-1, DIN, UNI, API 6A, BS 10, JIS B2220, MSS SP-44, AS 2129, IS 6392",
          "Form": "Slip-On (SO), Blind (BL), Lap Joint (LF), Socket-Weld (SW), Weld Neck (WN), Long Weld Neck (LWN), RTJ, Threaded, RF, FF, Customized"
        }
      }
    },
    subProducts: [
      {
        id: 1,
        name: "Stainless Steel Flanges Specifications",
        images: [
          productImages["stainless-steel-flanges1"],
          productImages["stainless-steel-flanges2"],
          productImages["stainless-steel-flanges3"],
          productImages["stainless-steel-flanges4"],
          productImages["stainless-steel-flanges5"],
          productImages["stainless-steel-flanges6"],
          productImages["stainless-steel-flanges7"],
          productImages["stainless-steel-flanges8"]
        ],
        description: `<strong>${companyName$1}</strong> offers an extensive range of stainless steel flanges in various sizes and pressure classes to meet your specific project needs, including rare configurations. Our Stainless Steel Pipe Flanges offer excellent corrosion resistance, high strength, and mechanical durability. For example, SS Blind Flanges are ideal for sealing off piping systems or vessel openings with secure and leak-proof connections.`,
        materialSpecifications: {
          Standards: "ASTM A403 / ASME SA403",
          Grades: "WP – 201, 202, 301, 302, 304, 304L, 309, 310, 316, 316L, 316LN, 316Ti, 317L, 321, 347, 405, 409, 410, 420, 430, 440C, 904L"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Flanges Specifications",
        images: [
          productImages["alloy-steel-flanges1"],
          productImages["alloy-steel-flanges2"],
          productImages["alloy-steel-flanges3"],
          productImages["alloy-steel-flanges4"],
          productImages["alloy-steel-flanges5"],
          productImages["alloy-steel-flanges6"],
          productImages["alloy-steel-flanges7"],
          productImages["alloy-steel-flanges8"]
        ],
        description: `<strong>${companyName$1}</strong> is a top manufacturer and supplier of Alloy Steel Flanges in India. These flanges offer excellent strength and chemical resistance and are suitable for high-temperature environments (1725–1850°F). The Alloy Steel Slip-On Flanges are resistant to water, atmospheric conditions, and chemicals, making them suitable for various critical applications.`,
        materialSpecifications: {
          Standards: "ASTM A335 / ASME SA335",
          Grades: "WP11, WP12, WP22, WP5, WP9, WP91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Steel Flanges Specifications",
        images: [
          productImages["nickel-alloy-flanges1"],
          productImages["nickel-alloy-flanges2"],
          productImages["nickel-alloy-flanges3"],
          productImages["nickel-alloy-flanges4"],
          productImages["nickel-alloy-flanges5"],
          productImages["nickel-alloy-flanges6"],
          productImages["nickel-alloy-flanges7"],
          productImages["nickel-alloy-flanges8"]
        ],
        description: `<strong>${companyName$1}</strong> has earned a solid reputation for producing high-quality Nickel Alloy Flanges. These flanges offer outstanding thermal and electrical conductivity, low vapor pressure, and excellent weldability. Nickel Alloy 200 and 201 are commonly used in industries requiring high corrosion resistance and formability.`,
        materialSpecifications: {
          Standards: "ASTM B366 / ASME SB366",
          Grades: `200 (WPN, N02200), 201 (WPNL, N02201), Alloy 20 (WP20CB, N08020), 600 (WPNCI, N06600), 601 (N06601), 625 (WPNCMC, N06625), 718 (N07718), 800 (WPNIC, N08800), 800H (WPNIC10, N08810), 800HT (WPNIC11, N08811), 825 (WPNICMC, N08825), 904L (N08904), 400 (WPNC, N04400), 500 (N05500), C276 (WPHC276, N10276), C4 (WPHC4, N06455), C22 (WPHC22, N06022), C2000 (WPHC2000, N06200), X (WPHX, N06002), B2 (WPHB-2, N10665), B3 (WPHB-3, N10675), Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Flanges Specifications",
        images: [
          productImages["carbon-steel-flanges1"],
          productImages["carbon-steel-flanges2"],
          productImages["carbon-steel-flanges3"],
          productImages["carbon-steel-flanges4"],
          productImages["carbon-steel-flanges5"],
          productImages["carbon-steel-flanges6"],
          productImages["carbon-steel-flanges7"],
          productImages["carbon-steel-flanges8"]
        ],
        description: `<strong>${companyName$1}</strong> manufactures premium-grade Carbon Steel Flanges that deliver excellent mechanical strength and corrosion resistance. These flanges are designed to withstand high pressures and temperatures, making them ideal for applications in power plants, petrochemical industries, and more.`,
        materialSpecifications: {
          Standards: "ASTM A234 / A420 / A860",
          Grades: "Gr. WPB, Gr. WPL-3, WPL-6, IS 1239, IS 3589, WPHY42, WPHY46, WPHY52, WPHY60, WPHY65, WPHY70"
        }
      }
    ]
  },
  {
    id: 6,
    name: "Forged Fittings Manufacturers, Suppliers & Stockist in India",
    images: [
      bannerImages["forged-fittings1"],
      bannerImages["forged-fittings2"],
      bannerImages["forged-fittings3"]
    ],
    productShortName: "Forged Fittings",
    description: `<strong>${companyName$1}</strong> is one of the most preferred manufacturers, suppliers, and exporters of premium-quality Forged Fittings known for their outstanding durability and reliable performance. These fittings are offered in a variety of types, forms, sizes, material grades, and specifications. Known for their long operational life and superior build, our forged pipe fittings include 90° elbows, 45° elbows, half couplings, lateral outlets, unions, crosses, full couplings, and more.

Forged Fittings are a conventional and robust solution for joining pipes, especially suitable for piping systems with sizes up to NPS 2. Engineered to perform under various pressure and temperature conditions, our forged fittings conform to stringent global standards and ensure dependable operation in critical applications.`,
    productDetails: {
      tableData: {
        tableName: "Specifications for Forged Fittings",
        materialSpecifications: {
          "DIMENSION": "ANSI B16.11, ASME B16.11, BS 3799, MSS SP-79, 83, 95, 97",
          "TYPE": "Socket Weld (S/W) & Screwed (SCRD) – NPT, BSP, BSPT / Threaded Fitting",
          "RANGE": '1/8" NB TO 48" NB',
          "FORMS": "Elbow, Tee, Cross, 45° Elbow, 90° Elbow, Cap, End Caps, Bends, Stub Ends - Lap Joint, Nipples, Outlet Fittings, Boss, Union, Plug, Barrel Nipple, Full Coupling, Half Coupling, Swage Nipple & Customized Fittings",
          "CLASS": "3000LBS, 6000LBS, 9000LBS"
        }
      }
    },
    subProducts: [
      {
        id: 1,
        name: "Stainless Steel Forged Fittings Specifications",
        images: [
          productImages["stainless-steel-forged-fittings1"],
          productImages["stainless-steel-forged-fittings2"],
          productImages["stainless-steel-forged-fittings3"],
          productImages["stainless-steel-forged-fittings4"],
          productImages["stainless-steel-forged-fittings5"],
          productImages["stainless-steel-forged-fittings6"],
          productImages["stainless-steel-forged-fittings7"],
          productImages["stainless-steel-forged-fittings8"],
          productImages["stainless-steel-forged-fittings9"],
          productImages["stainless-steel-forged-fittings10"]
        ],
        description: `<strong>${companyName$1}</strong> provides a comprehensive range of stainless steel forged fittings in multiple grades and dimensions. With a reputation for consistent quality and on-time delivery, we manufacture forged fittings that are widely used across industries for their excellent corrosion resistance, strength, and long service life.`,
        materialSpecifications: {
          Standards: "ASTM A182 & ASME SA182",
          Grades: "F201, F202, F301, F302, F304, F304L, F309, F310, F316, F316L, F316LN, F316Ti, F317L, F321, F347, 405, 409, 410, 420, 430, 440C, F904L"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Forged Fittings Specifications",
        images: [
          productImages["alloy-steel-forged-fittings1"],
          productImages["alloy-steel-forged-fittings2"],
          productImages["alloy-steel-forged-fittings3"],
          productImages["alloy-steel-forged-fittings4"],
          productImages["alloy-steel-forged-fittings5"],
          productImages["alloy-steel-forged-fittings6"],
          productImages["alloy-steel-forged-fittings7"],
          productImages["alloy-steel-forged-fittings8"],
          productImages["alloy-steel-forged-fittings9"],
          productImages["alloy-steel-forged-fittings10"]
        ],
        description: `<strong>${companyName$1}</strong> manufactures and supplies an extensive variety of alloy steel forged fittings using advanced machinery and skilled technicians. Designed for high-temperature and high-pressure applications, these fittings are engineered to perform reliably in demanding environments.`,
        materialSpecifications: {
          Standards: "ASTM A182 & ASME SA182",
          Grades: "F1, F5, F9, F11, F12, F22, F91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Forged Fittings Specifications",
        images: [
          productImages["nickel-alloy-forged-fittings1"],
          productImages["nickel-alloy-forged-fittings2"],
          productImages["nickel-alloy-forged-fittings3"],
          productImages["nickel-alloy-forged-fittings4"],
          productImages["nickel-alloy-forged-fittings5"],
          productImages["nickel-alloy-forged-fittings6"],
          productImages["nickel-alloy-forged-fittings7"],
          productImages["nickel-alloy-forged-fittings8"],
          productImages["nickel-alloy-forged-fittings9"],
          productImages["nickel-alloy-forged-fittings10"]
        ],
        description: `As a leading manufacturer and exporter, <strong>${companyName$1}</strong> delivers high-performance Nickel Alloy Forged Fittings known for their exceptional corrosion resistance and strength in extreme environments. These fittings are widely used in industries such as aerospace, marine, petrochemical, and chemical processing.`,
        materialSpecifications: {
          Standards: "ASTM / ASME SB 564, SB 160, SB 366, SB 472",
          Grades: `Hastelloy B2/B3/C4/C22/C276/C2000/X, Inconel 600/601/625/718/715, Incoloy 800/800H/800HT/825/925, Nickel 200/201, Alloy 36/42/A286, Monel 400/K500, Alloy 2205/2507, UNS N08020, UNS R30605, Cu-Ni 70/30 & 90/10, Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Forged Fittings Specifications",
        images: [
          productImages["carbon-steel-forged-fittings1"],
          productImages["carbon-steel-forged-fittings2"],
          productImages["carbon-steel-forged-fittings3"],
          productImages["carbon-steel-forged-fittings4"],
          productImages["carbon-steel-forged-fittings5"],
          productImages["carbon-steel-forged-fittings6"],
          productImages["carbon-steel-forged-fittings7"],
          productImages["carbon-steel-forged-fittings8"],
          productImages["carbon-steel-forged-fittings9"],
          productImages["carbon-steel-forged-fittings10"]
        ],
        description: `<strong>${companyName$1}</strong> has been a pioneer in manufacturing Carbon Steel Forged Fittings. These fittings are widely used in high-pressure systems for their strength and mechanical durability. Suitable for extreme temperature conditions—whether cold, annealed, or high-heat—they are produced with precision using state-of-the-art technology.`,
        materialSpecifications: {
          Standards: "ASTM A105 / A350",
          Grades: "Gr. LF2, LF3, ASTM A694 – F42, F46, F48, F50, F52, F56, F60, F65, F70"
        }
      }
    ]
  },
  {
    id: 7,
    name: "Fasteners Manufacturers, Suppliers & Stockist in India",
    images: [
      bannerImages["fasteners1"],
      bannerImages["fasteners2"],
      bannerImages["fasteners3"]
    ],
    productShortName: "Fasteners",
    description: `<strong>${companyName$1}</strong>, an ISO 9001:2015 Certified Company, is one of the leading manufacturers, stockists, and suppliers of high-quality Fasteners in India. Our fasteners are manufactured in compliance with stringent industrial standards and are available in a comprehensive range of sizes from M2 to M150, with lengths up to 6 meters.

Renowned for their corrosion resistance, excellent tensile strength, and long-lasting performance, our range includes nuts, bolts, screws, and washers made from a variety of materials such as Stainless Steel, Inconel, Monel, Brass, Duplex, Aluminum, and more.

Yes, fasteners are available in stock and ready for immediate delivery. For custom specifications or large quantities, please reach out to us for a free quote.`,
    productDetails: {
      tableData: {
        tableName: "Specifications for Fasteners",
        materialSpecifications: {
          SIZE: "M2 to M150",
          LENGTH: "Up to 6 Meters",
          "Types of Nuts": "Hexagon Nuts, Dome Nuts, Square Nuts, Hex Nut, Heavy Hex Nut, Hexagon Coupling Nuts, Self-Locking Nut, Hex Head Nut, Hexagon Castle Nuts, Hexagon Thin Nuts, Hexagon Domed Cap Nuts",
          "Types of Bolts": "Hex Head Bolts, J Bolts, Lag Bolts, Wing Screw Bolts, Hex Bolts, Stud Bolts, T-Head Bolts, Threaded Bolts, Anchor Bolts, Mushroom Head Square Neck Bolts, Anchor Studs, Foundation Bolts, Eye Bolts, U-Bolts, Countersunk Bolts, H Bolts, Square Bolts, Structural Bolts",
          "Types of Screws": "Grub Screw, Hex Screw, Socket Head Cap Screw, Anchor Screw, CSK Screw, Threaded Screw, Machine Screw, Socket Set Screws, Concrete Screw, Shoulder Screw, Hex Head Screw, Panel Screw, Cap Screw, Blind Rivet",
          "Types of Washers": "Square Washer, Plain Washer, Heavy Duty Spring Washers, Tooth Washers, Plain Big & Small Washers, Spring Lock Washers, Machine Washer, Flat Washer, Sealing Washer, Tab Washers (One & Two Tab), Slot Washer, Star Washers, Split Washer",
          FINESH: "Bright, Black & Polish"
        }
      }
    },
    subProducts: [
      {
        id: 1,
        name: "Stainless Steel Fasteners Specifications",
        images: [
          productImages["stainless-steel-fasteners1"],
          productImages["stainless-steel-fasteners2"],
          productImages["stainless-steel-fasteners3"],
          productImages["stainless-steel-fasteners4"],
          productImages["stainless-steel-fasteners5"],
          productImages["stainless-steel-fasteners6"],
          productImages["stainless-steel-fasteners7"],
          productImages["stainless-steel-fasteners8"],
          productImages["stainless-steel-fasteners9"],
          productImages["stainless-steel-fasteners10"]
        ],
        description: `<strong>${companyName$1}</strong> offers a comprehensive inventory of stainless steel fasteners suitable for a wide range of industrial applications. These fasteners are available in multiple grades and provide excellent strength and corrosion resistance. We maintain ready stock of all major grades including SS 304, 316, 310, 904L, and others.`,
        materialSpecifications: {
          Standards: "ASTM A182, ASME SA182",
          Grades: "F201, F202, F301, F302, F304, F304L, F309, F310, F316, F316L, F316LN, F317L, F321, F347, 405, 409, 410, 420, 430, 440C, F904L, Al-6XN (N08367), Nitronic 50 / 60, 422, 416, 446, Nimonic 80 (N07080), A286 (S66286), 17-4ph, 15-5ph, Alloy 28 (N08028)"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Fasteners Specifications",
        images: [
          productImages["alloy-steel-fasteners1"],
          productImages["alloy-steel-fasteners2"],
          productImages["alloy-steel-fasteners3"],
          productImages["alloy-steel-fasteners4"],
          productImages["alloy-steel-fasteners5"],
          productImages["alloy-steel-fasteners6"],
          productImages["alloy-steel-fasteners7"],
          productImages["alloy-steel-fasteners8"],
          productImages["alloy-steel-fasteners9"],
          productImages["alloy-steel-fasteners10"]
        ],
        description: `<strong>${companyName$1}</strong> manufactures alloy steel fasteners in a variety of grades, dimensions, and finishes to meet critical performance requirements. These fasteners are widely used in power plants, petrochemical industries, and high-temperature environments.`,
        materialSpecifications: {
          Standards: "ASTM A182, ASME SA182",
          Grades: "F11, F12, F22, F5, F9, F91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Fasteners Specifications",
        images: [
          productImages["nickel-alloy-fasteners1"],
          productImages["nickel-alloy-fasteners2"],
          productImages["nickel-alloy-fasteners3"],
          productImages["nickel-alloy-fasteners4"],
          productImages["nickel-alloy-fasteners5"],
          productImages["nickel-alloy-fasteners6"],
          productImages["nickel-alloy-fasteners7"],
          productImages["nickel-alloy-fasteners8"],
          productImages["nickel-alloy-fasteners9"],
          productImages["nickel-alloy-fasteners10"]
        ],
        description: `We offer a broad selection of Nickel Alloy Fasteners that include premium-grade materials such as Inconel, Monel, Hastelloy, and more. These fasteners are engineered for superior resistance to corrosion, oxidation, and extreme heat, making them suitable for critical applications in aerospace, marine, and chemical industries.`,
        materialSpecifications: {
          Standards: "ASTM B160, B164, B425, B166, B446, B574, B472 / ASME SB160, SB164, SB425, SB166, SB446, SB574, SB472",
          Grades: `Hastelloy B2/B3/C4/C22/C276/C2000/X, Inconel 600/601/625/715/718, Incoloy 800/800H/800HT/825/925, Nickel 200/201, Alloy 36/42/A286, Monel 400/K500, Alloy 2205/2507, UNS N08020, UNS R30605, Cu-Ni 70/30 & 90/10, Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Fasteners Specifications",
        images: [
          productImages["carbon-steel-fasteners1"],
          productImages["carbon-steel-fasteners2"],
          productImages["carbon-steel-fasteners3"],
          productImages["carbon-steel-fasteners4"],
          productImages["carbon-steel-fasteners5"],
          productImages["carbon-steel-fasteners6"],
          productImages["carbon-steel-fasteners7"],
          productImages["carbon-steel-fasteners8"],
          productImages["carbon-steel-fasteners9"],
          productImages["carbon-steel-fasteners10"]
        ],
        description: `<strong>${companyName$1}</strong> produces durable and high-strength carbon steel fasteners that are widely used in high-pressure and high-temperature environments. Manufactured in compliance with ASTM and ASME standards, these fasteners are an economical solution for structural and industrial applications.`,
        materialSpecifications: {
          Standards: "ASTM A193, A194, ASME SA193, SA194",
          Grades: "MS, Gr. B7, B8, B16, Gr. L7, 4.6, 8.8, 10.9"
        }
      }
    ]
  },
  {
    id: 8,
    name: "Valves Manufacturers, Suppliers & Stockist in India",
    productShortName: "Valves",
    images: [
      bannerImages["valves1"],
      bannerImages["valves2"],
      bannerImages["valves3"],
      bannerImages["valves4"],
      bannerImages["valves5"]
    ],
    description: `<strong>${companyName$1}</strong> is a leading manufacturer and supplier of high-quality industrial valves, catering to both domestic and international markets. Our valves are designed to meet global standards including AISI, BS, IS, ASME, and ANSI. They efficiently regulate, control, and direct fluid flow through mechanisms like full closure, partial opening, or directional changes.

We offer a diverse range of valves such as Ball Valves, Gate Valves, Needle Valves, Globe Valves, Butterfly Valves, Check Valves, Control Valves, and Safety Valves. Manufactured using premium materials like Stainless Steel, High Nickel Alloys, Carbon Steel, and more, our valves are known for excellent corrosion and wear resistance, making them suitable for high-pressure and high-temperature applications.

Yes, our valves are available in stock and ready for dispatch. For custom solutions or bulk inquiries, feel free to contact us and get a free quote.`,
    productDetails: {
      tableData: {
        tableName: "Specifications for Valves",
        materialSpecifications: {
          Standard: "API 600 / BS1414, API 598 / BS EN 12266-1, ASME B16.10, ASME B16.5, ASME B16.25, ASME B16.34",
          "Bolt / Screw Size": 'M3 – M56 | 3/6" to 2" | Custom Sizes Available',
          Size: '1/8" to 1", Custom Sizes Available on Request',
          "Working Pressure": "Up to 6000 PSIG; higher-pressure variants available on request",
          "End Connection": "Male/Female NPT, BSPT, Socket Weld (SW), Dual Ferrule Tube, Male to Female, Female to Female",
          "Temperature Rating": "PTFE up to 450°F (232°C) / Grafoil up to 700°F (371°C)",
          "Pressure Rating": "150#, 300#, 600#, 800#, 1500#"
        }
      }
    },
    subProducts: [
      {
        id: 1,
        name: "Stainless Steel Valves Specifications",
        images: [
          productImages["stainless-steel-valves1"],
          productImages["stainless-steel-valves2"],
          productImages["stainless-steel-valves3"],
          productImages["stainless-steel-valves4"],
          productImages["stainless-steel-valves5"],
          productImages["stainless-steel-valves6"],
          productImages["stainless-steel-valves7"],
          productImages["stainless-steel-valves8"]
        ],
        description: `<strong>${companyName$1}</strong> is one of India's largest exporters of stainless steel valves. These valves are widely used in industries such as petrochemicals, chemicals, water treatment, gas distribution, and general engineering. Our Stainless Steel Ball Valves are easy to maintain, highly durable, and corrosion-resistant.`,
        materialSpecifications: {
          Grades: "304, 304L, 309, 310, 316, 316L, 317L, 321, 347, 405, 409, 410, 420, 430, 440C, 904L"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Valves Specifications",
        images: [
          productImages["alloy-steel-valves1"],
          productImages["alloy-steel-valves2"],
          productImages["alloy-steel-valves3"],
          productImages["alloy-steel-valves4"],
          productImages["alloy-steel-valves5"],
          productImages["alloy-steel-valves6"],
          productImages["alloy-steel-valves7"],
          productImages["alloy-steel-valves8"],
          productImages["alloy-steel-valves9"],
          productImages["alloy-steel-valves10"]
        ],
        description: `Our Alloy Steel Valves, including Butterfly and Gate Valves, are manufactured using premium ASTM A217 grade materials. With advanced production capabilities, we offer customizable sizes and configurations suited for high-pressure, high-temperature applications across a wide range of industries.`,
        materialSpecifications: {
          Standards: "ASTM A182, ASME SA182",
          Grades: "F11, F12, F22, F5, F9, F91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Valves Specifications",
        images: [
          productImages["nickel-alloy-valves1"],
          productImages["nickel-alloy-valves2"],
          productImages["nickel-alloy-valves3"],
          productImages["nickel-alloy-valves4"],
          productImages["nickel-alloy-valves5"],
          productImages["nickel-alloy-valves6"],
          productImages["nickel-alloy-valves7"],
          productImages["nickel-alloy-valves8"],
          productImages["nickel-alloy-valves9"]
          // productImages["nickel-alloy-valves10"],
        ],
        description: `<strong>${companyName$1}</strong> manufactures precision-engineered Nickel Alloy Valves ideal for handling corrosive fluids in chemical processing, marine, steam, and gas systems. These valves are engineered for optimal resistance and longevity, available in custom sizes and pressure ratings.`,
        materialSpecifications: {
          Standards: "ASTM B160, B164, B425, B166, B446, B574, B472 / ASME SB160, SB164, SB425, SB166, SB446, SB574, SB472",
          Grades: `Hastelloy (B2, B3, C4, C22, C276, C2000, X), Inconel (600, 601, 625, 715, 718), Incoloy (800, 800H, 800HT, 825, 925), Nickel (200, 201, 36, 42, A286), Monel (400, K500), Alloy 2205, 2507, Cu-Ni 70/30 & 90/10, Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Valves Specifications",
        images: [
          productImages["carbon-steel-valves1"],
          productImages["carbon-steel-valves2"],
          productImages["carbon-steel-valves3"],
          productImages["carbon-steel-valves4"],
          productImages["carbon-steel-valves5"],
          productImages["carbon-steel-valves6"],
          productImages["carbon-steel-valves7"],
          productImages["carbon-steel-valves8"],
          productImages["carbon-steel-valves9"],
          productImages["carbon-steel-valves10"]
        ],
        description: `<strong>${companyName$1}</strong> offers robust and cost-effective Carbon Steel Valves, including ASTM A105 and A350 grades. Designed for durability and performance under pressure, these valves are widely used in power generation, oil & gas, water treatment, and other heavy-duty applications.`,
        materialSpecifications: {
          Standards: "ASTM A105 / A350",
          Grades: "Cast Iron, Gr. LF2, LF3"
        }
      }
    ]
  },
  {
    id: 9,
    productShortName: "Angles, Channels & Flat",
    images: [
      bannerImages["angles-channels-flats1"],
      bannerImages["angles-channels-flats2"],
      bannerImages["angles-channels-flats3"]
    ],
    name: "Angles, Channels & Flat Manufacturers, Suppliers & Stockist in India",
    description: `<strong>${companyName$1}</strong> mainly use high-quality raw material and advanced machinery to produced world class products. Our production unit manufactured these Angles, Channels & Flats as per Indian and International Standards. Various types of angles & channels including Equal Angles, Unequal Angles, C-Channels, and U-Channels are provided with excellent surface finish and dimensional accuracy.

  The different types of industries where our high-quality angles & channels used are paper & pulp, construction, piping, water treatment applications, raceways, braces and frames for machinery and housing in corrosive environments, etc.`,
    productDetails: {
      tableData: {
        tableName: "Specifications for Angles, Channels & Flat",
        materialSpecifications: {
          Width: "20mm to 150mm",
          Thickness: "03mm To 10mm",
          Length: "upto 12 Feet",
          Finish: "Mill, Customer specific finish",
          Surface: "Anodize, electrophoresis, powder coating, PVDF coating, wood grain painting, matted, etc.",
          Type: "Angles, Channels, Flat",
          Processing: "Cutting, Forming, Drilling/Machining, Grinding, Testing",
          "Type of material": "stainless steel, nickel alloy, titanium, aluminum",
          Dimensions: "EN, DIN, JIS, ASTM, BS, ASME, AISI",
          Standards: "ASTM A 276/A 276M,A 484/A 484M,A 564/A 564M,A 582/A582M,A 638 /A 638M,A705/A705M",
          Size: "angle – 5mm to 9mm, channel – 40mm*20mm~300mm*300mm",
          Types: "Equal angle, Unequal angle, U channel, C channel"
        }
      }
    },
    subProducts: [
      {
        id: 1,
        productShortName: "Angles",
        name: "Angles Specifications",
        imagesWithLabel: [
          {
            image: productImages["steel-equal-angles"],
            label: "Equal Angles"
          },
          {
            image: productImages["steel-unequal-angles"],
            label: "Unequal Angles"
          },
          {
            image: productImages["steel-bulb-angles"],
            label: "Bulb Angles"
          }
        ],
        description: `The most commonly found steel angles are formed at a 90 degree angle and has two legs of equal length. The sides are either equal or of different sizes, if one leg is longer than the other then it is known as UNEQUAL angle. The steel angles of various strength like HT/MS are formed as required by different applications. The steel angle are used in various applications like reinforcement, transmission towers, Bridges, Sheds etc.`,
        materialSpecifications: {
          Standards: "",
          Grades: ""
        }
      },
      {
        id: 2,
        name: "Channels Specifications",
        imagesWithLabel: [
          {
            image: productImages["steel-u-channels"],
            label: "U-Steel channels"
          },
          {
            image: productImages["steel-c-channels"],
            label: "C-Steel channels"
          },
          {
            image: productImages["steel-z-channels"],
            label: "Z-Steel channels"
          },
          {
            image: productImages["steel-h-channels"],
            label: "Hat-Steel channels"
          },
          {
            image: productImages["steel-t-channels"],
            label: "T-Steel channels"
          },
          {
            image: productImages["steel-j-channels"],
            label: "J-Steel channels"
          }
        ],
        description: `
  A channel is a right angle "C" section. They are also called C Channels. Along with beams, channels are mainly used in structural applications. Mostly MS Channels are used as supports and guide. These are roll-formed products. MS Channels has wide range of applications like Purling for Sheds, Scaffoldings in construction Industries, and Supporting frames for Structures, Base frames of heavy machinery and automotives etc.
  <br><br>
  U-steel channels sport a simple ‘U’ shape with two flanges that are parallel and perpendicular to the base. They are great materials for manufacturing since they are made to assist heavy machinery and equipment, especially in metal rolling. They are often used to support windows, doors, and flat panels.
  <br><br>
  <strong>C-STEEL CHANNELS</strong> are the most common type of channels. They are similar to the shape of U-steel channels with the only difference being that they have two parallel flanges. This is a result of continuous rolling during their production. They have a consistent size from the web to the tip of the flange, sporting a flatter profile.
  <br><br>
  <strong>Z-STEEL CHANNELS</strong> are known as purlins. Apart from construction, they are often used in DIY projects, such as shelving units, workbenches, plant hangers, and more. Their main purposes in projects are as supports, slides, tracks, and framing. That’s why they are typically found in garage doors, window frames, store fixtures, toolboxes, or fences.
  <br><br>
  <strong>HAT-STEEL CHANNEL</strong> resembles a hat when turned upside down. They are steel channels with outward flanges that are perpendicular to the usual steel channel flanges. This design makes them ideal for framing roofs. Besides that, they make a good addition as supports in ceilings or floors, ensuring the durability of these constructions. Their shape makes them a good furring material or channels in wall construction.
  <br><br>
  Like many other steel channels, the <strong>J-STEEL CHANNEL</strong> sport the letter that they are named after with one side longer than the other. They have a wide range of sizes and can be customized to any project specifications. They come in hemmed, hemless, and with nailer variations that are manufactured to make construction more secure. Their shape makes them ideal for mounting siding or roofing materials. That’s why they are used in installations of windows and doors to support and secure the panel edges. They hide the cut lines or cover the gaps of panels such as glass, mirrors, or thin laminates, making your project more seamless.
  `,
        materialSpecifications: {
          Standards: "",
          Grades: ""
        }
      },
      {
        id: 3,
        name: "Flat Specifications",
        images: [
          productImages["steel-flats1"],
          productImages["steel-flats2"],
          productImages["steel-flats3"]
        ],
        description: `The Stainless Steel Flat Bars can be manufactured using different types of ss including ferritic, austenitic, martensitic and duplex. The material of the flat bars can vary according to its composition, however, the most used among them is the austenitic type. Depending on the steel grade with which the flat bars are made, it can be used in a wide range of applications. For example, the 316 grade ss helps to resist chloride ion corrosion and hence they are widely used in several marine applications. They are also used in applications that require higher structural strength. They can withstand elevated temperatures of up to 870 degrees C.`,
        materialSpecifications: {
          Standards: "",
          Grades: "Stainless steel: 201, 202, 304, 304l, 310, 310s, 316, 316l, 317, 317l, 321, 321h, 347, 347h, 410 | Nickel Alloy: UNS 2200 (NICKEL 200), UNS 2201 (NICKEL 201) | Aluminium: 1050,1100, 2017, 7150, 7178, 7575, 2050, 7085, 2011 A92011, 2014A A92014, 2024 A92024, 2219, 5052 A95052, 5083 A95083, 5754, 6061 A96061 A86061, 6063, 6082 A96082, 7071 7020, 7050 A97050, 7075 A97075 A87075, 7175 | Titanium: Grade 1, Grade 4, Grade 5(Ti 6Al-4V), Grade 6(Ti 5Al-2.5Sn), Grade 7, Grade 11, Grade 12, 8Ai-1Mo-1V, Grade 9(3Al-2.5V), 6Al-6V-25n, 6Al-2Sn-4Zr-2Mo, 6Al-7Nb, Grade 23(Ti 6AL-4V ELI), Grade 5 ELI"
        }
      }
    ]
  },
  {
    id: 10,
    productShortName: "Stainless Steel",
    images: [
      bannerImages["Stainless-Steel-316-316L-Round-B"]
      // bannerImages["stainless-steel2"],
      // bannerImages["stainless-steel3"]
    ],
    name: "Stainless Steel Manufacturer & Supplier in India ",
    description: `
      <p><strong>${companyName$1}</strong> is a Leading <strong>Stainless Steel Manufacturer in India</strong>. We offer a wide selection of Stainless Steel Products in different sizes, shapes, and specifications to meet our clients' needs. Our Stainless Steel is recognized globally for its reliability and high quality. Our High-quality Stainless Steel Products meet the needs of various industries and applications.</p>
      <p>We are a top-notch Stainless Steel Supplier in India and other countries worldwide. We offer <strong>Stainless Steel Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings</strong>.</p>
      <p>These Stainless Steel are tested through a series of quality tests before delivery. Our products are known for ultimate performance, precise design, high-grade materials, and robust build. They are widely used in power, engineering, construction, and other industries.</p>
    `,
    productDetails: {
      tableData: {
        tableName: "Stainless Steel - Specifications",
        materialSpecifications: {
          "Stainless Steel Grades": "201, 202, 205, 301, 302, 303, 304, 304l, 308, 309, 309s, 310, 310s, 314, 316, 316l, 316ti, 317, 317l, 321, 347, 405, 409, 429, 430, 430f, 430fse, 434, 436, 442, 446, 403, 410, 414, 416, 416se, 420, 420f, 422, 431, 440a, 440b, 440c, 501, 502, 630",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and all International Standards",
          "Available Products": "Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Stainless Steel",
        name: "Stainless Steel Pipe Fittings",
        imagesWithLabel: [
          {
            label: "Stainless Steel Pipe Fittings",
            image: bannerImages["pipe-fittings1"]
          },
          {
            label: "Stainless Steel Fasteners",
            image: productImages["stainless-steel-fasteners1"]
          },
          {
            label: "Stainless Steel Pipe & Tube",
            image: productImages["stainless-steel-pipe-tube-manufa"]
          },
          {
            label: "Stainless Steel Round Bar",
            image: productImages["ss-round-bar-manufacturer-india"]
          },
          {
            label: "Stainless Steel Sheet & Plate",
            image: productImages["stainless-steel-sheet-plate-manu"]
          },
          {
            label: "Stainless Steel Forged Fitting",
            image: productImages["stainless-steel-forged-fittings"]
          },
          {
            label: "Stainless Steel Flanges",
            image: productImages["stainless-steel-flanges1"]
          },
          {
            label: "Stainless Steel Angle & Channels",
            image: productImages["ss-angle-channel-manufacturer-in"]
          },
          {
            label: "Stainless Steel Wire Mesh",
            image: productImages["ss-wire-mesh-manufacturer-india"]
          }
        ],
        description: "",
        materialSpecifications: {}
      }
    ]
  },
  {
    id: 11,
    productShortName: "Carbon Steel",
    images: [
      bannerImages["Carbon-Steel-Bars"]
    ],
    name: "Carbon Steel Manufacturer & Supplier in India ",
    description: `<strong>${companyName$1}</strong> is a leading Carbon Steel Manufacturer in India offering a wide range of Carbon Steel products in various sizes, shapes, and specifications. Our products are known for their durability, precision design, and superior surface finish. Used across power, engineering, construction, and other industries, our Carbon Steel offerings are quality tested and performance-driven.`,
    productDetails: {
      tableData: {
        tableName: "Carbon Steel - Specifications",
        materialSpecifications: {
          "Carbon Steel Grades": "ASTM / ASME A 335 GRP 1 , P5 , P9 , P11 , P12 , P22 , P23 , P91",
          "Standards": "ASTM, ASME, DIN, JIS, BS, and all International Standards",
          "Available Products": "Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Carbon Steel",
        name: "Carbon Steel Products",
        imagesWithLabel: [
          {
            label: "Carbon Steel Pipe Fittings",
            image: productImages["carbon-steel-pipe-fittings1"]
          },
          {
            label: "Carbon Steel Fasteners",
            image: productImages["carbon-steel-fasteners1"]
          },
          {
            label: "Carbon Steel Pipes & Tubes",
            image: productImages["carbon-steel-pipes-tubes1"]
          },
          {
            label: "Carbon Steel Round Bar",
            image: productImages["carbon-steel-round-bar-manufactu"]
          },
          {
            label: "Carbon Steel Sheet & Plate",
            image: productImages["carbon-steel-sheet-plate-manufac"]
          },
          {
            label: "Carbon Steel Forged Fittings",
            image: productImages["carbon-steel-forged-fittings1"]
          },
          {
            label: "Carbon Steel Flanges",
            image: productImages["carbon-steel-flanges1"]
          },
          {
            label: "Carbon Steel Angle & Channels",
            image: productImages["carbon-steel-angle-manufacturer"]
          },
          {
            label: "Carbon Steel Wire Mesh",
            image: productImages["carbon-steel-wire-mesh-manufactu"]
          }
        ]
      }
    ]
  },
  {
    id: 12,
    productShortName: "Hastelloy",
    images: [
      bannerImages["hastelloy-manufacturer-india"]
    ],
    name: "Hastelloy Manufacturer & Supplier in India",
    description: `<strong>${companyName$1}</strong> is a leading Hastelloy Manufacturer in India, offering a wide range of Hastelloy products in various shapes, sizes, and grades. Our products are known for their reliability, high quality, and performance. We provide Hastelloy Pipe Fittings, Round Bars, Flanges, Angles & Channels, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings to industries across the globe.`,
    productDetails: {
      tableData: {
        tableName: "Hastelloy - Specifications",
        materialSpecifications: {
          "Hastelloy Grades": "Hastelloy C-22, Hastelloy C-276, Hastelloy C-2000, Hastelloy C-4, Hastelloy X, Hastelloy B, Hastelloy N, Hastelloy G",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and all International Standards",
          "Hastelloy Products": "Hastelloy Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Hastelloy",
        name: "Hastelloy Products",
        imagesWithLabel: [
          {
            label: "Hastelloy Pipe Fittings",
            image: productImages["hastelloy-pipe-fitting-manufactu"]
          },
          {
            label: "Hastelloy Fasteners",
            image: productImages["hastelloy-fastener-manufacturer"]
          },
          {
            label: "Hastelloy Pipes & Tubes",
            image: productImages["hastelloy-pipe-manufacturer-indi"]
          },
          {
            label: "Hastelloy Round Bar",
            image: productImages["hastelloy-round-bar-manufacturer"]
          },
          {
            label: "Hastelloy Sheet & Plate",
            image: productImages["hastelloy-sheet-plate-manufactur"]
          },
          {
            label: "Hastelloy Forged Fittings",
            image: productImages["hastelloy-forged-fittings-manufa"]
          },
          {
            label: "Hastelloy Flanges",
            image: productImages["hastelloy-flange-manufacturer-in"]
          },
          {
            label: "Hastelloy Angle & Channels",
            image: productImages["hastelloy-angle-channel-manufact"]
          },
          {
            label: "Hastelloy Wire Mesh",
            image: productImages["hastelloy-wire-mesh-manufacturer"]
          }
        ]
      }
    ]
  },
  {
    id: 13,
    productShortName: "Titanium",
    images: [
      bannerImages["titanium-manufacturer-india"]
    ],
    name: "Titanium Manufacturer & Supplier in India",
    description: `<strong>${companyName$1}</strong> is a trusted Titanium Manufacturer and Supplier based in India, offering a broad range of Titanium products tailored to industrial requirements. Known for their strength, corrosion resistance, and durability, our Titanium offerings include Pipe Fittings, Round Bars, Flanges, Pipes & Tubes, Fasteners, Angles & Channels, Sheet & Plates, Forged Fittings, and Wire Mesh. We serve clients across India and export globally.`,
    productDetails: {
      tableData: {
        tableName: "Titanium - Specifications",
        materialSpecifications: {
          "Titanium Grades": "Grade 1, Grade 4, Grade 5 (Ti 6Al-4V), Grade 6 (Ti 5Al-2.5Sn), Grade 7, Grade 11, Grade 12, 8Al-1Mo-1V, Grade 9 (3Al-2.5V), 6Al-6V-2Sn, 6Al-2Sn-4Zr-2Mo, 6Al-7Nb, Grade 23 (Ti 6AL-4V ELI), Grade 5 ELI",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and all International Standards",
          "Titanium Products": "Titanium Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Titanium",
        name: "Titanium Products",
        imagesWithLabel: [
          {
            label: "Titanium Pipe Fittings",
            image: productImages["titanium-pipe-fittings-manufactu"]
          },
          {
            label: "Titanium Fasteners",
            image: productImages["titanium-fasteners-manufacturer"]
          },
          {
            label: "Titanium Pipes & Tubes",
            image: productImages["titanium-pipe-tube-manufacturer"]
          },
          {
            label: "Titanium Round Bar",
            image: productImages["titanium-round-bar-manufacturer"]
          },
          {
            label: "Titanium Sheet & Plate",
            image: productImages["titanium-sheet-plate-manufacture"]
          },
          {
            label: "Titanium Forged Fittings",
            image: productImages["titanium-forged-fittings-manufac"]
          },
          {
            label: "Titanium Flanges",
            image: productImages["titanium-flange-manufacturer-ind"]
          },
          {
            label: "Titanium Angle & Channels",
            image: productImages["titanium--angle-channel-manufact"]
          },
          {
            label: "Titanium Wire Mesh",
            image: productImages["titanium-wire-mesh-manufacturer"]
          }
        ]
      }
    ]
  },
  {
    id: 14,
    productShortName: "Inconel",
    images: [
      bannerImages["inconel-manufacturer-india"]
    ],
    name: "Inconel Manufacturer & Supplier in India",
    description: `<strong>${companyName$1}</strong> is a reputed Inconel Manufacturer and Supplier in India, offering premium-grade Inconel products in various dimensions and forms. Known for their exceptional strength and resistance to high temperatures and corrosion, our Inconel range includes Pipe Fittings, Flanges, Pipes & Tubes, Fasteners, Round Bars, Angles & Channels, Sheet & Plates, Forged Fittings, and Wire Mesh. We cater to both domestic and international clients across various industries.`,
    productDetails: {
      tableData: {
        tableName: "Inconel - Specifications",
        materialSpecifications: {
          "Inconel Grades": "Inconel 600, Inconel 601, Inconel 625, Inconel 625LCF, Inconel 686, Inconel 718, Inconel 800, Inconel 825, Inconel X-750, Inconel 690, Inconel 602, Inconel 617, Inconel 925, Inconel A-289, Inconel AL-6XN, AL-904L",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and all International Standards",
          "Inconel Products": "Inconel Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Inconel",
        name: "Inconel Products",
        imagesWithLabel: [
          {
            label: "Inconel Pipe Fittings",
            image: productImages["titanium-pipe-fittings-manufactu"]
          },
          {
            label: "Inconel Fasteners",
            image: productImages["titanium-fasteners-manufacturer"]
          },
          {
            label: "Inconel Pipes & Tubes",
            image: productImages["titanium-pipe-tube-manufacturer"]
          },
          {
            label: "Inconel Round Bar",
            image: productImages["titanium-round-bar-manufacturer"]
          },
          {
            label: "Inconel Sheet & Plate",
            image: productImages["titanium-sheet-plate-manufacture"]
          },
          {
            label: "Inconel Forged Fittings",
            image: productImages["titanium-forged-fittings-manufac"]
          },
          {
            label: "Inconel Flanges",
            image: productImages["titanium-flange-manufacturer-ind"]
          },
          {
            label: "Inconel Angle & Channels",
            image: productImages["titanium--angle-channel-manufact"]
          },
          {
            label: "Inconel Wire Mesh",
            image: productImages["titanium-wire-mesh-manufacturer"]
          }
        ]
      }
    ]
  },
  {
    id: 15,
    productShortName: "Monel",
    images: [
      bannerImages["monel-manufacturer-india"]
    ],
    name: "Monel Manufacturer & Supplier in India ",
    description: `<strong>${companyName$1}</strong> is a well-known Monel Manufacturer and Supplier in India, delivering a wide array of Monel products engineered to meet various industrial needs. Our Monel products are recognized for their strength, corrosion resistance, and long-lasting performance. We supply Pipe Fittings, Flanges, Pipes & Tubes, Round Bars, Fasteners, Sheet & Plates, Forged Fittings, Angles & Channels, and Wire Mesh across India and export to multiple countries.`,
    productDetails: {
      tableData: {
        tableName: "Monel - Specifications",
        materialSpecifications: {
          "Monel Grades": "Monel 400, Monel K500",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and all International Standards",
          "Monel Products": "Monel Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Monel",
        name: "Monel Products",
        imagesWithLabel: [
          {
            label: "Monel Pipe Fittings",
            image: productImages["monel-pipe-fitting-manufacturer"]
          },
          {
            label: "Monel Fasteners",
            image: productImages["monel-fasteners-manufacturer-ind"]
          },
          {
            label: "Monel Pipes & Tubes",
            image: productImages["monel-pipe-tube-manufacturer-ind"]
          },
          {
            label: "Monel Round Bar",
            image: productImages["monel-round-bar-manufacturer-ind"]
          },
          {
            label: "Monel Sheet & Plate",
            image: productImages["monel-sheet-plate-manufacturer-i"]
          },
          {
            label: "Monel Forged Fittings",
            image: productImages["monel-forged-fittings-manufactur"]
          },
          {
            label: "Monel Flanges",
            image: productImages["monel-flange-manufacturer-india"]
          },
          {
            label: "Monel Angle & Channels",
            image: productImages["monel-angle-channel-manufacturer"]
          },
          {
            label: "Monel Wire Mesh",
            image: productImages["monel-wire-mesh-manufacturer-ind"]
          }
        ]
      }
    ]
  },
  {
    id: 16,
    productShortName: "Alloy Steel",
    images: [
      bannerImages["alloy-steel-manufacturer-india"]
    ],
    name: "Alloy Steel Manufacturer & Supplier in India ",
    description: `<strong>${companyName$1}</strong> is a renowned Alloy Steel Manufacturer and Supplier in India, offering a wide variety of Alloy Steel products in multiple forms and specifications. Our products are known for their high strength, excellent surface finish, and resistance to wear and pressure. We supply Alloy Steel Pipe Fittings, Round Bars, Pipes & Tubes, Flanges, Fasteners, Angles & Channels, Sheet & Plates, Forged Fittings, and Wire Mesh to both domestic and global markets.`,
    productDetails: {
      tableData: {
        tableName: "Alloy Steel - Specifications",
        materialSpecifications: {
          "Alloy Steel Grades": "ASTM / ASME A 691 GRP1 CR, 1 1/4 CR, 2 1/4 CR, 5 CR, 9 CR, 91",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and all International Standards",
          "Alloy Steel Products": "Alloy Steel Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Alloy Steel",
        name: "Alloy Steel Products",
        imagesWithLabel: [
          {
            label: "Alloy Steel Pipe Fittings",
            image: productImages["alloy-steel-pipe-fittings1"]
          },
          {
            label: "Alloy Steel Fasteners",
            image: productImages["alloy-steel-fasteners1"]
          },
          {
            label: "Alloy Steel Pipes & Tubes",
            image: productImages["alloy-steel-pipes-tubes1"]
          },
          {
            label: "Alloy Steel Round Bar",
            image: productImages["alloy-steel-round-bar-manufactur"]
          },
          {
            label: "Alloy Steel Sheet & Plate",
            image: productImages["alloy-steel-sheet-plate-manufact"]
          },
          {
            label: "Alloy Steel Forged Fittings",
            image: productImages["alloy-steel-forged-fittings1"]
          },
          {
            label: "Alloy Steel Flanges",
            image: productImages["alloy-steel-flanges1"]
          },
          {
            label: "Alloy Steel Angle & Channels",
            image: productImages["alloy-steel-angle-channel-manufa"]
          },
          {
            label: "Alloy Steel Wire Mesh",
            image: productImages["alloy-steel-wire-mesh-manufactur"]
          }
        ]
      }
    ]
  },
  {
    id: 17,
    productShortName: "Copper",
    images: [
      bannerImages["copper-manufacturer-india"]
    ],
    name: "Copper Manufacturer & Supplier in India ",
    description: `<strong>${companyName$1}</strong> is a prominent Copper Manufacturer and Supplier based in India, offering a wide range of copper products in various dimensions, grades, and standards. Known for their excellent electrical conductivity and corrosion resistance, our copper products are widely used in electrical, construction, and industrial sectors. Our range includes Copper Pipe Fittings, Flanges, Fasteners, Pipes & Tubes, Round Bars, Sheets & Plates, Forged Fittings, Angle & Channel, and Wire Mesh.`,
    productDetails: {
      tableData: {
        tableName: "Copper - Specifications",
        materialSpecifications: {
          "Copper Grades": "Grade 1 (A) Copper, Grade 2 (B) Copper, Grade 3 (C) Copper, Grade 4 (D) Copper",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and other International Standards",
          "Copper Products": "Copper Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Copper",
        name: "Copper Products",
        imagesWithLabel: [
          {
            label: "Copper Pipe Fittings",
            image: productImages["copper-pipe-fitting-manufacturer"]
          },
          {
            label: "Copper Fasteners",
            image: productImages["copper-fastener-manufacturer-ind"]
          },
          {
            label: "Copper Pipes & Tubes",
            image: productImages["copper-pipe-tube-manufacturer-in"]
          },
          {
            label: "Copper Round Bar",
            image: productImages["copper-round-bar-manufacturer-in"]
          },
          {
            label: "Copper Sheet & Plate",
            image: productImages["copper-sheet-plate-manufacturer"]
          },
          {
            label: "Copper Forged Fittings",
            image: productImages["copper-forged-fitting-manufactur"]
          },
          {
            label: "Copper Flanges",
            image: productImages["copper-flanges-manufacturer-indi"]
          },
          {
            label: "Copper Angle & Channels",
            image: productImages["copper-angle-channel-manufacture"]
          },
          {
            label: "Copper Wire Mesh",
            image: productImages["copper-wire-mesh-manufacturer-in"]
          }
        ]
      }
    ]
  },
  {
    id: 18,
    productShortName: "Super Duplex Steel",
    images: [
      bannerImages["super-duplex-steel-manufacturer"]
    ],
    name: "Super Duplex Steel Manufacturer & Supplier in India ",
    description: `<strong>${companyName$1}</strong> is a well-established manufacturer and supplier of Super Duplex Steel in India, offering a wide range of products in various grades, shapes, and dimensions. Known for superior strength, excellent corrosion resistance, and durability, our Super Duplex Steel is widely used in marine, oil & gas, chemical processing, and construction industries. Our offerings include Super Duplex Pipe Fittings, Flanges, Fasteners, Pipes & Tubes, Sheet & Plates, Forged Fittings, Round Bars, Angles & Channels, and Wire Mesh.`,
    productDetails: {
      tableData: {
        tableName: "Super Duplex Steel - Specifications",
        materialSpecifications: {
          "Super Duplex Steel Grades": "ASTM / ASME SA 790 UNS NO S31803, S32205, S32550, S32750, S32760",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and other International Standards",
          "Super Duplex Steel Products": "Super Duplex Steel Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Super Duplex Steel",
        name: "Super Duplex Steel Products",
        imagesWithLabel: [
          {
            label: "Super Duplex Steel Pipe Fittings",
            image: productImages["super-duplex-steel-pipe-fitting"]
          },
          {
            label: "Super Duplex Steel Fasteners",
            image: productImages["super-duplex-steel-fastener-manu"]
          },
          {
            label: "Super Duplex Steel Pipes & Tubes",
            image: productImages["super-duplex-steel-pipe-manufact"]
          },
          {
            label: "Super Duplex Steel Round Bar",
            image: productImages["super-duplex-steel-round-bar-man"]
          },
          {
            label: "Super Duplex Steel Sheet & Plate",
            image: productImages["super-duplex-steel-sheet-plate-m"]
          },
          {
            label: "Super Duplex Steel Forged Fittings",
            image: productImages["super-duplex-steel-forged-fittin"]
          },
          {
            label: "Super Duplex Steel Flanges",
            image: productImages["super-duplex-steel-flange-manufa"]
          },
          {
            label: "Super Duplex Steel Angle & Channels",
            image: productImages["super-duplex-steel-angle-channel"]
          },
          {
            label: "Super Duplex Steel Wire Mesh",
            image: productImages["super-duplex-steel-wire-mesh-man"]
          }
        ]
      }
    ]
  }
];
const KeyValueTable = ({ tableData, title: title2 }) => {
  const isEmptyData = !tableData || typeof tableData !== "object" || Object.keys(tableData).length === 0 || Object.values(tableData).every(
    (v) => v === "" || v === null || v === void 0
  );
  if (isEmptyData || hasEmptyKey(tableData)) {
    return /* @__PURE__ */ jsx("div", { style: { margin: "10px 0" } });
  }
  const filteredEntries = Object.entries(tableData).filter(
    ([, value]) => value !== "" && value !== null && value !== void 0
  );
  if (filteredEntries.length === 0) {
    return /* @__PURE__ */ jsx("div", { style: { margin: "10px 0" } });
  }
  return /* @__PURE__ */ jsxs("div", { style: { overflowX: "auto", margin: "20px 0" }, children: [
    title2 && /* @__PURE__ */ jsx("h2", { style: { marginBottom: "10px" }, children: title2 }),
    /* @__PURE__ */ jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { style: { backgroundColor: "#f0f0f0" }, children: [
        /* @__PURE__ */ jsx(
          "th",
          {
            style: {
              border: "1px solid #ccc",
              padding: "10px",
              textAlign: "left"
            },
            children: "Specification"
          }
        ),
        /* @__PURE__ */ jsx(
          "th",
          {
            style: {
              border: "1px solid #ccc",
              padding: "10px",
              textAlign: "left"
            },
            children: "Details"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: filteredEntries.map(([key, value]) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx(
          "td",
          {
            style: {
              border: "1px solid #ccc",
              padding: "10px",
              fontWeight: "bold"
            },
            children: key
          }
        ),
        /* @__PURE__ */ jsx("td", { style: { border: "1px solid #ccc", padding: "10px" }, children: value })
      ] }, key)) })
    ] })
  ] });
};
const ProductImageCarousel = ({ images, name }) => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 4e3);
    return () => clearInterval(interval);
  }, [images]);
  if (!images || !Array.isArray(images) || images.length === 0) {
    return /* @__PURE__ */ jsx("div", { style: { textAlign: "center", padding: "20px" }, children: "Loading images..." });
  }
  if (images.length === 1) {
    return /* @__PURE__ */ jsx("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: images[0],
        alt: name,
        onError: (e) => {
          e.target.onerror = null;
          e.target.src = "/fallback-image.jpg";
        },
        style: {
          maxWidth: "100%",
          maxHeight: 400,
          borderRadius: 8,
          objectFit: "cover"
        }
      }
    ) });
  }
  return /* @__PURE__ */ jsxs("div", { style: { position: "relative", width: "100%", textAlign: "center" }, children: [
    !loaded && /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          height: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: /* @__PURE__ */ jsx("span", { children: "Loading image..." })
      }
    ),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: images[current],
        alt: name,
        onLoad: () => setLoaded(true),
        onError: (e) => {
          e.target.onerror = null;
          e.target.src = "/fallback-image.jpg";
        },
        style: {
          display: loaded ? "block" : "none",
          maxWidth: "100%",
          maxHeight: 400,
          borderRadius: 8,
          objectFit: "contain"
        }
      },
      images[current]
    ),
    /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prev,
          style: {
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.7)",
            border: "none",
            padding: "8px 12px",
            cursor: "pointer"
          },
          children: "←"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: next,
          style: {
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.7)",
            border: "none",
            padding: "8px 12px",
            cursor: "pointer"
          },
          children: "→"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { style: { marginTop: 8 }, children: images.map((_, idx) => /* @__PURE__ */ jsx(
      "span",
      {
        style: {
          display: "inline-block",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: idx === current ? "#333" : "#ccc",
          margin: "0 4px"
        }
      },
      idx
    )) })
  ] });
};
const container$2 = "_container_1trqa_1";
const card = "_card_1trqa_43";
const label$1 = "_label_1trqa_49";
const image = "_image_1trqa_91";
const styles$2 = {
  container: container$2,
  card,
  label: label$1,
  image
};
const ImageGridWithLabel = ({ imagesWithLabel }) => {
  return /* @__PURE__ */ jsx("div", { className: styles$2.container, children: imagesWithLabel.map((item, index) => /* @__PURE__ */ jsxs("div", { className: styles$2.card, children: [
    /* @__PURE__ */ jsx("img", { src: item.image, alt: item.label, className: styles$2.image }),
    /* @__PURE__ */ jsx("div", { className: styles$2.label, children: item.label })
  ] }, index)) });
};
const ProductPage = () => {
  var _a2, _b2;
  const { id } = useParams();
  const [isMobile, setIsMobile] = useState(false);
  const [product, setProduct] = useState(allProducts[0]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 900);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  useEffect(() => {
    const foundProduct = allProducts.find(
      (p) => slugify(p.productShortName) === slugify(id)
    );
    setProduct(foundProduct);
  }, [id]);
  if (!product) {
    return /* @__PURE__ */ jsxs("div", { className: styles$4.pageContainer, children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("main", { className: styles$4.main, children: /* @__PURE__ */ jsx("div", { className: styles$4.container, children: /* @__PURE__ */ jsxs("div", { className: styles$4.notFound, children: [
        /* @__PURE__ */ jsx("h1", { children: "Product Not Found" }),
        /* @__PURE__ */ jsx("p", { children: "The product you're looking for doesn't exist." }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: styles$4.backButton, children: "Back to Home" })
      ] }) }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: styles$4.pageContainer, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        product.name,
        " | ",
        constantValue.companyName
      ] }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: (_a2 = product == null ? void 0 : product.description) == null ? void 0 : _a2.replace(/<[^>]+>/g, "").slice(0, 155)
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `https://www.yourwebsite.com/products/${id}`
        }
      ),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: constantValue.companyUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: `${constantValue.companyUrl}#products`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
            item: `${constantValue.companyUrl}/products/${id}`
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: styles$4.main, children: /* @__PURE__ */ jsxs("section", { className: styles$4.container, children: [
      /* @__PURE__ */ jsxs("nav", { className: styles$4.breadcrumb, "aria-label": "breadcrumb", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: " / " }),
        /* @__PURE__ */ jsx(Link, { to: "/#products", children: "Products" }),
        /* @__PURE__ */ jsx("span", { children: " / " }),
        /* @__PURE__ */ jsx("span", { children: product.name })
      ] }),
      /* @__PURE__ */ jsx("header", { className: styles$4.productPageHeader, children: /* @__PURE__ */ jsxs("div", { className: styles$4.responsiveLayout, children: [
        !isMobile && /* @__PURE__ */ jsxs("aside", { className: styles$4.sidebarResponsive, children: [
          /* @__PURE__ */ jsx(ServiceSidebar, { data: mainProducts, title: "Our Products" }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx(ServiceSidebar, { data: materials, title: "Our Materials" })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: styles$4.productPageContent, children: [
          /* @__PURE__ */ jsxs("section", { className: styles$4.productDetails, children: [
            /* @__PURE__ */ jsxs("div", { className: styles$4.productImage, children: [
              /* @__PURE__ */ jsx(
                ProductImageCarousel,
                {
                  images: product.images,
                  name: product.name
                }
              ),
              /* @__PURE__ */ jsx("br", {}),
              !isMobile && /* @__PURE__ */ jsxs("div", { className: styles$4.connectDiv, children: [
                /* @__PURE__ */ jsx("h3", { children: "Connect with Us" }),
                /* @__PURE__ */ jsxs("p", { children: [
                  product.connectDivDetails,
                  " Absolutely,",
                  " ",
                  product.productShortName,
                  " is in stock and ready to deliver. Need a custom solution? Contact us with your requirements to get a free quote. Make an enquiry →"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles$4.productInfo, children: [
              /* @__PURE__ */ jsx("h1", { className: styles$4.productTitle, children: product.name }),
              /* @__PURE__ */ jsx("hr", {}),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsxs("section", { className: styles$4.productDescription, children: [
                /* @__PURE__ */ jsx("h3", { children: "Description" }),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    dangerouslySetInnerHTML: {
                      __html: product.description
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("br", {}),
              isMobile && /* @__PURE__ */ jsxs("div", { className: styles$4.connectDiv, children: [
                /* @__PURE__ */ jsx("h3", { children: "Connect with Us" }),
                /* @__PURE__ */ jsxs("p", { children: [
                  product.connectDivDetails,
                  " Absolutely,",
                  " ",
                  product.productShortName,
                  " is in stock and ready to deliver. Need a custom solution? Contact us with your requirements to get a free quote. Make an enquiry →"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { className: styles$4.productFeatures, children: [
            /* @__PURE__ */ jsxs("h3", { children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    color: "#22c55e",
                    fontSize: "1em",
                    verticalAlign: "middle",
                    marginRight: 8
                  },
                  children: "✓"
                }
              ),
              product.productDetails.tableData.tableName
            ] }),
            /* @__PURE__ */ jsx(
              KeyValueTable,
              {
                tableData: product.productDetails.tableData.materialSpecifications
              }
            ),
            /* @__PURE__ */ jsx("hr", {}),
            /* @__PURE__ */ jsx("hr", {}),
            /* @__PURE__ */ jsx("hr", {}),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("br", {}),
              (_b2 = product == null ? void 0 : product.subProducts) == null ? void 0 : _b2.map((subProduct, index) => {
                var _a3;
                return /* @__PURE__ */ jsxs("section", { children: [
                  /* @__PURE__ */ jsxs("h2", { className: styles$4.subProductHeading, children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        style: {
                          color: "#22c55e",
                          fontSize: "1em",
                          verticalAlign: "middle",
                          marginRight: 8
                        },
                        children: "✓"
                      }
                    ),
                    subProduct.name
                  ] }),
                  ((_a3 = subProduct == null ? void 0 : subProduct.images) == null ? void 0 : _a3.length) > 0 ? /* @__PURE__ */ jsx(
                    ThirdPartyInspectionWithStyles,
                    {
                      img: subProduct.images,
                      alt: `${subProduct.name} inspection images`
                    }
                  ) : /* @__PURE__ */ jsx(
                    ImageGridWithLabel,
                    {
                      imagesWithLabel: subProduct.imagesWithLabel
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      dangerouslySetInnerHTML: {
                        __html: subProduct.description
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    KeyValueTable,
                    {
                      tableData: subProduct.materialSpecifications
                    }
                  )
                ] }, subProduct.id || index);
              })
            ] })
          ] })
        ] }),
        isMobile && /* @__PURE__ */ jsxs("aside", { className: styles$4.sidebarResponsive, children: [
          /* @__PURE__ */ jsx(ServiceSidebar, { data: mainProducts, title: "Our Products" }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx(ServiceSidebar, { data: materials, title: "Our Materials" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const pageContainer$1 = "_pageContainer_eomr5_1";
const main$1 = "_main_eomr5_13";
const container$1 = "_container_eomr5_23";
const hero$1 = "_hero_eomr5_35";
const heroTitle$1 = "_heroTitle_eomr5_51";
const heroSubtitle$1 = "_heroSubtitle_eomr5_65";
const section = "_section_eomr5_81";
const content = "_content_eomr5_89";
const textContent = "_textContent_eomr5_103";
const sectionTitle = "_sectionTitle_eomr5_111";
const sectionText = "_sectionText_eomr5_125";
const imageContent = "_imageContent_eomr5_139";
const sectionImage = "_sectionImage_eomr5_147";
const valuesSection = "_valuesSection_eomr5_163";
const valuesSectionTitle = "_valuesSectionTitle_eomr5_177";
const valuesGrid = "_valuesGrid_eomr5_193";
const valueCard = "_valueCard_eomr5_205";
const valueIcon = "_valueIcon_eomr5_231";
const valueTitle = "_valueTitle_eomr5_241";
const valueDescription = "_valueDescription_eomr5_255";
const teamSection = "_teamSection_eomr5_267";
const teamContent = "_teamContent_eomr5_277";
const teamTitle = "_teamTitle_eomr5_287";
const teamDescription = "_teamDescription_eomr5_301";
const teamImage = "_teamImage_eomr5_315";
const styles$1 = {
  pageContainer: pageContainer$1,
  main: main$1,
  container: container$1,
  hero: hero$1,
  heroTitle: heroTitle$1,
  heroSubtitle: heroSubtitle$1,
  section,
  content,
  textContent,
  sectionTitle,
  sectionText,
  imageContent,
  sectionImage,
  valuesSection,
  valuesSectionTitle,
  valuesGrid,
  valueCard,
  valueIcon,
  valueTitle,
  valueDescription,
  teamSection,
  teamContent,
  teamTitle,
  teamDescription,
  teamImage
};
let companyName = constantValue.companyName;
const coreValues = [
  {
    icon: "🏗️",
    title: "Unmatched Quality",
    description: "We uphold the highest manufacturing standards to deliver durable and reliable pipe solutions."
  },
  {
    icon: "👷",
    title: "Customer Commitment",
    description: "Every client is our partner. We focus on understanding your needs and exceeding expectations."
  },
  {
    icon: "⚙️",
    title: "Innovation & Efficiency",
    description: "We continuously improve our production methods to ensure efficiency and product performance."
  },
  {
    icon: "🌿",
    title: "Sustainable Practices",
    description: "We implement environmentally responsible practices across our operations."
  },
  {
    icon: "📜",
    title: "Certified Excellence",
    description: "Our products conform to ISI and ISO standards to ensure lasting quality and safety."
  },
  {
    icon: "📞",
    title: "Prompt Support",
    description: "Our technical team is ready to support you through every project phase — from inquiry to installation."
  }
];
const AboutPage = () => {
  return /* @__PURE__ */ jsxs("div", { className: styles$1.pageContainer, children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: styles$1.main, children: /* @__PURE__ */ jsxs("div", { className: styles$1.container, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$1.hero, children: [
        /* @__PURE__ */ jsxs("h1", { className: styles$1.heroTitle, children: [
          "About ",
          companyName
        ] }),
        /* @__PURE__ */ jsx("p", { className: styles$1.heroSubtitle, children: "Delivering excellence in plumbing and infrastructure solutions since 1995" })
      ] }),
      /* @__PURE__ */ jsx("section", { className: styles$1.section, children: /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$1.textContent, children: [
          /* @__PURE__ */ jsx("h2", { className: styles$1.sectionTitle, children: "Our Mission" }),
          /* @__PURE__ */ jsxs("p", { className: styles$1.sectionText, children: [
            "At ",
            companyName,
            ", our mission is to provide top-grade piping solutions that power infrastructure across India. Whether it's residential, commercial, or industrial projects — quality, durability, and trust define our offerings."
          ] }),
          /* @__PURE__ */ jsx("p", { className: styles$1.sectionText, children: "We aim to lead the pipe industry through our constant commitment to innovation, precision engineering, and customer satisfaction." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles$1.imageContent, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
            alt: "Our Mission",
            className: styles$1.sectionImage
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: styles$1.section, children: /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.imageContent, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
            alt: "Our Story",
            className: styles$1.sectionImage
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: styles$1.textContent, children: [
          /* @__PURE__ */ jsx("h2", { className: styles$1.sectionTitle, children: "Our Journey" }),
          /* @__PURE__ */ jsxs("p", { className: styles$1.sectionText, children: [
            "Established in 1995, ",
            companyName,
            " started with a vision to become a trusted name in the pipe industry. With a modest beginning, we've grown into a leading manufacturer and supplier known for quality and dependability."
          ] }),
          /* @__PURE__ */ jsx("p", { className: styles$1.sectionText, children: "From local builders to nationwide contractors, we’ve earned the confidence of professionals by consistently delivering high-performance piping solutions." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.valuesSection, children: [
        /* @__PURE__ */ jsx("h2", { className: styles$1.valuesSectionTitle, children: "Our Core Values" }),
        /* @__PURE__ */ jsx("div", { className: styles$1.valuesGrid, children: coreValues.map((value, index) => /* @__PURE__ */ jsxs("div", { className: styles$1.valueCard, children: [
          /* @__PURE__ */ jsx("div", { className: styles$1.valueIcon, children: value.icon }),
          /* @__PURE__ */ jsx("h3", { className: styles$1.valueTitle, children: value.title }),
          /* @__PURE__ */ jsx("p", { className: styles$1.valueDescription, children: value.description })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: styles$1.teamSection, children: /* @__PURE__ */ jsxs("div", { className: styles$1.teamContent, children: [
        /* @__PURE__ */ jsx("h2", { className: styles$1.teamTitle, children: "Meet Our Team" }),
        /* @__PURE__ */ jsxs("p", { className: styles$1.teamDescription, children: [
          "Our success is driven by a skilled and dedicated team of engineers, technicians, and support professionals. Together, we ensure ",
          companyName,
          " stands for reliability and service."
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles$1.teamImage, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
            alt: "Our Team"
          }
        ) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const pageContainer = "_pageContainer_19pu9_1";
const main = "_main_19pu9_13";
const container = "_container_19pu9_23";
const hero = "_hero_19pu9_35";
const heroTitle = "_heroTitle_19pu9_47";
const heroSubtitle = "_heroSubtitle_19pu9_61";
const contactContent = "_contactContent_19pu9_77";
const contactInfo = "_contactInfo_19pu9_91";
const contactInfoTitle = "_contactInfoTitle_19pu9_99";
const contactInfoText = "_contactInfoText_19pu9_113";
const contactDetails = "_contactDetails_19pu9_127";
const contactDetail = "_contactDetail_19pu9_127";
const contactDetailTitle = "_contactDetailTitle_19pu9_153";
const formContainer = "_formContainer_19pu9_179";
const contactForm = "_contactForm_19pu9_195";
const formGroup = "_formGroup_19pu9_207";
const label = "_label_19pu9_217";
const input = "_input_19pu9_231";
const textarea = "_textarea_19pu9_233";
const inputError = "_inputError_19pu9_265";
const error = "_error_19pu9_285";
const submitButton = "_submitButton_19pu9_299";
const successMessage = "_successMessage_19pu9_345";
const styles = {
  pageContainer,
  main,
  container,
  hero,
  heroTitle,
  heroSubtitle,
  contactContent,
  contactInfo,
  contactInfoTitle,
  contactInfoText,
  contactDetails,
  contactDetail,
  contactDetailTitle,
  formContainer,
  contactForm,
  formGroup,
  label,
  input,
  textarea,
  inputError,
  error,
  submitButton,
  successMessage
};
const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ""
      }));
    }
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      const toEmail = constantValue.companyEmail;
      const subject = "New Contact Form Submission";
      const body = `
Full Name: ${formData.fullName}
Company Name: ${formData.companyName}
Email: ${formData.email}
Phone Number: ${formData.phoneNumber}
Message:
${formData.message}
      `;
      const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      if (typeof window !== "undefined") {
        window.location.href = mailtoLink;
      }
      setTimeout(() => {
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phoneNumber: "",
          message: ""
        });
        setIsSubmitted(true);
      }, 1e3);
    } else {
      setErrors(newErrors);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: styles.pageContainer, children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: styles.main, children: /* @__PURE__ */ jsxs("div", { className: styles.container, children: [
      /* @__PURE__ */ jsxs("div", { className: styles.hero, children: [
        /* @__PURE__ */ jsx("h1", { className: styles.heroTitle, children: "Contact Us" }),
        /* @__PURE__ */ jsx("p", { className: styles.heroSubtitle, children: "Get in touch with us. We'd love to hear from you!" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles.contactContent, children: [
        /* @__PURE__ */ jsxs("div", { className: styles.contactInfo, children: [
          /* @__PURE__ */ jsx("h2", { className: styles.contactInfoTitle, children: "Get In Touch" }),
          /* @__PURE__ */ jsx("p", { className: styles.contactInfoText, children: "Have a question or need assistance? Our team is here to help. Fill out the form and we'll get back to you as soon as possible." }),
          /* @__PURE__ */ jsxs("div", { className: styles.contactDetails, children: [
            /* @__PURE__ */ jsxs("div", { className: styles.contactDetail, children: [
              /* @__PURE__ */ jsx("h3", { className: styles.contactDetailTitle, children: "📧 Email" }),
              /* @__PURE__ */ jsx("p", { children: constantValue.companyEmail })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles.contactDetail, children: [
              /* @__PURE__ */ jsx("h3", { className: styles.contactDetailTitle, children: "📞 Phone" }),
              /* @__PURE__ */ jsx("p", { children: constantValue.companyPhone }),
              /* @__PURE__ */ jsx("p", { children: constantValue.alternativePhone })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles.contactDetail, children: [
              /* @__PURE__ */ jsx("h3", { className: styles.contactDetailTitle, children: "🏢 Address" }),
              /* @__PURE__ */ jsx("p", { children: constantValue.companyAddress })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles.contactDetail, children: [
              /* @__PURE__ */ jsx("h3", { className: styles.contactDetailTitle, children: "🏭 Manufacturing Plant 1" }),
              /* @__PURE__ */ jsx("p", { children: constantValue.ManufacturingPlant1 })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles.contactDetail, children: [
              /* @__PURE__ */ jsx("h3", { className: styles.contactDetailTitle, children: "🏭 Manufacturing Plant 2" }),
              /* @__PURE__ */ jsx("p", { children: constantValue.ManufacturingPlant2 })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles.contactDetail, children: [
              /* @__PURE__ */ jsx("h3", { className: styles.contactDetailTitle, children: "🕒 Hours" }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Monday - Friday: 9:00 AM - 6:00 PM",
                /* @__PURE__ */ jsx("br", {}),
                "Saturday: 10:00 AM - 4:00 PM"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles.formContainer, children: isSubmitted ? /* @__PURE__ */ jsxs("div", { className: styles.successMessage, children: [
          /* @__PURE__ */ jsx("h3", { children: "Thank you for your message!" }),
          /* @__PURE__ */ jsx("p", { children: "We'll get back to you within 24 hours." })
        ] }) : /* @__PURE__ */ jsxs("form", { className: styles.contactForm, onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxs("div", { className: styles.formGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "fullName", className: styles.label, children: "Full Name *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "fullName",
                name: "fullName",
                value: formData.fullName,
                onChange: handleInputChange,
                className: `${styles.input} ${errors.fullName ? styles.inputError : ""}`,
                placeholder: "Enter your full name"
              }
            ),
            errors.fullName && /* @__PURE__ */ jsx("span", { className: styles.error, children: errors.fullName })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles.formGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "companyName", className: styles.label, children: "Company Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "companyName",
                name: "companyName",
                value: formData.companyName,
                onChange: handleInputChange,
                className: styles.input,
                placeholder: "Enter your company name (optional)"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles.formGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: styles.label, children: "Email Address *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                id: "email",
                name: "email",
                value: formData.email,
                onChange: handleInputChange,
                className: `${styles.input} ${errors.email ? styles.inputError : ""}`,
                placeholder: "Enter your email address"
              }
            ),
            errors.email && /* @__PURE__ */ jsx("span", { className: styles.error, children: errors.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles.formGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "phoneNumber", className: styles.label, children: "Phone Number *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                id: "phoneNumber",
                name: "phoneNumber",
                value: formData.phoneNumber,
                onChange: handleInputChange,
                className: `${styles.input} ${errors.phoneNumber ? styles.inputError : ""}`,
                placeholder: "Enter your phone number"
              }
            ),
            errors.phoneNumber && /* @__PURE__ */ jsx("span", { className: styles.error, children: errors.phoneNumber })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles.formGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "message", className: styles.label, children: "Message *" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                name: "message",
                value: formData.message,
                onChange: handleInputChange,
                className: `${styles.textarea} ${errors.message ? styles.inputError : ""}`,
                placeholder: "Enter your message",
                rows: "6"
              }
            ),
            errors.message && /* @__PURE__ */ jsx("span", { className: styles.error, children: errors.message })
          ] }),
          /* @__PURE__ */ jsx("button", { type: "submit", className: styles.submitButton, children: "Send Message" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: "404" }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-4", children: "Oops! Page not found" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "text-blue-500 hover:text-blue-700 underline",
        onClick: () => navigate(-1),
        children: "Return to Previous Page"
      }
    )
  ] }) });
};
const App = () => {
  console.log("App rendering");
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = constantValue.companyName;
    }
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Toaster$1, {}),
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Index, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/product/:id", element: /* @__PURE__ */ jsx(ProductPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(AboutPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(ContactPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
    ] })
  ] });
};
function render(url, context) {
  const queryClient = new QueryClient();
  const helmetContext = {};
  const html = renderToString(
    /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url, context, children: /* @__PURE__ */ jsx(App, {}) }) }) }) })
  );
  return { html, helmetContext };
}
export {
  render
};
