const tagContainer = document.getElementById('tag-container');
const input = document.getElementById('myInput');

let tags=[];

input.addEventListener('keyup', function(e){
    if (e.key === 'Enter'){
        tags.push(input.value);
        addTags();
        input.value='';
    }
})

function addTags(){
    reset();
    tags.slice().reverse().forEach(function(tag){
        const input = createTag(tag);
        tagContainer.prepend(input);
    })
}
  
