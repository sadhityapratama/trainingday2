const skillData = ["JavaScript", "Angular", "Java", "Spring Boot"];
const data = document.querySelector("#data");

function showSkill() {
    for(let i = 0; i < skillData.length; i++){
        data.appendChild(putSkill(skillData[i]));
    }
}

function putSkill(skill){
    let li = document.createElement("li");
    li.append(skill);
    return li;
}

