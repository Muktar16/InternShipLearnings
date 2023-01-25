function removeAll(){
    let mainDiv = document.getElementById("mainContainer")

    for(let i = 1; i < 4; i++){
        let box = mainDiv.children[i]
        let innerBox= box.children[0]

        let len = innerBox.childElementCount

        for(let j = 0; j < len; j++){
            innerBox.removeChild(innerBox.children[0])
        }
    }
}


function starGame(){
    let mainDiv = document.getElementById("mainContainer")
    let box = mainDiv.children[1]
    let innerBox= box.children[0]

    removeAll()
    
    var arr = [];
    while(arr.length < 7){
        var x = Math.floor(Math.random()*7)+1;
        if(arr.indexOf(x) == -1){
            arr.push(x);

            let para = document.createElement("p")
            para.append(x)

            let elem = document.createElement("div")
            elem.classList = "boxDiv"
            elem.append(para)

            innerBox.append(elem)
        }
    }
    console.log(innerBox)
}

function successBox(){
    var modal = document.getElementById("myModal");

    var div = modal.children[0]
    div.classList = "modal-content"

    var image = document.createElement("img")
    image.classList = "image"
    image.src = "image/right.png"
    div.append(image)

    var span = document.getElementsByClassName("close")[0];

    var para = document.createElement("p")
    var x = document.createElement("strong")
    x.append("Success!")

    para.append(x)
    para.append("You have won the game.")
    div.append(para)


    modal.style.display = "block";

    span.onclick = function() {
    modal.style.display = "none";
    document.location.reload()
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.location.reload()
        }
    }
}

function isSorted(parent, len){
    for(var i = 0; i < parent.childElementCount - 1; i++) {
        if(parent.children[i].innerHTML > parent.children[i+1].innerHTML) {
            return false;
        }
    }
    return true
}

function checkResult(){
    let mainBox = document.getElementById("mainContainer")
    let innerC = mainBox.children[1]
    let leftC = innerC.children[0]
    console.log(leftC)
    lenOfinitialBox = leftC.childElementCount
    
    let flag = false
    let count = 0


    for(let i = 1; i < 4; i++){
        let box = mainBox.children[i]
        // console.log(box)
        let innerBox= box.children[0]

        let len = innerBox.childElementCount

        if(len == 0) count++

        if(len == 7 && isSorted(innerBox, len)){
            flag = true
            successBox()
            break
        }
    }

    if(count == 3){
        document.location.reload()
    }
    else if(flag == false){
        loseBox()
    }
}

function loseBox(){
    var modal = document.getElementById("myModal");
    var div = modal.children[0]
    div.classList = "modal-content"

    var image = document.createElement("img")
    image.classList = "image"
    image.src = "image/wrong.png"
    div.append(image)

    var btn = document.getElementById("myBtn");

    var span = document.getElementsByClassName("close")[0];

    var para = document.createElement("p")
    var x = document.createElement("strong")
    x.append("Sorry!")

    para.append(x)
    para.append("You have lost the game.")
    div.append(para)


    modal.style.display = "block";

    console.log(modal)

    span.onclick = function() {
        modal.style.display = "none";
        document.location.reload()
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.location.reload()
        }
    }
}


function changeBox(pBox , dBox){
    let mainBox = document.getElementById("mainContainer")

    let temp = mainBox.children[pBox]
    let presentBox = temp.children[0]

    temp = mainBox.children[dBox]
    let destinationBox = temp.children[0]


    if(presentBox.children[0] != undefined){
        destinationBox.prepend(presentBox.children[0])
    }
}