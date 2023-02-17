// Practical task

//  task  1.
$("a[href^= 'https://']").attr("target", "_blank");

//  task  2.

$("h2.head").css("color", "green");
$("h2.head").find(".inner").css("fontSize", "35px");

// 3. Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так,
//щоб він став безпосередньо над <h3>.
//    <h3>header1</h3>
//    <div>text1</div>
//    <h3>header2</h3>
//    <div>text2</div>

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
