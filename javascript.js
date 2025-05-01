//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }

    // Add to cart functionality
    $(".btn.btn-primary").click(function (e) {
        e.preventDefault();

        // Get the product card element
        var card = $(this).closest(".product-card");

        // Extract product details
        var name = card.find(".card-title").text().trim();
        var priceText = card.find(".fw-bold").text().trim(); // e.g. "Rp. 15.000"
        var price = parseInt(priceText.replace(/[^0-9]/g, ""), 10); // Extract number only

        if (isNaN(price)) {
            alert("Harga produk tidak valid.");
            return;
        }

        // Get cart from localStorage or initialize
        var cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if product already in cart
        var existingProduct = cart.find(function (item) {
            return item.name === name;
        });

        if (existingProduct) {
            // Increase quantity
            existingProduct.quantity += 1;
        } else {
            // Add new product
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        // Save cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(name + " berhasil ditambahkan ke keranjang.");
    });
});

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});
