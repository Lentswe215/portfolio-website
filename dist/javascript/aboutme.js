function renderAboutMe() {
  let result = `
    <div id="about" class="page container" data-jquery-page-name="aboutPage">
		<h1 class="anim my-3">
			<strong>About <span class="text-vintage">me</span></strong>
		</h1>
		<div class="top-section">
			<img src="./images/cropped_avatar.JPG" class="avatar" />

			<div class="about-text">
				<p class="anim">
					Hello, I am Ephraim Mamonong and I'm a web developer and designer based in Mahikeng, North West
					willing to relocating if I need to. I enjoy building interactive and responsive websites and web apps on both
					frontend and backend. Always looking forward to working and learning new technologies.
				</p>
			</div>
		</div>
		<h3 class="anim sm-heading">Technical <span class="text-vintage">skills</span></h3>
		<div class="tech_skills">
			<div class="skill-block block1">
				<h4 class="">Front-end</h4>
				<li class="anim">Html</li>
				<li class="anim">Css</li>
				<li class="anim">Sass</li>
				<li class="anim">Bootstrap</li>
				<li class="anim">JQuery</li>
				<li class="anim">RESTful API</li>
				<li class="anim">Asp.Net Web Api</li>
				<li class="anim">Ajax</li>
			</div>
			<div class="skill-block block2">
				<h4>Back-end</h4>
				<li class="anim">NodeJs</li>
				<li class="anim">ExpressJs</li>
				<li class="anim">Django</li>
				<li class="anim">Asp.Net Framework</li>
			</div>
			<div class="skill-block block3">
				<h4>Database</h4>
				<li class="anim">Postgresql</li>
				<li class="anim">MySQL</li>
				<li class="anim">SQlite</li>
				<li class="anim">MsSQL</li>
			</div>
			<div class="skill-block block4">
				<h4>Other Skills</h4>
				<li class="anim">Visual Studio</li>
				<li class="anim">VS Code</li>
				<li class="anim">SignalR</li>
				<li class="anim">Cordova Apache</li>
				<li class="anim">Jasmine TDD</li>
				<li class="anim">Docker</li>
				<li class="anim">Git</li>
				<li class="anim">Linux</li>
				<li class="anim">Windows</li>
				<li class="anim">Microsoft Azure</li>
				<li class="anim">Linux</li>
			</div>
		</div>
	</div>
    `;
  $("#page-body").html(result);
  $("footer").css("display", "")

}
