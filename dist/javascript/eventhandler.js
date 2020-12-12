$(function () {
  console.log("rendering home page..");
  renderHomePage();

  $("footer").css("display", "none");
});

$(document).on("click", ".nav-link", function (e) {
  removeCurrentClass();
  if (e.target.id == "btnHomePage") {
    renderHomePage();
    e.target.classList.add("current");
  } else if (e.target.id == "btnAboutMe") {
    renderAboutMe();
    e.target.classList.add("current");
  } else if (e.target.id == "btnProjects") {
    renderProject();
    e.target.classList.add("current");
  } else {
    renderContactDetails();
    e.target.classList.add("current");
  }
  $(".menu-bars").click();
});

function removeCurrentClass() {
  $("#btnHomePage").removeClass("current");
  $("#btnAboutMe").removeClass("current");
  $("#btnProjects").removeClass("current");
  $("#btnContacts").removeClass("current");
}
