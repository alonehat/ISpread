 $(".spread_container").find(".ispread_main").hover(function () {
            var objs = $(this).parent().find(".ispread");
            for (var i = 0, p = objs.length; i < p; i++) {
                var percent = [(100 / (p + 1)) * (i + 1), "%"].join("");
                objs.eq(i).stop().animate({ marginLeft: percent }, 800);
            }
        }, function () {
            if (!$(this).hasClass("gotya")) {
                var objs = $(this).parent().find(".ispread");
                for (var i = 0, p = objs.length; i < p; i++) {
                    objs.eq(i).stop().animate({ marginLeft: "0%" }, 800);
                }
            }
        });

        $(".spread_container").find(".ispread_main").on("click", function () {
            if ($(this).hasClass("gotya")) {
                $(this).removeClass("gotya");
            } else {
                $(this).addClass("gotya");
            }
        });
