import {useState} from 'react'
import './App.css';

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","u","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","#","$","^","&","*","-","=","+","_","?",];

function App() {
    const [password, setpassword] = useState("")
  function generatePassword(){
    var passwordLength = parseInt(prompt("Enter the length of your password between 8 and 128 characters:"));
  
    if (passwordLength < 8) {
      alert('Must be at least 8 characters!');
      return;
    }
    if (passwordLength > 128) {
      alert('Must be less than 128 characters!');
      return;
    }

    var includeUpper =  window.confirm("Would you like to include uppercase letters?");
    var includeLower = window.confirm("Would you like to include lowercase letters?");
    var includeNumbers = window.confirm("Would you like to include numbers?");
    var includeSymbols = window.confirm("Would you like to include symbols?");
  
    if (!includeNumbers && !includeUpper && !includeSymbols && !includeLower) {
      alert('Must select at least one of the criteria!');
      return;
    }	
  
    var confirmedArr = [];
    var passArr= [];
  
    if (includeNumbers){
     confirmedArr = confirmedArr.concat(numbers);
      
    }
    if (includeUpper){
     confirmedArr = confirmedArr.concat(upper);
    
    }
    if (includeLower){
     confirmedArr = confirmedArr.concat(lower);
    
    }
    if (includeSymbols){
     confirmedArr = confirmedArr.concat(symbols);
    }
    console.log(confirmedArr)
    for (var i = 0; i < passwordLength; i++) {
      passArr.push (confirmedArr[Math.floor(Math.random() * confirmedArr.length)]); 
    }
    setpassword(passArr.join(""))
  }

  return (
    <div class="wrapper">
      <header>
        <h1>Password Generator</h1>
      </header>
      <div class="card">
        <div class="card-header">
          <h2>Generate a Password</h2>
        </div>
        <div class="card-body">
          <textarea value={password} 
            readonly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
          ></textarea>
        </div>
        <div class="card-footer">
          <button class="btn" onClick={generatePassword} >Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
