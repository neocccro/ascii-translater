var bits = new Array(scalex);
//gemaakt door coen
for (var i = 0; i < bits.length; i++)
{
  bits[i] = new Array(scaley);
}

for(var i = 0; i < scalex; i++)
{
  for(var j = 0; j < scaley; j++)
  {
    bits[i][j] = new bit(i,j);
  }
}

for(var i = 0; i < bits.length; i++)
{
  for(var j = 0; j < bits[i].length; j++)
  {
    bits[i][j].draw();
  }
}



function click(event)
{
  var mousx = event.clientX-offSetX+window.pageXOffset;
  var mousy = event.clientY-offSetY+window.pageYOffset;
  for(var i = 0; i < scalex; i++)
  {
    for(var j = 0; j < scaley; j++)
    {
      bits[i][j].hit(mousx, mousy);
    }
  }
  bitRead();
}

canvas.onmousedown = click;

function uit()
{
  for(var i = 0; i < bits.length; i++)
  {
    for(var j = 0; j < bits[i].length; j++)
    {
      bits[i][j].bool = false;
      bits[i][j].color = "#ff0000";
    }
  }
}

function aan()
{
  for(var i = 0; i < bits.length; i++)
  {
    for(var j = 0; j < bits[i].length; j++)
    {
      bits[i][j].bool = true;
      bits[i][j].color = "#00ff00";
    }
  }
}

function wissel()
{
  for(var i = 0; i < bits.length; i++)
  {
    for(var j = 0; j < bits[i].length; j++)
    {
      bits[i][j].draw();
    }
  }
}


function bitRead()
{
  let output = "";
  for(var i = 0; i < bits[0].length; i++)
  {
    let temp = 0;
    for(var j = 0; j < bits.length; j++)
    {
      if(bits[j][i].bool)
      {
        temp += Math.pow(2,7-j);
      }
    }
    if(temp == 13)
    {
      output += "<br/>";
    }
    else
    {
      output += String.fromCharCode(temp);
    }
  }
  text.innerHTML = output;
}
