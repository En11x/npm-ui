import { NpmPackage } from "@/types";

let controller: AbortController | null = null;

const mock = {
  objects: [
    {
      package: {
        name: "react",
        scope: "unscoped",
        version: "18.2.0",
        description:
          "React is a JavaScript library for building user interfaces.",
        keywords: ["react"],
        date: "2022-06-14T19:46:38.369Z",
        links: {
          npm: "https://www.npmjs.com/package/react",
          homepage: "https://reactjs.org/",
          repository: "https://github.com/facebook/react",
        },
        publisher: { username: "gnoff", email: "jcs.gnoff@gmail.com" },
        maintainers: [
          { username: "gaearon", email: "dan.abramov@gmail.com" },
          { username: "acdlite", email: "npm@andrewclark.io" },
          { username: "gnoff", email: "jcs.gnoff@gmail.com" },
          { username: "fb", email: "opensource+npm@fb.com" },
          { username: "trueadm", email: "dg@domgan.com" },
          { username: "sophiebits", email: "npm@sophiebits.com" },
          { username: "lunaruan", email: "lunaris.ruan@gmail.com" },
        ],
      },
      score: {
        final: 0.5920035494264078,
        detail: {
          quality: 0.5274201305522354,
          popularity: 0.9060309816973442,
          maintenance: 0.3333333333333333,
        },
      },
      searchScore: 100000.64,
    },
    {
      package: {
        name: "rxjs",
        scope: "unscoped",
        version: "7.5.7",
        description: "Reactive Extensions for modern JavaScript",
        keywords: [
          "Rx",
          "RxJS",
          "ReactiveX",
          "ReactiveExtensions",
          "Streams",
          "Observables",
          "Observable",
          "Stream",
          "ES6",
          "ES2015",
        ],
        date: "2022-09-25T18:42:55.719Z",
        links: {
          npm: "https://www.npmjs.com/package/rxjs",
          homepage: "https://rxjs.dev",
          repository: "https://github.com/reactivex/rxjs",
          bugs: "https://github.com/ReactiveX/RxJS/issues",
        },
        author: {
          name: "Ben Lesh",
          email: "ben@benlesh.com",
          username: "blesh",
        },
        publisher: { username: "blesh", email: "ben@benlesh.com" },
        maintainers: [
          { username: "cartant", email: "nicholas@cartant.com" },
          { username: "blesh", email: "ben@benlesh.com" },
          { username: "kwonoj", email: "kwon.ohjoong@gmail.com" },
        ],
      },
      score: {
        final: 0.6986755271629026,
        detail: {
          quality: 0.9413265966909828,
          popularity: 0.8560310899684033,
          maintenance: 0.3333333333333333,
        },
      },
      searchScore: 0.3489834,
    },
    {
      package: {
        name: "react-dom",
        scope: "unscoped",
        version: "18.2.0",
        description: "React package for working with the DOM.",
        keywords: ["react"],
        date: "2022-06-14T19:46:48.370Z",
        links: {
          npm: "https://www.npmjs.com/package/react-dom",
          homepage: "https://reactjs.org/",
          repository: "https://github.com/facebook/react",
          bugs: "https://github.com/facebook/react/issues",
        },
        publisher: { username: "gnoff", email: "jcs.gnoff@gmail.com" },
        maintainers: [
          { username: "gaearon", email: "dan.abramov@gmail.com" },
          { username: "zpao", email: "paul@oshannessy.com" },
          { username: "acdlite", email: "npm@andrewclark.io" },
          { username: "gnoff", email: "jcs.gnoff@gmail.com" },
          { username: "fb", email: "opensource+npm@fb.com" },
          { username: "trueadm", email: "dg@domgan.com" },
          { username: "sophiebits", email: "npm@sophiebits.com" },
          { username: "lunaruan", email: "lunaris.ruan@gmail.com" },
        ],
      },
      score: {
        final: 0.5757821484667947,
        detail: {
          quality: 0.5274201305522354,
          popularity: 0.8596841218127353,
          maintenance: 0.3333333333333333,
        },
      },
      searchScore: 0.27515066,
    },
    {
      package: {
        name: "react-redux",
        scope: "unscoped",
        version: "8.0.5",
        description: "Official React bindings for Redux",
        keywords: ["react", "reactjs", "redux"],
        date: "2022-11-04T02:39:23.488Z",
        links: {
          npm: "https://www.npmjs.com/package/react-redux",
          homepage: "https://github.com/reduxjs/react-redux",
          repository: "https://github.com/reduxjs/react-redux",
          bugs: "https://github.com/reduxjs/react-redux/issues",
        },
        author: {
          name: "Dan Abramov",
          email: "dan.abramov@me.com",
          url: "https://github.com/gaearon",
        },
        publisher: { username: "acemarke", email: "mark.erikson@gmail.com" },
        maintainers: [
          { username: "gaearon", email: "dan.abramov@gmail.com" },
          { username: "timdorr", email: "timdorr@timdorr.com" },
          { username: "acemarke", email: "mark.erikson@gmail.com" },
        ],
      },
      score: {
        final: 0.5631916698283463,
        detail: {
          quality: 0.6349610781946603,
          popularity: 0.7315341890247833,
          maintenance: 0.3333325148893546,
        },
      },
      searchScore: 0.13724136,
    },
    {
      package: {
        name: "prop-types",
        scope: "unscoped",
        version: "15.8.1",
        description:
          "Runtime type checking for React props and similar objects.",
        keywords: ["react"],
        date: "2022-01-05T00:08:33.458Z",
        links: {
          npm: "https://www.npmjs.com/package/prop-types",
          homepage: "https://facebook.github.io/react/",
          repository: "https://github.com/facebook/prop-types",
          bugs: "https://github.com/facebook/prop-types/issues",
        },
        publisher: { username: "ljharb", email: "ljharb@gmail.com" },
        maintainers: [
          { username: "gaearon", email: "dan.abramov@gmail.com" },
          { username: "acdlite", email: "npm@andrewclark.io" },
          { username: "ljharb", email: "ljharb@gmail.com" },
          { username: "fb", email: "opensource+npm@fb.com" },
          { username: "sophiebits", email: "npm@sophiebits.com" },
        ],
      },
      score: {
        final: 0.5846042377057865,
        detail: {
          quality: 0.6129291280346516,
          popularity: 0.8497515133819685,
          maintenance: 0.2951784846048631,
        },
      },
      searchScore: 0.13312873,
    },
    {
      package: {
        name: "react-dropzone",
        scope: "unscoped",
        version: "14.2.3",
        description: "Simple HTML5 drag-drop zone with React.js",
        keywords: ["react-component", "react", "drag", "drop", "upload"],
        date: "2022-10-12T13:32:33.896Z",
        links: {
          npm: "https://www.npmjs.com/package/react-dropzone",
          homepage: "https://github.com/react-dropzone/react-dropzone",
          repository: "https://github.com/react-dropzone/react-dropzone",
          bugs: "https://github.com/react-dropzone/react-dropzone/issues",
        },
        author: { name: "Param Aggarwal" },
        publisher: { username: "rolandjitsu", email: "rolandjitsu@gmail.com" },
        maintainers: [
          { username: "rolandjitsu", email: "rolandjitsu@gmail.com" },
          { username: "rxmarbles", email: "rmarkins@gmail.com" },
          { username: "okonet", email: "andrey@okonet.dev" },
        ],
      },
      score: {
        final: 0.5963698961449349,
        detail: {
          quality: 0.97427759443119,
          popularity: 0.535485574711175,
          maintenance: 0.3333333333333333,
        },
      },
      searchScore: 0.1288,
    },
    {
      package: {
        name: "eslint-plugin-react",
        scope: "unscoped",
        version: "7.31.10",
        description: "React specific linting rules for ESLint",
        keywords: ["eslint", "eslint-plugin", "eslintplugin", "react"],
        date: "2022-10-10T23:21:45.487Z",
        links: {
          npm: "https://www.npmjs.com/package/eslint-plugin-react",
          homepage: "https://github.com/jsx-eslint/eslint-plugin-react",
          repository: "https://github.com/jsx-eslint/eslint-plugin-react",
          bugs: "https://github.com/jsx-eslint/eslint-plugin-react/issues",
        },
        author: {
          name: "Yannick Croissant",
          email: "yannick.croissant+npm@gmail.com",
          username: "yannickcr",
        },
        publisher: { username: "ljharb", email: "ljharb@gmail.com" },
        maintainers: [
          { username: "yannickcr", email: "yannick.croissant+npm@gmail.com" },
          { username: "ljharb", email: "ljharb@gmail.com" },
        ],
      },
      score: {
        final: 0.5523430671469963,
        detail: {
          quality: 0.5514411257817509,
          popularity: 0.7721258935594411,
          maintenance: 0.3333333333333333,
        },
      },
      searchScore: 0.11214975,
    },
    {
      package: {
        name: "react-scripts",
        scope: "unscoped",
        version: "5.0.1",
        description: "Configuration and scripts for Create React App.",
        date: "2022-04-12T17:33:23.210Z",
        links: {
          npm: "https://www.npmjs.com/package/react-scripts",
          homepage: "https://github.com/facebook/create-react-app#readme",
          repository: "https://github.com/facebook/create-react-app",
          bugs: "https://github.com/facebook/create-react-app/issues",
        },
        publisher: { username: "iansu", email: "ian@iansutherland.ca" },
        maintainers: [
          { username: "gaearon", email: "dan.abramov@gmail.com" },
          { username: "fb", email: "opensource+npm@fb.com" },
          { username: "timer", email: "timer150@gmail.com" },
          { username: "iansu", email: "ian@iansutherland.ca" },
          { username: "ianschmitz", email: "ianschmitz@gmail.com" },
        ],
      },
      score: {
        final: 0.5611314941791278,
        detail: {
          quality: 0.7247858092598785,
          popularity: 0.6567171059844785,
          maintenance: 0.3252707551617051,
        },
      },
      searchScore: 0.08497708,
    },
    {
      package: {
        name: "react-router",
        scope: "unscoped",
        version: "6.4.3",
        description: "Declarative routing for React",
        keywords: ["react", "router", "route", "routing", "history", "link"],
        date: "2022-11-01T15:08:23.108Z",
        links: {
          npm: "https://www.npmjs.com/package/react-router",
          homepage: "https://github.com/remix-run/react-router#readme",
          repository: "https://github.com/remix-run/react-router",
          bugs: "https://github.com/remix-run/react-router/issues",
        },
        author: { name: "Remix Software", email: "hello@remix.run" },
        publisher: { username: "mjackson", email: "npm@mjackson.me" },
        maintainers: [
          { username: "timdorr", email: "timdorr@timdorr.com" },
          { username: "mjackson", email: "npm@mjackson.me" },
          { username: "chancestrickland", email: "hi@chance.dev" },
        ],
      },
      score: {
        final: 0.5353938816117945,
        detail: {
          quality: 0.5329223310714013,
          popularity: 0.7395729017820213,
          maintenance: 0.3333333333333333,
        },
      },
      searchScore: 0.07805624,
    },
    {
      package: {
        name: "react-table",
        scope: "unscoped",
        version: "7.8.0",
        description:
          "Hooks for building lightweight, fast and extendable datagrids for React",
        keywords: ["react", "table", "react-table", "datagrid"],
        date: "2022-05-16T13:15:46.299Z",
        links: {
          npm: "https://www.npmjs.com/package/react-table",
          homepage: "https://react-table.tanstack.com/",
          repository: "https://github.com/tannerlinsley/react-table",
          bugs: "https://github.com/tannerlinsley/react-table/issues",
        },
        publisher: {
          username: "tannerlinsley",
          email: "tannerlinsley@gmail.com",
        },
        maintainers: [
          { username: "tannerlinsley", email: "tannerlinsley@gmail.com" },
        ],
      },
      score: {
        final: 0.5763763691999902,
        detail: {
          quality: 0.9977351394774373,
          popularity: 0.46895075335249425,
          maintenance: 0.32263732480967455,
        },
      },
      searchScore: 0.072125405,
    },
    {
      package: {
        name: "react-popper",
        scope: "unscoped",
        version: "2.3.0",
        description: "Official library to use Popper on React projects",
        keywords: [
          "react",
          "react-popper",
          "popperjs",
          "component",
          "drop",
          "tooltip",
          "popover",
        ],
        date: "2022-04-28T10:21:57.798Z",
        links: {
          npm: "https://www.npmjs.com/package/react-popper",
          homepage: "https://popper.js.org/react-popper",
          repository: "https://github.com/popperjs/react-popper",
          bugs: "https://github.com/popperjs/react-popper/issues",
        },
        author: {
          name: "Travis Arnold",
          email: "travis@souporserious.com",
          url: "http://souporserious.com",
        },
        publisher: {
          username: "fezvrasta",
          email: "federico.zivolo@gmail.com",
        },
        maintainers: [
          { username: "fezvrasta", email: "federico.zivolo@gmail.com" },
          { username: "souporserious", email: "ftntravis@gmail.com" },
        ],
      },
      score: {
        final: 0.573082539893782,
        detail: {
          quality: 0.9999826651159194,
          popularity: 0.48141944704601913,
          maintenance: 0.29883123969399883,
        },
      },
      searchScore: 0.07024397,
    },
    {
      package: {
        name: "react-router-dom",
        scope: "unscoped",
        version: "6.4.3",
        description: "Declarative routing for React web applications",
        keywords: ["react", "router", "route", "routing", "history", "link"],
        date: "2022-11-01T15:08:22.965Z",
        links: {
          npm: "https://www.npmjs.com/package/react-router-dom",
          homepage: "https://github.com/remix-run/react-router#readme",
          repository: "https://github.com/remix-run/react-router",
          bugs: "https://github.com/remix-run/react-router/issues",
        },
        author: { name: "Remix Software", email: "hello@remix.run" },
        publisher: { username: "mjackson", email: "npm@mjackson.me" },
        maintainers: [
          { username: "timdorr", email: "timdorr@timdorr.com" },
          { username: "mjackson", email: "npm@mjackson.me" },
          { username: "chancestrickland", email: "hi@chance.dev" },
        ],
      },
      score: {
        final: 0.5252036746563488,
        detail: {
          quality: 0.5244804943145912,
          popularity: 0.7176938848437278,
          maintenance: 0.3333333333333333,
        },
      },
      searchScore: 0.054003242,
    },
    {
      package: {
        name: "react-transition-group",
        scope: "unscoped",
        version: "4.4.5",
        description: "A react component toolset for managing animations",
        keywords: [
          "react",
          "transition",
          "addons",
          "transition-group",
          "animation",
          "css",
          "transitions",
        ],
        date: "2022-08-01T08:36:58.958Z",
        links: {
          npm: "https://www.npmjs.com/package/react-transition-group",
          homepage: "https://github.com/reactjs/react-transition-group#readme",
          repository: "https://github.com/reactjs/react-transition-group",
          bugs: "https://github.com/reactjs/react-transition-group/issues",
        },
        publisher: {
          username: "eps1lon",
          email: "silbermann.sebastian@gmail.com",
        },
        maintainers: [
          { username: "koba04", email: "koba0004@gmail.com" },
          { username: "monastic.panic", email: "monastic.panic@gmail.com" },
          { username: "eps1lon", email: "silbermann.sebastian@gmail.com" },
        ],
      },
      score: {
        final: 0.5304088103463316,
        detail: {
          quality: 0.5958604993198511,
          popularity: 0.672034622286967,
          maintenance: 0.3326815507141081,
        },
      },
      searchScore: 0.04920334,
    },
    {
      package: {
        name: "react-draggable",
        scope: "unscoped",
        version: "4.4.5",
        description: "React draggable component",
        keywords: ["react", "draggable", "react-component"],
        date: "2022-04-26T18:04:09.131Z",
        links: {
          npm: "https://www.npmjs.com/package/react-draggable",
          homepage: "https://github.com/react-grid-layout/react-draggable",
          repository: "https://github.com/react-grid-layout/react-draggable",
          bugs: "https://github.com/react-grid-layout/react-draggable/issues",
        },
        author: { name: "Matt Zabriskie" },
        publisher: { username: "strml", email: "samuel.trace.reed@gmail.com" },
        maintainers: [
          { username: "mzabriskie", email: "mzabriskie@gmail.com" },
          { username: "strml", email: "samuel.trace.reed@gmail.com" },
        ],
      },
      score: {
        final: 0.5540626049170646,
        detail: {
          quality: 0.9984282265054724,
          popularity: 0.4501145371031935,
          maintenance: 0.27712585422658625,
        },
      },
      searchScore: 0.044124413,
    },
    {
      package: {
        name: "react-docgen",
        scope: "unscoped",
        version: "5.4.3",
        description:
          "A CLI and toolkit to extract information from React components for documentation generation.",
        keywords: ["react", "documentation-generation"],
        date: "2022-07-02T17:49:07.935Z",
        links: {
          npm: "https://www.npmjs.com/package/react-docgen",
          homepage: "https://github.com/reactjs/react-docgen#readme",
          repository: "https://github.com/reactjs/react-docgen",
          bugs: "https://github.com/reactjs/react-docgen/issues",
        },
        author: { name: "Felix Kling" },
        publisher: { username: "danez", email: "npm@tschinder.de" },
        maintainers: [
          { username: "fb", email: "opensource+npm@fb.com" },
          { username: "danez", email: "npm@tschinder.de" },
        ],
      },
      score: {
        final: 0.5497158421190972,
        detail: {
          quality: 0.8954692931588125,
          popularity: 0.46980425873216924,
          maintenance: 0.3332673246148407,
        },
      },
      searchScore: 0.03980344,
    },
    {
      package: {
        name: "classnames",
        scope: "unscoped",
        version: "2.3.2",
        description:
          "A simple utility for conditionally joining classNames together",
        keywords: [
          "react",
          "css",
          "classes",
          "classname",
          "classnames",
          "util",
          "utility",
        ],
        date: "2022-09-13T06:34:48.319Z",
        links: {
          npm: "https://www.npmjs.com/package/classnames",
          homepage: "https://github.com/JedWatson/classnames#readme",
          repository: "https://github.com/JedWatson/classnames",
          bugs: "https://github.com/JedWatson/classnames/issues",
        },
        author: { name: "Jed Watson" },
        publisher: { username: "dcousens", email: "npm@dcousens.com" },
        maintainers: [
          { username: "jedwatson", email: "jed.watson@me.com" },
          { username: "dcousens", email: "npm@dcousens.com" },
        ],
      },
      score: {
        final: 0.5571903602680202,
        detail: {
          quality: 0.5329223310714013,
          popularity: 0.813185068058474,
          maintenance: 0.32199682036038263,
        },
      },
      searchScore: 0.039648063,
    },
    {
      package: {
        name: "react-native-svg",
        scope: "unscoped",
        version: "13.5.0",
        description: "SVG library for react-native",
        keywords: [
          "react-component",
          "react-native",
          "ios",
          "android",
          "windows",
          "SVG",
          "ART",
          "VML",
          "gradient",
        ],
        date: "2022-11-02T14:55:10.708Z",
        links: {
          npm: "https://www.npmjs.com/package/react-native-svg",
          homepage:
            "https://github.com/react-native-community/react-native-svg",
          repository:
            "https://github.com/react-native-community/react-native-svg",
          bugs: "https://github.com/react-native-community/react-native-svg/issues",
        },
        publisher: {
          username: "wolewicki",
          email: "wojciech.lewicki@swmansion.com",
        },
        maintainers: [
          { username: "brentvatne", email: "brentvatne@gmail.com" },
          { username: "kmag", email: "krzys.magiera@gmail.com" },
          { username: "wolewicki", email: "wojciech.lewicki@swmansion.com" },
        ],
      },
      score: {
        final: 0.5542640166874536,
        detail: {
          quality: 0.9606038327795933,
          popularity: 0.4269034291054542,
          maintenance: 0.3333333333333333,
        },
      },
      searchScore: 0.035613693,
    },
    {
      package: {
        name: "styled-components",
        scope: "unscoped",
        version: "5.3.6",
        description:
          "Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress",
        keywords: [
          "react",
          "css",
          "css-in-js",
          "styled-components",
          "babel-macro",
          "babel-macros",
          "styling",
        ],
        date: "2022-09-27T18:18:20.192Z",
        links: {
          npm: "https://www.npmjs.com/package/styled-components",
          homepage: "https://styled-components.com/",
          repository: "https://github.com/styled-components/styled-components",
          bugs: "https://github.com/styled-components/styled-components/issues",
        },
        author: { name: "Glen Maddern" },
        publisher: { username: "probablyup", email: "probablyup@gmail.com" },
        maintainers: [
          { username: "geelen", email: "glen@glenmaddern.com" },
          { username: "mxstbr", email: "contact@mxstbr.com" },
          { username: "probablyup", email: "probablyup@gmail.com" },
          { username: "philpl", email: "phil@kitten.sh" },
        ],
      },
      score: {
        final: 0.5795926663801604,
        detail: {
          quality: 0.7496830577712921,
          popularity: 0.6800602353774461,
          maintenance: 0.3333333333333333,
        },
      },
      searchScore: 0.03284728,
    },
    {
      package: {
        name: "react-select",
        scope: "unscoped",
        version: "5.6.0",
        description: "A Select control built with and for ReactJS",
        keywords: [
          "combobox",
          "form",
          "input",
          "multiselect",
          "react",
          "react-component",
          "select",
          "ui",
        ],
        date: "2022-11-02T21:25:49.102Z",
        links: {
          npm: "https://www.npmjs.com/package/react-select",
          homepage:
            "https://github.com/JedWatson/react-select/tree/master#readme",
          repository: "https://github.com/JedWatson/react-select/tree/master",
          bugs: "https://github.com/JedWatson/react-select/issues",
        },
        author: { name: "Jed Watson" },
        publisher: {
          username: "react-select-release-bot",
          email: "automation+react-select@thinkmill.com.au",
        },
        maintainers: [
          { username: "jedwatson", email: "jed.watson@me.com" },
          { username: "brianvaughn", email: "briandavidvaughn@gmail.com" },
          { username: "gwyneplaine", email: "cc.lee@live.com.au" },
          { username: "mitchellhamilton", email: "mitchell@hamil.town" },
          {
            username: "react-select-release-bot",
            email: "automation+react-select@thinkmill.com.au",
          },
        ],
      },
      score: {
        final: 0.5161292343877145,
        detail: {
          quality: 0.6203281603134577,
          popularity: 0.6096117703628872,
          maintenance: 0.3333333333333333,
        },
      },
      searchScore: 0.031043721,
    },
    {
      package: {
        name: "react-is",
        scope: "unscoped",
        version: "18.2.0",
        description: "Brand checking of React Elements.",
        keywords: ["react"],
        date: "2022-06-14T19:46:52.452Z",
        links: {
          npm: "https://www.npmjs.com/package/react-is",
          homepage: "https://reactjs.org/",
        },
        publisher: { username: "gnoff", email: "jcs.gnoff@gmail.com" },
        maintainers: [
          { username: "gaearon", email: "dan.abramov@gmail.com" },
          { username: "acdlite", email: "npm@andrewclark.io" },
          { username: "gnoff", email: "jcs.gnoff@gmail.com" },
          { username: "fb", email: "opensource+npm@fb.com" },
          { username: "trueadm", email: "dg@domgan.com" },
          { username: "sophiebits", email: "npm@sophiebits.com" },
          { username: "lunaruan", email: "lunaris.ruan@gmail.com" },
        ],
      },
      score: {
        final: 0.5006634147999888,
        detail: {
          quality: 0.5274201305522354,
          popularity: 0.6450591684790044,
          maintenance: 0.3333333333333333,
        },
      },
      searchScore: 0.028018788,
    },
  ],
  total: 216667,
  time: "Fri Nov 11 2022 13:36:31 GMT+0000 (Coordinated Universal Time)",
};

export const searchPackages = async (query: string, page = 10) => {
  controller?.abort();
  controller = new AbortController();
  const signal = controller.signal;

  // const result = await $fetch(
  //   `http://registry.npmjs.com/-/v1/search?text=${query}&from=${page}`,
  //   { signal }
  // ).catch((e) => {
  //   console.log(e);
  //   return { objects: [] };
  // });
  const result = mock;
  console.log(result, "result");

  return { results: result.objects as NpmPackage[] };
};
