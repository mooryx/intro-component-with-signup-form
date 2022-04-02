function check() {
  let input = [];
  input = document.getElementsByTagName("input");
  isEmpty(input);


}

function isEmpty(input) {
  for (let i = 0; i < input.length; i++) {

    if (input[i].value.length == 0) {
      input[i].classList.add("err-icon");
      document.getElementById(i).classList.remove('err-off');

    } else {
      input[i].classList.remove('err-icon')
      document.getElementById(i).classList.add('err-off');
    }
  }
}
