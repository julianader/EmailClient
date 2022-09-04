const tagContainer = document.getElementById('tag-container');
const input = document.getElementById('myInput');

let tags=[]; //this array represents different emails

input.addEventListener('keyup', (e) => { //the keyup event when a key is clicked
    if (e.key === 'Enter'){ //event
        tags.push(input.value);
        console.log(input.value);
        addTags(); 
        input.value='';
    }
});

const addTags = () => {
    reset(); //reset the input value to enter another one
    tags.slice().reverse().forEach(function(tag){
        const input = createTag(tag); //creates the tag shape
        tagContainer.append(input); //to put the input in the last index of the array (in the tag container)
    })
};
  
function reset(){
    document.querySelectorAll('.tag').forEach(function(tag){
        tag.parentElement.removeChild(tag);
    })
}

function createTag(label){
    const div = document.createElement('div'); //for the container
    div.setAttribute('class', 'tag');
    const span = document.createElement('span') //for the text aera
    span.innerHTML = label;
    const closeBtn = document.createElement('i'); //for the 'x' mark
    closeBtn.setAttribute('class', 'material-icons');
    closeBtn.setAttribute('data', label);
    closeBtn.innerHTML='x';
    
    div.appendChild(span);
    div.appendChild(closeBtn);
    return div;
}

document.addEventListener('click', function(e) {
    if (e.target.tagName === 'i') {
        const value= e.target.getAttribute('data');
        const index= tags.indexOf(value);
        tags = [...tags.slice(0, index), ...tags.slice(index + 1)]; //To remove the unwanted email 
        addTags();
    }
})

function send(){
    valid = true;
    if (tags.length<1){
        valid=false;
    }
    tags.forEach(function(tag){
        if (!validateEmail(tag)){
            valid=false;
        };
    })
    if (valid==true){
        sendEmail();
    }
    else{
        document.getElementById('error').style.display = "block";
        document.getElementById('success').style.display = "none";
    }
}

function validateEmail(email){
    const re=  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //REGEX
    return re.test(email);
}
function sendEmail(){
    document.getElementById('success').style.display = "block";
    document.getElementById('error').style.display = "none";

}
