var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
let RegExpURL =
  /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^?\s]*)?(?:\?[^#\s]*)?(?:#.*?)?$/;
  let RegExpName =/\w{3,50}/


var bookmarks = [];
if (localStorage.getItem("Bookmarks")==null) {bookmarks = [];}
else{
  bookmarks=(JSON.parse(localStorage.getItem("Bookmarks")));
  display(bookmarks);
}


function add() {
  check(siteName,RegExpName);
  check(siteURL,RegExpURL)
  var bookmark = { sitename: siteName.value, siteURL: siteURL.value };
if (RegExpName.test(siteName.value)==true) {
  
}

  switch (RegExpURL.test(siteURL.value)&&(RegExpName.test(siteName.value))) {
    case true:
      {
        console.log("valid");
        bookmarks.push(bookmark);
        console.log(bookmarks);
        localStorage.setItem("Bookmarks",JSON.stringify(bookmarks))

        console.log(siteURL.value);
        console.log(RegExpURL.test(siteURL.value));

        display(bookmarks);
        clear();

      }

      break;

    default:
      {  dialog.show();

        console.log("notvalid");
        console.log(siteURL.value);
        console.log(RegExp.test(siteURL.value));
      }
      break;
  }

}


function display(bookmarks) {
  var index;
  var data = ``;
  for (let index = 0; index < bookmarks.length; index++) {
    data += `
<tr>
<td>${index + 1}</td>
<td>${bookmarks[index].sitename}</td>
<td></td>
<td>  <a class="btns btn-2" target="_blank" href="${
      bookmarks[index].siteURL
    }">visit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
  </svg></a> </td>
<td> <button class="btns btn-3" onclick="remove(${index})" >remove <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg></button> </td>
 </tr>
`;
  }

  document.getElementById("tBody").innerHTML = data;
}

function clear() {
  siteName.value = "";
  siteURL.value = "";
}

function remove(i) {
  bookmarks.splice(i, 1);
  localStorage.setItem("Bookmarks",JSON.stringify(bookmarks))
  display(bookmarks);
}

const dialog = document.getElementById("myDialog");

function showDialog() {
  dialog.show();
}

function closeDialog() {
  dialog.close();
}

function check(input,test) {
  if (test.test(input.value)==true) {
    input.classList.add("valid"); }
else {input.classList.remove("valid");  
}}





