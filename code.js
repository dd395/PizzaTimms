$(document).ready(function () {
    // event handlers
    $("#tabs a").click(showTab);

    $("#orderButton").click(placeOrder);


    // other functions
    function showTab(event) {
        event.preventDefault();
        $(this).tab("show");
    }

    function placeOrder(event) {
        event.preventDefault();

        //get data from form and put on screen


        var firstName = $("#fname").val();
        var lastName = $("#lname").val();
        var address = $("#address").val();
        var telephone = $("#telephone").val();


        var greeting = `Hello, ${firstName} thank you for your order! Enjoy!`;
        $("#output").text(greeting);

        var greetName = `${firstName} ${lastName}`;
        $("#greetNameOutput").text(greetName);


        var greetAddress = `${address} `;
        $("#greetAddressOutput").text(greetAddress);


        var greetTelephone = `${telephone}`
        $("#greetTelephoneOutput").text(greetTelephone);


        var value = $("input[name=size]:checked").val();
        $("#size").text(value);

        var crust = $("input[name=crust]:checked").val();
        $("#crustOutput").text(crust);


        var price = $('input[name="size"]:checked').data("price");
        $(`#priceSizeOutput`).text(price.toFixed(2));


        // find all the checkboxes


        var meatsNames = "";
        var veggiesNames = "";


        var checkedBoxes = $(`input[name=meats]:checked`);
        var veggiecheckedBoxes = $(`input[name=veggies]:checked`);


        //add up their data-price values for all checkedboxes;


        checkedBoxes.each(function () {
            meatsNames += $(this).val();
            meatsNames += "<br>";

        });

        veggiecheckedBoxes.each(function () {
            veggiesNames += $(this).val();
            veggiesNames += "<br>";

        });

        //add up their data-price values for all checkedboxes;

        var subtotal=0;

        var subtotal = $(`input[type=checkbox]:checked`);
        if (subtotal.length > 0) {
            var subtotalString = subtotal.length + "checkboxes checked<br/>";
            subtotal.each(function () {
                subtotalString += $(this).data("price");

            });


            //parse string to number

            var subtotalString = parseFloat(subtotalString);





            //var subOrderTotal = (subtotalString + price);
            var subOrderTotal = subtotalString + price;



            //tax rate 5.1%

            var tax = (subOrderTotal * 0.051);

            //delivery fee $2.00
            var delivery = 2;
            var totalAmountDue = (subOrderTotal + tax + delivery);


            //output to screen

            $("#subOrderTotalOutput").text(subOrderTotal.toFixed(2));
            $("#taxOutput").text(tax.toFixed(2));
            $("#deliveryOutput").text(delivery.toFixed(2));
            $("#totalAmountDueOutput").text(totalAmountDue.toFixed(2));
            //don't output the tags! Render them as breaks
            $("#meats").html(meatsNames);
            $("#veggies").html(veggiesNames);
        }
    }
});


