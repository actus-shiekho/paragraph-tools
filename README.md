![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Paragraph Tools for Editor.js

![image](https://i.ibb.co/vdBTP1r/2022-08-02-17-41-13.png)

## Installation

### Install via NPM

Get the package

```shell
npm i --save editorjs-paragraph-tools
```

Include module at your application

```javascript
const Paragraph = require('editorjs-paragraph-tools');
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

## Usage

The Paragraph tool is included at editor.js by default, so you don't need to connect it manually.
If you want to connect your customized version of this tool, do not forget to use the [`initialBlock`](https://editorjs.io/configuration#change-the-default-block)
option of the editor config.

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...

  tools: {
    ...
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },
  }

  ...
});
```

## Config Params

The Paragraph Tool supports these configuration parameters:

| Field | Type     | Description        |
| ----- | -------- | ------------------ |
| placeholder | `string` | The placeholder. Will be shown only in the first paragraph when the whole editor is empty.  |
| preserveBlank | `boolean` | (default: `false`) Whether or not to keep blank paragraphs when saving editor data |

## Output data

| Field  | Type     | default | Description       |
| ------ |----------|-----|-------------------|
| text   | `string` |     |  paragraph's text |
| alignment   | `string`| left | left/center/right/justify |
| lineHeight   | `number`| 1.6 | 0.2 - 3 |


```json
{
    "type" : "paragraph",
    "data" : {
        "text" : "Check out our projects on a <a href=\"https://github.com/codex-team\">GitHub page</a>.",
        "alignment": "left",
        "lineHeight": 1.6
    }
}
```

