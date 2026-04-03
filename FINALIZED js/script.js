var username = prompt("Hi! What's your name?");

if (username && username.trim() !== "") {
  document.getElementById("greeting").textContent = "Welcome, " + username + "!";
}



document.getElementById("show-bars-btn").addEventListener("click", function() {
  var bars = document.getElementById("skill-bars");
  var showing = bars.style.display === "block";

  if (showing) {
    bars.style.display = "none";
    this.textContent = "Show Skill Levels";
    document.querySelectorAll(".fillbar").forEach(function(bar) {
      bar.style.width = "0%";
    });
  } else {
    bars.style.display = "block";
    this.textContent = "Hide Skill Levels";
    setTimeout(function() {
      document.querySelectorAll(".fillbar").forEach(function(bar) {
        bar.style.width = bar.dataset.width + "%";
      });
    }, 50);
  }
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  var valid = true;

  var nameField  = document.getElementById("contact_name");
  var emailField = document.getElementById("contact_email");
  var msgField   = document.getElementById("contact_message");

  document.getElementById("error_name").style.display  = "none";
  document.getElementById("error_email").style.display = "none";
  document.getElementById("error_message").style.display   = "none";
  document.getElementById("form-success").style.display = "none";

  if (nameField.value.trim() === "") {
    document.getElementById("error_name").style.display = "block";
    valid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
    document.getElementById("error_email").style.display = "block";
    valid = false;
  }

  if (msgField.value.trim() === "") {
    document.getElementById("error_message").style.display = "block";
    valid = false;
  }

  if (valid) {
    document.getElementById("form-success").style.display = "block";
    this.reset();
  }
});



$(document).ready(function() {

$("#dark-toggle").on("click", function() {
    $("body").toggleClass("dark");

    var isDark = $("body").hasClass("dark");

    if (isDark) {
      $(this).text("☀️");
    } else {
      $(this).text("🌙");
    }
  });

$(".btn").on("click", function() {
    $(".btn").removeClass("active");
    $(this).addClass("active");

    var filter = $(this).data("filter");

    $("#projects div[data-type]").each(function() {
      var type = $(this).data("type");

      if (filter === "all" || type === filter) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});