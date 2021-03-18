function renderContactDetails() {
  let result = `
  <div id="contactme" class="page container" data-jquery-page-name="contactPage">
    <div class="row">
        <div class="col-12">
            <h1 class="anim my-2">
			<strong>Contact <span class="text-vintage">me</span></strong>
			</h1>
			<h4 class="mb-2 text-white lead">Get in touch with me ...</h4>
            <div class="row">
                <div class="col-md-6 mx-auto form-container p-3 my-2">
                    <div class="form-group">
                        <label for="">Name</label>
                        <input id="name" type="text" class="form-control form-control-sm">
                        <span id="nameError" class="text-danger small d-none">Enter Name</span>
                    </div>
                    <div class="form-group">
                        <label for="">Email Address</label>
                        <input  id="emailaddress" type="email" class="form-control form-control-sm">
                        <span id="emailError" class="text-danger small d-none">Enter valid email</span>
                    </div>
                    <div class="form-group">
                        <label for="">Subject</label>
                        <input  id="subject" type="text" class="form-control form-control-sm">
                    </div>
                    <div class="form-group">
                        <label for="">Message</label>
                        <textarea  id="message" class="form-control form-control-sm"></textarea>
                        <span id="messageError" class="text-danger small d-none">Enter message</span>
                    </div>
                   
                     <input type="button" id="btnSendMessage" class="btn btn-success btn-sm w-25" value="Send">
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 p-3 my-2 mx-auto">
                <ul class="list-group list-group-flush">
                       <li class="list-group-item"> <a class="text-vintage"><i class="fa fa-mobile fa-2x text-vintage"></i> 0813230230</a></li>
                       <li class="list-group-item"> <a href="mailto:ephraimmamonong@mail.com" class='text-random'><i class="fa fa-envelope fa-2x text-vintage"></i> ephraimmamonong@gmail.com </a></li>
                       <li class="list-group-item"> <a href="https://www.linkedin.com/in/ephraim-mamonong-295281b4" class='text-random' target="_blank">
                            <i class="fa fa-linkedin fa-2x text-vintage"></i> Linkedin
                        </a></li>
                </ul>
                </div>  
            </div>    
        </div>
    </div>
  </div>  
            `;
  $("#page-body").html(result);
  $("footer").css("display", "none");
  $("#name").on("change keydown paste input",function(){
    var Name = $("#name").val(); console.log(Name)
})
  $("#btnSendMessage").on("click", function () {
    var Name = $("#name").val();
    var EmailAddress = $("#emailaddress").val();
    var Subject = $("#subject").val();
    var Message = $("#message").val();

    ValidateFormData(Name, EmailAddress, Subject, Message);

    
  });
}

function ValidateFormData(Name, EmailAddress, Subject, Message) {
  var result = false;

  if (Name.match(/\w/g)) console.log("Yeah");
  else $("#nameError").removeClass("d-none");
  if (EmailAddress.match(/\w@\w.\w/g)) console.log("yeah email");
  else $("#emailError").removeClass("d-none");
  if (Message.length > 0) console.log("Yeah message");
  else $("#messgeError").removeClass("d-none");
  return result;
}
