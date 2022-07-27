# Microfrontend Architecture using Monorepo, NX, React, Dynamic Module Federation, Github Actions and GH-Pages

### Build Branches Status

| Branch |                                           Build                                            |                                                                                                                                                       Coverage |
| ------ | :----------------------------------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Main   | ![CI](https://github.com/oseasjs/monorepo-nx-react-mfe/workflows/CI/badge.svg?branch=main) | [![codecov](https://codecov.io/gh/oseasjs/monorepo-nx-react-mfe/branch/main/graph/badge.svg)](https://codecov.io/gh/oseasjs/monorepo-nx-react-mfe/branch/main) |

## This project was bootstrapped with:

- [Microfrontend](https://martinfowler.com/articles/micro-frontends.html);
- [Monorepo](https://monorepo.tools/);
- [NX](https://nx.dev/getting-started/intro);
- [Node](https://nodejs.org/en/docs/);
- [ReactJS](https://pt-br.reactjs.org/docs/getting-started.html);
- [Webpack 5](https://webpack.js.org/concepts/);
- [Module Federation](https://webpack.js.org/concepts/module-federation/);
- [Github Actions](https://docs.github.com/pt/actions);
- [Github Pages](https://docs.github.com/en/pages);

## Project Goal

Simple application that aggregate 4 separate ui modules:

UI Modules:

- Shell (host): 8080
- Header: 8081
- React Module 1: 8082
- React Module 2: 8083

## Running

- Install and running locally: `yarn` & `nx serve`
- Shell locally: http://localhost:8080
- Shell on Github Pages: https://oseasjs.github.io/monorepo-nx-react-mfe/apps/shell/index.html

## Inspiration

- NX Documentation:
  - https://nx.dev/getting-started/intro
- Module Federation documentation:
  - https://webpack.js.org/concepts/module-federation/
- Module Federation e-Book:
  - https://module-federation.myshopify.com/
- Practional videos by [Jack Herrington](https://www.jackherrington.com/micro-frontends/):
  - https://www.youtube.com/playlist?list=PLNqp92_EXZBLr7p7hn6IYa1YPNs4yJ1t1
