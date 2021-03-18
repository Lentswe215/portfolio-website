function renderProject() {
  let result = `
  	<div id="work" class="page container" data-jquery-page-name="projectPage">
  		<h1 class="anim my-3" data-sr-id="0" style="visibility: visible; opacity: 1; transition: opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0s;">
		 Projects<span class="text-vintage"> I've worked on:</span></u>
		</h1>
		<div class="row mt-2">`;
  
  result += RenderProjects(
    "http://rooftruss.co.za/",
    "Screenshot 2020-12-28 154553.png"
  );
  result += RenderProjects(
    "https://zibuza.net/",
    "Screenshot 2020-12-28 154436.png"
  );
  result += RenderProjects(
    "https://www.freemarketfoundation.com/",
    "Screenshot 2020-12-28 154656.png"
  );

  result += RenderProjects(
    "https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=online.milife.mobile&amp;ddl=1&amp;pcampaignid=web_ddl_1",
    "Screenshot_20210318-222424.jpg"
  );

  function RenderProjects(Link, Image) {
    let project = '<div class="col-md-7 mx-auto my-1">';
    project += '<a href="' + Link + '" target="_blank" >';
    project += '<div class="imgage-block">';
    project += '<img src="./images/' + Image + '" class="rounded work-pics">';
    project += "</div></a></div>";

    return project;
  }

  result += `</div><div class="moreProjects">
					<a href="https://github.com/Lentswe215?tab=repositories" class="btn-link underline" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> More Projects</a>
			</div></div>`;
  $("#page-body").html(result);
  $("footer").css("display", "");
}
