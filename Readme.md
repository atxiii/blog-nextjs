# Gettign Started

Welcome to the Rick's blog documentation.

## Made with

- Nextjs
- TypeScript
- Tailwindcss
- ContentLayer
- MDX
- twin.macro

## System requirement

- Node.js 12.22.0 or later

- MacOS, Windows (including WSL), and Linux are supported

## Run theme

1- go to theme directory, open the terminal and install packages:

```
npm install
```

2- for development environment:

```
npm run dev
```

if you want build the theme:

```
npm run build
```

## Directory Structure

After `npm install`, by default, this theme gives you the following directory structure:

```
.
├── _api
├── _includes
├── _layouts
├── blogs
├── config
├── helper
├── node_modules
├── pages
├── public
├── styles
└── types
```

- \_api:

  You can find some of code that related to APIs

- \_includes:

  This directory contains compoenets.

- \_layouts:

  In this directory you can find blog layout and default layout for theme.

- blogs

  You can put or make your blog files here.

- config:

  This directory is for configuration, like seo, footer and other configuration that related to theme.

- helper:

  In this directory you can find interaction and animations functions.

- pages:

  All pages of theme located here.

- public:

  This directory contains assets (like images). Also if you want use image for blog you can put them here.

- styles:

  All styles and css files are here.

- types:

  This directory contains type modules of typescript.

## Configuration

At the root of the directory, this theme provides a config.yml file where you can specify configuration settings for your site.

## Favicon

You can put your favicons in `public/favicon` directory.

# Header

The code of Header located on `_includes/header.tsx`

The header has 3 section:

- Logo
- Menu
- Darkmode

## Logo

The code of logo located on `_includes/navbar.tsx` line **83**

Current Logo is a svg that located on `_includes/icons/logo.tsx`, I've used svg because we can control fill color for `Darkmode` option.

if you want use png/jpeg or other types you can replace code to this:

```

<Image
  alt="Home"
  src={resolvedTheme === 'light' ? '/logo.png' : '/dark-logo.png'}
  layout="responsive"
  width="277"
  height="109"
  priority={true}
/>

```

## Menu

The code of menu located on `_includes/navbar.tsx` line **89**

You can set your menu in `config/config.yml`

## Darkmode

The code of Darkmode located on `_includes/navbar.tsx` line **117**

You can disable the Darkmode option in `config/config.yml`.

> darkMode: 'off'

# Footer

At the `config/config.yml`, you can find the footer text.

# Pages

- Home
- Blog
- About
- Tag

## Home Page:

The source of home page located on `pages/index.tsx`

### Home Sections

The home page have 3 section,
each section is a component that located on `_includes` directory.

1.  Intro → intro.tsx
    Include Intro Image, content, social links.

    > social links are a component (social.tsx) that you can set link and name of socials in `/config/config.yml`.

2.  Tags → tags.tsx

    This section shows tags that you are using in blog posts.

3.  Blog Posts → posts.tsx

    This section shows blog posts, you can edit number of blog posts and other configuration in config directory.

Home page settings located on `/config/config.yml`

### Home Configuration

```yaml
title: <your title blog>
description: <blog description>
gridOfPosts:
mobile: <grid of posts for mobile devices>
tablet: <grid of posts for tablet devices>
desktop: <grid of posts for desktop devices>
postsPerPage: <number of posts in home page>
postsOrder: <Orderby 'date' or 'title'>
postsSort: <Sort 'DESC' or 'ASC' >
```

## Archive page (Blog)

Since this theme is using pagination, the source of blog page located on `pages/blog/[[...page]].tsx`.

### Blog Page Sections

The blog page have 4 sections:

- Title
- Tags
- Posts
- Pagination

### Pagination in blog page

You can find the source of pagination on `_includes/pagination.tsx`

You can change the number of posts per page in `/config/config.yml`

### Blog Configuration

The blog config is located on `/config/config.yml`.

## About Page

