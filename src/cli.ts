#!/usr/bin/env node

import updateReadme from "./cli/update-readme";

const command = process.argv[2];

if (command === "update-readme") {
  await updateReadme(process.argv[3] === "--include-example");
} else {
  console.error(`Unknown command: ${command}`);
}
