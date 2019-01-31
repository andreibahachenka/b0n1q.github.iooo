let modal = document.getElementById('modal');
let columns = document.getElementsByClassName('column');
let closeBtn = document.getElementsByClassName('close')[0];
let modalContent = document.getElementsByClassName('modal-content')[0];
let btnWrapModal = document.getElementsByClassName('btn-wrapper-modal')[0];

for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener('click',function() {
        modal.style.display = 'block';
        let cloneColumn = this.cloneNode(true);
        modalContent.insertBefore(cloneColumn, btnWrapModal);
    })
}

closeBtn.addEventListener('click',function() {
    modal.style.display = 'none';
    let column = modalContent.querySelector('.column');
    column.parentNode.removeChild(column);
});

window.addEventListener('click',function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        let column = modalContent.querySelector('.column');
        column.parentNode.removeChild(column);
    }
});