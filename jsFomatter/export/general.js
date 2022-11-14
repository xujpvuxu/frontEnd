export const general = () => {
  let d = document.getElementById("content");
  let button = document.createElement("div");
  button.classList.add('button')

   getDiv(button,'https://images2.gamme.com.tw/news2/2010/59/24/pJiVpKCWj6WZr6Q.jpg');
   getDiv(button,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9fB5JW5ksD1KKvcIX0eaqcq7Yve5IyYFCg&usqp=CAU');
   getDiv(button,'https://photo-cms-sggp.zadn.vn/w560/Uploaded/2022/bwvvopqi/2020_01_16/chuot10_vnvm.jpg');
   getDiv(button,'https://storage.potatomedia.co/articles/potato_08350ba8-9ca0-45e6-af2d-76e06ac0a712_f824c025021beb79b4130f0ac932ce1870579d4b.png');
   getDiv(button,'https://photo-cms-sggp.zadn.vn/w560/Uploaded/2022/bwvvopqi/2020_01_16/chuot4_nzbv.jpg');
   getDiv(button,'https://media.nownews.com/nn_media/thumbnail/2020/10/44e543a5-1603849417-7d9bfae5366be4d4dbf7c5b22484d990-768x512.jpg');

  d.appendChild(button);
  console.log(d);
};

function getDiv(button,imageUrl) {
  let div = document.createElement("div");
  div.classList.add("contentBlock");

let image = document.createElement('img')
image.src=imageUrl;
image.classList.add('image')
div.appendChild(image);


  button.appendChild(div);
}
export default general();
