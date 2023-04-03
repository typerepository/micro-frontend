# Micro FrontEnd

This app share multiple apps with a common container.

Container App renders barchart and linechart.

# Technologies

* Webpack
* Webpack Federation
* Webpack Html Plugin
* Apache eCharts
* Yarn 3 + Plug 'n Play + Workspaces

# Running it

Running locally is simple, make sure you're using yarn 2 or 3 version then just do `yarn` to install packages, then start individually the apps.

Example:

`yarn start app1`

`yarn start app2`

`yarn start container`

This will publish the apps on the ports `1000` `1001` and `1002`

To view the micro-frontend app working just navigate to `http://localhost:1000`

# Credits

Copyrights 2023 - GabrielLacerda.

# License

[MIT](https://github.com/testingitttt/micro-frontend/blob/main/LICENSE)
