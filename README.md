<h1 align="center">Quizzical</h1>
<p align="center">
  Made with <code>HTML</code>, <code>CSS</code>, <code>TypeScript</code>, <code>ReactJS</code>, <code>styled-components</code>
</p>
<p align="center">
  Bootstrapped with <code>Create React App</code>
</p>

<p align="center">
  <img src="./docs/results/homepage.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/big_one.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/big_two.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/big_skeleton.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/settings.png" width="100%">
</p>

## ℹ️ About

This is a solo challenge "Quizzical" from Scrimba React Course ([link](https://scrimba.com/learn/learnreact/react-section-4-solo-project-co24f49bea8aace7c174082c8)).

The challenge is to create from scratch a Quizzical application.

API: https://opentdb.com/api_config.php

<p align="center">
  <img src="./docs/requirements.png" width="100%">
</p>

I made my own Figma prototype and redesigned the whole application.

Figma prototype: https://www.figma.com/file/0SIScG6N67cgfIvsY5cQng/Quizzical-App

## ⚙️ Tools

- **HTML5**
  - ReactJS
- **CSS**
  - styled-components
- **TypeScript**
  - ReactJS
- **NodeJS**
- **Vite**
- **Github Pages**

## 🔨 Build project

<table>
  <tr>
    <th>Command</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>npm&nbsp;install</code></td>
    <td>Installs required npm packages. Run it before building the project</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;start</code></td>
    <td>Starts a local web server with HMR (Hot Module Replacement) for development</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;run&nbsp;predeploy</code></td>
    <td>Builds the project, and outputs to the folder <code>./build</code></td>
  </tr>
</table>

## 📁 File Structure

<table>
  <tr>
    <th>Path</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td><code>public</code></td>
    <td>Folder with index.html and assets referenced from index.html</td>
  </tr>
  <tr>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td><code>src</code></td>
    <td>Source files needed for application development</td>
  </tr>
  <tr>
    <td><code>src / app</code></td>
    <td>Folder with hooks for work with Redux store</td>
  </tr>
  <tr>
    <td><code>src / assets</code></td>
    <td>Folder with static assets (images, favicon)</td>
  </tr>
  <tr>
    <td><code>src / components</code></td>
    <td>Folder with React components</td>
  </tr>
  <tr>
    <td><code>src / features</code></td>
    <td>Folder with Redux slices (Redux toolkit)</td>
  </tr>
  <tr>
    <td><code>src / pages</code></td>
    <td>Folder with pages</td>
  </tr>
  <tr>
    <td><code>src / styles</code></td>
    <td>Folder with global styles written in styled components</td>
  </tr>
  <tr>
    <td><code>src / App.tsx</code></td>
    <td>Main code for the application</td>
  </tr>
  <tr>
    <td><code>src / App.styled.tsx</code></td>
    <td>Styles for App.tsx (styled-components)</td>
  </tr>
  <tr>
    <td><code>src / index.tsx</code></td>
    <td>Entry point for the module bundler</td>
  </tr>
  <tr>
    <td><code>src / styles.css</code></td>
    <td>Styles for a spinner that is showed until all JS files are loaded</td>
  </tr>
  <tr>
    <td><code>src / react-app-env.d.ts</code></td>
    <td>This file references TypeScript types declarations that are specific to projects started with Create React App.</td>
  </tr>
  <tr>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td><code>docs</code></td>
    <td>Folder with additional information, documentation</td>
  </tr>
  <tr>
    <td><code>docs / results</code></td>
    <td>Folder with screenshots of how the application works after being fully developed</td>
  </tr>
  <tr>
    <td><code>docs / requirements.png</code></td>
    <td>What must be done in this challenge</td>
  </tr>
  <tr>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td><code>LICENSE</code></td>
    <td>MIT License</td>
  </tr>
  <tr>
    <td><code>tsconfig.json</code></td>
    <td>Configuration for TS compiler</td>
  </tr>
  <tr>
    <td><code>package-lock.json</code></td>
    <td>JSON file that keeps track of the exact version of every package that is installed so that a product is 100% reproducible in the same way even if packages are updated by their maintainers</td>
  </tr>
  <tr>
    <td><code>package.json</code></td>
    <td>JSON file that holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies</td>
  </tr>
  
</table>

## 📦 NPM Packages worth mentioning

- `react-detect-offline` - Used it to display a component that is shown only when the user is offline
- `react-loading-skeleton` - Used it to show skeletons while fetching new data
- `react-toastify` - Used it to display notifications that disappear over time
- `react-outside-click-handler` - Used it to close options list in select component when clicking outside
- `@reduxjs/toolkit`, `react-redux` - Used them to store state in one place
- `react-router-dom` - Used it to route user between pages

## 💡 Details

My first ReactJS project with Create React App.

- First time using Redux, Redux toolkit
- Made custom select components
- Made a custom modal window (React Portal). Changing settings will change query params for API
- Made API requests using RTK Query
- Custom skeleton components. They rely on a `react-loading-skeleton` library
- Made routing with React Router

This was quite a big project. The description is quite short, but well... I spent about 2 weeks on this project.

## 🔗 Useful resources

- [ReactJS Course](https://scrimba.com/learn/learnreact/) - Awesome free interactive course!
- [StackOverflow : Guide on a spinner](https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering)
- [W3Schools : Custom toggle switch](https://www.w3schools.com/howto/howto_css_switch.asp)
- [Implementing Dark Mode In React Apps Using styled-components — Smashing Magazine](https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/) - Tried to use it, it didn't work, although it motivated me to use custom hooks, so eventually I came up with my own solution that worked fine
- [Vite docs](https://vitejs.dev/)

- [Redux Toolkit Introduction](https://www.youtube.com/watch?v=9zySeP5vH9c&t=1s&ab_channel=LearnWithJason) + [Github repository with code](https://github.com/learnwithjason/lets-learn-redux-toolkit) - Helped to understand how to work with Redux Toolkit
- [How to deploy a react app on GH Pages](https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/) - to put shortly, just use HashRouter in the application
- [How to Make a Custom Scrollbar](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp)
- [How to Make a Custom Select Component](https://codepen.io/tcomdev/pen/WNXeqoG)
- [How to Make a Custom Spinner](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader)
- [How to Decode HTML Entities](https://javascript.plainenglish.io/here-are-2-javascript-approaches-to-encode-decode-html-entities-52989bb12031)

## 👤 Author

- Frontend Mentor - [@GrbnvAlex](https://www.frontendmentor.io/profile/GrbnvAlex)
- Telegram - [@Arlagonix](https://t.me/Arlagonix)
- Github - [@arlagonix](https://github.com/arlagonix)
