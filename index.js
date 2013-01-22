
var log = function (prop, val) {
  log.data[prop] = val
}

log.el = document.createElement('div')
log.html = []
log.data = {}

module.exports = function (prop, val) {
  if (prop instanceof Element) {
    log.parentEl = prop
  }
  else {
    log(prop, val)
  }
  return log
}

log.init = function () {
  log.el.classList.add('log')
  log.parentEl.appendChild(log.el)
}

log.tear = function () {
  log.parentEl.removeChild(log.el)
}

log.update = function () {
  var html = log.html
  html.length = 0
  for (var prop in log.data) {
    html.push('<pre>'+prop+': '+log.data[prop]+'</pre>')
  }
}

log.render = function () {
  log.el.innerHTML = log.html.join('')
}
