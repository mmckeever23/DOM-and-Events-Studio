window.addEventListener("load", init);

function init () {
    const takeoff = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const abortMission = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const spaceShuttleWidth = document.getElementById('spaceShuttleWidth');
    const up = this.document.getElementById("up");
    const down = this.document.getElementById("down");
    const right = this.document.getElementById("right");
    const left = this.document.getElementById("left");
    let imgObj = document.getElementById('rocket');
    imgObj.style.position = 'absolute';
    imgObj.style.left = '0px';
    imgObj.style.bottom = '0px';

    takeoff.addEventListener("click", event =>{
        const response = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (response){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10,000";
        }
    })
      
    land.addEventListener("click", event =>{
        const response = window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
    })

    abortMission.addEventListener("click", event =>{
        const response = window.confirm("Confirm that you want to abort the mission.")
        if (response){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
        }
    })

    up.addEventListener("click", event =>{
        if (spaceShuttleHeight.innerHTML != "250000"){
            movement = parseInt(imgObj.style.bottom) + 10 + 'px';
            imgObj.style.bottom = movement;
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        }
    })

    down.addEventListener("click", event =>{
        if (spaceShuttleHeight.innerHTML != "0"){
            movement = parseInt(imgObj.style.bottom) - 10 + 'px';
            imgObj.style.bottom = movement;
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
        }
    })

    left.addEventListener("click", event =>{
            movement = parseInt(imgObj.style.left) - 10 + 'px';
            imgObj.style.left = movement;
        })

    right.addEventListener("click", event =>{
            movement = parseInt(imgObj.style.left) + 10 + 'px';
            imgObj.style.left = movement;
        })

}