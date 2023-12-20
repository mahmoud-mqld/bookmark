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
    }">visit <i class="bi bi-eye fs-5"></i></a> </td>
<td> <button class="btns btn-3" onclick="remove(${index})" >remove <i class="bi bi-trash fs-5"></i></button> </td>
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





