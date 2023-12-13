var account = document.getElementById("account");
        var accountinfo = document.getElementById("accountinfo");
        var menuicon = document.getElementById("menuicon");
        var sidebar = document.getElementById("sidebar");
        var closeicon = document.getElementById("close");
        var hour = document.getElementById("hour");
        var minute = document.getElementById("minute");
        var seconds = document.getElementById("seconds");


        setInterval(function () {
            var time = new Date();
            hour.innerHTML = time.getHours()
            minute.innerHTML = time.getMinutes()
            seconds.innerHTML = time.getSeconds()
        }, 1000);
        closeicon.style.display = "none"
        sidebar.style.display = "none";


        var x = 0;
        menuicon.addEventListener("click", function () {
            x++;
            if (x == 1) {
                sidebar.style.display = "block";
                setTimeout(function () {
                    closeicon.style.display = "block"
                }, 50)
                x++;

                if (x == 2) {
                    closeicon.addEventListener("click", function () {
                        sidebar.style.display = "none"
                        x = 0;
                    })
                }

            }
        })


        account.addEventListener("mouseover", function () {
            accountinfo.style.display = "inline"
        })

        accountinfo.addEventListener("mouseleave", function () {
            accountinfo.style.display = "none"
        })

