# simple-sample-eleventy

sample usages of eleventy site generator

Source code
for [this blog post](https://sombriks.com/blog/0042-getting-started-with-eleventy/)

## 00-zero-setup

just a folder, not a project at all.

just enter the folder and type:

```bash
cd 00-zero-setup
npx @11ty/eleventy
```

## 01-various-source-languages

cache eleventy into a npm project.

just enter the folder and type

```bash
cd 01-various-source-languages
npm i
npx eleventy
```

## 02-front-matter

not only cache, but setup a small npm script

just enter the folder and type

```bash
cd 02-front-matter
npm i
npm run build
```

## 03-data-files

same as the previous, but there is a `npm run dev` script so you can preview the
site locally

```bash
cd 03-data-files
npm i
npm run dev
```

## 04-global-data-files

there is a global data directory, so you don't really need to follow any rigid
name rule. se more about data
directory [here](https://www.11ty.dev/docs/data-global/).

```bash
cd 04-global-data-files
npm i
npm run dev
```

## 05-includes

you can [include](https://www.11ty.dev/docs/config/#directory-for-includes)
[some](https://mozilla.github.io/nunjucks/templating.html#include) fragments
into your page.

```bash
cd 05-includes
npm i
npm run dev
```

## 06-layouts

For even better fancy results, you can use [layouts](https://www.11ty.dev/docs/layouts/).
They're like includes [but better](https://www.11ty.dev/docs/layout-chaining/).

```bash
cd 06-layouts
npm i
npm run dev
```

## 07-custom directories

If you don't like the default layout structure used by eleventy you can change
it to quite anything you want. Either use [command line parameters](https://www.11ty.dev/docs/usage/)
or create the [.eleventy.js config file](https://www.11ty.dev/docs/config/#configuration-options).

Note that `_include` and `_data` directories are calculate from input directory.

```bash
cd 06-layouts
npm i
npm run dev
```
