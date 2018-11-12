var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var text = document.getElementById("text");
context.lineWidth = 2;
//gemaakt door coen
var offSetX = canvas.offsetLeft;
var offSetY = canvas.offsetTop;

var scalex = 8;
var scaley = 100;

class bit
{
  constructor()
  {
    this.bool = false;
    this.x = arguments[0];
    this.y = arguments[1];
  }
  draw()
  {
    if(this.bool)
    {
      context.fillStyle = "#00ff00";
    }
    else
    {
      context.fillStyle = "#ff0000";
    }
    context.beginPath();
    context.moveTo(this.x*canvas.width/scalex,this.y*canvas.height/scaley);
    context.lineTo((this.x+1)*canvas.width/scalex-1,this.y*canvas.height/scaley);
    context.lineTo((this.x+1)*canvas.width/scalex-1,(this.y+1)*canvas.height/scaley-1);
    context.lineTo(this.x*canvas.width/scalex,(this.y+1)*canvas.height/scaley-1);
    context.lineTo(this.x*canvas.width/scalex,this.y*canvas.height/scaley);
    context.stroke();
    context.fill();
    context.closePath();
  }
  hit()
  {
    if(this.x*canvas.width/scalex < arguments[0] && (this.x+1)*canvas.width/scalex > arguments[0] && this.y*canvas.height/scaley < arguments[1] && (this.y+1)*canvas.height/scaley > arguments[1])
    {
      this.bool = !this.bool;
      this.draw();
    }
  }
}
