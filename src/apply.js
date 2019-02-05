const formNode = document.getElementById('form-example');
const nameNode = document.getElementById('name');
const locationNode = document.getElementById('location');
const availabilityTimeRangeNode = document.getElementById('availability-time');
const strengthNumberNode = document.getElementById('strength-number');
const yesNode = document.getElementById('yes');
const noNode = document.getElementById('no');
const sectionTwoNode = document.getElementById('section-two');
const strengthRangeNode = document.getElementById('coding-strength');


strengthRangeNode.addEventListener('change', function() {
    strengthNumberNode.textContent = strengthRangeNode.value;
});

yesNode.addEventListener('change', function(){
    if(yesNode.checked) {
        strengthNumberNode.textContent = 1;
        strengthRangeNode.min = 1;
        strengthRangeNode.value = 1;
        strengthRangeNode.disabled = false;
        sectionTwoNode.required = yesNode.checked;
    }
});

noNode.addEventListener('change', function() {
    strengthNumberNode.textContent = 0;
    strengthRangeNode.max = 0;
    strengthRangeNode.value = 0;
    strengthRangeNode.disabled = true;
    sectionTwoNode.required = !noNode.checked;
});

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log(formNode.elements.name.value);

    const applicant = {
        name: nameNode.value,
        location: location.value,
        strengthScale: strengthRangeNode.value,
    };
});