'use strict'

var _vue = _interopRequireDefault(require('vue'))

var _buefy = _interopRequireDefault(require('buefy'))

require('buefy/dist/buefy.css')

var _upperFirst = _interopRequireDefault(require('lodash/upperFirst'))

var _camelCase = _interopRequireDefault(require('lodash/camelCase'))

var _App = _interopRequireDefault(require('./App.vue'))

var _router = _interopRequireDefault(require('./router'))

var _store = _interopRequireDefault(require('./store/store'))

var _vueSimpleUploader = _interopRequireDefault(require('vue-simple-uploader'))

require('./assets/scss/style.scss')

var _vuelidate = _interopRequireDefault(require('vuelidate'))

var _date = _interopRequireDefault(require('./filters/date'))

var _fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core')

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons')

var _vueFontawesome = require('@fortawesome/vue-fontawesome')

var _freeBrandsSvgIcons = require('@fortawesome/free-brands-svg-icons')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// internal icons
_fontawesomeSvgCore.library.add(
  _freeBrandsSvgIcons.faFacebook,
  _freeBrandsSvgIcons.faTwitter,
  _freeBrandsSvgIcons.faPinterest,
  _freeSolidSvgIcons.faShoppingCart,
  _freeSolidSvgIcons.faSearch
)

_vue['default'].component('vue-fontawesome', _vueFontawesome.FontAwesomeIcon)

_vue['default'].use(_vueSimpleUploader['default'])

_vue['default'].filter('date', _date['default'])

_vue['default'].use(_vuelidate['default'])

_vue['default'].use(_buefy['default'], {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fab'
})

_vue['default'].config.productionTip = false

var requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(function(fileName) {
  var componentConfig = requireComponent(fileName)
  var componentName = (0, _upperFirst['default'])(
    (0, _camelCase['default'])(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  _vue['default'].component(
    componentName,
    componentConfig['default'] || componentConfig
  )
})
new _vue['default']({
  router: _router['default'],
  store: _store['default'],
  render: function render(h) {
    return h(_App['default'])
  }
}).$mount('#app')
