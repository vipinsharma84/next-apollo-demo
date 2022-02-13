(function() {
var exports = {};
exports.id = "pages/userList";
exports.ids = ["pages/userList"];
exports.modules = {

/***/ "./components/Card.tsx":
/*!*****************************!*\
  !*** ./components/Card.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CardComponent; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\StudyProjects\\Sapient_Assignment\\next-apollo-demo\\client\\components\\Card.tsx";

function CardComponent({
  users
}) {
  return users.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: ["Name: ", item.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 10
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: ["Email: ", item.email]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: ["Address: ", item.address, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: ["Telephone: ", item.phone]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this)]
  }, index, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }, this));
}

/***/ }),

/***/ "./components/Users.tsx":
/*!******************************!*\
  !*** ./components/Users.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UsersComponent; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Card.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shared */ "./utils/shared.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Users.module.css */ "./components/Users.module.css");
/* harmony import */ var _Users_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_module_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\StudyProjects\\Sapient_Assignment\\next-apollo-demo\\client\\components\\Users.tsx";





const FETCH_LIMIT = 20;
function UsersComponent() {
  const {
    0: pageNumber,
    1: setpageNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
  const {
    0: isLoaded,
    1: setisLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: displayedUsers,
    1: setdisplayedUsers
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_utils_shared__WEBPACK_IMPORTED_MODULE_3__.GET_ALL_USERS_QUERY);

  const loadMoreHandler = () => {
    setpageNumber(pageNumber + 1);
    setdisplayedUsers(fetchNextUsers(pageNumber + 1));
  };

  const fetchNextUsers = pageNum => {
    const end = pageNum * FETCH_LIMIT;

    if (end >= 2000) {
      setisLoaded(true);
      return data.users;
    }

    const users = data.users.filter((_item, index) => {
      return index + 1 <= end;
    });
    setisLoaded(true);
    return users;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (data && !isLoaded) {
      setdisplayedUsers(fetchNextUsers(pageNumber));
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Users_module_css__WEBPACK_IMPORTED_MODULE_5___default().cardContainer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_1__.default, {
        users: displayedUsers
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Users_module_css__WEBPACK_IMPORTED_MODULE_5___default().btnContainer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_Users_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn),
        onClick: loadMoreHandler,
        children: "Load More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./lib/with-apollo.js":
/*!****************************!*\
  !*** ./lib/with-apollo.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
});
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "./pages/userList.tsx":
/*!****************************!*\
  !*** ./pages/userList.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Users */ "./components/Users.tsx");
/* harmony import */ var _lib_with_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/with-apollo */ "./lib/with-apollo.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\StudyProjects\\Sapient_Assignment\\next-apollo-demo\\client\\pages\\userList.tsx";




/* harmony default export */ __webpack_exports__["default"] = (() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloProvider, {
  client: _lib_with_apollo__WEBPACK_IMPORTED_MODULE_3__.default,
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Users__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "Go Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 20
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined));

/***/ }),

/***/ "./utils/shared.js":
/*!*************************!*\
  !*** ./utils/shared.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_USER_NAME_QUERY": function() { return /* binding */ GET_USER_NAME_QUERY; },
/* harmony export */   "GET_ALL_USERS_QUERY": function() { return /* binding */ GET_ALL_USERS_QUERY; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_USER_NAME_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query getName {
    name
  }
`;
const GET_ALL_USERS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query getName {
    users {
      name,
      email,
      phone,
      address,
    }
  }
`;

/***/ }),

/***/ "./components/Card.module.css":
/*!************************************!*\
  !*** ./components/Card.module.css ***!
  \************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"card": "Card_card__Onj16"
};


/***/ }),

