credit: https://github-com.translate.goog/Jeneko/News-api-migration-walkthrough?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp

# Setting typescript project

An approximate description of the task execution process (**follow at your own peril and risk**). It will be useful for those who have questions about what exactly needs to be done in the task. The rest will be of little use.

## With Git and Github
### (optional) 1. Setting up git and github
+ install git
+ create account on https://github.com
+ create new repository on github
+ check option to include README.md file
+ copy github repo adress -> click green button clone, click button HTTPS, copy link - it will look something like `https://github.com/user/repository-name.git`
+ type in command line `git clone https://github.com/user/repository-name.git`

## PREPARATION
+ Open/Create the folder (cloned) **repository-name** (as in instructions above 1. )
+ type short description of project in README.md
+ *(Make commit with message 'init')*

## CONFIGURING BUILD
+ Run `npm init` to create project npm config for installing future packages
+ *(Make a commit with message 'add npm config')*

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
+ *(Make a commit with message 'add ts and elint + config')*
+ Start the dev server with `npm start`


## PROJECT MIGRATION
+ Change file extensions one by one from **.js** to **.ts** in the following order and ensure that there are no errors in the console (for each finished **.ts** file we commit):
	+ first files with most specific (single responsibility) functions that are independent of each other
	+ next files with dependancies already converted to ts	
	+ above steps as much as needed
	+ last file - index.js
	
## ADDITIONAL TASKS
+ Create branch **gh-pages**
+ Switch to that branch `git branch gh-pages`
+ Build the project with the command `npm run build`
+ Copy the build to the **gh-pages** branch
+ *(Commit to gh-pages and push to remote repository)*


**Mission Complete!**
