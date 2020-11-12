// 2560x1600 (1280x800)
var MacBookAir = function(context) { resizeSketch(1200,700) }

// 3072x1920 (1536x960)
var MacBookPro = function(context) { resizeSketch(1480,900) }

// 5120x2880 (2560x1440) ->
var iMac27 = function(context) { resizeSketch(1800,1000) }

function resizeSketch(width,height) {
  let window = NSApp.mainWindow()
  let x = (window.screen().frame().size.width - width) / 2
  let y = (window.screen().frame().size.height - height) / 2

  let frame = NSMakeRect(x,y,width,height)

  window.setFrame_display_animate(frame, true, true)
}