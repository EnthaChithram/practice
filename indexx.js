
// function togglr(el) {
//     if (el.className == "blue") {
//         el.className = "haha";
//         
//     } 
//     else {
//     el.className="blue";
//     }
// }


function togglr(el) {
    if (el.classList.contains("blue")) {
        el.classList.remove("blue");
    }

    else {
        el.classList.add("blue");
    }

    el.classList.toggle("haha");
}


function togglt() {
    let el = document.getElementById("first");
    console.log(el);
    let ek = document.getElementById("third");
    if (el.className == "old") {
        el.className = "side";

    }
    else {
        el.className = "old";
    }


    console.log(ek);
    if (ek.className == "old") {
        ek.className = "sidee";

    }
    else {
        ek.className = "old";
    }
    let b = document.getElementById('body');
    console.log(b);

    let video = document.createElement('video');
    video.id = "mp";
    video.src = 'sss.mp4';  // Replace with your video URL
    // Object.assign(video, { autoplay: true, loop: true, muted: false, playsinline: true });
    // Object.assign(video.style, { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: '-1' });


    let mid = document.getElementById("second").getElementsByTagName('img')[0];
    if (b.className == "mainn") {
        b.className = ("noplay");
        Object.assign(video, { autoplay: true, loop: true, muted: false, playsinline: true });
        Object.assign(video.style, { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: '-1' });
        b.appendChild(video);
        
        mid.setAttribute(
            "style",
            "display:none"
          );
    }
    else {
        b.className = ("mainn");
        document.getElementById("mp").remove();
        mid.style.cssText = "width: 233px; height:350px; object-fit: cover;";
        console.log(mid);
    }

    
    

};

// b.innerHTML += <video autoplay loop> <source src ="sss.mp4" type="video/mp4"> </video>


{/* document.querySelector(".box[0]").togglt;



document.getElementById('2nd').addEventListener('click', () => { console.log('clickeddd') });



let element = document.getElementById('myElement');
element.addEventListener('click', function() {
console.log('Element clicked!');
}
} */}
