---
id: 1
title: 'ブログを構築した'
date: '2022-04-29'
tags:
    - Next.js
    - Markdown
---
前にMDXを使ってブログを構築したが、[Inkdrop](https://www.inkdrop.app/)との兼ね合いを考えてもう一度0からMarkdownで作ってみることにした。

## ライブラリなど

- Markdown Renderer [**react-markdown**](https://github.com/remarkjs/react-markdown)
- emoji [**twemoji**](https://twemoji.maxcdn.com/) [**remark-emoji**](https://github.com/rhysd/remark-emoji)  
:wave: :cat: :apple:
- Syntax Highlight [**rehype-prism-plus**](https://github.com/timlrx/rehype-prism-plus)  

``` js
const a = () => {
    console.log("Hello");
}

a(); // Hello
```  
