const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
		modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  console.log(event.target.classList);
  let result = event.target.classList.value.includes('tablinks') || event.target.classList.value.includes('modal-cta'); 
  if(result){
    document.querySelector("body").style.overflow = "hidden"; 
  }else{
    document.querySelector("body").style.overflow = "scroll"; 
  }

		if (event.target === modal) {
				toggleModal();
		}
}

// trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
