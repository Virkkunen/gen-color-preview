# gen-color-preview
<img alt="GitHub Package.json Version" src="https://img.shields.io/github/package-json/v/virkkunen/gen-color-preview" /> <img alt="Github License" src="https://img.shields.io/github/license/virkkunen/gen-color-preview" />
<img alt="GitHub Issues" src="https://img.shields.io/github/issues/virkkunen/gen-color-preview" />
<img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/virkkunen/gen-color-preview" />

A very simple package that creates a png image with a colored circle.

## Usage
```sh
npx gen-color-preview --color '#d20f39' --output redCircle
```

## Options

|    Command   |              Description             |  Type  | Required  |
|:------------:|------------------------------------|:------:|:---------:|
| -c, --color  | RGB color value (#D20F39)            | string | Yes       |
| -o, --output | File name to save, without extension | string | Yes       |
| -h, --help   | Show help                            |        |           |
| --version    | Show version                         |        |           |

## Output
```sh
npx . -c '#d20f39' -o preview01
```

![It's a circle alright](assets/preview01.png)

---

## Authors

- [@Virkkunen](https://www.github.com/Virkkunen)