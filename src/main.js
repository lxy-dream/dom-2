/**jQuery('.test') //不返回元素们，返回api对象

 遍历所有刚才获取的元素，添加
 链式操作
  .addClass('red') //this就是api
  .addClass('blue')
  .addClass('green')**/

//注意：obj.fn(p1)   函数里的this就是obj
//obj.fn.call(obj.p1)

/**jQuery('.test')
     .find('.child')
     .addClass('red')
     .addClass('green')
     .end()
     .addClass('yellow')**/

//const x = jQuery(".test");
/**    .find('.child')

 x.each((div) => console.log(div))  **/
// x.children().print()
