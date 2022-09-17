## Build Netflix Clone from Scratch Using:

    - React v18.2.0
    - Compound and Styled Components v5.3.5
    - react router dom v6.3.0
    - firebase v9.9.4
    - vite v3.1.0
    - Custom Hooks
    - Context
    - react testing library usin JEST

This application was build based on the tutorial by Karl Hadwen. It is an updated version. Some of the problems solved in the updated version are as follows:

- Cteating react app from create-react-app takes a long time. Instead install React using Vite.
- Styled-components/macro doesn't work in the v5.2.1 and above. To make it work, install vite-plugin-babel-macros and change your vite.congif.js like below:
  import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";
  import macrosPlugin from "vite-plugin-babel-macros";

       export default defineConfig({
       plugins: [react(), macrosPlugin()],
       });

- React router v6 uses Navigate instead of useHistory.
- There is a different way of using routes in v6 which has been covered in the updated application.

- Live Site URL: [Click Here](https://netflix-clone-4gx.pages.dev)

![Preview](Screenshot.png?raw=true)
