
var canvas = new fabric.canvas('myCanvas');
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(get_Image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleTowidth(block_image_object);
	block_image_object.scaleToHeight(block_image_object);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object)
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		new_image('rr1.png');
		console.log("r");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image('gr.png');
		console.log(V)
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('yr.png');
		console.log('A')
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image('pr_png');
		console.log('R');
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image('br.png');
		console.log('I')
	}
	
}

