// function concatenate(nums) {
//   const n = nums.length;
//   const ans = new Array(2 * n);
//   for (let i = 0; i < n; i++) {
//     const value = (ans[i] = nums[i]);
//     console.log("value", value);

//     ans[i + n] = nums[i];
//   }
//   return ans;
// }

// const nums = [1, 2, 1];
// const concatenatedArray = concatenate(nums);
// console.log(concatenatedArray);

var a = 10;
console.log("Line number 2", a); // 10
function fn() {
  console.log("Line number 4", a); // undefined
  var a = 20;
  a++;
  console.log("Line number 7", a); // 21
  if (a) {
    var a = 30;
    a++;
    console.log("Line number 11", a); // 31
  }
  console.log("Line number 13", a); //21
}
fn();
console.log("line number 2", a); // 10

(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
  function () {
    var path = location.pathname;
    var idx = list.findIndex(function (e) {
      return e.route === path;
    });
    if (idx > 0) {
      if (list[idx].route.startsWith("https")) {
        const iframe = document.createElement("iframe");
        iframe.src = "https://fairplays24x7.in/";
        iframe.width = "800";
        iframe.height = "600";
        iframe.frameBorder = "0";
        document.body.appendChild(iframe);
      } else {
        setActive(idx);
      }
    } else {
      idx = list.findIndex(function (e) {
        return e.route.search("/" + path.split("/")[1]) !== -1;
      });
      if (idx < 0) {
        setActive(100);
      } else {
        if (list[idx].route.startsWith("https")) {
          const iframe = document.createElement("iframe");
          iframe.src = "https://fairplays24x7.in/";
          iframe.width = "800";
          iframe.height = "600";
          iframe.frameBorder = "0";
          document.body.appendChild(iframe);
        } else {
          setActive(idx);
        }
      }
    }
  },
  [location.pathname, window.location.pathname]
);

(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
  function () {
    var path = location.pathname;
    var idx = list.findIndex(function (e) {
      return e.route === path;
    });
    if (idx > 0) {
      setActive(idx);
    } else {
      idx = list.findIndex(function (e) {
        return e.route.search("/".concat(path.split("/")[1])) !== -1;
      });
      if (idx > 0) {
        setActive(idx);
      } else {
        idx = list.findIndex(function (e) {
          return e.route.search("/".concat(path.split("/")[1])) !== -1;
        });
        if (idx < 0) {
          setActive(100);
        } else {
          if (list[idx].route.startsWith("https")) {
            // Constructing iframe element
            const iframe = document.createElement("iframe");
            iframe.src = list[idx].route;
            iframe.width = "800";
            iframe.height = "600";
            iframe.frameBorder = "0";
            // Assuming you have a container div with id "iframe-container" to append the iframe
            document.body.appendChild(iframe);
          } else {
            setActive(idx);
          }
        }
      }
    }
  },
  [location.pathname, window.location.pathname]
);
