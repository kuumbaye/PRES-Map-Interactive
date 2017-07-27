var imageOrig = document.getElementById("imageOrig");
var userName = document.getElementById("userName");
var userInfoState = 0;

function openOrig() {
    imageOrig.style.content = "url('Resources/PRESOffice_Original.jpg')";
    state = "Orig";
    userInfoState = 0;
    document.getElementById("userInfoContainer").style.display = "none";
}

function openMobile() {
    imageOrig.style.content = "url('Resources/PRESOffice_Mobile.jpg')";
    state = "Mobile";
}

function openPrinters() {
    imageOrig.style.content = "url('Resources/PRESOffice_Printers.jpg')";
    state = "Printers";
}

function openiPad() {
    imageOrig.style.content = "url('Resources/PRESOffice_iPads.jpg')";
    state = "iPad";
}

function openPhone() {
    imageOrig.style.content = "url('Resources/PRESOffice_Phones.jpg')";
    state = "Phone";
}

function openHotSpot() {
    imageOrig.style.content = "url('Resources/PRESOffice_Hotspots.jpg')";
    state = "HotSpot";
}

function openNetworked() {
    imageOrig.style.content = "url('Resources/PRESOffice_NetworkedPrinters.jpg')";
    state = "Networked";
}

function openPersonal() {
    imageOrig.style.content = "url('Resources/PRESOffice_PersonalPrinters.jpg')";
    state = "Personal";
}

function openAll() {
    imageOrig.style.content = "url('Resources/PRESOffice_All.jpg')";
    state = "All";
}


function toggleUserInfo(e) {

    if (userInfoState == 0) {
        document.getElementById("userInfoContainer").style.display = "initial";
        userInfoState = 1;
        prevTarget = e.target.id;
    } else if (userInfoState == 1 && prevTarget == e.target.id) {
        document.getElementById("userInfoContainer").style.display = "none";
        userInfoState = 0;
        prevTarget = e.target.id;
    } else {
        document.getElementById("userInfoContainer").style.display = "initial";
        prevTarget = e.target.id;
        // Change the info in the container here
    }
}