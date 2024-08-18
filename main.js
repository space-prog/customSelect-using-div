let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    
    
    selectHeader.forEach(item=> {
        item.addEventListener('click', selectToogle) 
    });
    
    selectItem.forEach(item=> {
        item.addEventListener('click', selectChoose)
    });
    
    function selectToogle() {
        this.parentNode.classList.toggle('is-active');
    }
    
    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};


select();