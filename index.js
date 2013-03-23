var query = require('query')

module.exports =
function findAnchor(name) {
  var elem
  if (elem = document.getElementById(name))
    return elem
  var elems = query.all('a[name]')
  for (var i = 0, len = elems.length; i < len; i++)
    if (elem[i].name === name)
      return elems[i]
  return null
}
