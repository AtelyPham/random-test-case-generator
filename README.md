# Test case Generator

## File Structure

- `data.json`: Contain scrap data from [Codeforces](https://codeforces.com/).

- `index.js`: Parse valid `input` and `output` from `data.json` to `input` and `output` directory.

- `random.js`: Main file for test case generator, **Note**: This file only generate input.

- `shell.js`: Input already generated will produce output by `a.out`.

- `check.js`: Run to validate input and output has been generated.

- `a.out`: Binary file C++ compiled to.
