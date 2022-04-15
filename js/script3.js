// script here

// countdown
var countDownDate = 1650117600000; // SET YOUR TIME HERE

var x = setInterval(function () {
    var now = new Date().getTime();
	console.log(now)
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var newHTMLTitle = "<h3 class='takeoff-title'>TAKEOFF STARTS IN</h3>";
    var newHTMLDay = "<div class='takeoff-inner'><p><span class='takeoff-count'>" + addZero(days) + "</span><span class='takeoff-abbreviation'>D</span></p></div>";
    var newHTMLHours = "<div class='takeoff-inner'><p><span class='takeoff-count'>" + addZero(hours) + "</span><span class='takeoff-abbreviation'>H</span></p></div>";
    var newHTMLMinutes = "<div class='takeoff-inner'><p><span class='takeoff-count'>" + addZero(minutes) + "</span><span class='takeoff-abbreviation'>M</span></p></div>";
    var newHTMLSeconds = "<div class='takeoff-inner'><p><span class='takeoff-count'>" + addZero(seconds) + "</span><span class='takeoff-abbreviation'>S</span></p></div>";
    var styling = "<span class='os-lady-msg-decor' aria-hidden='true'></span>";
    document.getElementById("os-lady-msg").innerHTML = newHTMLTitle + "<div class='takeoff-ctr'>" + newHTMLDay + "<span class='takeoff-divider'>:</span>" + newHTMLHours + "<span class='takeoff-divider'>:</span>" + newHTMLMinutes + "<span class='takeoff-divider'>:</span>" + newHTMLSeconds + "</div>" + styling;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("os-lady-msg").innerHTML = "Ready for takeoff?";
    }
}, 1000);

function addZero(number) {
    var newNumber = number;
    if (number.toString().length == 1) newNumber = "0" + number.toString();
    return newNumber;
}

// deposit history
$(".dh-rank-value").each(function (index) {
    const amount = $(".dh-rank-value").length;
    $(this).text(index + 1);
});

