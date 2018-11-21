(function(){
  const input = document.getElementById('input')

  const submitBtn = document.getElementById('submit-btn')
  const form = document.getElementById('form')

  const resultDiv = document.getElementById('result')

  function refreshResult(result){
    resultDiv.textContent = result
  }

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(`/itor?value=${input.value}`).then( result => result.text())
    .then(refreshResult)
    .catch(error => {
      console.error(error)
    })
  })

})()