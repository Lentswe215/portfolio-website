function renderHomePage() {
  let result = `
    <div id="intro" class="page mt-5" data-jquery-page-name="homePage">
    <h2 class="sm-heading">Hello <span class="text-random">I am</span></h2>
        <h1 class="lg-heading">Ephraim <span class="text-vintage">Mamonong</span> </h1>
		<h2 class="sm-heading">Fullstack <span class="text-random">Web Developer</span></h2>
		<div class="icons">
			<a href="https://github.com/Lentswe215?tab=repositories" target="_blank">
				<i class="fa fa-github p-1 "> </i></a>
			<a href="https://www.linkedin.com/in/ephraim-mamonong-295281b4" target="_blank">
				<i class="fa fa-linkedin p-1 "> </i></a>
        </div>
    </div>
    `;

  $("#page-body").html(result);
  $("footer").css("display", "none")

}
