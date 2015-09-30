test("checking search bar value", function (assert){
  var result = document.getElementById("searchBar").value;
  var expected = "word";
  assert.equal(result, expected, "yay you typed word");
})
