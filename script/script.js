$(document).ready(function () {

  // === COUNTER ===
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

  // === DARK / LIGHT MODE ===
  const themeToggle = $('#themeToggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    $('body').addClass('dark-mode').removeClass('light-mode');
    themeToggle.text('☀️ Light Mode');
  } else {
    $('body').addClass('light-mode').removeClass('dark-mode');
    themeToggle.text('🌙 Dark Mode');
  }

  themeToggle.click(function () {
    $('body').toggleClass('dark-mode light-mode');
    if ($('body').hasClass('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.text('☀️ Light Mode');
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.text('🌙 Dark Mode');
    }
  });

  // === CONTACT FORM VALIDATION ===
  $("#contactForm").submit(function (e) {
    e.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();
    let valid = true;

    // Name validation
    if (name.length < 3 || /[^a-zA-ZА-Яа-яЁё]/.test(name)) {
      $("#name").addClass("is-invalid");
      valid = false;
    } else {
      $("#name").removeClass("is-invalid");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      $("#email").addClass("is-invalid");
      valid = false;
    } else {
      $("#email").removeClass("is-invalid");
    }

    // Message validation
    if (message.length < 10) {
      $("#message").addClass("is-invalid");
      valid = false;
    } else {
      $("#message").removeClass("is-invalid");
    }

    if (valid) {
      alert("Form submitted successfully!");
      this.reset();
    }
  });

  // === BID MODAL EXAMPLE ===
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

});
// === TOGGLE FAVORITE ITEM USING LOCAL STORAGE ===
document.addEventListener('DOMContentLoaded', function() {
  const favoriteBtn = document.getElementById('toggle-favorite');
  const favoriteStatus = document.getElementById('favorite-status');
  const itemTitle = document.getElementById('item-title')?.innerText;
  const itemPrice = document.getElementById('item-price')?.innerText;

  if (!favoriteBtn) return;

  const savedItem = localStorage.getItem('favoriteItem');
  const isFavorited = savedItem && JSON.parse(savedItem).title === itemTitle;

  
  if (isFavorited) {
    favoriteBtn.textContent = '❌ Remove from Favorites';
    favoriteStatus.innerHTML = `<p class="text-success"><strong>${itemTitle}</strong> is in your favorites ❤️</p>`;
  }

  
  favoriteBtn.addEventListener('click', () => {
    const current = localStorage.getItem('favoriteItem');

    if (current && JSON.parse(current).title === itemTitle) {
      localStorage.removeItem('favoriteItem');
      favoriteBtn.textContent = '⭐ Add to Favorites';
      favoriteStatus.innerHTML = `<p class="text-muted">Removed from favorites.</p>`;
    } else {
     
      const item = { title: itemTitle, price: itemPrice };
      localStorage.setItem('favoriteItem', JSON.stringify(item));
      favoriteBtn.textContent = '❌ Remove from Favorites';
      favoriteStatus.innerHTML = `<p class="text-success"><strong>${itemTitle}</strong> added to favorites ❤️</p>`;
    }
  });
});
