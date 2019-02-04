
const mds = {textField: function(element){
    element.addEventListener('change', function(){

      if(this.value.length > 0){
        this.classList.add('mds-text__input--active');
      } else {
        this.classList.remove('mds-text__input--active');
      }
    });
  },
  switch: function(element) {},
  checkbox: function(element) {},
  radioButton: function(element) {}
}

mds.textField(document.querySelector('.mds-text__input'));
