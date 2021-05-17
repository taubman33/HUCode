console.log('Welcome to HackerU-JustCode Assignment');
$(document).ready(function() {
    getRemoteData();
});


//setting up JS DOM Manipulation to upload all of the table contents with API data
//I know there would be an easier/DRY'er way to do this with a for loop and pushing into an array
//but with the time restraints I'd rather just have it working before making it more elegant and clean
//adding starName, country, and dateOfBirth data to table heads
const starField1 = document.querySelector('#sf1');
const starField2 = document.querySelector('#sf2');
const starField3 = document.querySelector('#sf3');


//populates the table with data
const starTable1 = document.querySelector('#tableField1');
const starTable2 = document.querySelector('#tableField2');
const starTable3 = document.querySelector('#tableField3');
const starTable4 = document.querySelector('#tableField4');
const starTable5 = document.querySelector('#tableField5');
const starTable6 = document.querySelector('#tableField6');
const starTable7 = document.querySelector('#tableField7');
const starTable8 = document.querySelector('#tableField8');
const starTable9 = document.querySelector('#tableField9');
const starTable10 = document.querySelector('#tableField10');



function getRemoteData() {
    // write your code here to fetch data from api.
    
    
    //using basic fetch functionality
    //making sure data pulled back is in json format
        fetch(`https://www.justcode.com/dataservice/api/star/list`)
          .then((res) => res.json())
          .then((data) => {
            
    
            starField1.innerText = 'Star Name'
            starField2.innerText = 'Date of Birth'
            starField3.innerText = 'Country'
            starTable1.innerText = data[0].id;
            starTable2.innerText = data[0].starName;
            starTable3.innerText = data[0].dateOfBirth;
            starTable4.innerText = data[0].country;
            starTable5.innerText = data[0].modifiedOn;
            starTable6.innerText = data[1].id;
            starTable7.innerText = data[1].starName;
            starTable8.innerText = data[1].dateOfBirth;
            starTable9.innerText = data[1].country;
            starTable10.innerText = data[1].modifiedOn;
          })
          .catch(console.error);
      }


 