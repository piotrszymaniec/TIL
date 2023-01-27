credit: https://github-com.translate.goog/Jeneko/News-api-migration-walkthrough?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp

# MIGRATION NEWS-API TO TS TASK WALKTHROUGH

An approximate description of the task execution process (**follow at your own peril and risk**). It will be useful for those who have questions about what exactly needs to be done in the task. The rest will be of little use.

## PREPARATION
+ Open the folder with the private repository **RSSchool** in **VSCode**
+ Create a new branch with the task name (**migration-newip-to-ts**)
+ Go to the created branch
+ Create a new folder named tasks
+ Copy the task files into it (download the **zip-file** from the github and unpack it)
+ *(Make an init commit)*

## CONFIGURING BUILD AND ADDING API KEY
+ Run `npm i` to install project source packages
+ Add **apiKey** (available at **https://newsapi.org**)
	+ To the file **src/components/controller/appLoader.js**
+ *(Make a commit)*
+ Add package **TS**
	+ `npm i -D typescript`
+ Add packages for **ESlint** and **Webpack** to work with **.ts files**
	+ `npm i -D @typescript-eslint/parser` (**TS** parser for **ESlint** - so that **ESlint** can parse **.ts** files correctly)
	+ `npm i -D @typescript-eslint/eslint-plugin` (**TS** plugin for **ESlint** - rules by which **ESlint** will check **.ts** files)
	+ `npm i -D ts-loader` (**TS** loader for **webpack** - so that **webpack** can work with **.ts** files)
	+ `npm i -D eslint-webpack-plugin` (**ESlint** plugin - for **ESlint** to work with **Webpack**)
+ Customize configs
	+ **TS**
		+ Create file **tsconfig.json** (command `npx tsc --init`)
		+ Inside the **tsconfig.json** file
			+ Disable `"module": "commonjs"` (because **Webpack** will handle the build)
			+ Enable `"strict": true` (task requirement)
			+ Enable `"noImplicitAny": true` (task requirement)
	+ **ESlint**
		+ Add to the root
			+ `"parser": "@typescript-eslint/parser"` (so that **ESlint** knows which parser to use)
		+ Add to the **"plugins"** array
			+ `"@typescript-eslint"` (for **ESlint** to see the **TS** plugin)
		+ Add to the **"extends"** array
			+ `"eslint:recommended"` (native **ESlint** rules - just in case)
			+ `"plugin:@typescript-eslint/recommended"` (**Typescript** rules)
		+ In the array **"rules"** add
			+ `"@typescript-eslint/no-explicit-any": 2` (no **any** type rule)
	+ **webpack**
		+ Change **"entry"** by removing the file extension **.js** from it (so that when replacing **.js** with **.ts** it will also pick it up)
		+ Add a rule for **.ts-files** to the **"module.rules"** array (so that **Wepback** processes **.ts-files**)
			+ `{ test: /\.ts$/i, use: 'ts-loader' },`
		+ Import the **ESlint** plugin (so that it works while **Webpack** is running)
			+ `const EslingPlugin = require('eslint-webpack-plugin');`
		+ Add an instance of the **ESlint** plugin to the **"plugins"** array (specify the **.ts** file type in its settings)
			+ `new EslingPlugin({ extensions: 'ts' })`
		+ Add the extension of **.ts-files** to the **"resolve.extensions"** array (this determines the order in which files are searched in imports)
			+ `extensions: ['.ts', '.js']`
+ *(Make a commit)*
+ Start the dev server with `npm start`

## DESCRIBING INTERFACES
+ Writing interfaces for **News API:**
	+ Create file **src/types/index.ts**
	+ Inside the file, we declare and import interfaces **News API** (`export interface <interface name> { ... }`)
		+ Which fields should have interfaces and their types can be found in the **News API** documentation (**https://newsapi.org/docs/endpoints/sources**)
+ *(Make a commit)*

## PROJECT MIGRATION
+ Change file extensions one by one from **.js** to **.ts** in the following order and ensure that there are no errors in the console (for each finished **.ts** file we commit):
	+ src/components/view/news/news.js
	+ src/components/view/sources/sources.js	
	+ src/components/view/appView.js
	+ src/components/controller/loader.js
	+ src/components/controller/appLoader.js
	+ src/components/controller/controller.js
	+ src/components/app/app.js
	+ src/index.js
	
## ADDITIONAL TASKS
+ Add a logo to the footer with a link to the course and a link to the author's github
+ *(Make a commit)*
+ Adding a **"feature"** (for example, alphabetical filtering or something else)
+ *(Make a commit)*
+ We remove the explicit connection of the script from the **html template** (if not already done)
+ *(Make a commit)*
+ We implement adaptive and bring beauty (edit **HTML** and **CSS**)
+ *(Make a commit)*
+ Fix missing **img/news_placeholder.jpg** (file **src/components/view/news/news.ts**)
+ *(Make a commit)*
+ Change **URL** in **fetch** to one that will work in **gh-pages** (**https://nodenews.herokuapp.com/**)
+ *(Last\* commit)*
+ Build the project with the command `npm run build`
+ Copy the build to the **gh-pages** branch
+ *(Commit to gh-pages and push to remote repository)*
- Making a **pool request**

**Mission Complete!**
