import {
  readFile,
  writeFile,
} from "node:fs/promises";
import { resolve } from "node:path";

import { load as yamlLoad } from "js-yaml";

import type { ActionDefinition } from "../../types/action-yml";

export default async function (includeExample = false) {
  const url = await urlFromPackageJson();
  const name = actionName(url);

  const fileContents = await readFile(
    resolve("./action.yml"),
    { encoding: "utf8" },
  );
  const definition = yamlLoad(fileContents) as ActionDefinition;

  let example: string | undefined;

  if (includeExample) {
    example = [...buildUsageExample(name, definition)].join("\n");
  }

  const inputs = [...buildInputsTable(definition)].join("\n");
  const outputs = [...buildOutputsTable(definition)].join("\n");

  await updateReadme(example, inputs, outputs);
}

async function urlFromPackageJson(): Promise<string> {
  const packageJson = await readFile(
    resolve("./package.json"),
    { encoding: "utf8" },
  );

  const pkg = JSON.parse(packageJson) as {
    repository?: string | {
      url?: string;
    };
  };

  if (typeof pkg.repository === "string") {
    return pkg.repository;
  }

  if (pkg.repository?.url) {
    return pkg.repository.url;
  }

  throw new Error("No repository url found in package.json");
}

function actionName(url: string) {
  if (url.endsWith(".git")) {
    url = url.slice(0, -4);
  }

  const [user, repo] = new URL(url).pathname.split("/").filter(Boolean);

  return `${user}/${repo}`;
}

function* buildUsageExample(name: string, definition: ActionDefinition): Iterable<string> {
  yield "```yaml";
  yield `- uses: ${name}`;

  let hasRequiredInput = false;
  for (const inputName in definition.inputs) {
    const {
      required,
      default: defaultValue,
    } = definition.inputs[inputName];

    if (!required) {
      continue;
    }

    if (!hasRequiredInput) {
      hasRequiredInput = true;

      yield "  inputs:";
    }

    yield `    ${inputName}: ${yamlValue(defaultValue)}`;
  }

  yield "```";
}

function yamlValue(value?: string) {
  if (!value) {
    value = "";
  }

  const trueValue = ["true", "True", "TRUE"];
  const falseValue = ["false", "False", "FALSE"];

  if (trueValue.includes(value)) {
    return "true";
  }

  if (falseValue.includes(value)) {
    return "false";
  }

  return `"${value}"`;
}

function* buildInputsTable(definition: ActionDefinition): Iterable<string> {
  yield "Name | Description | Default";
  yield "-- | -- | --";

  for (const inputName in definition.inputs) {
    const {
      description,
      default: defaultValue,
    } = definition.inputs[inputName];

    yield `\`${inputName}\` | ${description} | \`${defaultValue}\``;
  }
}

function* buildOutputsTable(definition: ActionDefinition): Iterable<string> {
  yield "Name | Description | Example";
  yield "-- | -- | --";

  for (const inputName in definition.outputs) {
    const {
      description,
      _example,
    } = definition.outputs[inputName];

    yield `\`${inputName}\` | ${description} | \`${_example}\``;
  }
}

async function updateReadme(example: string | undefined, inputs: string, outputs: string) {
  const readme = resolve("./README.md");
  const fileContents = await readFile(
    readme,
    { encoding: "utf8" },
  );

  let updatedContents = fileContents;

  if (example) {
    updatedContents = replace(updatedContents, "example", example);
  }

  updatedContents = replace(updatedContents, "inputs", inputs);
  updatedContents = replace(updatedContents, "outputs", outputs);

  await writeFile(
    readme,
    updatedContents,
    { encoding: "utf8" },
  );
}

function replace(source: string, name: string, value: string) {
  return source.replace(
    new RegExp(`<!-- start ${name} -->.*<!-- end ${name} -->`, "s"),
    `<!-- start ${name} -->\n${value}\n<!-- end ${name} -->`,
  );
}
