import Vue from 'vue'

const requireComponent = require.context(
  '~/node_modules/vue-feather-icon/components',
  false,
  /[\w-]+\.vue$/
)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName =
    'Feather' + camelCase(fileName.replace(/(^\.\/|\.\w+$)/g, ''))
  Vue.component(componentName, componentConfig.default || componentConfig)
})

function upperFirst(string) {
  return string[0].toLocaleUpperCase() + string.slice(1)
}

function camelCase(string) {
  return string
    .toLocaleLowerCase()
    .split(/[ _-]+/g)
    .reduce((final, section) => {
      final += upperFirst(section)
      return final
    }, '')
}
