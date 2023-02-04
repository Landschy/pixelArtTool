# Pixel Art - Tool

### Hosted on Vercel's:

[Pixel Art Tool - Jorge Flores](https://pixel-art-tool-jorge-flores.vercel.app/) 2023

## Used technologies / Frameworks

As talked with Alex during our call, the project uses:

- Vue3
- Typescript

"Aditionally" (because now are practically married to Vue3) I used:

- Pinia
- Vite
- Vitest

- Vuetify:
  Given the timeframe, and not wanting to reinvent the wheel, I used Vuetify for most of the elements.
  It is not the whole bundle:
  ```ts
  import * from "vuetify"
  ```
  but rather the old fashioned, but always reliable, _a la carte_. I did not wanted to configure tree shaking for vuetify since the new Vuetify3 release I've been reading that many users have been having trouble with it. So instead I just imported the used components.
  ```ts
  import {VCard, VSelect, ...} from 'vuetify'
  ```
- Tailwind:

  Trying to keep the application not solely reliable on importing as much vuetify components as I could, I instead opted for the CSS tailwind framework for classes. So, outside of these 2 components for specific v-bind on CSS rules, everything uses only the Tailwind classes to build the application.

  ```sh
  -> Components/
      -> canvas/
          -> GridDisplay.vue
      -> alerts/
          -> AlertDefault.vue
  ```

| Name                                          | Reason                                                                                                                                             |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Vue3](https://vuejs.org/)                    | JS Framework.                                                                                                                                      |
| [Vite](https://vitejs.dev/)                   | Instead of webpack, bundler. I've been meaning to try it for a couple weeks and finally got the perfect excuse to give it a go.                    |
| [Vitest](https://vitest.dev/)                 | for unit testing, pairs really good with Vite.                                                                                                     |
| [Pinia](https://pinia.vuejs.org/)             | Vuex on steroids. Pinia is now the pseudo default vue3 store. Used in the project to process the data between components instead of prop drilling. |
| [Typescript](https://www.typescriptlang.org/) | JS' superset                                                                                                                                       |
| [TailwindCSS](https://tailwindcss.com/)       | As CSS Framework to handle rules and only export what's used (vs other frameworks or CDN imports).                                                 |
| [Vuetify](https://next.vuetifyjs.com/)        | UI Library for Vue                                                                                                                                 |

## Used 3rd Party Libraries

- Dom-to-Image

  To download the image into the device, I used the dom-to-image package.

| Name                                                                  | Reason                                                   |
| --------------------------------------------------------------------- | -------------------------------------------------------- |
| [Dome-to-image-more](https://www.npmjs.com/package/dom-to-image-more) | Library to process HTML elements and convert into images |

## Installation / Run

[Node.js](https://nodejs.org/en/) is required

```console

$ git clone <linktorepository>
$ cd <repositoryname>
$ npm install
$ npm run dev

```

## Visible on Vercel's:

[Pixel Art Tool - Jorge Flores](https://pixel-art-tool-jorge-flores.vercel.app/)
