function renderProject() {
  let result = `
  <div id="work" class="page" data-jquery-page-name="projectPage">
  <h1 class="anim page-heading" data-sr-id="0" style="visibility: visible; opacity: 1; transition: opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0s;">
			My <span class="text-vintage">Work</span>
		</h1>
		<div class="projects">
			<div class="item">
				<a href="#!" target="blank">
					<img src="./images/rsz_2screenshot_2020-05-18_11-40-43.png" alt="Project">
				</a>
				<a href="http://lentswe215.github.io/memory_game/" class="btn btn-success" target="blank">
					<i class="fas fa-eye" aria-hidden="true"></i> View Project
				</a>
				<a href="https://github.com/Lentswe215/Memory-game.github.io.git" class="btn btn-dark" target="blank">
					<i class="fa fa-github" aria-hidden="true"></i> Github repo
				</a>
			</div>
			<div class="item">
				<a href="#!" target="blank">
					<img src="./images/Screenshot_2020-07-28_20-14-15.png" class="screenshot" alt="Project">
				</a>
				<a href="https://covid19statsapplent.netlify.app/" class="btn btn-success" target="blank">
					<i class="fas fa-eye" aria-hidden="true"></i> View Project
				</a>
				<a href="https://github.com/Lentswe215/Covid19_app_with_pure_javascript.git" class="btn btn-dark" target="blank">
					<i class="fa fa-github" aria-hidden="true"></i> Github repo
				</a>
			</div>
			<div class="item">
				<a href="#!" target="blank">
					<img src="./images/Screenshot_2020-07-30_20-01-22.png" alt="Project" class="screenshot">
				</a>
				<a href="https://lentswe-login-and-register-forms.netlify.app/" class="btn btn-success" target="blank">
					<i class="fas fa-eye" aria-hidden="true"></i> View Project
				</a>
				<a href="https://github.com/Lentswe215/registerLogin_forms.git" class="btn btn-dark" target="blank">
					<i class="fa fa-github" aria-hidden="true"></i> Github repo
				</a>
			</div>

		</div>
		<h4 class="p-3">Check my other projects on my <a href="https://github.com/Lentswe215?tab=repositories" class="text-primary underline" target="_blank"><i class="fa fa-github" aria-hidden="true"></i>Github</a></h4>
</div>
`;
  $("#page-body").html(result);
  $("footer").css("display", "");
}
