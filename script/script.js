// Counter Animation
$(".counter").each(function () {
  let $this = $(this);
  let target = +$this.attr("data-target");
  $({ countNum: 0 }).animate(
    { countNum: target },
    {
      duration: 2000,
      easing: "swing",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      },
    }
  );
});

// Contact Form
$("#contactForm").submit(function (e) {
  e.preventDefault();
  $("#successMsg").slideDown().delay(2000).slideUp();
  this.reset();
});

// Bid Modal Action
$("#submitBid").click(function () {
  let bid = $("#bidAmount").val();
  if (bid) {
    alert("Bid placed: $" + bid);
    $("#bidModal").modal("hide");
    $("#bidAmount").val("");
  } else {
    alert("Enter a valid amount");
  }
});
