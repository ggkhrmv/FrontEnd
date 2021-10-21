$(document).ready(function () {

    function notification() {

        var x = document.getElementById("snackbar");

        x.className = "show";

        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 2000);
    }

    for (var i = 1; i < 6; i++) {
        for (var n = 1; n < 15; n++) {
            $("#content").append("<p></p>");
            $("#content p:last-of-type").css("grid-row-start", n)
                .css("grid-column-start", i);
        }
    }


    $("#containerBoxes div").click(function () {
        let courseLength = $(this).css("grid-row-end") - $(this).css("grid-row-start");
        let course = $(this).text();
        $(this).css("background-color", "#04E762")
            .css("color", "black");
        $("#content").css("border-style", "solid")
            .css("border-width", "2px")
            .css("border-color", "#04E762")
            .css("background-color", "#04E762");
        $("#content p").css("opacity", "0.9")
            .css("border-color", "rgba(4, 231, 98, 0.3)");
        $(this).siblings().css("visibility", "hidden");
        let obj = $("#snackbar").text("You've selected the course. \n" +
            "Please select the day and time in the schedule. \n" +
            "To select another course please click on highlighted course.");
        obj.html(obj.html().replace(/\n/g, '<br/>'));
        notification();

        $("#content p").click(function () {
            let rowPos = $(this).css("grid-row-start");
            let colPos = $(this).css("grid-column-start");

            switch (courseLength) {
                case 1:
                    switch ($(this).attr("class")) {
                        case "2":
                            $(this).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 1) + ";'></p>");
                            $(this).after("<p class='1' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; background-color: #BA274A;'>" + course + "</p>");
                            $(this).remove();
                            $("#snackbar").text("Course has been added to schedule!");
                            notification();
                            break;
                        case "3":
                            $(this).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 2) + ";'></p>");
                            $(this).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 1) + ";'></p>");
                            $(this).after("<p class='1' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; background-color: #BA274A;'>" + course + "</p>");
                            $(this).remove();
                            let obj2 = $("#snackbar").text("Course has been added to schedule! \n" +
                                "Click on the scheduled course again to delete it.");
                            obj2.html(obj2.html().replace(/\n/g, '<br/>'));
                            notification();
                            break;
                        default:
                            $(this).after("<p class='1' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; background-color: #BA274A;'>" + course + "</p>");
                            $(this).remove();
                            let obj3 = $("#snackbar").text("Course has been added to schedule! \n" +
                                "Click on the scheduled course again to delete it.");
                            obj3.html(obj3.html().replace(/\n/g, '<br/>'));
                            notification();
                            break;
                    }
                case 2:
                    switch ($(this).attr("class")) {
                        case "2":
                            let lengthc22 = Number(rowPos) + courseLength;
                            $(this).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 1) + ";'></p>");
                            $(this).before("<p class='2' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; grid-row-end:" + lengthc22 + "; background-color: #BA274A;'>" + course + "</p>");
                            $(this.nextSibling).remove();
                            $(this).remove();
                            $("#snackbar").text("Course has been added to schedule!");
                            notification();
                            break;
                        case "3":
                            let length2 = Number(rowPos) + courseLength;
                            $(this).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 2) + ";'></p>");
                            $(this).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 1) + ";'></p>");
                            $(this).before("<p class='2' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; grid-row-end:" + length2 + "; background-color: #BA274A;'>" + course + "</p>");
                            $(this.nextSibling).remove();
                            $(this).remove();
                            $("#snackbar").text("Course has been added to schedule!");
                            notification();
                            break;
                        default:
                            if
                            ($(this.nextSibling).css("grid-column-start") == $(this).css("grid-column-start")) {
                                let length2 = Number(rowPos) + courseLength;
                                if ($(this.nextSibling).attr("class") == "2") {
                                    $(this).before("<p class='2' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; grid-row-end:" + length2 + "; background-color: #BA274A;'>" + course + "</p>");
                                    $(this.nextSibling).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 2) + ";'></p>");
                                    $(this.nextSibling).remove();
                                    $(this).remove();
                                } else if ($(this.nextSibling).attr("class") == "3") {
                                    $(this).before("<p class='2' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; grid-row-end:" + length2 + "; background-color: #BA274A;'>" + course + "</p>");
                                    $(this.nextSibling).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 2) + ";'></p>");
                                    $(this.nextSibling).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 3) + ";'></p>");
                                    $(this.nextSibling).remove();
                                    $(this).remove();
                                } else {
                                    $(this).before("<p class='2' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; grid-row-end:" + length2 + "; background-color: #BA274A;'>" + course + "</p>");
                                    $(this.nextSibling).remove();
                                    $(this).remove();
                                }
                                $("#snackbar").text("Course has been added to schedule!");
                                notification();
                                break;
                            } else {
                                $("#snackbar").text("Not enough time! Choose another time period!");
                                notification();
                                break;
                            }
                    }
                    break;
                case 3:
                    switch ($(this).attr("class")) {
                        case "2":
                            if
                            ($(this.nextSibling.nextSibling).css("grid-column-start") == $(this).css("grid-column-start")) {
                                let length3 = Number(rowPos) + courseLength;
                                $(this).before("<p class='3' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; grid-row-end:" + length3 + "; background-color: #BA274A;'>" + course + "</p>");
                                $(this).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 3) + ";'></p>");
                                (this.nextSibling.nextSibling).remove();
                                $(this.nextSibling).remove();
                                $(this).remove();
                                $("#snackbar").text("Course has been added to schedule!");
                                notification();
                                break;
                            } else {
                                $("#snackbar").text("Not enough time! Choose another time period!");
                                notification();
                                break;
                            }
                        case "3":
                            let lengthc33 = Number(rowPos) + courseLength;
                            $(this).before("<p class='3' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; grid-row-end:" + lengthc33 + "; background-color: #BA274A;'>" + course + "</p>");
                            $(this).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 4) + ";'></p>");
                            $(this).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 3) + ";'></p>");
                            (this.nextSibling.nextSibling).remove();
                            $(this.nextSibling).remove();
                            $(this).remove();
                            $("#snackbar").text("Course has been added to schedule!");
                            notification();
                            break;
                        default:
                            if
                            ($(this.nextSibling.nextSibling).css("grid-column-start") == $(this).css("grid-column-start")) {
                                if ($(this.nextSibling).attr("class") == "2") {
                                    let length3 = Number(rowPos) + courseLength;
                                    $(this).before("<p class='3' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; grid-row-end:" + length3 + "; background-color: #BA274A;'>" + course + "</p>");
                                    $(this.nextSibling.nextSibling).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 3) + ";'></p>");
                                    $(this.nextSibling.nextSibling).remove();
                                    $(this.nextSibling).remove();
                                    $(this).remove();
                                } else if ($(this.nextSibling).attr("class") == "3") {
                                    let length3 = Number(rowPos) + courseLength;
                                    $(this).before("<p class='3' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; grid-row-end:" + length3 + "; background-color: #BA274A;'>" + course + "</p>");
                                    $(this.nextSibling.nextSibling).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 4) + ";'></p>");
                                    $(this.nextSibling.nextSibling).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 3) + ";'></p>");
                                    $(this.nextSibling.nextSibling).remove();
                                    $(this.nextSibling).remove();
                                    $(this).remove();
                                } else if ($(this.nextSibling.nextSibling).attr("class") == "2") {
                                    let length3 = Number(rowPos) + courseLength;
                                    $(this).before("<p class='3' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; grid-row-end:" + length3 + "; background-color: #BA274A;'>" + course + "</p>");
                                    $(this.nextSibling.nextSibling).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 3) + ";'></p>");
                                    $(this.nextSibling.nextSibling).remove();
                                    $(this.nextSibling).remove();
                                    $(this).remove();
                                } else if ($(this.nextSibling.nextSibling).attr("class") == "3") {
                                    let length3 = Number(rowPos) + courseLength;
                                    $(this).before("<p class='3' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; grid-row-end:" + length3 + "; background-color: #BA274A;'>" + course + "</p>");
                                    $(this.nextSibling.nextSibling).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 4) + ";'></p>");
                                    $(this.nextSibling.nextSibling).after("<p style='grid-column-start:" + colPos + "; grid-row-start:" + (Number(rowPos) + 3) + ";'></p>");
                                    $(this.nextSibling.nextSibling).remove();
                                    $(this.nextSibling).remove();
                                    $(this).remove();
                                } else {
                                    let length3 = Number(rowPos) + courseLength;
                                    $(this).before("<p class='3' style='grid-column-start:" + colPos + "; grid-row-start:" + rowPos + "; grid-row-end:" + length3 + "; background-color: #BA274A;'>" + course + "</p>");
                                    $(this.nextSibling.nextSibling).remove();
                                    $(this.nextSibling).remove();
                                    $(this).remove();
                                }
                                $("#snackbar").text("Course has been added to schedule!");
                                notification();
                                break;
                            } else {
                                $("#snackbar").text("Not enough time! Choose another time period!");
                                notification();
                                break;
                            }
                    }
                    break;
            }

            $("#containerBoxes div").css("background-color", "#BA274A")
                .css("color", "white");
            $("#content").css("border-style", "none")
                .css("border-width", "2px")
                .css("border-color", "#04E762")
                .css("background-color", "#04E762");
            $("#content p").css("opacity", "1")
                .css("border-color", "#121212");
            $("#containerBoxes div").siblings().css("visibility", "visible");
            courseLength = 0;
            course = " ";

        });


    });

});