// withdrawal anytime script
$("#slider").on("input", function () {
	const value = $("#slider").val();
	var trxspenddoc = document.getElementById('stake-input')

    if (value == 1) {
		
		$("#cooldown").text("");
		$("#daily-roi").text(80/10);
		$("#daily-increase").text(" 1 ");
		$("#total-roi").text(Math.floor(80/10*14));
		$("#invest-days").text(" 14 ");
		$("#total-amount").text(Math.round(trxspenddoc.value*80/10*14) / 100);
        $("#withdrawal-value").text("Anytime for 14 days.");
    }
	else if (value == 2) {
		$("#cooldown").text("");
		$("#daily-roi").text(60/10);
		$("#daily-increase").text("1");
		$("#total-roi").text(Math.floor(60/10*21));
		$("#invest-days").text("21");
		$("#total-amount").text(Math.round(trxspenddoc.value*60/10*21 * 100) / 10000);
        $("#withdrawal-value").text("Anytime for 21 days.");
    }
	else if (value == 3) {
		$("#cooldown").text("");
		$("#daily-roi").text(54/10);
		$("#daily-increase").text("1");
		$("#total-roi").text(Math.floor(54/10*28));
		$("#invest-days").text("28");
		$("#total-amount").text(Math.round(trxspenddoc.value*54/10*28 * 100) / 10000);
        $("#withdrawal-value").text("Anytime for 28 days.");
    }
	else if (value == 4){
		$("#cooldown").text("A cooldowntimer will appear in your account history.");
	 	$("#daily-roi").text(86/10);
		$("#daily-increase").text("1");
		$("#total-roi").text(Math.floor(86/10*14));
		$("#invest-days").text("14");
		$("#total-amount").text(Math.round(trxspenddoc.value*86/10*14 * 100) / 10000);
		$("#withdrawal-value").text("Every 6 Hours for 14 days.");
	}
	else if (value == 5){
		$("#cooldown").text("A cooldowntimer will appear in your account history.");
		$("#daily-roi").text(76/10);
		$("#daily-increase").text("1");
		$("#total-roi").text(Math.floor(76/10*21));
		$("#invest-days").text("21");
		$("#total-amount").text(Math.round(trxspenddoc.value*76/10*21 * 100) / 10000);
		$("#withdrawal-value").text("Every 12 Hours for 21 days.");
	}
   	else if (value == 6){
		$("#cooldown").text("A cooldowntimer will appear in your account history.");
		$("#daily-roi").text(75/10);
		$("#daily-increase").text("1");
		$("#total-roi").text(Math.floor(75/10*28));
		$("#invest-days").text("28");
		$("#total-amount").text(Math.round(trxspenddoc.value*75/10*28 * 100) / 10000);
		$("#withdrawal-value").text("Every 24 Hours for 28 days.");
	}
	else if (value == 7){
		$("#cooldown").text("A cooldowntimer will appear in your account history.");
		$("#daily-roi").text(96/10);
		$("#daily-increase").text("1");
		$("#total-roi").text(Math.floor(96/10*28));
		$("#invest-days").text("28");
		$("#total-amount").text(Math.round(trxspenddoc.value*96/10*28 * 100) / 10000);
		$("#withdrawal-value").text("Every 96 Hours for 28 days. ");
	}
	else if (value == 8){
		$("#cooldown").text("A cooldowntimer will appear in your account history.");
		$("#daily-roi").text(130/10);
		$("#daily-increase").text("1");
		$("#total-roi").text(Math.floor(130/10*28));
		$("#invest-days").text("28");
		$("#total-amount").text(Math.round(trxspenddoc.value*130/10*28 * 100) / 10000);
		$("#withdrawal-value").text("Every Week / Every 168 Hours for 28 days");
	}
	/*
	if(contract){
		web3.eth.getAccounts().then(res=>{
			currentAddr = res[0]
		})

		 const value = $("#slider").val();
		var trxspenddoc = document.getElementById('stake-input')
		
		contract.methods.getPercent(value-1).call().then(res=>{ 
			$("#totalinvestment").html(`${res}`);


    if (value == 1) {
		
		$("#cooldown").text("");
		$("#daily-roi").text(res/10);
		$("#daily-increase").text(" 1 ");
		$("#total-roi").text(Math.floor(res/10*14));
		$("#invest-days").text(" 14 ");
		$("#total-amount").text(Math.round(trxspenddoc.value*res/10*14) / 100);
        $("#withdrawal-value").text("Anytime for 14 days.");
    }
	else if (value == 2) {
		$("#cooldown").text("");
		$("#daily-roi").text(res/10);
		$("#daily-increase").text("1");
		$("#total-roi").text(Math.floor(res/10*21));
		$("#invest-days").text("21");
		$("#total-amount").text(Math.round(trxspenddoc.value*res/10*21 * 100) / 10000);
        $("#withdrawal-value").text("Anytime for 21 days.");
    }
	else if (value == 3) {
		$("#cooldown").text("");
		$("#daily-roi").text(res/10);
		$("#daily-increase").text("1");
		$("#total-roi").text(Math.floor(res/10*28));
		$("#invest-days").text("28");
		$("#total-amount").text(Math.round(trxspenddoc.value*res/10*28 * 100) / 10000);
        $("#withdrawal-value").text("Anytime for 28 days.");
    }
	else if (value == 4){
		$("#cooldown").text("A cooldowntimer will appear in your account history.");
	 	$("#daily-roi").text(res/10);
		$("#daily-increase").text("1");
		$("#total-roi").text(Math.floor(res/10*14));
		$("#invest-days").text("14");
		$("#total-amount").text(Math.round(trxspenddoc.value*res/10*14 * 100) / 10000);
		$("#withdrawal-value").text("Every 6 Hours for 14 days.");
	}
	else if (value == 5){
		$("#cooldown").text("A cooldowntimer will appear in your account history.");
		$("#daily-roi").text(res/10);
		$("#daily-increase").text("1");
		$("#total-roi").text(Math.floor(res/10*21));
		$("#invest-days").text("21");
		$("#total-amount").text(Math.round(trxspenddoc.value*res/10*21 * 100) / 10000);
		$("#withdrawal-value").text("Every 12 Hours for 21 days.");
	}
   	else if (value == 6){
		$("#cooldown").text("A cooldowntimer will appear in your account history.");
		$("#daily-roi").text(res/10);
		$("#daily-increase").text("1");
		$("#total-roi").text(Math.floor(res/10*28));
		$("#invest-days").text("28");
		$("#total-amount").text(Math.round(trxspenddoc.value*res/10*28 * 100) / 10000);
		$("#withdrawal-value").text("Every 24 Hours for 28 days.");
	}
	else if (value == 7){
		$("#cooldown").text("A cooldowntimer will appear in your account history.");
		$("#daily-roi").text(res/10);
		$("#daily-increase").text("1");
		$("#total-roi").text(Math.floor(res/10*28));
		$("#invest-days").text("28");
		$("#total-amount").text(Math.round(trxspenddoc.value*res/10*28 * 100) / 10000);
		$("#withdrawal-value").text("Every 96 Hours for 28 days. ");
	}
	else if (value == 8){
		$("#cooldown").text("A cooldowntimer will appear in your account history.");
		$("#daily-roi").text(res/10);
		$("#daily-increase").text("1");
		$("#total-roi").text(Math.floor(res/10*28));
		$("#invest-days").text("28");
		$("#total-amount").text(Math.round(trxspenddoc.value*res/10*28 * 100) / 10000);
		$("#withdrawal-value").text("Every Week / Every 168 Hours for 28 days");
	}
		})
		}
		*/
});


//stake max
$("#stake-max").on("click", function () {
    $("#stake-input").val($("#stake-input").attr("max"));
});

// copy referral
$("#copy-referral-link").on("click", function () {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#referral-link").val()).select();
    document.execCommand("copy");
    $temp.remove();
});

$(window).on('load', function() {
	$('#ex1').height($(window).outerHeight(true));
	$('#ex2').height($(window).outerHeight(true));
	$('#ex3').height($(window).outerHeight(true));
	if(document.cookie != "modal")
	{
		
			$('#ex3').modal('show');
		document.cookie = "modal";
	}

});
	
