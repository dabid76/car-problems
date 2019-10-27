import p5 from 'p5'

export default function sketch (p) {

//     var drops = [];

// p.setup = function() {
//   p.createCanvas(640, 360);
//   for (var i = 0; i < 500; i++) {
//     drops[i] = new p.Drop();
//   }
// }

// p.draw = function() {
//   p.background(230, 230, 250);
//   for (var i = 0; i < drops.length; i++) {
//     drops[i].fall();
//     drops[i].show();
//   }
// }




    // var symbolSize = 26;
    // var fadeInterval = 1.6;
    // var streams = [];
  
    // p.setup = function () {
    //   p.createCanvas(
    //      window.innerWidth,
    //      window.innerHeight
    //       );
    //     p.background(0);
    //     var x = 0;
    //     for( var i =  0; i <= p.width / symbolSize; i++){
    //         var stream = new p.Stream();
    //         stream.generateSymbols(x, p.random(-1000, 0));
    //         streams.push(stream);
    //         x += symbolSize
    //     }
    //     p.textSize(symbolSize);

    // };

    // p.draw = function () {
    //     p.background(0, 150)
    //     streams.forEach(function(stream){
    //         stream.render();
    //     })
    // };
  
    // p.Symbol = function (x, y, speed, first, opacity) {
    //     this.x = x;
    //     this.y = y;
        
    //     this.speed = speed;
    //     this.switchInterval = p.round(p.random(2, 20));
    //     this.first = first;
    //     this.opacity = opacity;

    //     this.setToRandomSymbol = function() {
    //         if(p.frameCount % this.switchInterval == 0){
    //             this.value = String.fromCharCode(
    //                 0x30A0 + p.round(p.random(0, 96))
    //             );
    //         }

    //     }
        
    //     this.rain = function() {
    //         this.y = (this.y >= p.height) ? 0 : this.y += this.speed
    //     }
    // };
  
    // p.Stream = function (){
    //     this.symbols = [];
    //     this.totalSymbols = p.round(p.random(5, 30));
    //     this.speed = p.random(5, 20);

    //     this.generateSymbols = function(x, y){
    //         var opacity = 255;
    //         var first = p.round(p.random(0, 4)) == 1;
    //         for(var i = 0; i <= this.totalSymbols; i ++){
    //           p.symbol = new p.Symbol(x, y, this.speed, first, opacity);
    //           p.symbol.setToRandomSymbol();
    //           this.symbols.push(p.symbol);
    //           p.opacity -= (255 / this.totalSymbols) / fadeInterval;
    //           y -= symbolSize;
    //           p.first = false;  
    //         }
    //     }

    //     this.render = function (){
    //         this.symbols.forEach(function(symbol){
    //             if(symbol.first){
    //                 p.fill(180, 255, 180, symbol.opacity);
    //             } else {
    //                 p.fill(0, 255, 70, symbol.opacity);
    //             }
    //             p.fill(0, 255, 70);
    //             p.text(symbol.value, symbol.x, symbol.y);
    //             symbol.rain();
    //             symbol.setToRandomSymbol();
    //         })
    //     }
    // }


  };