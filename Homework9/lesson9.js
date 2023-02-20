// Practical task

//  task  1.
$("a[href^= 'https://']").attr("target", "_blank");

//  task  2.

$("h2.head").css("backgroundColor", "green");
$("h2.head").find(".inner").css("fontSize", "35px");

//  task  3.

$("h3").each(function () {
  nextDiv = $(this).next("div");
  nextDiv.append($(this));
});

//  task  4.
$(document).ready(function () {
  $("#check input[type='checkbox']").change(function () {
    let checked = $("#check input[type='checkbox']:checked").length;

    if (checked === 3) {
      $("#check input[type ='checkbox']")
        .attr("disabled", true)
        .find(":checked")
        .attr("disabled", false);
    } else {
      $("#check input[type = 'checkbox']").attr("disabled", false);
    }
  });
});
