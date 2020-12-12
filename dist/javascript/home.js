function renderHomePage() {
  let result = `
    <div id="intro" class="page" data-jquery-page-name="homePage">
        <h1 class="lg-heading">Ephraim <span class="text-vintage">Mamonong</span> </h1>
		<h2 class="sm-heading">Fullstack Web Developer & <span class="text-vintage">Designer</span></h2>
		<div class="icons">
			<a href="https://github.com/Lentswe215?tab=repositories" target="_blank">
				<i class="fa fa-github p-1 githublink"> </i></a>
			<a href="https://www.linkedin.com/in/ephraim-mamonong-295281b4" target="_blank">
				<i class="fa fa-linkedin p-1 linkedinlink"> </i></a>
        </div>
    </div>
    `;

  $("#page-body").html(result);
  $("footer").css("display", "none")

}
