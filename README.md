# @vortex-music/types
This repository consists of type defenitions for internal components that Vortex Core and Vortex
Plugins depend on. Follow the instructions to add more types and publish them to NPM.

1. To add new types, create similar folder structures like src/BasePlugin 
2. Add the new submodule to `package.json` 
3. Update Types Version in `package.json`
4. Build the types using `npx tsc`
5. Publish as per `npm` publishing guidelines.