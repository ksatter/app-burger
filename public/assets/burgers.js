$(document).ready(function () {

  $("a").click(function () {
    let id = $(this).data("id");
    console.log("click");
    $.ajax({
      url: `/api/burgers/${id}`,
      type: "PUT"
    })
    location.reload();
  })
  $("button").click(function () {
    event.preventDefault();
    let burgerData = {name: $("#new_burger").val().trim()}
  
    $.ajax({
      url: "/api/burgers",
      type: "POST",
      data: burgerData
    })
  })
})
