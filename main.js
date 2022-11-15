const $touchesSimon = document.querySelectorAll(".toucheSimon");

if (typeof particlesJS !== 'undefined') {
  particlesJS("particles-js", {
    "particles": {
      "number": {
          "value": 300,
        "density": {
          "enable": true,
           "value_area": 800,
        }
        },
       
      "color": {
        "value": '#f4f4f4',
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false,
          'value': 10
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.05,
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        // "onclick": {
        //   "enable": true,
        //   "mode": "bubble"
        // },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 4,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
      }
    },
    "retina_detect": true
  });
}


  function clignote(ele) {
    let baseColor;
    console.log(ele)
    switch (ele.id) {
      case "T0":
        baseColor = "#FBA0A0";
        ele.style.backgroundColor = '#fff'
        break;
      case "T1":
        baseColor = "#D8E9FB";
        ele.style.backgroundColor = '#fff'
        break;
      case "T2":
        baseColor = "#5DFB77";
        ele.style.backgroundColor = '#fff'
        break;
      case "T3":
        baseColor = "#FBECB0";
        ele.style.backgroundColor = '#fff'
        break;
      case "T4":
        baseColor = "#BD5FFB";
        ele.style.backgroundColor = '#fff'
        break;
    }
  }

  [...$touchesSimon].map(ele => {
    ele.addEventListener("click", () => {
        // La case cliquée change de couleur
        clignote(ele);
    });
  });

setTimeout(function () { alert("ALAID JAI PAS LA SOLUCE NON PLUS"); }, 120000);
  
const linkText = document.querySelector('.link-text');
const linkImage = document.querySelector('.link-image');

function showImgContent(e) {
  x = e.clientX;
  y = e.clientY;
  linkImage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  linkText.style.setProperty('--x',(x)+'px');
  linkText.style.setProperty('--y',(y)+'px');
}

document.addEventListener('mousemove', showImgContent);