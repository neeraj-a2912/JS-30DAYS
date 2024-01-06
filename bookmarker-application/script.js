const addBookmark = document.getElementById("addBookmark");
var bookMarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

// Adding Event Listener to button to save bookmarks in localStorage
addBookmark.addEventListener("click", () => {
  let siteName = document.getElementById("siteName").value;
  let siteUrl = document.getElementById("siteUrl").value;

  // Validating URL
  var expression =
    /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert("Please use a valid URL");
    return;
  }

  const newBookMark = {
    name: siteName,
    url: siteUrl,
  };
  bookMarks.push(newBookMark);
  localStorage.setItem("bookmarks", JSON.stringify(bookMarks));
  location.reload();
});

// function to delete bookmark
function deleteBookMark(url) {
  for (let i = 0; i < bookMarks.length; i++) {
    if (bookMarks[i].url === url) {
      bookMarks.splice(i, 1);
    }
  }
  localStorage.setItem("bookmarks", JSON.stringify(bookMarks));
  location.reload();
}

// function to fetch bookmarks
function fetchBookMarks() {
  var allBookMarks = document.getElementById("bookmarksList");
  for (let i = 0; i < bookMarks.length; i++) {
    allBookMarks.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div class="card bg-white">
              <div  
                class="card-body d-flex justify-content-between align-items-center"
              >
                <p class="card-title">${bookMarks[i].name}</p>
                <div class="buttons">
                  <a href=${bookMarks[i].url} class="btn btn-sm" target="_blank"
                    ><i class="bi bi-box-arrow-up-right"></i
                  ></a>
                  <a onclick="deleteBookMark('${bookMarks[i].url}')"><i class="bi bi-trash3 btn btn-sm deleteMark"></i></a>
                </div>
              </div>
            </div>
          </div>
        `;
  }
}

window.onload = () => {
  fetchBookMarks();
};
