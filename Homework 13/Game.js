	var x = 50;
    	var y = 50;
	var a= 320;
	var b= 250;
	var c= 450;
	var d= 450;
    	var diameter = 50;
    	var mousex = 0;
    	var mousey = 0;
	var myXs = [];
	var myYs = [];
	var myDiameters = [];

    function setup() 
    {
      createCanvas(800, 600);
	
	 for(var i = 0; i < 10; i++)
        {
            // get all the random numbers to create a circle
            myXs[i] = getRandomX(800);
            myYs[i] = getRandomY(600);
            myDiameters[i] = getRandomDiameter(100);
			
        }
	movement = Math.floor(Math.random()*10) + 1;
	movement2 = Math.floor(Math.random()*10) +1;
	
    }

    function draw() 
    {
	background(0);
      	createPlayer();
	movePlayer();
	acrossScreen();
	drawClick();
	message();

	      for(var i = 0; i < myXs.length; i++)
      {
	
        fill(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
	
	circle(myXs[i] ,myYs[i] , myDiameters[i]);
	
	if(myXs[i]>800)
	{ 
		myXs[i]=1;
	}
	if(myXs[i]<0)
	{ 
		myXs[i]=800;
	}
	if(myYs[i]>600)
	{ 
		myYs[i]=1;
	}
	if(myYs[i]<0)
	{ 
		myYs[i]=600;
	}	
	 	
 	myXs[i] += Math.floor(Math.random()*10) + 1;
	myYs[i] += Math.floor(Math.random()*10) + 1; 
	
      }
	
     }
	

	function createPlayer()
	{
	
      	fill(24, 200, 29);
     	circle(x, y, diameter);
	}
	
	function movePlayer()
		{
		if (keyIsDown(83)) 
      		{
        	y += 10;
      		} 
      		else if (keyIsDown(87)) 
      		{
        	y -= 10;
      		}
  		if (keyIsDown(68)) 
      		{
     	 	 x += 10;
      		} 
     		 else if (keyIsDown(65)) 
      		{
        	x -= 10;
      		}
		}
	
	function drawClick()
	{
		fill('#fae');
	   	circle(mousex, mousey,75);
	}
	
    function mouseClicked() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    
    }

	function movingObstacles()
	{
	fill(255, 204, 0);
	rect(c,d,100,110);
	fill(color(0, 0, 255));
	circle(a,b,120);
	}
	
	function acrossScreen()
	{
	  if (x >= 850) 
      {
        x = 50;
      } 
      if (y >= 650) 
      {
        y = 50;
      }
	if (x<-50)
	{	
		x=750;
	}
     	if (y<-50)
	{	
		y=575;
	}
	
	}

	function youWin()
	{
		fill('red');
		textSize(50);
		text('You Win', 400,350);
	}

	function exit()
	{
		fill('red');
		textSize(50);
		text('Exit', 700,350);
	}

	function message()
	{
	if (x> 700 && x<800 && y>325 && y<375)
	{
		youWin();
     	 }else{
		exit();
	}
	}

	    function getRandomX(x)
    {
        return Math.floor(Math.random()*x)+10;
    }

    function getRandomY(y)
    {
        return Math.floor(Math.random()*y) + 10;
    }

    function getRandomDiameter(diameter)
    {
        return Math.floor(Math.random()*diameter)+10
    }

