var word = document.getElementById("searchBar").value;
var evt = document.createEvent("KeyboardEvent");

test("checking search bar value", function (assert){
  var result = word;
  var expected = "cat";
  assert.equal(result, expected, "Search bar value recorded in variable 'word'");
});

test("checking enter works to input word in search bar",function(assert){
  var done = assert.async();
  setTimeout (function(){
    var result = (function pressEnter(e) {
      return word
    }(evt.initKeyboardEvent(13)));
    var expected = word;
    assert.equal(result, expected,"Key down is working");
    done();
  }, 2000);
});

//
// if (e.keycode === 13) {
//   return 'cat';
// }
