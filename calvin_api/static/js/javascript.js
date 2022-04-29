const imageBtn = document.getElementById('id_image');
console.log(imageBtn)

const fileChosen = document.getElementById('file-chosen');

imageBtn.onchange = function(){
  fileChosen.textContent = this.files[0].name
  console.log("file chosen")
}