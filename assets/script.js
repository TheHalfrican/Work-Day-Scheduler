// const saveButtonEl = document.querySelectorAll(".saveBtn");
// const editBoxEl = document.querySelectorAll("#editBox")


const t = moment().format("H")
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


const noteTextArea1 = document.getElementById("editBox1");
const saveBtn1 = document.getElementById("saveBtn1")

saveBtn1.onclick = function () {
const key = "note1"
const value = noteTextArea1.value
console.log(value)
if (value) {
    localStorage.setItem(key, value);
    location.reload ();
}
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    noteTextArea1.innerHTML += `${value}`
    
};



const noteTextArea2 = document.getElementById("editBox2");
const saveBtn2 = document.getElementById("saveBtn2")

saveBtn2.onclick = function () {
const key = "note2"
const value = noteTextArea2.value
console.log(value)
if (value) {
    localStorage.setItem(key, value);
    location.reload ();
}
};

for (let f = 0; f < localStorage.length; f++) {
    const key = localStorage.key(f);
    const value = localStorage.getItem(key);
    noteTextArea2.innerHTML += `${value}`
};


const noteTextArea3 = document.getElementById("editBox3");
const saveBtn3 = document.getElementById("saveBtn3")

saveBtn3.onclick = function () {
const key = "note3"
const value = noteTextArea3.value
console.log(value)
if (value) {
    localStorage.setItem(key, value);
    location.reload ();
}
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    noteTextArea3.innerHTML += `${value}`
};

const noteTextArea4 = document.getElementById("editBox4");
const saveBtn4 = document.getElementById("saveBtn4")

saveBtn4.onclick = function () {
const key = "note4"
const value = noteTextArea4.value
console.log(value)
if (value) {
    localStorage.setItem(key, value);
    location.reload ();
}
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    noteTextArea4.innerHTML += `${value}`
};

const noteTextArea5 = document.getElementById("editBox5");
const saveBtn5 = document.getElementById("saveBtn5")

saveBtn5.onclick = function () {
const key = "note5"
const value = noteTextArea5.value
console.log(value)
if (value) {
    localStorage.setItem(key, value);
    location.reload ();
}
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    noteTextArea5.innerHTML += `${value}`
};

const noteTextArea6 = document.getElementById("editBox6");
const saveBtn6 = document.getElementById("saveBtn6")

saveBtn6.onclick = function () {
const key = "note6"
const value = noteTextArea6.value
console.log(value)
if (value) {
    localStorage.setItem(key, value);
    location.reload ();
}
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    noteTextArea6.innerHTML += `${value}`
};

const noteTextArea7 = document.getElementById("editBox7");
const saveBtn7 = document.getElementById("saveBtn7")

// saveBtn7.onclick = function () {
// const key = "note7"
// const value = noteTextArea7.value
// console.log(value)
// if (value) {
//     localStorage.setItem(key, value);
//     location.reload ();
// }
// };

// for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//     noteTextArea7.innerHTML += `${value}`
// };


const noteTextArea8 = document.getElementById("editBox8");
const saveBtn8 = document.getElementById("saveBtn8")

saveBtn8.onclick = function () {
const key = "note8"
const value = noteTextArea8.value
console.log(value)
if (value) {
    localStorage.setItem(key, value);
    location.reload ();
}
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    noteTextArea8.innerHTML += `${value}`
};

const noteTextArea9 = document.getElementById("editBox9");
const saveBtn9 = document.getElementById("saveBtn9")

saveBtn9.onclick = function () {
const key = "note9"
const value = noteTextArea9.value
console.log(value)
if (value) {
    localStorage.setItem(key, value);
    location.reload ();
}
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    noteTextArea9.innerHTML += `${value}`
};

