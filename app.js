document.querySelector('.get-jokes').addEventListener('click', getjokes);

function getjokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const output = document.querySelector('.jokes');

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function(){
    if(this.status === 200) {
      const response = this.responseText;
      const jokes = JSON.parse(response);

      if(response.type === 'success') {
        jokes.value.forEach(function(joke) {
          const li = document.createElement('li');
          li.innerHTML = `${joke.joke}`;
          output.appendChild(li);
        });
      }else{
        const li = document.createElement('li');
        li.innerHTML = 'Something Went Wrong';
        output.appendChild(li);
      }
    }
  }

  xhr.send();
  e.preventDefault();
}