export { JSONLexer as Lexer } from "./generated/JSONLexer";
export * from "./generated/JSONParser";
export { JSONParser as Parser } from "./generated/JSONParser";
export { JSONVisitor as Visitor } from "./generated/JSONVisitor";
export { JSONListener as Listener } from "./generated/JSONListener";
export { default as grammar } from "./generated/JSON.g4";

const initialRule = "json";
export { initialRule };

const id = "json";
export { id };
