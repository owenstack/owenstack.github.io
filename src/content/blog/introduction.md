---
title: 'Introduction to Web Development'
description: 'A brief overview on HTML'
pubDate: 'Jun 19 2024'
heroImage: '/images/Screenshot-html.png'
---

Hey everyone! Welcome to the start of what’s going to be an epic web development journey. We don’t have the entire map drawn out yet, but that’s the exciting part. Let’s take this first step together and explore the world of web development. Who knows where we’ll end up? Ready? Let’s go!

## Course Material(s)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)

## Web Development Basics: What’s the Big Deal?
Let’s keep things simple: HTML, CSS, and JavaScript are the core trio that brings the web to life. Together, they form the foundation of what we see and interact with online. Today, we’ll scratch the surface of where they came from and why they matter.

### The Web: Your Personal Info Delivery Service
The web’s like the ultimate middleman—making sure info gets from one place to another. Here’s the flow:

1. You (the user) start the process by making a request in your browser.
2. Your browser sends a "GET" request for the page you want to visit.
3. This goes to the DNS (Domain Name System), which translates the URL into the IP address of the server.
4. The server, if it’s got what you need, sends back a response.
5. The browser grabs that response and boom—you see the content on your screen.

### HTML: The Skeleton of the Web
HTML, short for **Hypertext Markup Language**, is your web’s backbone. Let’s break it down:

- **Hypertext**: Linking between pages (basically, you click and jump to another page).
- **Markup**: A way to describe content (think of it as a label system).
- **Language**: A set of rules that everyone (i.e., browsers) understands.

If we think of a webpage as a house, HTML is the structure that holds everything up. But a house with just a frame? Not super fun to live in. You’ll need some style—that’s where CSS comes in.

HTML elements are the building blocks, like `<head>`, `<body>`, `<img>`, and others. They tell the browser how to structure the content.

Here's a basic HTML element example:

![Anatomy of an HTML element](/images/grumpy-cat-small.png)

Elements can also have attributes, giving them extra capabilities. Some important ones include:

- `src`: Where your content (like an image) is coming from.
- `class`: A way to group elements for styling.
- `id`: A unique identifier for elements.

Now, here’s a basic HTML document structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

A quick rundown of the parts:
- `<!DOCTYPE html>`: Tells the browser we’re working with HTML5.
- `<html>`: The root of the document.
- `<head>`: Contains meta info (like encoding and title).
- `<body>`: The content that’s visible on the webpage.

### CSS: The Stylist of the Web
If HTML is the skeleton, CSS is the stylish wardrobe that makes everything look good. CSS stands for **Cascading Style Sheets** and is only limited by your imagination. We’ll dive deeper into CSS in the next session.

## Putting It Into Practice
So, with what we’ve learned so far, here's what the students came up with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning HTML</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <a href="shapes.html">Shapes</a>
    </header>
    <main>
        <h1>About the Web Dev Class</h1>
        <h2>Attendees:</h2>
        <ol>
            <li>Mmesoma</li>
            <li>Abraham</li>
            <li>Mercy</li>
            <li>Philip</li>
        </ol>
        <h3>Otherwise known as:</h3>
        <ul>
            <li>Esther</li>
            <li>AB</li>
            <li>Chijioke's best friend</li>
            <li>Big smoke</li>
        </ul>
    </main>
</body>
</html>
```

## Wrapping Up
By the end of today’s session, we had something that looked like this:

![Student work](/images/Screenshot-html.png)

Before we meet again, your homework is to sign up for [Free Code Camp](https://www.freecodecamp.org/) and finish the first chapter. It’s an awesome way to practice what you’re learning. 

Remember, web development is an art form. Your tools—HTML, CSS, and JavaScript—are the brushes, and the web is your canvas. With enough practice, you can create just about anything you dream up.

Stay curious, keep building, and I’ll see you in the next lesson where we’ll explore the magic of CSS!

*Image credit: Anatomy of an HTML element courtesy of [MDN](https://developer.mozilla.org)*
