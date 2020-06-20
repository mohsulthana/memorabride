"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiClient = _axios["default"].create({
  baseURL: "https://api-pod7.colab.proneer.co/api",
  withCredentials: false,
  // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

var _default = {
  srcUpload: function srcUpload(event) {
    return apiClient.post('/swap/upload_src', event);
  },
  tgtUpload: function tgtUpload(event) {
    return apiClient.post('/swap/upload_tgt', event);
  }
};
exports["default"] = _default;