let firstSection = document.querySelector(".main__section");
let secondSection = document.querySelector(".main__section.second");

secondSection.style.display = "none";

// Elements from form

let inputName = firstSection.querySelector("#full_name");
let inputEmail = firstSection.querySelector("#email");
let inputGit = firstSection.querySelector("#github_username");
let uploadAvatarZone = firstSection.querySelector(".main__upload-avatar");
let fileInput = firstSection.querySelector("#fileInput");
let paragrapgAvatarZone = firstSection.querySelector(".main__paragraph");

let textNameError = document.querySelector("#name-error");
let textEmailError = document.querySelector("#email-error");
let textGitError = document.querySelector("#git-error");
let textUploadError = document.querySelector("#upload-error");
let textUploadNormal = document.querySelector("#upload-text-normal");

let buttonGenerateTicket = document.querySelector(".cta");

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const maxSize = 5000000 * 1024;
let imageSrc = null;
let nameImageSrc = "";
// Elements from ticket

let titleTicket = secondSection.querySelector(".main__title");
let subtitleTicket = secondSection.querySelector(".main__subtitle");
let avatarTicket = secondSection.querySelector(".main__ticket-avatar");
let nameTicket = secondSection.querySelector(".main__ticket-name");
let gitTicket = secondSection.querySelector(".main__ticket-git");
let numberTicket = secondSection.querySelector(".main__ticket-number");

//Events 

buttonGenerateTicket.addEventListener("click", validateForm);

inputName.addEventListener("blur", () => verifyError(inputName,textNameError));
inputName.addEventListener("input", () => verifyError(inputName,textNameError));

inputEmail.addEventListener("blur", () => verifyError(inputEmail,textEmailError));
inputEmail.addEventListener("input", () => verifyError(inputEmail,textEmailError))

inputGit.addEventListener("blur", () => verifyError(inputGit,textGitError));
inputGit.addEventListener("input", () => verifyError(inputGit,textGitError))


uploadAvatarZone.addEventListener('dragover', (event) =>{
    event.preventDefault();
    uploadAvatarZone.classList.add('over');
})

uploadAvatarZone.addEventListener('dragleave', (event) =>{
    event.preventDefault();
    uploadAvatarZone.classList.remove('over');
})

uploadAvatarZone.addEventListener('drop', (event) =>{
    event.preventDefault();
    uploadAvatarZone.classList.remove('over');
     getFile(event);
})

uploadAvatarZone.addEventListener('click', () =>{
    fileInput.click();
})

fileInput.addEventListener('change', (event) =>{
    getFile(event);
})

function getFile(event){
    let files;
    if(event.type === 'drop'){
        event.preventDefault();
        files = event.dataTransfer.files;
    }
    else if( event.type == 'change'){
        files = event.target.files;
    }
   

    if(files.length > 0){
        const file = files[0];
        console.log(files[0]);

        if(file.size > maxSize){
            hideErrors(null, textUploadNormal);
            showErrors(null, textUploadError);
            return;
        }

        nameImageSrc = file.name;
        const reader = new FileReader();
        reader.onload = function(event){
            imageSrc = event.target.result;
            
            setUploadCorrect();
        }

        if(file.type.startsWith('image/')){
            reader.readAsDataURL(file);
        }
    }
}

function setUploadCorrect(){
    uploadAvatarZone.classList.add("upload-correct");
    paragrapgAvatarZone.style.color = "forestgreen";
    textUploadNormal.textContent = nameImageSrc;

}

function validateForm(){
    const validName = inputName.value != "";
    const validEmail = regexEmail.test(inputEmail.value);
    const validGithub = inputGit.value != "";

    if(validName && validEmail && validGithub){
        setTicket(inputName.value, inputEmail.value, inputGit.value);
    }
    else{
        checkErrors();
    }
}

function checkErrors(){
    verifyError(inputGit,textGitError);
    verifyError(inputEmail,textEmailError)
    verifyError(inputName,textNameError)
}

function setTicket(name, email, github) {
    firstSection.style.display = "none";
    secondSection.style.display = "flex";
    setInfoTicket(name, email, github);
}


function verifyError(input, textError){
    if(input.value == ""){
        showErrors(input,textError);            
    }
    else if( input.type === 'email'){
        if(!regexEmail.test(input.value)){
            showErrors(input,textError);            
        }
        else{
            textError.hidden = true;
            input.classList.remove("input--error");
        }
    }
    else{
        hideErrors(input, textError);
    }
}
function showErrors(input, textError){
    textError.hidden = false;
    if(input != null)
        input.classList.add("input--error");
}

function hideErrors(input, textError){
    textError.hidden = true;
    if(input != null)
        input.classList.remove("input--error");
}

function setInfoTicket(name, email, github){
    setTitleTicket(name);
    setSubtitleTicket(email);
    setAvatarTicket();
    setInfoNamesTicket(name, github);
    setNumberTicket();
}

function setTitleTicket(name){
    titleTicket.innerHTML = "Congrats,<span class='text--gradient'>"+ name +"</span>! Your ticket is ready."
}

function setSubtitleTicket(email){
    subtitleTicket.innerHTML= "We've emailed your ticket to <span style='color: var(--orange-500);'> " + email +"</span> and will send updates in the run up to the event."
}

function setAvatarTicket(){
    avatarTicket.src = imageSrc;
}

function setInfoNamesTicket(name, github){
    nameTicket.textContent = name;
    gitTicket.textContent = github;
}

function setNumberTicket(){
    numberTicket.textContent = "#"+  Math.floor(Math.random() * 99999);
}