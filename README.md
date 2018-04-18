# Kibana style customization

This is a Kibana plugin to inject gradiant's custom css to kibana.


## Compatibility
This plugin is known to work in Kibana 5.5.2 and Kibana 6.1.3. For other versions change *index.js* and pray.

## Install
You should modify Kibana's *src/ui/views/ui_app.jade* in order to add the custom css to kibana's main html:
Replace line `bundleFile('commons.style.css')` by `bundleFile('commons.style.css'),bundleFile('gradiant_style.style.css')`.
```
sed -i "s/bundleFile('commons.style.css')/bundleFile('commons.style.css'),bundleFile('gradiant_style.style.css')/g" /usr/share/kibana/src/ui/views/ui_app.jade
```

### Kibana 6.1.3

bin/kibana-plugin install https://github.com/gradiant/kibana-style-plugin/releases/download/v6.1.3/gradiant_style-6.1.3.zip

### Kibana 5.5.2

bin/kibana-plugin install https://github.com/gradiant/kibana-style-plugin/releases/download/v5.5.2/gradiant_style-5.5.2.zip

## Uninstall

### Kibana 6.x and 5.x
bin/kibana-plugin remove gradiant_style

## Docker Image
We also include a *Dockerfile* to create a kibana image that includes this plugin and other customizations:
* Custom title
* Custom throbber
* Custom favicons
