# actions-toolkit

[![CI](https://github.com/xt0rted/actions-toolkit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/xt0rted/actions-toolkit/actions/workflows/ci.yml)
[![CodeQL](https://github.com/xt0rted/actions-toolkit/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/xt0rted/actions-toolkit/actions/workflows/codeql-analysis.yml)
[![npm](https://img.shields.io/npm/v/@xt0rted/actions-toolkit)](https://www.npmjs.com/package/@xt0rted/actions-toolkit)

Helper functions, scripts, and Typescript types for working with GitHub Actions.

## Scripts

Name | Options | Description
-- | -- | --
`update-readme` | `--include-example` | Updates the `README.md` with tables for inputs, outputs, and optionally a minimal example.

### update-readme

This will read the inputs and outputs from the `action.yml` and build documentation tables from them.
Then placeholders in your `README.md` will be replaced with them

The placeholders are:

- `<!-- start example -->...<!-- end example -->`
- `<!-- start inputs -->...<!-- end inputs -->`
- `<!-- start outputs -->...<!-- end outputs -->`

By default the example isn't built or replaced, you need to pass `--include-example` to include it.

## Types

Name | Description
-- | --
`action-yml` | Types for the `action.yml` file.
