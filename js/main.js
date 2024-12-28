
function playAudio (the_audio) {
    the_audio.play();
    the_audio.currentTime = 0;
}
/* function stopAudio (the_audio) {
    the_audio.pause();
    the_audio.currentTime = 0;
} */

function ui_active_sign (element) {
    element.style = `filter: drop-shadow(0px 3px 10px white); transition: 0.1s;`;
}
function ui_deactivate_sign (element) {
    element.style = `filter: drop-shadow(0px 0px 0px transparent); transition: 0.5s;`;
}

let body = document.body;
function Drum () {
    
    let kick = document.querySelector('.kick');
    let hi_hat = document.querySelector('.hi-hat');
    let crach_01 = document.querySelector('.crach-01');
    let crash_02 = document.querySelector('.crach-02');
    let china = document.querySelector('.china');
    let ride = document.querySelector('.ride');
    let snare = document.querySelector('.snare');
    let stick = document.querySelector('.stick');
    let tom_01 = document.querySelector('.tom-01');
    let tom_02 = document.querySelector('.tom-02');
    let tom_03 = document.querySelector('.tom-03');

    //______AUDIOS_______//
    let kick_audio = document.querySelector('#kick_audio');
    let Snare_audio = document.querySelector('#Snare_audio');
    let Rimshot_audio = document.querySelector('#Rimshot_audio');
    let Tom1_audio = document.querySelector('#Tom1_audio');
    let Tom2_audio = document.querySelector('#Tom2_audio');
    let FloorTom_audio = document.querySelector('#FloorTom_audio');
    //Cymbals
    let hi_hat_audio = document.querySelector('#hi-hat_audio');
    let open_hi_hat_audio = document.querySelector('#open-hi-hat-audio');
    let Crash_audio = document.querySelector('#Crash_audio');
    let Crash2_audio = document.querySelector('#Crash2_audio');
    let China_audio = document.querySelector('#China_audio');
    let Ride_audio = document.querySelector('#Ride_audio');
    let RideCup_audio = document.querySelector('#RideCup_audio');



    body.addEventListener('keydown', (e) => {
        if (e.keyCode == 87) { // KICK => D
            playAudio(kick_audio);
            ui_active_sign(kick);
        }
        if (e.keyCode == 75) { // HI-HAT => K
            playAudio(hi_hat_audio);
            ui_active_sign(hi_hat);
        }
        if (e.keyCode == 76) { // OPEN HI-HAT => L
            playAudio(open_hi_hat_audio);
            ui_active_sign(hi_hat);
        }
        if (e.keyCode == 73) { // CRACH => I
            playAudio(Crash_audio);
            crach_01.style = `
                animation: crach_01_movement 0.5s linear infinite;
                filter: drop-shadow(0px 3px 10px white); transition: 0.1s;
            `;
        }
        if (e.keyCode == 85) { // Crash2 => U
            playAudio(Crash2_audio);
            crash_02.style = `
                animation: crach_02_movement 0.5s linear infinite;
                filter: drop-shadow(0px 3px 10px white); transition: 0.1s;
            `;
        }
        if (e.keyCode == 79) { // CHINA => O
            playAudio(China_audio);
            ui_active_sign(china);
        }
        if (e.keyCode == 190) { // RIDE => ;
            playAudio(Ride_audio);
            ride.style = `
                animation: ride 0.5s linear infinite;
                filter: drop-shadow(0px 3px 10px white); transition: 0.1s;
            `;
        }
        if (e.keyCode == 191) { // RIDECUP => :
            playAudio(RideCup_audio);
            ui_active_sign(ride);
        }
        
        //___________T A M B O U R S____________//
        if (e.keyCode == 67) { //SNARE => F
            playAudio(Snare_audio);
            ui_active_sign(snare);
        }
        if (e.keyCode == 71) { //  RIMSHOT => G
            playAudio(Rimshot_audio);
            ui_active_sign(stick);
        }
        if (e.keyCode == 86) { //  TOM 1 => V
            playAudio(Tom1_audio);
            ui_active_sign(tom_01);
        }
        if (e.keyCode == 66) { //  TOM 2 => B
            playAudio(Tom2_audio);
            ui_active_sign(tom_02);
        }
        if (e.keyCode == 78) { //  TOM 2 => N
            playAudio(FloorTom_audio);
            ui_active_sign(tom_03);
        }
    })


    body.addEventListener('keyup', (e) => {
        if (e.keyCode == 87) { // KICK => D
            ui_deactivate_sign(kick);
        }
        if (e.keyCode == 75) { // HI-HAT => K
            ui_deactivate_sign(hi_hat);
        }
        if (e.keyCode == 76) { // OPEN-HI-HAT => L
            ui_deactivate_sign(hi_hat);
        }
        if (e.keyCode == 73) { // CRASH 01 => I
            ui_deactivate_sign(crach_01);//
        }
        if (e.keyCode == 79) { // CHINA => O
            ui_deactivate_sign(china);//
        }
        if (e.keyCode == 190) { // RIDE => ;
            ui_deactivate_sign(ride);//
        }
        if (e.keyCode == 191) { // RIDE => :
            ui_deactivate_sign(ride);//
        }
        if (e.keyCode == 85) { // OPEN HI-HAT => U
            ui_deactivate_sign(crash_02);//
        }
        if (e.keyCode == 67) { // SNARE => F
            ui_deactivate_sign(snare);//
        }
        if (e.keyCode == 71) { //  RIMSHOT => G
            ui_deactivate_sign(stick);//
        }
        if (e.keyCode == 86) { //  TOM 1 => V
            ui_deactivate_sign(tom_01);//
        }
        if (e.keyCode == 66) { //  TOM 2 => B
            ui_deactivate_sign(tom_02);//
        }
        if (e.keyCode == 78) { //  TOM 2 => N
            ui_deactivate_sign(tom_03);//
        }
    })
    

}


function test () {
    body.addEventListener('keydown', (e) => {
        console.log(e.key);
        console.log(e.keyCode);
    });
}
test()


setTimeout(Drum);
// setInterval(test, 500);