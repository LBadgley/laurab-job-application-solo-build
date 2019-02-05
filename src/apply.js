const formNode = document.getElementById('form-example');
const nameNode = document.getElementById('name');
const locationNode = document.getElementById('location');
const daysAvailableNode = document.getElementById('days-available');
const weekdayAvailabilityNode = document.getElementById('weekday-availability');
const weekendAvailabilityNode = document.getElementById('weekend-availability');
const timeAvailabilityNode = document.getElementById('time-availability');
const strengthNumberNode = document.getElementById('strength-number');
const yesNode = document.getElementById('yes-weekend');
const noNode = document.getElementById('no-weekend');
const sectionTwoNode = document.getElementById('section-two');
const strengthRangeNode = document.getElementById('coding-strength');


strengthRangeNode.addEventListener('change', function() {
    strengthNumberNode.textContent = strengthRangeNode.value;
});


daysAvailableNode.addEventListener('change', function() {
    if(daysAvailableNode.value === "weekdays") {
        weekdayAvailabilityNode.hidden = false;
        weekendAvailabilityNode.hidden = true;
        timeAvailabilityNode.hidden = false;
    } else if(daysAvailableNode.value === "weekends") {
        weekendAvailabilityNode.hidden = false;
        weekdayAvailabilityNode.hidden = true;
        timeAvailabilityNode.hidden = false;
    } else if(daysAvailableNode.value === "both") {
        weekendAvailabilityNode.hidden = false;
        weekdayAvailabilityNode.hidden = false;
        timeAvailabilityNode.hidden = false;
    } else {
        weekendAvailabilityNode.hidden = true;
        weekdayAvailabilityNode.hidden = true;
        timeAvailabilityNode.hidden = true;
    }
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

    const applicant = {
        name: nameNode.value,
        location: locationNode.value,
        strengthScale: strengthRangeNode.value,
        


    };
    // console.log(applicant);
});