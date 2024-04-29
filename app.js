var btn = document.getElementById("btn")
// var me= document.querySelector(".me")

Draggable.create(".me");

Draggable.create(".me", {
    type: "rotation",
    inertia: true,
  });
// btn.addEventListener("cancel",(e)=>{
//     console.log(e,"<---y")
// })

