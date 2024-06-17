/*
Language: Arturo
Description: A flexible language with hardly any syntax.
Category: scripting
Author: @erikschierboom
Maintainer: @erikschierbom
Website: https://arturo-lang.io/
*/

import { type HLJSApi, type Language } from "highlight.js";

export default function (hljs: HLJSApi): Language {
  return {
    name: "Wren",
    keywords: {},
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      hljs.COMMENT(";", "\n"),
    ],
  };
}
