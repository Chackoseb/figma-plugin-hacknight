![Plasmo Notion](https://github.com/TH-Activities/saturday-hack-night-template/assets/64391274/85d3fbb8-aed6-4751-b051-4539df392f1a)


# Certificate Generator
This is a Figma plugin that generates bulk certificates using the data given by the user. This plugin aims to automate tasks where bulk amount of documents needed to be generated.
## Team members
1. [Chackochan Sebastian](https://github.com/Chackoseb)
2. [Catherine Jose](https://github.com/cath0806)
## Product walkthrough


https://github.com/cath0806/figma-plugin-hacknight/assets/96349137/64bd4e68-9f50-4a6c-82c3-a7b92f4dd458


## Libraries used
* Typescript
* NPM
## How to Run
Instructions for running Below are the steps to get your plugin running. You can also find instructions at: https://www.figma.com/plugin-docs/plugin-quickstart-guide/

This plugin template uses Typescript and NPM, two standard tools for creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other libraries. You can find the download link here:

https://nodejs.org/en/download/

Next, install TypeScript using the command:
````
npm install -g typescript
````
Finally, in the directory of your plugin, get the latest type definitions for the plugin API by running:
````
npm install --save-dev @figma/plugin-typings
````
If you are familiar with JavaScript, TypeScript will look very familiar. In fact, valid JavaScript code is already valid Typescript code.

TypeScript adds type annotations to variables. This allows code editors such as Visual Studio Code to provide information about the Figma API while you are writing code, as well as help catch bugs you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using TypeScript requires a compiler to convert TypeScript (code.ts) into JavaScript (code.js) for the browser to run.

We recommend writing TypeScript code using Visual Studio code:

Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
Open this directory in Visual Studio Code.
Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item, then select "npm: watch". You will have to do this again every time you reopen Visual Studio Code.
That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
