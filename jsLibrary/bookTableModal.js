
const modalBookTable=document.getElementById('bookTableModal'),
      formTableBook=document.getElementById('formTable');


function closeModalBookTable(){
    modalBookTable.style.display='none';
}
function openModalBookTable(){
    modalBookTable.style.display='block';
    modalBookTable.style.animation='slideModal 0.8s both'
}
function saveBookTableData(event){
event.preventDefault();
let userData=event.target.form,
    firstName=userData[0].value,
    lastName=userData[1].value,
    phoneNumber=userData[2].value,
    email=userData[3].value;
let userObj={
    firstName:firstName,
    lastName:lastName,
    phoneNumber:phoneNumber,
    email:email
}
localStorage.setItem(email,JSON.stringify(userObj));
alert('Securely send message. Soon we gona call you!');
formTableBook.reset();

}