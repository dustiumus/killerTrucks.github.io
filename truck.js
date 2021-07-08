document.querySelector('#blue').addEventListener('click', blueClick); 
document.querySelector('#chief').addEventListener('click', chiefClick);
document.querySelector('#warrior').addEventListener('click', warriorClick);
document.querySelector('#blackBeauty').addEventListener('click', blackBeautyClick);
document.querySelector('form').addEventListener('submit', dreamTruck);
// document.querySelector('section2').addEventListener('submit', commentSection);

function blueClick(event){
    alert('Big Blue is truly...BLUE. Vote for Blue below!')
};

function chiefClick(event){
    alert('Master Chief Always Wins! Vote below for the "Chief"')
};

function warriorClick(event){
    alert('Warriors are so Sexy they dont exist! Vote for the Warrior if you know whats good for you')
};

function blackBeautyClick(event){
    alert('Black Beauty, name speaks for itself. Vote for Black Beauty Below!')
};

const message = document.querySelector('#message')

function dreamTruck(event){
    event.preventDefault();
    let inputField = document.querySelector('#name');

    const votes = document.createElement('li');
    const truckName = document.createElement('span');
    truckName.textContent = inputField.value;
    truckName.addEventListener('click', deleteVote);
    votes.appendChild(truckName);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteVote);
    votes.appendChild(deleteBtn);

    inputField.value = '';
    const list = document.querySelector('ul');
    list.appendChild(votes)

    function deleteVote(event) {
        message.textContent = 'Vote ReDacted!'
        revealMessage()
        event.target.parentNode.remove();
    };
}

// function commentSection(event){
//     event.preventDefault();
//     let commentField = document.querySelector('#comment');
//     const comments = document.createElement('li');
//     const commentName = document.createElement('span');
//     commentName.textContent = commentField.value;
//     comments.appendChild(commentName);

//     commentField.value = ''
//     const commentList = document.querySelector('ul');
//     commentList.appendChild(comments);
// }


function revealMessage() {
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}