You can write about your self or make your CV in this page.

The source of home page located on `pages/about.tsx`

This page has 4 sections:

- Intro
- Projects

  The Projects are a component that located on `_includes/projects.tsx`

- Skill

  The Skills are a component that located on `_includes/skills.tsx`

- Contact

  The contact links deal with social component `_includes/social.tsx`

The about page has animation and interaction, you can find the animation files on `helper/animations`

## Tag Page

Tag page lists all of tags that used in blog posts.

# Single Post

Since for blog I've used dynamic routes, you can find the source of code in `pages/blog/[slug].tsx`

The single post using a specific layout (blogLayout) that located on `_layouts/blogLayout.tsx`.

In **blogLayout** you can see the CSS and single post codes.

## Writing

At the root of the directory, you can see the `blogs` folder where you can make a blog post with `mdx` type or put your mdx file here.

### Writing Structure

The single post has 2 section:

1. Front matter

Front matter allows page-specific metadata and functionality to be included at the top of a Markdown file.

The above image is an example of front-matter for this theme.

```yaml
---
title: <your-title>
description: <your-description>
publishedAt: <publish Date 'MM-DD-YYYY'
tag: <your tags> → this must be an array like: ['Document', 'Getting Start']
cover: <name of your cover> → you need to put your cover in public/images/<your-path>
author: <your-name>
tableOfContent: <Enable/Disable table of content> → on is Enable and off is Disable.
---
```

2.  Body

The body is markdown that support the mdx, MDX allows you to use JSX in your markdown content.

for example:

```javascript
<div
  style={{
    padding: '1rem',
    backgroundColor: 'darkOrange',
    borderRadius: '10px',
    color: 'white',
  }}
>
  <span>This is a test for MDX</span>
</div>
```

### Local Image and Cover

Generaly images located on the public directory. This theme has a special discipline to keep the structure clean for images.

We assume that the name of our blog post file is `hello-world.mdx` and the name of image is `cover.png`

> Example 1:
> blog post is under `blog` directory

So we need to move the images used for hello-world.mdx to this directory:`\public\images\blogs\hello-world`

then our image path will be: `\public\images\blogs\hello-world\cover.png`

> Example 2:
> blog post is under `blog\documents` directory

So we need to move the images used for hello-world.mdx to this directory:`\public\images\blogs\documents\hello-world`

then our image path will be: `\public\images\blogs\documents\hello-world\cover.png`

The structure for this blog post is:

Blog structure

```
blogs
└── documents
    ├── blogs-tags.mdx
    ├── getting-started.mdx
    ├── menu.mdx
    └── pages.mdx
```

According to the structure of the blog, the structure of our image will be as follows:

```
public
├── images
│   └── blogs
│       └── documents
│           ├── blogs-tags
│           │   ├── cover.png
│           │   ├── local-image.png
│           │   └── yml.png
│           ├── getting-started
│           ├── menu
│           └── pages


```

> Image syntax: `![yaml|contain](/images/blogs/documents/blogs-tags/local-image.png)`

> I've used a component for modify img tag . the component name is `MDXCompoenet.tsx` that located on `_includes/MDXCompoenet.tsx`

### External Image

For external image, you need to add the hostname of your URL to the `images.domains` config in `next.config.js`:

Ex: we modify `images.domains` for 'unsplash.com' & 'pexels.com' as follow:

```
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['unsplash.com', 'pexels.com'],
  },
};
```

# Single Tag

The single tag is generated automatically, the source code of tags located on `pages/tag/[slug.tsx]`.

The single tag page lists posts that have same tag. (You wrote the tags on the front matter of the blog post.)

# SEO config

At the root of the directory, this theme provides a `next-seo.config.ts` file where you can specify SEO settings for your site.

## Sitemap

sitemap.xml will build after `npm run build`, and available in `<your-url>/sitemap-0.xml`

> Before run `npm run build`, set your domain name on `.env.local`.
