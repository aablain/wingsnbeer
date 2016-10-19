$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#user-name").val();
    var address = $("input#address").val();
    var wings = $("input:radio[name=wings]:checked").val();
    var flavor = $("#flavor").val();
    var beerAmount = $("input:radio[name=beer]:checked").val();
    var beerStyle = $("#beer-type").val();

    $(".user-name").text(nameInput);
    $(".address").text(address);
    $(".wings").text(wings);
    $(".flavor").text(flavor);
    $(".amountOfBeer").text(beerAmount);
    $(".styleOfBeer").text(beerStyle);

    $("#submitted").show();

    event.preventDefault();
  });
});
