
var log = function (obj, prop) {
  if (!prop) {
    log.displayOnce.push(obj)
  }
  else {
    log.watching.push({ obj: obj, prop: prop })
  }
}

log.el = document.createElement('div')
log.html = []
log.watching = []
log.displayOnce = []

module.exports = function (obj, prop) {
  if (obj instanceof Element) {
    log.parentEl = obj
  }
  else {
    log(obj)
  }
  return log
}

log.init = function () {
  log.parentEl.appendChild(log.el)
}

log.tear = function () {
  log.parentEl.removeChild(log.el)
}

log.update = function () {
  var html = log.html
  html.length = 0
  /*log.watching.forEach(function (w) {
    html.push('<pre>'+w.obj+'.'+w.prop+': '+w.obj[w.prop]+'</pre>')
  })*/
  log.displayOnce.forEach(function (val) {
    html.push('<pre>'+val+'</pre>')
  })
  log.displayOnce = []
}

log.render = function () {
  log.el.innerHTML = log.html.join('')
}
