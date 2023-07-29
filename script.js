const remove = function () {
  let select = document.getElementById("colorSelect");
  let val = select.value;

  // Loop through the options in reverse order and remove the selected option
  for (let i = select.options.length - 1; i >= 0; i--) {
    if (select.options[i].innerText === val) {
      select.remove(i);
    }
  }

  console.log("Updated select:", select);
};