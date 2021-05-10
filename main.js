 var mouseevent= "empty" ;
 canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
 color = "black";
 widthofline = 4;
 canvas.addEventListener("mousedown", my_mousedown );
 function my_mousedown(e) {

radius = document.getElementById("radius_input").value;

mouseevent = "mousedown";
 }

 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e){

current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y  = e.clientY - canvas.offsetTop;

if(mouseevent == "mousedown"){
    console.log("x="+ current_position_of_mouse_x);
    console.log("y="+ current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth= widthofline;
ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y, radius,0,2*Math.PI);
ctx.stroke();

}

 }

 canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(e){
     mouseevent= mouseup;
 }

 canvas.addEventListener("mouseleave", my_mouseleave);
 function my_mouseleave(e){
     mouseevent = mouseleave;
 }