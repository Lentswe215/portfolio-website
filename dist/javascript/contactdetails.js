function renderContactDetails() {
  let result = `
  <div id="contactme" class="page" data-jquery-page-name="contactPage">
            <h1 class="anim page-heading">
			<strong>Contact <span class="text-vintage">me</span></strong>
			</h1>
			<h2 class="sm-heading">Get in touch with me ...</h2>

            <div class="contactboxes">
                    <a class="phoneNo"><i class="fa fa-mobile fa-2x text-vintage"></i> 0813230230</a>
                    <a href="mailto:ephraimmamonong@mail.com" class='email'><i class="fa fa-envelope fa-2x text-vintage"></i> ephraimmamonong@gmail.com </a>
                    <a href="https://www.linkedin.com/in/ephraim-mamonong-295281b4" class='linkedin' target="_blank">
                        <i class="fa fa-linkedin fa-2x text-vintage"></i> Linkedin
                    </a>
            </div>    
        `;
  $("#page-body").html(result);
  $("footer").css("display", "none");
}
