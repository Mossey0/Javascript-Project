const menuActions = {
    'Build': document.getElementById('build'),
    'Recruit': document.getElementById('recruit'),
    'Hunt': document.getElementById('hunt')
}

const recruitActions = {
    soldiers: document.getElementById('button-soldiers'),
    blacksmiths: document.getElementById('button-blacksmiths'),
    magicians: document.getElementById('button-magicians'),
    explorers: document.getElementById('button-explorers')
}

const peopleCount = {
    villagers: document.getElementById('villager-count'),
    soldiers: document.getElementById('soldier-count'),
    magicians: document.getElementById('magician-count'),
    blacksmiths: document.getElementById('blacksmith-count'),
    explorers: document.getElementById('explorer-count'),
}

const peopleNumber = {
    villagers: 0,
    soldiers: 0,
    magicians: 0,
    blacksmiths: 0,
    explorers: 0,
}


const buildingActions = {

}

peopleCount.villagers.textContent = peopleNumber.villagers;
peopleCount.soldiers.textContent = peopleNumber.soldiers;
peopleCount.magicians.textContent = peopleNumber.magicians;
peopleCount.blacksmiths.textContent = peopleNumber.blacksmiths;
peopleCount.explorers.textContent = peopleNumber.explorers;


const villagersCount = setInterval(() => {
    peopleNumber.villagers++
    peopleCount.villagers.textContent = peopleNumber.villagers;
}, 100);

(function(){
    villagersCount;
})();

recruitActions.soldiers.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn')) {
        let buttonNumber = parseInt(event.target.innerText)
        if (peopleNumber.villagers >= buttonNumber) {
            peopleNumber.villagers -= buttonNumber;
            peopleNumber.soldiers += buttonNumber;
            peopleCount.soldiers.textContent = peopleNumber.soldiers
            peopleCount.villagers.textContent = peopleNumber.villagers;
        }
    }
})

function recruiting(action) {
    for (let actions in recruitActions) {
        recruitActions[actions].addEventListener('click', function(event) {
            if (event.target.classList.contains('btn')) {
                let buttonNumber = parseInt(event.target.innerText)
                if (peopleNumber.villagers >= buttonNumber) {
                    peopleNumber.villagers -= buttonNumber;
                    peopleNumber[actions] += buttonNumber;
                    peopleCount[actions].textContent = peopleNumber[actions]
                    peopleCount.villagers.textContent = peopleNumber.villagers;
                }
            }
        })
    }

}
recruiting();