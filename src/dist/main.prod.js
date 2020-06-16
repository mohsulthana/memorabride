'use strict'
var _vue = _interopRequireDefault(require('vue')),
  _buefy = _interopRequireDefault(require('buefy'))
require('buefy/dist/buefy.css')
var _upperFirst = _interopRequireDefault(require('lodash/upperFirst')),
  _camelCase = _interopRequireDefault(require('lodash/camelCase')),
  _App = _interopRequireDefault(require('./App.vue')),
  _router = _interopRequireDefault(require('./router')),
  _store = _interopRequireDefault(require('./store/store')),
  _vueSimpleUploader = _interopRequireDefault(require('vue-simple-uploader'))
require('./assets/scss/style.scss')
var _vuelidate = _interopRequireDefault(require('vuelidate')),
  _date = _interopRequireDefault(require('./filters/date')),
  _fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core'),
  _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons'),
  _vueFontawesome = require('@fortawesome/vue-fontawesome'),
  _freeBrandsSvgIcons = require('@fortawesome/free-brands-svg-icons')
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e }
}
_fontawesomeSvgCore.library.add(
  _freeBrandsSvgIcons.faFacebook,
  _freeBrandsSvgIcons.faTwitter,
  _freeBrandsSvgIcons.faPinterest,
  _freeSolidSvgIcons.faShoppingCart,
  _freeSolidSvgIcons.faSearch
),
  _vue.default.component('vue-fontawesome', _vueFontawesome.FontAwesomeIcon),
  _vue.default.use(_vueSimpleUploader.default),
  _vue.default.filter('date', _date.default),
  _vue.default.use(_vuelidate.default),
  _vue.default.use(_buefy.default, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fab'
  }),
  (_vue.default.config.productionTip = !1)
var requireComponent = require.context(
  './components',
  !1,
  /Base[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(function(e) {
  var r = requireComponent(e),
    u = (0, _upperFirst.default)(
      (0, _camelCase.default)(e.replace(/^\.\/(.*)\.\w+$/, '$1'))
    )
  _vue.default.component(u, r.default || r)
}),
  new _vue.default({
    router: _router.default,
    store: _store.default,
    render: function(e) {
      return e(_App.default)
    }
  }).$mount('#app')
