var input = document.querySelectorAll("input");


function handleUpdate()
{
  var suffix=this.dataset.sizing||"";
  document.documentElement.style.setProperty("--"+this.name,this.value+suffix);
  console.log("--"+this.name);
 console.log(this.value+suffix);
}

input.forEach(input=>input.addEventListener("change",handleUpdate));
input.forEach(input=>input.addEventListener("mousemove",handleUpdate));
