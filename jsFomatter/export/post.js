export const post = () => {
  let top = document.getElementById("content");

  let d = document.createElement("div");
  d.style.width = "100%";
  d.style.height = "30vh";
  d.style.display = "flex";
  d.style.justifyContent = "space-around";
  top.appendChild(d);

  // image div
  let dPhoto = document.createElement("div");
  dPhoto.style.width = "20%";
  dPhoto.style.height = "100%";
  dPhoto.style.marginRight = "20px";
  //   dPhoto.style.backgroundColor='red';
  d.appendChild(dPhoto);

  let dImage = document.createElement("img");
  dImage.src =
    "https://storage.potatomedia.co/articles/potato_08350ba8-9ca0-45e6-af2d-76e06ac0a712_54baf790823fa01be3d5d20f0f8248b5acc06f86.png";
  dImage.style.height = "100%";

  dPhoto.appendChild(dImage);

  // text
  let dText = document.createElement("div");
  dText.style.height = "100%";
  dText.style.width = "60%";

  let text = document.createElement("p");
  let textContent = document.createTextNode("Hello It's me ! Nice to meet you, Below are my members");

  text.appendChild(textContent);
  dText.appendChild(text);

  d.appendChild(dText);
};
export default post();
