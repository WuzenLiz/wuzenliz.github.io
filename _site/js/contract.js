$(function () {
  $.getJSON("./data/contact.json", function (data) {
    $.each(data, function (index, value) {
      $("#contactCon").append(
        '<li><a href="' +
          value.link +
          '"><i id="contactIco" class="' +
          value.icon +
          '"></i><span>' +
          value.name +
          "</span></a></li>"
      );
    });
  }).fail(function () {
    console.log(" Not get anything");
  });
});
