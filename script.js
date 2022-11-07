const list = document.querySelectorAll(".list");
const content = document.querySelector(".content");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("active");
  });

  this.classList.add("active");

  if (this.id === "me") {
    content.innerHTML =
      "<p><center><br><br><p style='color: #fff; font-size: 1.2em;'> Understanding Culture, Society, and Politics<br><br>Grade 12 - Saint John Paul II<br><br>CONCEPT MAP</p>  </center> </p>";
  } else if (this.id === "community") {
    content.innerHTML =
      "<p> As a citizen of a small community, I personally follow rules and regulations that are set by the local officials. I am a supporter of the society by being a responsible citizen.<br><br>&nbsp;&nbsp;&nbsp;As a citizen, there are many different things that could contribute to the society. An example of this is respecting communities.</p> <br><br><br><center><ion-icon name='flag-outline' style='font-size: 3em;'></ion-icon></center>";
  } else if (this.id === "school") {
    content.innerHTML =
      "<p>Being in school is an opportunity to gain education and knowledge that can be applied in any way in our lives. As a student, being responsible for anything that is related to studying is what I try to become. Even though I do not have the ability to create and be more responsible like other students, there are times that I do not have any passion on what I am doing, hence making low quality results. </p><br><br><br><center><ion-icon name='school-outline' style='font-size: 3em;'></ion-icon></center>";
  } else if (this.id === "family") {
    content.innerHTML =
      "<p> In terms of families, I am the youngest in the family. Even though I am the youngest, I believe that I possess characteristics that enable me to live not fully independently but can live without much assistance. <br><br> I am also a son of 2 wonderful people. Being a son is basically a helper in the house. It can be of anything as long as the house is involved. I receive many things, or almost all things, from my family. Someday, I hope I can give back them at least a quarter of what they have given me. </p> <center><ion-icon name='people-outline' style='font-size: 3em;'></ion-icon></center>";
  } else if (this.id === "church") {
    content.innerHTML =
      "<p> In church, I am an altar server. I have been an altar server for about 6 years now. I am glad that I was given the opportunity to be an altar server even though I know for a fact that there are other people that deserve it more than I do. <br><br> Attending masses every Sunday is also a part of my life. These holy masses are what helps us connect better with God. His words are proclaimed and given attention because of its holiness. </p> <center><ion-icon name='sunny-outline' style='font-size: 3em;'></ion-icon></center>";
  } else if (this.id === "social") {
    content.innerHTML =
      "<p> Being in a social group, there are many advantages and disadvantages. I am the type of person that wants to make others happy, thus I try being a funny and the jokster in my friend group. Even though I act as immature, I am someone that can be there in bad times and when a friend of mine needs someone, I can be there for them. I am the oldest in my friend group, and it is giving me some kind of pressure that I need to be the role model, but on the outside, it looks and feels like as if I am the youngest. </p> <center><ion-icon name='people-circle-outline' style='font-size: 3em;'></ion-icon></center>";
  }
}

list.forEach((item) => item.addEventListener("click", activeLink));
