function clear() {
    document.getElementById("form").reset();
}

function show() {
    var suggest = document.getElementById("feedback").value;
    var fname = document.getElementById("name").value;
    var lname = document.getElementById("last").value;
    var mname = document.getElementById("middle").value;
    var gen1 = document.getElementById("ml");
    var gen2 = document.getElementById("fl");

    if (suggest == "" || fname == "")
        alert("Please Fill all the details");
    else {
        var para = document.createElement("h2");
        para.innerHTML = suggest;
        var user = document.createElement("h3");
        if (gen1.checked == true) {
            if (mname == "" || lname == "")
                user.innerHTML = 'Mr.' + fname + ' ' + lname + ' says';
            else
                user.innerHTML = 'Mr.' + fname + ' ' + mname + ' ' + lname + ' says';

        } else {
            if (mname == "")
                user.innerHTML = 'Miss. ' + fname + ' ' + lname + ' says';
            else
                user.innerHTML = 'Miss. ' + fname + ' ' + mname + ' says';

        }
        para.style.textAlign = "center";
        user.style.textAlign = "center";

        document.getElementById("display").appendChild(user);
        document.getElementById("display").appendChild(para);
        user.style.padding = "010px 10px 30px 10px";
        clear();
    }
}