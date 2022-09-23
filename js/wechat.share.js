;(function () {
  function appendScript(url, callback) {
    if (typeof url === "string") {
      var script = document.createElement("script")
      script.src = url
      if (callback) {
        script.onload = function () {
          appendScript(callback)
        }
      }
      document.body.appendChild(script)
    } else if (Array.isArray(url)) {
      url.forEach(function (u) {
        appendScript(u)
      })
    }
  }
  if (/MicroMessenger/i.test(navigator.userAgent)) {
    const desc = document.querySelector('meta[name="description"]').content
    const imgUrl = 'https://www.mulianju.com/images/share-default.jpg'
    appendScript("//res.wx.qq.com/open/js/jweixin-1.6.0.js", function () {
      wx.config({
        debug: true, 
        appId: 'wxa38d4e7929eec1c5', 
        timestamp: Date.now(), 
        nonceStr: '', 
        signature: '',
        jsApiList: [] 
      });
      wx.ready(function () {
        wx.updateAppMessageShareData({ 
          desc, 
          imgUrl, 
          success: function () {
            
          }
        })
        wx.updateTimelineShareData({ 
          imgUrl, 
          success: function () {
            
          }
        })
      }); 
    })
    
  }
})()
