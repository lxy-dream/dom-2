//jQuery核心代码思想：接受一个选择器，根据这个选择器得到一些元素
//然后返回一个对象，这个对象有一个方法可以操作这个元素
window.$ = window.jQuery = function(selectorOrArray) {
  let elements;
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }
  //api 可以操作 elements
  return {
    //闭包：函数访问外部的变量
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className);
      }
      return this;
    },
    find(selector) {
      let array = [];
      for (let i = 0; i < elements.length; i++) {
        const elements2 = Array.from(elements[i].querySelectorAll(selector));
        array = array.concat(elements2);
      }
      //声明之后直接调用的话可以省略声明的步骤
      // const newApi = jQuery(array)
      //return newApi
      //简写成下面的样子
      array.oldApi = this; //this就是旧的api
      return jQuery(array);
    },
    oldApi: selectorOrArray.oldApi,
    end() {
      return this.oldApi; //this就是新的api
    },
    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i);
      }
      return this;
    },
    children() {
      const array = [];
      this.each(node => {
        array.push(...node.children);
      });
      return jQuery(array);
    },
    parent() {
      const array = [];
      this.each(node => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(node.parentNode);
        }
      });
      return jQuery(array);
    },
    print() {
      console.log(elements);
    }
  };
};
