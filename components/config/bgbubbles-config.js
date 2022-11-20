const bgbubbleConfig = {
  "background":{
    "color": "#000000",
    "z-index": -100000
  },
  "particles":{
     "color":{
        "value":"#ffffff",
        "z-index": 100000
     },
     "move":{
        "direction":"bottom",
        "enable":true,
        "outModes":"out",
        "speed":2
     },
     "number":{
        "density":{
           "enable":true,
           "area":800
        },
        "value":400
     },
     "opacity":{
        "value":1
     },
     "shape":{
        "type":"circle"
     },
     "size":{
        "value":10
     },
     "wobble":{
        "enable":true,
        "distance":10,
        "speed":10
     },
     "zIndex":{
        "value":{
           "min":0,
           "max":100
        }
     }
  }
}

export default bgbubbleConfig