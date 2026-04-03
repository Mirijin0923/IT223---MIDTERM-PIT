var name = prompt("Hi! What's your name?");

if (name && name.trim() !== "") {
  document.getElementById("greeting").textContent = "Welcome, " + name + "!";
}



document.getElementById("show-bars-btn").addEventListener("click", function() {
  var bars = document.getElementById("skill-bars");
  var showing = bars.style.display === "block";

  if (showing) {
    bars.style.display = "none";
    this.textContent = "Show Skill Levels";
    document.querySelectorAll(".bar-fill").forEach(function(bar) {
      bar.style.width = "0%";
    });
  } else {
    bars.style.display = "block";
    this.textContent = "Hide Skill Levels";
    setTimeout(function() {
      document.querySelectorAll(".bar-fill").forEach(function(bar) {
        bar.style.width = bar.dataset.width + "%";
      });
    }, 50);
  }
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  var valid = true;

  var nameField  = document.getElementById("c-name");
  var emailField = document.getElementById("c-email");
  var msgField   = document.getElementById("c-message");

  document.getElementById("err-name").style.display  = "none";
  document.getElementById("err-email").style.display = "none";
  document.getElementById("err-msg").style.display   = "none";
  document.getElementById("form-success").style.display = "none";

  if (nameField.value.trim() === "") {
    document.getElementById("err-name").style.display = "block";
    valid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
    document.getElementById("err-email").style.display = "block";
    valid = false;
  }

  if (msgField.value.trim() === "") {
    document.getElementById("err-msg").style.display = "block";
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

$(".filter-btn").on("click", function() {
    $(".filter-btn").removeClass("active");
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