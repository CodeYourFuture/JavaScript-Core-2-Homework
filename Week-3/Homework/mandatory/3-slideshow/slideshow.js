// Write your code here

/*
 * A group of constants that help manage the UI
 */
const REMOVE                    = '';                // Non-active UI control
const GREEN                    =  '#40c040';  // Active UI control            
const AUTO_PREVIOUS = 0;                // index into controls[] array
const PREVIOUS              = 1;
const STOP                        = 2;
const NEXT                       = 3;
const AUTO_NEXT          = 4;

//  Used to build the image file path
const IMAGES_DIR = './images/';
const FILE_EXT = '.png';
const gallery = [
        'Divinity Roxx',
        'Esperanza Spalding',
        'Meshell Ndegeocello',
        'Tal Wilkenfeld',
        'Yolanda Charles',
        'Rhonda Smith',
        'Carol Kaye'
    ];

let bassistName = "";
let currentImage = 0;  // index into gallery array
let img = null;            //  reference to the HTML img tag   
let auto = 0;               // used to disable setInterval()
let controls = [],        // the list of controls for our gallery [autoPrevious, previous,
                                  //                                                         stop,
                                  //                                                         next, autoNext ]
    currentControl = null; // current active control - autoPrevious or autoNext

/*
 * SelectControl & deselectControl shows the used which control is active
 */
 const selectControl = controlID => {
     if (currentControl) currentControl.style.color = REMOVE;   // need to remove inline style
     currentControl = controls[ controlID ];
     currentControl.style.color = GREEN;
 }
 const deselectControl = controlID => {
     if (currentControl) currentControl.style.color = REMOVE;    // need to remove inline style
 };

 * set up all the references & event listeners to the image player
 * controls & then display the 1st image
 *
 */
const setupGallery = () => {
     let autoPrevious = document.querySelector("#auto-previous");
     let previous = document.querySelector("#previous");
     let next = document.querySelector("#next");
     let stop = document.querySelector("#stop");
     let autoNext = document.querySelector("#auto-next");

     /*
      * The controls[] array is only used to help manage the UI in partnership
      * with currentControl to highlight which control has been selected
      * with the support functions selectControl(controlID) and
      * deselectControl(controlID)
      */
    controls.push(autoPrevious);
    controls.push(previous);
    controls.push(stop);
    controls.push(next);
    controls.push(autoNext);

    previous.addEventListener('click', () => {
        if(auto) return;
        //selectControl(PREVIOUS);
        if (currentImage)
            getNextImage(--currentImage);
        else {
            currentImage = gallery.length - 1;
            getNextImage(currentImage);
        }
    });
    next.addEventListener('click', () => {
        if(auto) return;
    
        getNextImage(++currentImage); 
    });
    autoPrevious.addEventListener('click', () => {
        if(auto) clearInterval(auto)
        selectControl(AUTO_PREVIOUS);
        return auto = setInterval(() => {
            if (currentImage)
                getNextImage(--currentImage);
            else {
                currentImage = gallery.length - 1;
                getNextImage(currentImage);
            }
        }, 2000);
    });
    autoNext.addEventListener('click', () => {
        if (auto) clearInterval(auto)
        selectControl(AUTO_NEXT);
        return auto = setInterval(() => {
            getNextImage(++currentImage); 
        }, 2000);
    });
    stop.addEventListener('click', () => {
        if (auto){
            deselectControl(currentControl);
            clearInterval(auto)
            auto = 0;
        }
    });

    bassistName = document.querySelector("#bassist-name")
    img = document.querySelector("#bassist-img");
    getNextImage(currentImage); 
};

const getNextImage = index => {
    img.src = IMAGES_DIR +
                    gallery[ index % gallery.length ] +
                    FILE_EXT;
    bassistName.textContent = gallery[ index % gallery.length ]
}

window.onload = setupGallery;
