---
title: "我的Hugo初始化记录"
description: 此文章将带你了解什么是 Hugo，如何安装 Hugo，如何利用 Hugo 创建网站，如何启用 Hugo，如何下载、配置自己喜欢的主题。
date: 2025-10-08T15:08:23+08:00
image: hugo_logo.png
math: false
license: Licensed under CC BY-NC-SA 4.0
hidden: false
comments: true
draft: true
tags: ["杂记"]
---

第一次使用 Hugo 来搭建自己的博客，没有想到的是过程竟然意外的顺利，只需要 `下载->安装->配置->发布` 就能搭建出来自己的博客。

在安装和配置 Hugo 之前，先来了解 Hugo 是什么，可以用来做什么吧。

## 什么是 Hugo?

Hugo 是一款用 Go 语言开发的静态网站生成器，以其快速构建和零依赖而著称。它通过将 Markdown 等格式的内容与模板结合，生成纯静态的 HTML 文件，适用于博客、文档站、作品集等场景。Hugo 结合了速度、灵活性和易用性，是现代静态网站开发的理想选择。

## 安装 Hugo

在安装 Hugo 之前需要确保你可以正常访问 Github，如果不能访问 Github 我推荐使用这个工具: [Steam++](https://steampp.net/)，开启工具后点击这里：[访问 Github](https://github.com)，来测试是否能正常访问 Github。

这里我不会介绍从 Hugo Github 主页中下载、安装和配置 Hugo 的方式，我推荐使用 [Scoop](https://scoop.sh/) 这个工具来安装 Hugo。这里我会配上 [Scoop 安装教程](https://zhuanlan.zhihu.com/p/1931641798855458999)。

安装完 Scoop 后，我们只需要在 Windows 终端中输入一行命令:

```sh
scoop install hugo
```

然后等待安装完成就好啦。

安装成功后，在自己的工作目录中打开终端，来新建一个 Hugo 网站。输入这个命令：

```sh
# sitename 为网站名(文件夹名)，推荐使用英文名如 Blog
hugo new site <sitename>
```

之后我们在终端输入，下面这行命令，在资源管理器中打开我们新建的网站：

```sh
# <sitename> 为你上面创建网站所使用的名称
cd <sitename>
explorer .
```

在资源管理器中打开后你就能看到 Hugo 新建网站的结构了，点击这里跳转到 [Hugo 目录说明](https://hugo.opendocs.io/zh-cn/getting-started/directory-structure/)。

## 下载主题

拥有一个好看的主题可以让访客留下一个好的观感和阅读体验，所以我们需要寻找一个自己认可的主题来配置到自己的网站上。点击这里跳转到 [Hugo Themes](https://themes.gohugo.io/)。来寻找自己喜欢的主题。

本文中我将使用 Stack 主题作为演示

![Stack 主题](/image-20251008161811541-1759911501837-1.png)

点击 Download 前往 Github 下载主题。

![Stack Github Home](/image-20251008162023291.png)

![Stack Github Releases](/image-20251008162103539.png)

将下载好的主题解压到自己的网站目录下的 `themes` 目录 _(如果你仔细看过 [Hugo 目录说明](https://hugo.opendocs.io/zh-cn/getting-started/directory-structure/)的话应该知道我在说什么)_ 下并解压，接着重命名为 `home-theme-stack`，再删掉压缩包。

进入到刚刚解压的主题目录中，找到 `exampleSite` 目录并进入，将里面的 `hugo.yaml` 文件和 `content` 目录**复制**到你网站的主目录中去。复制完后你会在主目录中看到有两个 `hugo` 名称的文件，你需要将 `hugo.toml` 删除，保留 `hugo.yaml` 也就是我们刚刚复制过来的配置文件。

不过这个过程中需要注意的是，因为我们国内网络的问题，无法访问 Youtube 网站，所以需要将他的视频引用示例文件夹给删掉。也就是将 `content/post/rich-content` 目录删除。

接着保存，输入下面的命令，打开浏览器，地址栏输入 `http://localhost:1313/` 就能看到你创建的网站啦。

```sh
# -D 的作用是显示草稿文章(未发布文章)
hugo server -D
```

## 配置主题

主题的配置基本上在 `hugo.yaml` 中就能完成，比如头像的配置，国际化的配置，个人信息的配置，页面结构的配置等。我们先从最基本的网站信息配置开始。

### 网站信息的配置

网站信息主要包含以下几项：

- 基本链接(baseurl)：这个也就是你网站的域名了，比如我的就是 `https://kjsone.dsheep.com`。
- 网站语言代码(languageCode)：他默认使用的是 `en-us`，也就是英文美国，我们中国的语言代码是 `zh-cn` (简体中文)。
- 主题(theme)：这个配置不用改（如果你完全按照我之前的步骤来的话）。
- 版权(copyright)：一般这里都写你的名字（网名，比如我就是KJSone）。



