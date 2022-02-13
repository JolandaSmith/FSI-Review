let animals = document.querySelectorAll(".animal")
console.log(animals)

let dogVoteBtn = document.createElement("button")
dogVoteBtn.textContent = "Vote for Doggo"
animals[0].append(dogVoteBtn) 

let dogVotesCell = document.querySelector("#doggo-votes");

dogVoteBtn.addEventListener("click", function(e) {
    let dogVotesCount = parseInt(dogVotesCell.textContent);
    dogVotesCount = dogVotesCount + 1;
    dogVotesCell.textContent = dogVotesCount;
    localStorage.setItem("dog-votes", dogVotesCount);  
}); 

let dogVotes = localStorage.getItem("dog-votes")
if (dogVotes) {
    dogVotesCell.textContent = dogVotes;
} 


let catVoteBtn = document.createElement("button")
catVoteBtn.textContent = "Vote for Catto"
animals[1].append(catVoteBtn) 

let catVotesCell = document.querySelector("#catto-votes");

catVoteBtn.addEventListener("click", function(e) {
    let catVotesCount = parseInt(catVotesCell.textContent);
    catVotesCount = catVotesCount + 1;
    catVotesCell.textContent = catVotesCount; 
    localStorage.setItem("cat-votes", catVotesCount);
}); 

let catVotes = localStorage.getItem("cat-votes")
if (catVotes) {
    catVotesCell.textContent = catVotes; 
}

let goldfishVoteBtn = document.createElement("button")
goldfishVoteBtn.textContent = "Vote for Fish" 
animals[2].append(goldfishVoteBtn)

let goldfishVotesCell = document.querySelector("#fish-votes");

goldfishVoteBtn.addEventListener("click", function(e) {
    let goldfishVotesCount = parseInt(goldfishVotesCell.textContent);
    goldfishVotesCount = goldfishVotesCount + 1;
    goldfishVotesCell.textContent = goldfishVotesCount;
    localStorage.setItem("goldfish-votes", goldfishVotesCount); 
}); 

let goldfishVotes = localStorage.getItem("goldfish-votes")
if (goldfishVotes) {
    goldfishVotesCell.textContent = goldfishVotes;
}

