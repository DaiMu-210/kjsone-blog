---
title: "我的Hugo初始化记录"
description: 此文章将带你了解什么是 Hugo，如何安装 Hugo，如何利用 Hugo 创建网站，如何启用 Hugo，如何下载、配置自己喜欢的主题。
date: 2025-10-08T15:08:23+08:00
image: hugo_logo.png
math: false
license: Licensed under CC BY-NC-SA 4.0
hidden: false
comments: true
draft: false
tags: ["Hugo"]
categories: ["title-tattle"]
keywords: ["Hugo", "hugo"]
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
- 默认文章内容语言(DefaultContentLanguage)：一般情况下我们都使用中文，所以这里使用 `zh-cn`。

#### 图标

网站图标的配置在 `params` 下的 `favicon` 中，需要将 `ico` 文件放在 `static` 目录下，然后使用 `/<filename>` 的方式进行引用。我的配置如下：

```yaml
params:
    favicon: /favicon.ico
```

#### 页脚

页脚可配置的选项有**网站创建年份**以及**自定义文本**，同样在 `params` 下进行配置

```yaml
params:
    ...其他配置
    footer:
        since: 2025
        customText: "自定义文本"
```

### 页面语言配置

页面语言我仅保留了中文，这样多语言选项组件就会从页面上消失，我的配置如下：

```yaml
languages:
    zh-cn:
        languageName: 中文
        title: KJSone
        weight: 2
        params:
            sidebar:
                subtitle: 欢迎来到我的博客，希望你能在这里有所收获！
```

### 侧边栏配置

侧边栏同样在 `params` 下，`emoji` 就是头像右下角的表情，`subtitle` 就是你名字下面的简介，`avatar` 是用于设置你的头像。

这里需要重点讲一下的是头像所要存放的位置，应该在主目录下 `assets/img` 中，如果你直接放在 `assets` 目录中的话，可以将 `src` 属性的值改为 `/<filename>`。

```yaml
params:
    ...其他配置
    sidebar:
        emoji: 😜
        subtitle: 欢迎来到我的博客,希望你能在这里有所收获!
        avatar:
            enabled: true
            local: true
            src: img/avatar.png
```

### 文章配置

文章的配置有，需要说一下的是 `boolean` 是布尔类型，它的值有 `true | false`，分别对应“是”|“否”，也就是功能“开启”|“关闭”的意思:

- `math`(boolean)：是否支持数学公式，也就是 **LaTeX** 语法。
- `toc`(boolean): 是否开启目录。
- `readingTime`(boolean)：是否开启阅读时间，它会根据文章字数来估算大概的计算一篇文章阅读所需要的时间。
- `license`：版权
  - `enabled`(boolean)：是否开启版权
  - `default`(string)：版权协议，默认是“Licensed under CC BY-NC-SA 4.0”，感兴趣的可以查一下，大概的意思是你写的文章可以被复制、转载，但是不可用于商业用途盈利。

我的配置如下：

```yaml
params:
    ...其他配置
    article:
        math: true
        toc: true
        readingTime: true
        license:
            enabled: true
            default: Licensed under CC BY-NC-SA 4.0
```

### 评论配置

评论配置需要将你的项目发布到 Github 上去，并且仓库的权限需要更改为公开，至于为什么需要发布到 Github 因为我使用的是 utterances，它是一款免费的评论组件，其实它是利用了 Github 的 issue 功能，他会为每一篇文章开启一个独立的 issue。

我的配置如下：

```yaml
params:
    comments:
        enabled: true
        provider: utterances
        
        utterances:
            repo: "DaiMu-210/kjsone-blog"
            issueTerm: pathname
            label:
```

这里需要注意的是，Stack 主题默认使用的是 disqus，我们需要将 `provider` 属性的值改为 `utterances`。

utterances 中 repo 中需要填写你的用户名和仓库名。其他属性不用改。Label 的作用就给你的文章的评论(issue)添加一个标签。

## Stack 主题发布文章要求

使用Stack发布文章需要注意的是一篇文章就是一个文件夹，并且 Markdown 文件需要命名为 `index.md`，文章中使用的视频或图片等资源需要放在此文件夹下，引用方式为 `/<filename>`。

例子，比如我现在需要创建一篇文章叫“MyFirstBlog”，首先我们需要先输入下面这条命令来创建一篇文章：

```sh
hugo new content post/MyFirstBlog/index.md
```

之后我们就可以撰写文章中的内容了。

### 文章头信息

目前我已知的可设置的头信息如下：

```markdown
---
title: 
description: 
date: 
image: 
math: 
license: 
hidden: 
comments: 
draft: 
tags:
keywords:
readingTime:
---
```

- title: 文章标题
- description：文章摘要
- date：创建时间（这个是自动生成的，不需要我们改）
- image: 文章的头图，如果头图与文章同目录直接点击文章名即可，比如我的这篇文章是这样的：`image: hugo_logo.png`
- math：是否开启数学公式
- license：版权协议，不写的话它会使用配置文件中默认的那个，上面有提到过忘了就翻上去看看。
- hidden(boolean)：文章是否隐藏
- comments(boolean)：是否开启评论
- draft(boolean)：是否为草稿，如果开启为 True 的话发布情况下是看不到这篇文章的。
- tags([]string)：文章的标签，比如我的这篇文章是这样的：`tags: ["杂记"]`
- keywords([]string)：文章的关键词，有助于SEO，说人话就是有助于搜索。
- readingTime(boolean)：是否开启预计阅读时长。

一般情况下并不会使用所有属性，主要使用的有title、description、date、draft。

### 引用块（如果你的文章中有使用其他人的内容的话可能你需要这个）

{{< highlight markdown >}}
{{</* quote author="作者" source="出处" url="文章链接" */>}}
引用内容
{{</* /quote */>}}
{{< /highlight >}}

- author：是引用文章的作者名字
- source：引用出处，一般是文章的名字
- url：引用文章的链接

引用块的格式就是这样的，比 Markdown 的 `>` 语法看起来更加专业一些。我的友链中就使用到了，大家感兴趣的话可以去看看。

### 视频引用

其实 Stack 主题提供了很多平台的视频引入方式，不过我们国内可使用的只有哔哩哔哩和腾讯两家。

{{< highlight markdown >}}
哔哩哔哩：
{{</* bilibili VIDEO_ID PART_NUMBER */>}}
腾讯：
{{</* tencent VIDEO_ID */>}}
{{< /highlight >}}

还有本地视频的引入方式：

{{< highlight markdown >}}
{{</* video VIDEO_URL */>}}

{{</* video src="VIDEO_URL" autoplay="true" poster="./video-poster.png" */>}}
{{< /highlight >}}

## 结束语

这是我的第一篇文章，说实话，我从来没有做笔记的习惯，这篇文章我写了大概四个小时，虽然内容不是很多，但如果能帮助到正在阅读这篇文章的朋友我会很开心。需要帮助的朋友如果还遇到了其他的困难可以在下面发表评论，遇到问题我们一起解决，在编程和学习的这条路生你从来都不是自己一个人。

最后感谢大家阅读我的文章。
