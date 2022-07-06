function openNav() {
    document.getElementById("sidebar").style.width = "30%";
    document.getElementById("main").style.marginLeft = "30%";
    document.getElementById("main").style.width = "70%";
    //console.log(x);
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.width = "100%";
}

function fig2() {
    input = document.querySelector('input[name="choice"]:checked').value;

    if (input == "none") {
        document.getElementById("fig2image").src = "./resources/unbiased_rock.png";
    }

    if (input == "right") {
        document.getElementById("fig2image").src = "./resources/biased_rock.png";
    }
}

function flip(id, text_id, back){
  var flipcard = document.getElementById(id);
  var text = document.getElementById(text_id);
  var temp = document.getElementById('text-holder');

    flipcard.style.transitionDuration = "2s";

    temp.innerHTML = flipcard.innerHTML;
    flipcard.innerHTML = text.innerHTML;
    text.innerHTML = temp.innerHTML;

    if (back == 0) {
        flipcard.style.transform = "rotateY(360deg)";
        flipcard.style.backgroundColor = "lightslategrey";
        flipcard.style.fontFamily = "'Antic', sans-serif";
    }
    if (back == 1) {
        flipcard.style.transform = "rotateY(0)";
        flipcard.style.backgroundColor = "lightsteelblue";
        flipcard.style.fontFamily = "'Antic Slab', serif";
    }
}
