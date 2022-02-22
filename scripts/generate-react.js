#!/usr/bin/env node

/**
 * Helper script to generate baseline for some files containg all components
 */

const path = require("path");
const fg = require("fast-glob");
const fs = require("fs-extra");
const { kebabCase } = require("lodash");
const Handlebars = require("handlebars");

const INPUT_GLOB = "./src/components/**/Scale+([[:alnum:]]).tsx";
const OUTPUT_PATH = "./src/generated";
const CSS_TEMPLATE_PATH = "./scripts/hydrate-css.hbs";
const WEB_COMPONENTS_TEMPLATE_PATH = "./scripts/web-components.hbs";

const cssTemplateText = fs.readFileSync(CSS_TEMPLATE_PATH, {
  encoding: "utf-8",
});
const webComponentsTemplateText = fs.readFileSync(
  WEB_COMPONENTS_TEMPLATE_PATH,
  {
    encoding: "utf-8",
  }
);
const templateCss = Handlebars.compile(cssTemplateText);
const webComponentsTemplate = Handlebars.compile(webComponentsTemplateText);

main();

async function main() {

  fs.mkdirSync(OUTPUT_PATH, {recursive: true});

  const entries = await fg(INPUT_GLOB);

  const classNames = entries.map((s) =>
    s.substring(s.lastIndexOf("/") + 1, s.lastIndexOf("."))
  );
  const componentNames = classNames.map(kebabCase).map(replacements);

  await fs.writeFile(
    path.join(OUTPUT_PATH, "./", "qaware-scale-react.css"),
    templateCss({ entries: componentNames })
  );
  await fs.writeFile(
    path.join(OUTPUT_PATH, "./", "ScaleWebComponents.d.ts"),
    webComponentsTemplate({ entries: componentNames })
  );
}

function replacements(s) {
  switch (s) {
    case "scale-text-area":
      return "scale-textarea";
    case "scale-app-navigation-main-mobile":
      return "app-navigation-main-mobile";
    default:
      return s;
  }
}
