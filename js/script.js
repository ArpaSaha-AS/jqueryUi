//Answer To The Question Number:1 start
$(function () {
  $("#accordion-1").accordion();
});
//Answer To The Question Number:2 start
$(function () {
  $("#accordion-2").accordion({
    collapsible: true,
  });
});
//Answer To The Question Number:3 start
$(function () {
  $("#accordion-3").accordion({
    heightStyle: "content",
  });
  $("#accordion-4").accordion({
    heightStyle: "fill",
  });
});
//Answer To The Question Number:4 start
$(function () {
  $("#accordion-5").accordion({
    disabled: false,
  });
  $("input").each(function () {
    $(this).change(function () {
      if ($(this).attr("id") == "disableaccordion") {
        $("#accordion-5").accordion("option", "disabled", true);
      } else {
        $("#accordion-5").accordion("option", "disabled", false);
      }
    });
  });
});
//Answer To The Question Number:5 start
$(function () {
  $("#accordion-6").accordion({
    create: function (event, ui) {
      $("span#result").html($("span#result").html() + "<b>Created</b><br>");
    },

    beforeActivate: function (event, ui) {
      $("span#result").html(
        $("span#result").html() + ", <b>beforeActivate</b><br>"
      );
    },

    activate: function (event, ui) {
      $("span#result").html($("span#result").html() + "<b>activate</b><br>");
    },
  });
});
//Answer To The Question Number:6 start
$(function () {
  var availableTutorials = ["ActionScript", "Bootstrap", "C", "C++"];
  $("#automplete-1").autocomplete({
    source: availableTutorials,
  });
});
//Answer To The Question Number:7 start
$(function () {
  var availableTutorials = [
    "ActionScript",
    "Bootstrap",
    "C",
    "C++",
    "Ecommerce",
    "Jquery",
    "Groovy",
    "Java",
    "JavaScript",
    "Lua",
    "Perl",
    "Ruby",
    "Scala",
    "Swing",
    "XHTML",
  ];
  $("#automplete-3").autocomplete({
    minLength: 2,
    delay: 500,
    source: availableTutorials,
  });
});
//Answer To The Question Number:8 start
$(function () {
  $("#autocomplete-4").autocomplete({
    source: [
      { label: "India", value: "IND" },
      { label: "Australia", value: "AUS" },
    ],
  });
});
//Answer To The Question Number:9 start

