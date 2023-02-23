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

you can [include](https://www.11ty.dev/docs/config/#directory-for-includes) some
fragments into your page


