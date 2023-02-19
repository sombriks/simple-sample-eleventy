# simple-sample-eleventy

sample usages of eleventy site generator

Source code for [this blog post](https://sombriks.com/blog/0042-getting-started-with-eleventy/)

## 00-zero-setup

just a folder, not a project at all.

just enter the folder and type:

```bash
npx @11ty/eleventy
```

## 01-various-source-languages

cache eleventy into a npm project.

just enter the folder and type

```bash
npm i
npx eleventy
```

## 02-front-matter

not only cache, but setup a small npm script

just enter the folder and type

```bash
npm i
npm run build
```

## 03-data-files

same as the previous, but there is a `npm run dev` script so you can preview the
site over http

```bash
npm i
npm run dev
```
