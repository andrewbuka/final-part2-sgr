const chevronDown = document.querySelector('.chevron-down');
const chevronUp = document.querySelector('.chevron-up');
const workHoursContainer = document.querySelector('.work-hours-container');
const timetableContainerContacts = document.querySelector('.timetable-container-contacts');
const workHours = document.querySelector('.work-hours');
 
chevronDown.onclick = function() {
  chevronDown.style.display = 'none';
  chevronUp.style.display = 'block';
  workHoursContainer.style.display = 'block'
  timetableContainerContacts.style.marginBottom = '0'
  workHours.style.borderBottom = '3px solid #a78847';
  workHours.style.color = "green";
}

chevronUp.onclick = function () {
  chevronDown.style.display = 'block';
  chevronUp.style.display = 'none';
  workHoursContainer.style.display = 'none'
  timetableContainerContacts.style.marginBottom = '50px'
  workHours.style.borderBottom = '3px solid #4D4D4D';
  workHours.style.color = " #4D4D4D";
}


