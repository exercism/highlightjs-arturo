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
  const regex = hljs.regex;

  const BUILT_IN_KEYWORDS = [
    "abs",
    "absolute?",
    "accept",
    "acos",
    "acosh",
    "acsec",
    "acsech",
    "actan",
    "actanh",
    "add",
    "after",
    "alert",
    "alias",
    "all?",
    "alphabet",
    "and",
    "and?",
    "angle",
    "any?",
    "append",
    "arity",
    "arrange",
    "array",
    "as",
    "ascii?",
    "asec",
    "asech",
    "asin",
    "asinh",
    "atan",
    "atan2",
    "atanh",
    "attr",
    "attr?",
    "attribute?",
    "attributeLabel?",
    "attrs",
    "average",
    "before",
    "benchmark",
    "between?",
    "binary?",
    "blend",
    "block?",
    "break",
    "browse",
    "bytecode?",
    "call",
    "capitalize",
    "case",
    "ceil",
    "char?",
    "chop",
    "chunk",
    "clamp",
    "clear",
    "clip",
    "close",
    "cluster",
    "coalesce",
    "collect",
    "color",
    "color?",
    "combine",
    "compare",
    "complex?",
    "conj",
    "connect",
    "contains?",
    "continue",
    "copy",
    "cos",
    "cosh",
    "couple",
    "crc",
    "csec",
    "csech",
    "ctan",
    "ctanh",
    "cursor",
    "darken",
    "database?",
    "date?",
    "dec",
    "decode",
    "decouple",
    "define",
    "delete",
    "denominator",
    "desaturate",
    "deviation",
    "dialog",
    "dictionary",
    "dictionary?",
    "difference",
    "digest",
    "digits",
    "disjoint?",
    "div",
    "divmod",
    "do",
    "download",
    "drop",
    "dup",
    "else",
    "empty",
    "empty?",
    "encode",
    "ensure",
    "enumerate",
    "env",
    "equal?",
    "escape",
    "even?",
    "every?",
    "execute",
    "exists?",
    "exit",
    "exp",
    "extend",
    "extract",
    "factorial",
    "factors",
    "false?",
    "fdiv",
    "filter",
    "first",
    "flatten",
    "floating?",
    "floor",
    "fold",
    "friday?",
    "from",
    "function",
    "function?",
    "future?",
    "gamma",
    "gather",
    "gcd",
    "get",
    "goto",
    "grayscale",
    "greater?",
    "greaterOrEqual?",
    "hash",
    "hidden?",
    "hypot",
    "if",
    "in",
    "in?",
    "inc",
    "indent",
    "index",
    "infinite?",
    "info",
    "inline?",
    "input",
    "insert",
    "inspect",
    "integer?",
    "intersect?",
    "intersection",
    "invert",
    "is?",
    "jaro",
    "join",
    "key?",
    "keys",
    "kurtosis",
    "label?",
    "last",
    "lcm",
    "leap?",
    "less?",
    "lessOrEqual?",
    "let",
    "levenshtein",
    "lighten",
    "list",
    "listen",
    "literal?",
    "ln",
    "log",
    "logical?",
    "loop",
    "lower",
    "lower?",
    "mail",
    "map",
    "match",
    "match?",
    "max",
    "maximum",
    "median",
    "min",
    "minimum",
    "mod",
    "module",
    "monday?",
    "move",
    "mul",
    "nand",
    "nand?",
    "neg",
    "negative?",
    "new",
    "nor",
    "nor?",
    "normalize",
    "not",
    "not?",
    "notEqual?",
    "now",
    "null?",
    "numerator",
    "numeric?",
    "object?",
    "odd?",
    "one?",
    "open",
    "or",
    "or?",
    "outdent",
    "pad",
    "palette",
    "panic",
    "past?",
    "path?",
    "pathLabel?",
    "pause",
    "permissions",
    "permutate",
    "pop",
    "popup",
    "positive?",
    "pow",
    "powerset",
    "powmod",
    "prefix?",
    "prepend",
    "prime?",
    "print",
    "prints",
    "process",
    "product",
    "quantity?",
    "query",
    "random",
    "range",
    "range",
    "range?",
    "rational?",
    "read",
    "receive",
    "reciprocal",
    "regex?",
    "relative",
    "remove",
    "rename",
    "render",
    "repeat",
    "replace",
    "request",
    "return",
    "reverse",
    "rotate",
    "round",
    "same?",
    "sample",
    "saturate",
    "saturday?",
    "sec",
    "sech",
    "select",
    "send",
    "send?",
    "serve",
    "set",
    "set?",
    "shl",
    "shr",
    "shuffle",
    "sin",
    "sinh",
    "size",
    "skewness",
    "slice",
    "some?",
    "sort",
    "sorted?",
    "spin",
    "split",
    "sqrt",
    "squeeze",
    "stack",
    "standalone?",
    "store",
    "string?",
    "strip",
    "sub",
    "subset?",
    "suffix?",
    "sum",
    "sunday?",
    "superset?",
    "superuser?",
    "switch",
    "symbol?",
    "symbolLiteral?",
    "symbols",
    "symlink",
    "sys",
    "take",
    "tally",
    "tan",
    "tanh",
    "terminal",
    "terminate",
    "thursday?",
    "timestamp",
    "to",
    "today?",
    "translate",
    "true?",
    "truncate",
    "try",
    "tuesday?",
    "type",
    "type?",
    "unclip",
    "union",
    "unique",
    "unless",
    "unplug",
    "until",
    "unzip",
    "upper",
    "upper?",
    "values",
    "var",
    "variance",
    "version?",
    "volume",
    "webview",
    "wednesday?",
    "while",
    "whitespace?",
    "with",
    "word?",
    "wordwrap",
    "write",
    "xnor",
    "xnor?",
    "xor",
    "xor?",
    "zero?",
    "zero?",
    "zip",
  ];

  const LITERAL_KEYWORDS = [
    "true",
    "false",
    "maybe",
    "null",
    "epsilon",
    "infinite",
    "pi",
    "path",
    "arg",
    "args",
    "config",
    "script",
  ];

  const OPERATORS = [
    "--",
    "-->",
    "-:",
    "-",
    "-<",
    "-<<",
    "->",
    "->>",
    "::",
    ":",
    ":=",
    "!!",
    "!",
    "\\?\\?",
    "\\?",
    "\\.\\.\\.",
    "\\.\\.",
    "\\./",
    "@",
    "\\*",
    "\\*\\*",
    "/",
    "//",
    "/%",
    "\\",
    "\\\\",
    "&",
    "#",
    "##",
    "###",
    "####",
    "#####",
    "######",
    "%",
    "^",
    "∅",
    "∈",
    "∉",
    "∏",
    "∑",
    "\\+",
    "\\+\\+",
    "<--",
    "<-->",
    "<-",
    "<->",
    "<:",
    "<",
    "<<-",
    "<<->>",
    "<<",
    "<<<",
    "<<=",
    "<<=>>",
    "<=",
    "<==",
    "<==>",
    "<=>",
    "<>",
    "<\\|",
    "<\\|>",
    "<~",
    "<~>",
    "=",
    "=<",
    "==",
    "==>",
    "=>",
    "=>>",
    "=~",
    ">-",
    ">-<",
    ">:",
    ">",
    ">=",
    ">>-",
    ">>-<<",
    ">>",
    ">>>",
    "¬",
    "\\|-",
    "\\|",
    "\\|=",
    "\\|>",
    "\\|\\|",
    "~",
    "~>",
    "∞",
    "∧",
    "∨",
    "∩",
    "∪",
    "⊂",
    "⊃",
    "⊆",
    "⊇",
    "⊻",
    "⊼",
    "$",
  ];

  const OPERATOR = {
    className: "operator",
    match: hljs.regex.either(...OPERATORS),
  };

  const IDENTIFIER = "[a-zA-Z_][\\w?]*";

  const REGEX = {
    className: "regexp",
    begin: "{/",
    end: "/}",
  };

  const TYPE = {
    className: "type",
    begin: ":\\w+",
    end: "\\W",
    excludeEnd: true,
  };

  const MULTILINE_STRING = {
    className: "string",
    begin: "{",
    end: "}",
  };
  const VERBATIM_MULTILINE_STRING = {
    className: "string",
    begin: "{:",
    end: ":}",
  };

  const STRING = {
    variants: [
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      VERBATIM_MULTILINE_STRING,
      MULTILINE_STRING,
    ],
  };

  return {
    name: "Wren",
    keywords: {
      $pattern: IDENTIFIER,
      keyword: BUILT_IN_KEYWORDS,
      literal: LITERAL_KEYWORDS,
    },
    contains: [
      hljs.C_NUMBER_MODE,
      hljs.COMMENT(";", "\n"),
      STRING,
      REGEX,

      TYPE,
      OPERATOR,
    ],
  };
}
