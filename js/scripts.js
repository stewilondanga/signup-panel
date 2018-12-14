var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();


var pageDomain = {};
pageSetup();


function pageSetup() {
  pageDomain.signup = SignUpObj({
    domElementId: "content",
    title: "Form Style",
    runWhenFilledOut: function(dta) {
      // this demo code
      // takes the interesting contents of dta
      // and displays them out...
      var results = $("#results")[0];
      var s = [];

      s[s.length] = "<b>Form Data Filled Out:</b>";
      s[s.length] = "First Name: " + dta.firstName;
      s[s.length] = "Last Name: " + dta.lastName;
      s[s.length] = "Email Adr: " + dta.emailAdr;
      s[s.length] = "Password: " + dta.password;
      s[s.length] = "Favorite Color: " + dta.favoriteColor;
      s[s.length] = "Favorite Ninja Turtle: " + dta.favoriteNinjaTurtle;
      s[s.length] = "I'm Amazing Flag: " + dta.imAmazing;

      results.innerHTML = s.join("<br>");
      results.style.display = "block";
    }
  });
  pageDomain.signup.renderForm();
} // end of function pageSetup()




/*
   All a page might need is code like above.

   Scroll down to see actual code for SignUpObj() function...

*/

function SignUpObj(params) {
  var sId = params.domElementId;
  var sTitle = params.title;
  var cntr = $("#" + sId)[0];
  var signupObj = {};

  signupObj.sId = sId;
  signupObj.domElement = cntr;
  signupObj.title = sTitle;
  signupObj.lastErrMsg = "";

  signupObj.runWhenFilledOut = params.runWhenFilledOut;

  signupObj.firstName = "";
  signupObj.lastName = "";
  signupObj.emailAdr = "";
  signupObj.password = "";
  signupObj.passwordReentered = "";
  signupObj.favoriteColor = "";
  signupObj.favoriteNinjaTurtle = "";
  signupObj.imAmazing = false;

  signupObj.renderForm = function() {
    var s = [];
    var Q = '"';

    s[s.length] = "<div class='signupPanel'>";

    s[s.length] = "<div class='signupInnerPanel' id='signupInnerPanel'>";

    s[s.length] = "<div class='signupHdr'>";
    // s[s.length] = "<center>";
    s[s.length] = sTitle;
    s[s.length] = " Sign Up";
    //  s[s.length] = "</center>";
    s[s.length] = "</div>"; // signupHdr

    s[s.length] = "<div class='signupFirstNameLbl'>";
    s[s.length] = "First Name:";
    s[s.length] = "</div>"; // signupFirstNameLbl
    s[s.length] = "<input id='signupFname'  maxlength='50'";
    s[s.length] = " class='signupTextBox'>";

    s[s.length] = "<div class='signupLastNameLbl'>";
    s[s.length] = "Last Name:";
    s[s.length] = "</div>"; // signupLastNameLbl
    s[s.length] = "<input id='signupLname' maxlength='50'";
    s[s.length] = " class='signupTextBox'>";

    s[s.length] = "<div class='signupEmailLbl'>";
    s[s.length] = "Email Address:";
    s[s.length] = "</div>"; // signupEmailLbl
    s[s.length] = "<input id='signupEmail' maxlength='255'";
    s[s.length] = " class='signupTextBox'>";

    s[s.length] = "<div class='signupPasswordLbl'>";
    s[s.length] = "Password:";
    s[s.length] = "</div>"; // signupPasswordLbl
    s[s.length] = "<input id='signupPassword' maxlength='40'";
    s[s.length] = " type='password' class='signupTextBox'>";

    s[s.length] = "<div class='signupPasswordReenterLbl'>";
    s[s.length] = "Re-enter Password:";
    s[s.length] = "</div>"; //signupPasswordReenterLbl
    s[s.length] = "<input id='signupPasswordReenter' maxlength='40'";
    s[s.length] = " type='password' class='signupTextBox'>";

    s[s.length] = "<div class='signupFavoritesTitle'>";
    s[s.length] = "Favorites:";
    s[s.length] = "</div>"; // signupFavoritesTitle

    s[s.length] = "<div class='signupFavoritesPanel'>";

    s[s.length] = "<div class='signupFavColor'>";
    s[s.length] = "What's your Favorite Color?";
    s[s.length] = "</div>"; //

    s[s.length] = "<div id='signupColorBox'>";

    s[s.length] = mkSwatch("red");
    s[s.length] = mkSwatch("orange");
    s[s.length] = mkSwatch("yellow");
    s[s.length] = mkSwatch("green");
    s[s.length] = mkSwatch("blue");
    s[s.length] = mkSwatch("purple");

    s[s.length] = "</div>"; // colorBox

    s[s.length] = "<div class='signupFavTurtle'>";
    s[s.length] = "What's your favorite Ninja Turtle?";
    s[s.length] = "</div>"; // signupFavTurtle

    s[s.length] = "<div class='signupTurtles'>";

    s[s.length] = "<div class='signupLeo'>";
    s[s.length] = "<input type='radio' name='favTurtle' value='Leo'>";
    s[s.length] = "Leo";
    s[s.length] = "</div>"; // signupLeo

    s[s.length] = "<div class='signupMikey'>";
    s[s.length] = "<input type='radio' name='favTurtle' value='Mikey'>";
    s[s.length] = "Mikey";
    s[s.length] = "</div>"; // signupMikey

    s[s.length] = "<div class='signupDonnie'>";
    s[s.length] = "<input type='radio' name='favTurtle' value='Donnie'>";
    s[s.length] = "Donnie";
    s[s.length] = "</div>"; // signupDonnie

    s[s.length] = "<div class='signupRaph'>";
    s[s.length] = "<input type='radio' name='favTurtle' value='Raph'>";
    s[s.length] = "Raph";
    s[s.length] = "</div>"; // signupRaph

    s[s.length] = "</div>"; //signupTurtles

    s[s.length] = "</div>"; // signupFavoritesPanel

    s[s.length] = "<div class='signupImAmazing'>";
    s[s.length] = "<input id='signupImAmazing' type=" + Q + "checkbox" + Q + ">";
    s[s.length] = "<label class='signupImAmazingLbl'>&nbsp;&nbsp;I'm amazing</label>";
    s[s.length] = "</div>"; // signupImAmazing

    s[s.length] = "<div class='signupYesYouAre' id='signupYesYouAre'>";
    s[s.length] = "Yes You Are!!</div>"; //

    s[s.length] = "<button id='signupBtn' class='signupBtn' onclick='doSignup()'>Sign Up</button>";
    s[s.length] = "<div id='msg'>nnnn";
    s[s.length] = "</div>";

    s[s.length] = "</div>"; // signupPanel
    s[s.length] = "</div>"; // signupInnerPanel
    cntr.innerHTML = s.join("");

    cntr.addEventListener("click", checkClicks);
    cntr.addEventListener("keyup", checkUserTextInputs);
    cntr.addEventListener("change", checkChanges);



    var sGiveFocusCode = [];

    sGiveFocusCode[sGiveFocusCode.length] = "document.getElementById(";
    sGiveFocusCode[sGiveFocusCode.length] = Q;
    sGiveFocusCode[sGiveFocusCode.length] = "signupFname";
    sGiveFocusCode[sGiveFocusCode.length] = Q;
    sGiveFocusCode[sGiveFocusCode.length] = ").focus()";

    /* if you are editing your own copy of the code, be
       sure to comment out the line below before you do
       so the code Pen Code code editor won't lose focus!

       When you are done, don't forget to uncomment it! :)

       ... or, turn Auto Updating Preview Off!
     */
    //   setTimeout(sGiveFocusCode.join(""),20)
  } // end of signupObj.renderForm()


  function mkSwatch(sColor) {
    var s = [];
    var Q = '"';

    s[s.length] = "<div id='fav";
    s[s.length] = sColor;
    s[s.length] = "' ";
    s[s.length] = "title=";
    s[s.length] = Q;
    s[s.length] = "click here to select " + sColor + " as your favorite color";
    s[s.length] = Q;
    s[s.length] = " class='signupSwatch ";
    s[s.length] = sColor;
    s[s.length] = "'></div>";

    return s.join("");
  } // end of function


  function checkClicks(evt) {
    var el = evt.target;

    if (el.id === "signupBtn") {
      doSignup();
      return;
    } // end if

    var sClasses = el.className.split(" ");

    if (sClasses[0] === "signupSwatch") {
      if (signupObj.favoriteColor !== "") {
        signupObj.prevSelColorElement.style.borderColor = "white";
      } // end if

      signupObj.favoriteColor = sClasses[1];
      el.style.borderColor = "#003399";
      signupObj.prevSelColorElement = el;
      doValidation();
    } // end if

  } // end of function checkClicks()




  function checkUserTextInputs(evt) {
    var el = evt.target;

    if (el.id === "signupFname") {
      signupObj.firstName = el.value;
      doValidation();
    } // end if

    if (el.id === "signupLname") {
      signupObj.lastName = el.value;
      doValidation();
    } // end if

    if (el.id === "signupEmail") {
      signupObj.emailAdr = el.value;
      doValidation();
    } // end if

    if (el.id === "signupPassword") {
      signupObj.password = el.value;
      doValidation();
    } // end if

    if (el.id === "signupPasswordReenter") {
      signupObj.passwordReentered = el.value;
      doValidation();
    } // end if
  } // end of function checkUserTextInputs()


  function checkChanges(evt) {
    var el = evt.target;

    if (el.name === "favTurtle") {
      signupObj.favoriteNinjaTurtle = el.value;
    } // end if

    if (el.id === "signupImAmazing") {
      signupObj.imAmazing = el.checked;
      var signupYesYouAre = $("#signupYesYouAre")[0];

      if (signupObj.imAmazing) {
        signupYesYouAre.style.display = "block";
      } else {
        signupYesYouAre.style.display = "none";
      }
    } // end if

    // below happens when user picks option that
    // the browser provides
    if (el.id === "signupEmail") {
      //     signupObj.emailAdr = el.value;

    } // end if

    doValidation();
  } // end of function


  function doSignup() {
    var dta = {};
    var sMsg;
    var msg = $("#msg")[0];

    sMsg = doValidation(true);

    if (sMsg.length > 0) {
      msg.style.display = "block";
      return;
    } // end if


    // if we get this far, everything is validated and we can move on
    dta.firstName = signupObj.firstName;
    dta.lastName = signupObj.lastName;
    dta.emailAdr = signupObj.emailAdr;
    dta.password = signupObj.password;
    dta.favoriteColor = signupObj.favoriteColor;
    dta.favoriteNinjaTurtle = signupObj.favoriteNinjaTurtle;
    dta.imAmazing = signupObj.imAmazing;
    showSubmissionMsg();
    signupObj.runWhenFilledOut(dta);
  } // end of function doSignup()


  function isValidEmailAdr(sAdr) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(sAdr);
  } // end of function
  /*
                    function doValidation(iFromButton) {
                      var sMsg = [];
                      var msg = $("#msg")[0];
                      var s=[];
                      var n,nMax;
                      var xyz = signupObj;
                      var sErrMsg;
                      var bFromButton = false;

                      if (typeof iFromButton !== "undefined") {
                        bFromButton = iFromButton;
                      } // end if

                        if (signupObj.firstName.length < 1) {
                          sMsg[sMsg.length] = "First Name is a required field";
                        }

                        if (signupObj.lastName.length < 2) {
                          sMsg[sMsg.length] = "The Last Name field needs to be at least 2 characters long";
                        }

                      if (bFromButton) {
                        var xyz = signupObj;
                      }

                        if (signupObj.emailAdr.length < 1) {
                          sMsg[sMsg.length] = "Email Address is a required field";
                        } else {
                          if (!isValidEmailAdr(signupObj.emailAdr)) {
                            sMsg[sMsg.length] = "Invalid Email Address";
                          } // end if
                        } // end if/else

                        if (signupObj.password.length < 6) {
                          sMsg[sMsg.length] = "You must provide a password with 6 characters or more";
                        } else {
                          if (signupObj.passwordReentered !== signupObj.password) {
                            sMsg[sMsg.length] = "Password and Reentered Password do not match";
                          } // end if
                        } // end if/else (signupObj.password.length < 7)

                        if (signupObj.favoriteColor === "") {
                          sMsg[sMsg.length] = "You must select your favorite color";
                        } // end if

                        if (signupObj.favoriteNinjaTurtle === "") {
                          sMsg[sMsg.length] = "You must select your favorite Ninja Turtle";
                        } // end if

                          if (sMsg.length>0) {
                          // Did not pass validation
                          nMax = sMsg.length;
                          s[s.length] = "<ul class='signUpUl'>";
                          for (n=0;n<nMax;n++) {
                            s[s.length] = "<li>";
                            s[s.length] = sMsg[n];
                            s[s.length] = "</li>";
                          } // next n

                          s[s.length] = "</ul>";

                          sErrMsg = s.join("");

                          if (signupObj.lastErrMsg !==sErrMsg) {
                            signupObj.lastErrMsg = sErrMsg;
                            msg.innerHTML = sErrMsg;
                          } // end if
                        } else {
                          signupObj.lastErrMsg = "";
                          msg.innerHTML = "";
                          msg.style.display = "none"; // no problems
                        } // end if

                      return sMsg;
                    } // end of function doValidation()

                      function showSubmissionMsg() {
                        var s=[];
                        var signupInnerPanel = $("#signupInnerPanel")[0];

                        s[s.length] = "<div class='signupSubmissionHdr'>";
                        s[s.length] = "<center>";
                        s[s.length] = sTitle;
                        s[s.length] = " Site Sign Up";
                        s[s.length] = "</center>";
                        s[s.length] = "</div>"; // signupSubmissionHdr

                        s[s.length] = "<div class='signupThankyou'>";
                        s[s.length] = "<center>";
                        s[s.length] = "Thank You For Signing Up!";
                        s[s.length] = "</center>";
                        s[s.length] = "</div>"; // signupThankyou

                        signupInnerPanel.innerHTML = s.join("");
                      } // end of function


                      return signupObj;


                    } // end of function SignUpObj()
