'use strict'
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.default = void 0)
var _vue = _interopRequireDefault(require('vue')),
  _vueRouter = _interopRequireDefault(require('vue-router')),
  _EventCreate = _interopRequireDefault(require('./views/EventCreate.vue')),
  _EventList = _interopRequireDefault(require('./views/EventList.vue')),
  _EventShow = _interopRequireDefault(require('./views/EventShow.vue')),
  _Product = _interopRequireDefault(require('./views/Product.vue')),
  _nprogress = _interopRequireDefault(require('nprogress')),
  _store = _interopRequireDefault(require('@/store/store')),
  _NotFound = _interopRequireDefault(require('./views/NotFound.vue')),
  _NetworkIssue = _interopRequireDefault(require('./views/NetworkIssue.vue'))
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e }
}
_vue.default.use(_vueRouter.default)
var router = new _vueRouter.default({
  mode: 'history',
  routes: [
    { path: '/', name: 'event-list', component: _EventList.default, props: !0 },
    { path: '/product', name: 'product', component: _Product.default },
    {
      path: '/event/create',
      name: 'event-create',
      component: _EventCreate.default
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: _EventShow.default,
      props: !0,
      beforeEnter: function(t, e, r) {
        _store.default
          .dispatch('event/fetchEvent', t.params.id)
          .then(function(e) {
            ;(t.params.event = e), r()
          })
          .catch(function(e) {
            e.response && 404 == e.response.status
              ? r({ name: '404', params: { resource: 'event' } })
              : r({ name: 'network-issue' })
          })
      }
    },
    { path: '/404', name: '404', component: _NotFound.default, props: !0 },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: _NetworkIssue.default
    },
    { path: '*', redirect: { name: '404', params: { resource: 'page' } } }
  ]
})
router.beforeEach(function(e, t, r) {
  _nprogress.default.start(), r()
}),
  router.afterEach(function() {
    _nprogress.default.done()
  })
var _default = router
exports.default = router