/***/ "./components/Users.module.css":
/*!*************************************!*\
  !*** ./components/Users.module.css ***!
  \*************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"btnContainer": "Users_btnContainer__1QIUo",
	"cardContainer": "Users_cardContainer__1izyM",
	"btn": "Users_btn__3tSN4"
};


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/userList.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwb2xsby8uL2NvbXBvbmVudHMvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vbmV4dC1hcG9sbG8vLi9jb21wb25lbnRzL1VzZXJzLnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFwb2xsby8uL2xpYi93aXRoLWFwb2xsby5qcyIsIndlYnBhY2s6Ly9uZXh0LWFwb2xsby8uL3BhZ2VzL3VzZXJMaXN0LnRzeCIsIndlYnBhY2s6Ly9uZXh0LWFwb2xsby8uL3V0aWxzL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9uZXh0LWFwb2xsby8uL2NvbXBvbmVudHMvQ2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHQtYXBvbGxvLy4vY29tcG9uZW50cy9Vc2Vycy5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHQtYXBvbGxvL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9uZXh0LWFwb2xsby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9uZXh0LWFwb2xsby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9uZXh0LWFwb2xsby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1hcG9sbG8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL25leHQtYXBvbGxvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV4dC1hcG9sbG8vaWdub3JlZHxEOlxcU3R1ZHlQcm9qZWN0c1xcU2FwaWVudF9Bc3NpZ25tZW50XFxuZXh0LWFwb2xsby1kZW1vXFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDYXJkQ29tcG9uZW50IiwidXNlcnMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJDbGFzc2VzIiwibmFtZSIsImVtYWlsIiwiYWRkcmVzcyIsInBob25lIiwiRkVUQ0hfTElNSVQiLCJVc2Vyc0NvbXBvbmVudCIsInBhZ2VOdW1iZXIiLCJzZXRwYWdlTnVtYmVyIiwidXNlU3RhdGUiLCJpc0xvYWRlZCIsInNldGlzTG9hZGVkIiwiZGlzcGxheWVkVXNlcnMiLCJzZXRkaXNwbGF5ZWRVc2VycyIsImRhdGEiLCJ1c2VRdWVyeSIsIkdFVF9BTExfVVNFUlNfUVVFUlkiLCJsb2FkTW9yZUhhbmRsZXIiLCJmZXRjaE5leHRVc2VycyIsInBhZ2VOdW0iLCJlbmQiLCJmaWx0ZXIiLCJfaXRlbSIsInVzZUVmZmVjdCIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIkdFVF9VU0VSX05BTUVfUVVFUlkiLCJncWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxhQUFULENBQXVCO0FBQUVDO0FBQUYsQ0FBdkIsRUFBa0M7QUFDL0MsU0FDRUEsS0FBSyxDQUFDQyxHQUFOLENBQVUsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLGtCQUNSO0FBQUssYUFBUyxFQUFFQyw4REFBaEI7QUFBQSw0QkFDRTtBQUFBLDZCQUNDO0FBQUEsNkJBQWVGLElBQUksQ0FBQ0csSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBQSw2QkFDRTtBQUFBLDhCQUFpQkgsSUFBSSxDQUFDSSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFTRTtBQUFBLDZCQUNF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QUFEO0FBQWdCLFFBQU0sRUFBRUEscURBQXhCO0FBQUEsMEJBQ0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBRU87QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZQLGVBR0UsOERBQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBLDJCQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRU8sTUFBTUssbUJBQW1CLEdBQUdDLCtDQUFJO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLENBSk87QUFNQSxNQUFNZCxtQkFBbUIsR0FBR2MsK0NBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVE8sQzs7Ozs7Ozs7OztBQ1JQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsNEM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL3VzZXJMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsYXNzZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkQ29tcG9uZW50KHsgdXNlcnMgfSkge1xuICByZXR1cm4gKFxuICAgIHVzZXJzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtDbGFzc2VzLmNhcmR9IGtleT17aW5kZXh9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgPHN0cm9uZz5OYW1lOiB7aXRlbS5uYW1lfTwvc3Ryb25nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0cm9uZz5FbWFpbDogeyBpdGVtLmVtYWlsIH08L3N0cm9uZz4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Ryb25nPkFkZHJlc3M6IHsgaXRlbS5hZGRyZXNzIH0gPC9zdHJvbmc+ICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0cm9uZz5UZWxlcGhvbmU6IHsgaXRlbS5waG9uZSB9PC9zdHJvbmc+ICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpXG4gIClcbn0iLCJpbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IEdFVF9BTExfVVNFUlNfUVVFUlkgfSBmcm9tIFwiLi4vdXRpbHMvc2hhcmVkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDbGFzc2VzIGZyb20gJy4vVXNlcnMubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEZFVENIX0xJTUlUID0gMjA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzQ29tcG9uZW50KCkge1xuICBcbiAgY29uc3QgWyBwYWdlTnVtYmVyLCBzZXRwYWdlTnVtYmVyIF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgWyBpc0xvYWRlZCwgc2V0aXNMb2FkZWQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBkaXNwbGF5ZWRVc2Vycywgc2V0ZGlzcGxheWVkVXNlcnMgXSA9IHVzZVN0YXRlKFtdKTtcbiAgXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0FMTF9VU0VSU19RVUVSWSk7XG4gIFxuICBjb25zdCBsb2FkTW9yZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2V0cGFnZU51bWJlcihwYWdlTnVtYmVyICsgMSk7ICAgIFxuICAgIHNldGRpc3BsYXllZFVzZXJzKGZldGNoTmV4dFVzZXJzKHBhZ2VOdW1iZXIgKyAxKSk7XG4gIH1cblxuICBjb25zdCBmZXRjaE5leHRVc2VycyA9IChwYWdlTnVtKSA9PiB7XG4gICAgY29uc3QgZW5kID0gcGFnZU51bSAqIEZFVENIX0xJTUlUO1xuXG4gICAgaWYoZW5kID49IDIwMDApXG4gICAge1xuICAgICAgc2V0aXNMb2FkZWQodHJ1ZSk7XG4gICAgICByZXR1cm4gZGF0YS51c2VycztcbiAgICB9XG5cbiAgICBjb25zdCB1c2VycyA9IGRhdGEudXNlcnMuZmlsdGVyKChfaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBpbmRleCArIDEgPD0gZW5kO1xuICAgIH0pO1xuICAgIHNldGlzTG9hZGVkKHRydWUpO1xuICAgIHJldHVybiB1c2VycztcbiAgfVxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICYmICFpc0xvYWRlZCkge1xuICAgICAgc2V0ZGlzcGxheWVkVXNlcnMoIGZldGNoTmV4dFVzZXJzKHBhZ2VOdW1iZXIpICk7XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtDbGFzc2VzLmNhcmRDb250YWluZXJ9PlxuICAgICAgICA8Q2FyZCB1c2Vycz17IGRpc3BsYXllZFVzZXJzIH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e0NsYXNzZXMuYnRuQ29udGFpbmVyfT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e0NsYXNzZXMuYnRufSBvbkNsaWNrPXtsb2FkTW9yZUhhbmRsZXJ9PlxuICAgICAgICAgIExvYWQgTW9yZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dyYXBocWwnLFxyXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgVXNlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlcnNcIjtcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vbGliL3dpdGgtYXBvbGxvJztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICA8VXNlcnMgLz5cbiAgICA8YnIvPjxici8+XG4gICAgPExpbmsgaHJlZj1cIi9cIj48YT5HbyBCYWNrPC9hPjwvTGluaz5cbiAgPC9BcG9sbG9Qcm92aWRlcj5cbilcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfTkFNRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgZ2V0TmFtZSB7XG4gICAgbmFtZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgR0VUX0FMTF9VU0VSU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgZ2V0TmFtZSB7XG4gICAgdXNlcnMge1xuICAgICAgbmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgcGhvbmUsXG4gICAgICBhZGRyZXNzLFxuICAgIH1cbiAgfVxuYDsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX19PbmoxNlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnRuQ29udGFpbmVyXCI6IFwiVXNlcnNfYnRuQ29udGFpbmVyX18xUUlVb1wiLFxuXHRcImNhcmRDb250YWluZXJcIjogXCJVc2Vyc19jYXJkQ29udGFpbmVyX18xaXp5TVwiLFxuXHRcImJ0blwiOiBcIlVzZXJzX2J0bl9fM3RTTjRcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==