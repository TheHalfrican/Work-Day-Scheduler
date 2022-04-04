var saveButtonEl = document.querySelectorAll(".saveBtn");
var editBoxEl = document.querySelectorAll("#editBox")

// var currentHour = moment().format("H")

var t = moment().format("H")
if (t < 9) {
    document.getElementById("9").style.color="green";
} else if (t == 9) {
    document.getElementById("9").style.color="red";
} else if (t > 9) {
    document.getElementById("9").style.color="grey";
}

if (t < 10) {
    document.getElementById("10").style.color="green";
} else if (t == 10) {
    document.getElementById("10").style.color="red";
} else if (t > 10) {
    document.getElementById("10").style.color="grey";
}

if (t < 11) {
    document.getElementById("11").style.color="green";
} else if (t == 11) {
    document.getElementById("11").style.color="red";
} else if (t > 11) {
    document.getElementById("11").style.color="grey";
}

if (t < 12) {
    document.getElementById("12").style.color="green";
} else if (t == 12) {
    document.getElementById("12").style.color="red";
} else if (t > 12) {
    document.getElementById("12").style.color="grey";
}

if (t < 13) {
    document.getElementById("1").style.color="green";
} else if (t == 13) {
    document.getElementById("1").style.color="red";
} else if (t > 13) {
    document.getElementById("1").style.color="grey";
}

if (t < 14) {
    document.getElementById("2").style.color="green";
} else if (t == 14) {
    document.getElementById("2").style.color="red";
} else if (t > 14) {
    document.getElementById("2").style.color="grey";
}

if (t < 15) {
    document.getElementById("3").style.color="green";
} else if (t == 15) {
    document.getElementById("3").style.color="red";
} else if (t > 15) {
    document.getElementById("3").style.color="grey";
}

if (t < 16) {
    document.getElementById("4").style.color="green";
} else if (t == 16) {
    document.getElementById("4").style.color="red";
} else if (t > 16) {
    document.getElementById("4").style.color="grey";
}

if (t < 17) {
    document.getElementById("5").style.color="green";
} else if (t == 17) {
    document.getElementById("5").style.color="red";
} else if (t > 17) {
    document.getElementById("5").style.color="grey";
}

addEventListener("click", function(event) {
    event.preventDefault();

    let value = document.getElementById("editBox").value;
    // localStorage.setItem(element.id);
    textarea.value = localStorage.getItem(element.id)
    savedInput = localStorage.getItem("textAreaValue", value);

   
});

function renderLastRegistered() {
 savedInput = localStorage.getItem("textAreaValue", value);
};




