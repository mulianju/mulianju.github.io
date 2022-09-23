;(function () {
  if (/MicroMessenger/i.test(navigator.userAgent)) {
    const wrapper = document.createElement('div')
    wrapper.style.cssText = 'position:absolute;pointer-events:none;height:0;width:0;overflow:hidden;'
    wrapper.innerHTML = '\
      <img data-src="/images/Cloud.jpg" />\
    '
  }
})()
