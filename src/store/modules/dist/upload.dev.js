"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.state = exports.namespaced = void 0;

var _UploadService = _interopRequireDefault(require("@/services/UploadService.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var namespaced = true;
exports.namespaced = namespaced;
var state = {
  photo: []
};
exports.state = state;
var mutations = {
  ADD_PHOTO: function ADD_PHOTO(state, event) {
    state.photo.push(event);
  },
  SET_PHOTO: function SET_PHOTO(state, events) {
    state.photo = events;
  }
};
exports.mutations = mutations;
var actions = {
  srcUpload: function srcUpload(_ref, event) {
    var commit = _ref.commit,
        dispatch = _ref.dispatch;
    return _UploadService["default"].srcUpload(event).then(function () {
      commit('ADD_PHOTO', event);
      commit('SET_PHOTO', event);
      var notification = {
        type: 'success',
        message: 'Your photo has been uploaded!'
      };
      dispatch('notification/add', notification, {
        root: true
      });
    })["catch"](function (error) {
      var notification = {
        type: 'error',
        message: 'There was a problem creating your event: ' + error.message
      };
      dispatch('notification/add', notification, {
        root: true
      });
      throw error;
    });
  },
  tgtUpload: function tgtUpload(_ref2, event) {
    var commit = _ref2.commit,
        dispatch = _ref2.dispatch;
    return _UploadService["default"].tgtUpload(event).then(function () {
      commit('ADD_PHOTO', event);
      commit('SET_PHOTO', event);
      var notification = {
        type: 'success',
        message: 'Your photo has been uploaded!'
      };
      dispatch('notification/add', notification, {
        root: true
      });
    })["catch"](function (error) {
      var notification = {
        type: 'error',
        message: 'There was a problem creating your event: ' + error.message
      };
      dispatch('notification/add', notification, {
        root: true
      });
      throw error;
    });
  }
};
exports.actions = actions;