$(function () {
  $("#autocomplete-5").autocomplete({
    source: "/jqueryui/search.php",
    minLength: 2,
  });
});
//Answer To The Question Number:10 start
$(function () {
  var projects = [
    {
      value: "java",
      label: "Java",
      desc: "write once run anywhere",
    },
    {
      value: "jquery-ui",
      label: "jQuery UI",
      desc: "the official user interface library for jQuery",
    },
    {
      value: "Bootstrap",
      label: "Twitter Bootstrap",
      desc: "popular front end frameworks ",
    },
  ];
  $("#project")
    .autocomplete({
      minLength: 0,
      source: projects,
      focus: function (event, ui) {
        $("#project").val(ui.item.label);
        return false;
      },
      select: function (event, ui) {
        $("#project").val(ui.item.label);
        $("#project-id").val(ui.item.value);
        $("#project-description").html(ui.item.desc);
        return false;
      },
    })

    .data("ui-autocomplete")._renderItem = function (ul, item) {
    return $("<li>")
      .append("<a>" + item.label + "<br>" + item.desc + "</a>")
      .appendTo(ul);
  };
});
//Answer To The Question Number:11 start
$(function () {
  $("#button-1, #button-2, #button-3, #button-4").button();
  $("#button-5").buttonset();
});
//Answer To The Question Number:12 start
$(function () {
  $("#datepicker-13").datepicker();
  $("#datepicker-13").datepicker("show");
});
//Answer To The Question Number:13 start
$(function () {
  $("#dialog-1").dialog({
    autoOpen: false,
  });
  $("#opener").click(function () {
    $("#dialog-1").dialog("open");
  });
});
//Answer To The Question Number:14 start
$(function () {
  $("#dialog-4").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      OK: function () {
        $(this).dialog("close");
      },
    },
  });
  $("#opener-4").click(function () {
    $("#dialog-4").dialog("open");
  });
});
//Answer To The Question Number:15 start
$(function () {
  $("#menu-1").menu();
});
//Answer To The Question Number:16 start
$(function () {
  $("#progressbar-1").progressbar({
    value: 30,
  });
});
//Answer To The Question Number:17 start
$(function () {
  var progressbar = $("#progressbar-5");
  progressLabel = $(".progress-label");
  $("#progressbar-5").progressbar({
    value: false,
    change: function () {
      progressLabel.text(progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("Loading Completed!");
    },
  });
  function progress() {
    var val = progressbar.progressbar("value") || 0;
    progressbar.progressbar("value", val + 1);
    if (val < 99) {
      setTimeout(progress, 100);
    }
  }
  setTimeout(progress, 3000);
});
//Answer To The Question Number:18 start
$(function () {
  $("#slider-1").slider();
});
//Answer To The Question Number:19 start
$(function () {
  $("#slider-3").slider({
    range: true,
    min: 0,
    max: 500,
    values: [35, 200],
    slide: function (event, ui) {
      $("#price").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#price").val(
    "$" +
      $("#slider-3").slider("values", 0) +
      " - $" +
      $("#slider-3").slider("values", 1)
  );
});
//Answer To The Question Number:20 start
$(function () {
  $("#slider-6").slider({
    range: true,
    min: 0,
    max: 500,
    values: [35, 200],
    start: function (event, ui) {
      $("#startvalue").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
    stop: function (event, ui) {
      $("#stopvalue").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
    change: function (event, ui) {
      $("#changevalue").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
    slide: function (event, ui) {
      $("#slidevalue").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
});
//Answer To The Question Number:21 start
$(function () {
  $("#spinner-2").spinner({
    min: -10,
    max: 10,
  });
  $("#spinner-3").spinner({
    step: 100,
    min: -1000000,
    max: 1000000,
  });
});
//Answer To The Question Number:22 start
$(function () {
  $("#tabs-1").tabs();
});
//Answer To The Question Number:23 start
$(function () {
  $("#tabs-5").tabs({
    heightStyle: "fill",
    collapsible: true,
    hide: "slideUp",
  });
});
//Answer To The Question Number:24 start
$(function () {
  $("#tooltip-3").tooltip({
    content: "<strong>Hi!</strong>",
    track: true,
  }),
    $("#tooltip-4").tooltip({
      disabled: true,
    });
});
//Answer To The Question Number:25 start
$(function () {
  $(".tooltip-9").tooltip({
    items: "a.tooltip-9",
    content: "Hello welcome…",
    show: "slideDown", // show immediately
    open: function (event, ui) {
      ui.tooltip.hover(function () {
        $(this).fadeTo("slow", 0.5);
      });
    },
  });
});
$(function () {
  $(".tooltip-10").tooltip({
    items: "a.tooltip-10",
    content: "Welcome to TutorialsPoint…",
    show: "fold",
    close: function (event, ui) {
      ui.tooltip.hover(
        function () {
          $(this).stop(true).fadeTo(500, 1);
        },
        function () {
          $(this).fadeOut("500", function () {
            $(this).remove();
          });
        }
      );
    },
  });
});
//Answer To The Question Number:27 start
$(document).ready(function () {
  $("#box-1").click(function () {
    $("#box-1").effect(
      "shake",
      {
        times: 10,
        distance: 100,
      },
      3000,
      function () {
        $(this).css("background", "#cccccc");
      }
    );
  });
});
//Answer To The Question Number:28 start
$(document).ready(function () {
  $("#box-2").click(function () {
    $("#box-2").effect({
      effect: "explode",
      easing: "easeInExpo",
      pieces: 4,
      duration: 5000,
    });
  });
});
//Answer To The Question Number:29 start
$(function () {
  // run the currently selected effect
  function runEffect() {
    // run the effect
    $("#effect").show("shake", { times: 10, distance: 100 }, 1000, callback);
  }

  //callback function to bring a hidden box back
  function callback() {
    setTimeout(function () {
      $("#effect:visible").removeAttr("style").fadeOut();
    }, 1000);
  }
  $("#button").click(function () {
    runEffect();
    return false;
  });
  $("#effect").hide();
});
//Answer To The Question Number:30 start
$(function () {
  $("#btnSwitch").click(function () {
    $(".NormalClass").switchClass("NormalClass", "LargeClass", "fast");
    $(".LargeClass").switchClass("LargeClass", "NormalClass", "fast");
    return false;
  });
});
//Answer To The Question Number:31 start
function toggle() {
  $("#para").toggleClass("class1", 1000);
}
//Answer To The Question Number:32 start
$(function () {
  $.widget("iP.myButton", {
    _create: function () {
      this._button = $("<button>");
      this._button.text("My first Widget Button");
      this._button.width(this.options.width);
      this._button.css("background-color", this.options.color);
      this._button.css("position", "absolute");
      this._button.css("left", "100px");
      $(this.element).append(this._button);
    },
  });
  $("#button1").myButton();
});
//Answer To The Question Number:33 start
$(function () {
  $.widget("iP.myButton", {
    _create: function () {
      this._button = $("<button>");
      this._button.text("My first Widget Button");
      this._button.width(this.options.width);
      this._button.css("background-color", this.options.color);
      this._button.css("position", "absolute");
      this._button.css("left", "2px");
      $(this.element).append(this._button);
    },
    _setOption: function (key, value) {
      switch (key) {
        case "width":
          this._button.width(value);
          break;
        case "color":
          this._button.css("background-color", value);
          break;
      }
    },
  });
  $("#button2").myButton();
  $("#button2").myButton("option", { width: 275, color: "#cedc98" });
});

//Answer To The Question Number:34 start
$(function () {
  $("#accordion-35").accordion({
    collapsible: true,
  });
});
