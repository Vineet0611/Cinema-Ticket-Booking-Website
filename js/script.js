let CheckValue = 0;
let CheckStatus;
let amt = 0;
let id;

var theatre_name = localStorage.getItem('lcl_movie_name');
var show_time = localStorage.getItem('lcl_show_time');
var today = localStorage.getItem('lcl_today');
var mm = Number(localStorage.getItem('lcl_mm'));
var dd = Number(localStorage.getItem('lcl_dd'));
var yyyy = Number(localStorage.getItem('lcl_yyyy'));
var status1 = localStorage.getItem('lcl_status');

window.onload = function () {
    document.getElementById("show-time").innerHTML = show_time
    if (status1 == "today") {
        document.getElementById("theatre-Name").innerHTML = theatre_name + ` | Today, ${today}`;
    }else if (status1 == "tomorrow") {
        document.getElementById("theatre-Name").innerHTML = theatre_name + ` | Tomorrow, ${dd+1}-${mm}-${yyyy}`;
    }else if (status1 == "next") {
        document.getElementById("theatre-Name").innerHTML = theatre_name + ` | ${dd+2}-${mm}-${yyyy}`;
    }
    else{
        document.getElementById("theatre-Name").innerHTML = theatre_name + ` | Today, ${today} ok`;
    }


};

function retrieve_id(ele) {
    id = ele.id;
    CheckStatus = document.getElementById(id);
    numb_of_ticket();
};
function numb_of_ticket() {
    if (CheckStatus.checked) {
        CheckValue += 1;
        document.getElementById("selected-tickets").innerHTML = CheckValue;
        pay_inc();
    } else {
        CheckValue -= 1;
        document.getElementById("selected-tickets").innerHTML = CheckValue;
        pay_dec();
    }
};

function pay_inc() {
    var amt_str = document.getElementById(id).value;
    amt += parseInt(amt_str)
    document.getElementById("total-pay").innerHTML = amt;
};

function pay_dec() {
    var amt_str = document.getElementById(id).value;
    amt -= parseInt(amt_str)
    document.getElementById("total-pay").innerHTML = amt;
};


