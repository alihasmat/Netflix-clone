### Technology Overview

- Styled components
- Compund components - It is a design pattern in which components are collated together to create a complete experience.

### Application architecture

- Folder structure
- images
- videos
  -src folder - components - constants - containers - context - fixtures - helpers - hooks - pages - utils
  - components
    - accordian
    - card
    - feature
    - footer
    - form
    - header
    - jumbotron
    - loading
    - opt-form
    - player
    - profiles
      -card - styles(folder) - index.js

Application architecture

user - Application(front-end)
Firebase
both hydrated application with data

### Dependencies

- react-router-dom
- styled components
- firebase
- react testing library(devDependency)
- fuse.js

### style-componenets/macro doesn't work in Version 5.2.1 and above

- To make it work do the following.
- install vite-plugin-babel-macros and import macrosPlugin and add macrosPlugin() in the file vite.config.js

### react router v6 updates

- use Navigate instead of useHistory
- the way you use Routes has been changed. https://www.robinwieruch.de/react-router-private-routes/

### Testing

- Install Jest(npm install --save-dev jest)
- learn how testing are defined and implemented
