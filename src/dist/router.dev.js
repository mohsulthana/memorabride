"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _EventCreate = _interopRequireDefault(require("./views/EventCreate.vue"));

var _EventList = _interopRequireDefault(require("./views/EventList.vue"));

var _EventShow = _interopRequireDefault(require("./views/EventShow.vue"));

var _Product = _interopRequireDefault(require("./views/Product.vue"));

var _nprogress = _interopRequireDefault(require("nprogress"));

var _store = _interopRequireDefault(require("@/store/store"));

var _NotFound = _interopRequireDefault(require("./views/NotFound.vue"));

var _NetworkIssue = _interopRequireDefault(require("./views/NetworkIssue.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'product',
    component: _Product["default"],
    props: true
  }, // {
  //   path: '/product',
  //   name: 'product',
  //   component: Product
  // },
  // {
  //   path: '/event/create',
  //   name: 'event-create',
  //   component: EventCreate
  // },
  // {
  //   path: '/event/:id',
  //   name: 'event-show',
  //   component: EventShow,
  //   props: true,
  //   beforeEnter(routeTo, routeFrom, next) {
  //     store
  //       .dispatch('event/fetchEvent', routeTo.params.id)
  //       .then(event => {
  //         routeTo.params.event = event
  //         next()
  //       })
  //       .catch(error => {
  //         if (error.response && error.response.status == 404) {
  //           next({ name: '404', params: { resource: 'event' } })
  //         } else {
  //           next({ name: 'network-issue' })
  //         }
  //       })
  //   }
  // },
  {
    path: '/404',
    name: '404',
    component: _NotFound["default"],
    props: true
  } // {
  //   path: '/network-issue',
  //   name: 'network-issue',
  //   component: NetworkIssue
  // },
  // {
  //   path: '*',
  //   redirect: { name: '404', params: { resource: 'page' } }
  // }
  ]
});
router.beforeEach(function (routeTo, routeFrom, next) {
  _nprogress["default"].start();

  next();
});
router.afterEach(function () {
  _nprogress["default"].done();
});
var _default = router;
exports["default"] = _default;