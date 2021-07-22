// ทดสอบการ bind this เมื่อมี callback ใน method ของ object


// var myObj = {

//   specialFunction: function () {
//     console.log(this)
//   },

//   anotherSpecialFunction: function () {

//   },

//   getAsyncData: function (cb) {
//       cb();
//   },

//   // render: function () {
//   //     this.getAsyncData(function () {
//   //         console.log(this)
//   //         // this.specialFunction();
//   //         // anotherSpecialFunction();
//   //     }.bind(this));
//   // }
//   render: function () {
//       this.getAsyncData( () => {
//           console.log(this)
//           // this.specialFunction();
//           // anotherSpecialFunction();
//       });
//   }
// };
// myObj.specialFunction();
// myObj.render();

// -----------------------------------------------

class Comp1 {
  constructor() {
    this.a = 5
    this.b = 10
  }
  do1() {
    console.log(`in do1 :`)
    console.log(this)
  }
  do_cb(cb) {
    cb()
  }
  render() {
    console.log('in render...')
    // this.do_cb( function() {
    this.do_cb( () => {
      this.do1()
      console.log('in callback')
      console.log(this)
    } )
  }
}
let c1 = new Comp1()

const func1 = function() {console.log(this)}
function func2() { console.log(this)}


c1.do_cb(func2.bind(c1))
// c1.do_cb( function() {console.log(this)} )
// c1.do_cb( () => {console.log(this)} )
// c1.do_cb( function() {console.log(this)}.bind(c1) )
// c1.render()
console.log('----------------------')

// ----------------------------------------------------

// let c2 = {
//   a: 50,
//   b: 100,
//   do1 : function() { console.log(`in do1 :`); console.log(this) },
//   do_cb : function(cb) { cb() },
//   render : function() {
//     console.log('in render...')
//     this.do_cb( () => {
//       this.do1()
//       console.log('in callback')
//       console.log(this)
//     } )
//   }
// }
// // c2.do1()
// c2.render()


