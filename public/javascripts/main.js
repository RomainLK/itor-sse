(function(){

  
  const input = document.getElementById('input')

  const submitBtn = document.getElementById('submit-btn')
  const form = document.getElementById('form')

  const resultDiv = document.getElementById('result')

  function refreshResult(result){
    resultDiv.textContent = result
  }

  const id = Math.trunc(Math.random() * 1000000)
  const  evtSource = new EventSource(`/subscribe?id=${id}`)
  evtSource.addEventListener('itor', function(e){
    refreshResult(e.data)
  })

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(`/itor?value=${input.value}`, {
      headers: {
        'x-client-id': id
      }
    })
    .catch(error => {
      console.error(error)
    })
  })

})()