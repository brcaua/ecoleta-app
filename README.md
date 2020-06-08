<h1 align=center>
<img src="https://user-images.githubusercontent.com/38081852/83580830-6f63e200-a513-11ea-9a27-0a109ec1e4d0.png" />
</h1>

<div align="center">

![GitHub issues][github_issues_badge] ![GitHub][repository_license_badge] ![Node_Badge][node_version_badge] ![Npm_Badge][npm_version_badge] ![React_Badge][web_react_badge] ![React_Native_Badge][mobile_react-native_badge] ![NodeJS_Badge][server_nodejs_badge] [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.png?v=101)](https://github.com/ellerbrock/typescript-badges/)
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>

</div>

<h3 align="center">

♻️ Ecoleta is a ** Open Source ** project developed during the week **Next Level Week (1.0)** of **[Rocketseat][rocketseat_site]** using technologies ***TypeScript, Node, React e React Native***.

</h3>

<!-- 
  ...
  Reserved Location for the Banner with the screen assembly
  website and mobile app.
  ...
-->

## **:rocket: GOAL**

The project aims to ** establish a connection ** between ** companies and / or entities that collect waste ** (organic and inorganic) ** to people and / or entities that constantly need to dispose of this waste **. Solving a major recurring problem that is ** inappropriate waste disposal **, facilitating the recycling and reuse process.

<!-- 
  ...
  Location Reserved for the GIF of the project running.
  ...
-->

## **:computer: TECHNOLOGIES**


#### **Website** ([React][react] + [TypeScript][typescript])

  - **[React Router Dom][react_router_dom]**
  - **[React Icons][react_icons]**
  - **[Axios][axios]**
  - **[Leaflet][leaflet]**
  - **[React Leaflet][react_leaflet]**
  - **[React Dropzone][react_dropzone]**


  \* See the archive <kbd>[package.json](./sources/website/package.json)</kbd>

#### **Server** ([NodeJS][node] + [TypeScript][typescript])

  - **[Express][express]**
  - **[CORS][cors]**
  - **[KnexJS][knex]**
  - **[SQLite][sqlite3]**
  - **[ts-node][tsnode]**
  - **[dotENV][dotenv]**
  - **[Multer][multer]**
  - **[Celebrate][celebrate]**
  - **[Joi][joi]**

  \* See the archive <kbd>[package.json](./sources/server/package.json)</kbd>

#### **Mobile** ([React Native][react_native] + [TypeScript][typescript])

  - **[Expo][expo]**
  - **[Expo Google Fonts][expo_google_fonts]**
  - **[React Navigation][react_navigation]**
  - **[React Native Maps][react_native_maps]**
  - **[Expo Constants][expo_constants]**
  - **[React Native SVG][react_native_svg]**
  - **[Axios][axios]**
  - **[Expo Location][expo_location]**
  - **[Expo Mail Composer][expo_mail_composer]**

  \* See the archive <kbd>[package.json](./sources/mobile/package.json)</kbd>

#### **Utilities**

- Prototype: **[Figma](https://www.figma.com/)** &rarr; **<kbd>[Protótipo (Ecoleta)](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)</kbd>**
- API: **[IBGE API][ibge_api]** &rarr; **<kbd>[API de UFs][ibge_api_ufs]</kbd>**, **<kbd>[API de Municípios][ibge_api_municipios]</kbd>** 
- Maps: **[Leaflet][leaflet]**
- Editor: **[Visual Studio Code][vscode]** &rarr; Extensions: **<kbd>[SQLite][vscode_sqlite_extension]</kbd>**
- Markdown: **[StackEdit][stackedit]**, **<kbd>[Markdown Emoji][markdown_emoji]</kbd>**
- Commit Conventional: **[Commitlint][commitlint]**
- API's Test: **[Insomnia][insomnia]**
- Icons: **[Feather Icons][feather_icons]**, **[Font Awesome][font_awesome]**
- Fonts: **[Ubuntu][font_ubuntu]**, **[Roboto][font_roboto]**


## **:wine_glass: HOW TO USE**

### Initial Settings

First, you need to have the <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> installed on your machine. 

If you are using ** Linux **, you can choose to install ** Node ** through the version manager <kbd> [asdf] </kbd> to facilitate the process of changing the version of ** Node * *, when necessary.

You can also choose to use ** yarn ** instead of ** npm **. You can install by clicking on this <kbd> [link] [yarn] </kbd>, or via <kbd> [asdf] </kbd>.

After ** Node ** is installed, install ** React and React Native (Expo) ** dependencies globally, using the commands:

```sh
# React:
$ npm install create-react-app -g

# Expo (React Native):
$ npm install -g expo-cli 
```

You need to rename the `.env-example` file to` .env` and enter the information that matches your ** host **:

```sh
$ mv .env-example .env
```

Install the dependencies contained in the `package.json` files found at the root of the repository (for managing commits), in the ** server ** directory, in the ** website ** directory and in the ** mobile * directory *. To install the dependencies, just open the terminal in the directory and type the command:

```sh
$ npm install
# or
$ yarn
```

Examples:
```sh
# Installing the dependencies of commitlint:
$ cd booster
$ npm install

# Installing the dependencies of server:
$ cd server
$ npm install

# Installing the dependencies of website:
$ cd web
$ yarn install

# Installing the dependencies of mobile:
$ cd mobile
$ yarb install
```

See the ** `package.json` ** files of <kbd> [commitlint] (./ package.json) </kbd>, <kbd> [server] (server / package.json) </ kbd>, <kbd> [website] (web / package.json) </kbd> and <kbd> [mobile] (mobile / package.json) </kbd>.

### Using the server

```sh
# Opening the terminal in the server directory:
$ cd ./sources/server
# Running the application in development mode:
$ npm run dev
# Instantiating the database:
$ npm run knex:migrate
# Populating the database (seeds):
$ npm run knex:seed
```

> See the ** scripts {} ** part of the <kbd> [package.json] file (./ sources / server / package.json) </kbd> to see which scripts are available.

### Using the Website

```sh
# Opening the terminal in the website directory:
$ cd web
# Running the website in development mode:
$ yarn run start
```

> If the browser does not open automatically, acess: http://localhost:3000.

### Using the mobile

```sh
# Opening the terminal in the mobile directory:
$ cd mobile
# Running mobile in development mode:
$ yarn run start
```

Now, open the expo application and in ** LAN ** mode scan the QRCode.

> If you have any problems running the application in this mode, try disabling your machine's firewall.

If you have a problem with the fonts, use the command:
```sh
$ yarn expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/inter
```

** \ * Remember to insert in the `.env` file the exact IP that was generated by your mobile after using the` npm run start` command. **

## **:octocat: HOW TO CONTRIBUTE**
  
  - Check the ** [Issues] (https://github.com/brcaua/ecoleta-app) ** that are open and if there is already one with your feature;
  - Open a ** Issue ** with the name and description of your feature and sign with your user informing that you will do it;
  - Make a ** [fork] (https://help.github.com/en/github/getting-started-with-github/fork-a-repo) ** from the repository;
  - Enter your GitHub page and make a ** clone ** of your ** fork **;
  - Create a * branch * with the name of your feature: `git chechout -b feat / minhaFeature`;
  - Make the necessary changes to the code or documentation;
  - Install the * commitlint * dependencies at the project root to check the commits: `npm install` or` yarn`;
  - * Commit * your changes following the [commit conventions] (https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/), add your Issue id in the description at parentheses and remember to close your Issue with the id at the bottom of the commit:

  ```
    <type>(opcional scope): <description> (#x)

    [commit body]

    Close #x
  ```
  Example:
  ```sh
    feat: adding component for such a thing(#52)

    A component for such a thing was added in order to improve such a thing, leaving the project in such a way.
    
    Close #52
  ```
  - * Push * your * branch *: `git push origin feat / minhaFeature`;
  - Now just open a * pull request * in the repository that you made the * fork * and as soon as * merge * happens your Issue will be closed and your changes will be part of the project;
  - After the * merge * of your pull request is done, you can delete your * branch *.

  \* **Thank you for contributing!** ❤️ :facepunch: :blush:

## **:star2: THANKS!**

<div align=center>

<table style="width:100%">
  <tr align=center>
    <th><strong>Next Level Week</strong></th>
    <th><strong>Rocketseat</strong></th>
    <th><strong>diego3g</strong></th>
    <th><strong>maykbrito</strong></th>
    <th><strong>x0n4d0</strong></th>
  </tr>
  <tr align=center>
    <td>
      <a href="https://nextlevelweek.com/">
        <img width="200" src="https://user-images.githubusercontent.com/42815135/83976057-f0352c00-a8cd-11ea-88da-22ff672ce842.png">
      </a>
    </td>
    <td>
      <a href="https://rocketseat.com.br/">
        <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981650-1e2e6680-a8f6-11ea-9f42-6df8fe809e4b.png">
      </a>
    </td>
    <td>
      <a href="https://github.com/diego3g">
        <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981712-b7f61380-a8f6-11ea-9099-bd3677e97e39.jpg">
      </a>
    </td>
    <td>
      <a href="https://github.com/maykbrito">
        <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981753-1de29b00-a8f7-11ea-93cf-23d2ff65fa5c.png">
      </a>
    </td>
    <td>
      <a href="https://github.com/x0n4d0">
        <img width="200" height="180" src="https://avatars2.githubusercontent.com/u/38081852?s=400&u=9fb76263c36c6c805c5eb8a69b3c43c8caa0df46&v=4">
      </a>
    </td>
  </tr>
</table>

</div>

## **:books: REFERENCES**

- [React + TypeScript Cheat Sheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
- [Blog Rocketseat](https://blog.rocketseat.com.br/)
- [ReactJS](https://reactjs.org/docs/getting-started.html) | [ReactJS pt-BR](https://pt-br.reactjs.org/docs/getting-started.html)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo](https://expo.io/learn)
- [Knex][knex]
- [Express](https://expressjs.com/pt-br/)
- [Node](https://nodejs.org/en/)
- [Celebrate](https://github.com/arb/celebrate)
- [Joi](https://hapi.dev/module/joi/)

## **:page_with_curl: LICENSE**

This repository is licensed by **MIT LICENSE**. For more detailed information, read the file [LICENSE](./LICENSE) contido nesse repositório. 

<!-- Website Links -->

[rocketseat_site]: https://rocketseat.com.br/

<!-- Badges -->

[github_issues_badge]: https://img.shields.io/github/issues/x0n4d0/ecoleta?color=green

[repository_license_badge]: https://img.shields.io/github/license/x0n4d0/ecoleta

[node_version_badge]: https://img.shields.io/badge/node-12.17.0-green

[npm_version_badge]: https://img.shields.io/badge/npm-6.14.4-red

[web_react_badge]: https://img.shields.io/badge/web-react-blue

[mobile_react-native_badge]: https://img.shields.io/badge/mobile-react%20native-blueviolet

[server_nodejs_badge]: https://img.shields.io/badge/server-nodejs-important

<!-- Techs -->

[react]: https://reactjs.org/

[typescript]: https://www.typescriptlang.org/

[node]: https://nodejs.org/en/

[leaflet]: https://react-leaflet.js.org/en/

[ibge_api]: https://servicodados.ibge.gov.br/api/docs/localidades?versao=1

[ibge_api_ufs]: https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet

[ibge_api_municipios]: https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet

[vscode]: https://code.visualstudio.com/

[react_native]: http://www.reactnative.com/

[stackedit]: https://stackedit.io

[vscode_sqlite_extension]: https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite

[markdown_emoji]: https://gist.github.com/rxaviers/7360908

[commitlint]: https://github.com/conventional-changelog/commitlint

[express]: https://expressjs.com/

[cors]: https://expressjs.com/en/resources/middleware/cors.html

[knex]: http://knexjs.org/

[sqlite3]: https://github.com/mapbox/node-sqlite3

[tsnode]: https://github.com/TypeStrong/ts-node

[feather_icons]: https://feathericons.com/

[insomnia]: https://insomnia.rest/

[react_leaflet]: https://react-leaflet.js.org/

[react_router_dom]: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom

[react_icons]: https://react-icons.github.io/react-icons/

[axios]: https://github.com/axios/axios

[dotenv]: https://github.com/motdotla/dotenv

[expo]: https://expo.io/

[expo_google_fonts]: https://github.com/expo/google-fonts

[react_navigation]: https://reactnavigation.org/

[react_native_maps]: https://github.com/react-native-community/react-native-maps

[expo_constants]: https://docs.expo.io/versions/latest/sdk/constants/

[react_native_svg]: https://github.com/react-native-community/react-native-svg

[expo_location]: https://docs.expo.io/versions/latest/sdk/location/

[expo_mail_composer]: https://docs.expo.io/versions/latest/sdk/mail-composer/

[font_roboto]: https://fonts.google.com/specimen/Roboto

[font_ubuntu]: https://fonts.google.com/specimen/Ubuntu

[font_awesome]: https://fontawesome.com/

[multer]: https://github.com/expressjs/multer

[celebrate]: https://github.com/arb/celebrate

[joi]: https://github.com/hapijs/joi

[react_dropzone]: https://github.com/react-dropzone/react-dropzone

[asdf]: https://github.com/asdf-vm/asdf

[yarn]: https://classic.yarnpkg.com/en/docs/install/#debian-stable
