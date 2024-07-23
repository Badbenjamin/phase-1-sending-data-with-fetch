// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// }

// const configurationObject = {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert("Bad things!");
//         console.log(error.message);
//     });
   
function submitData (userName, userEmail) {

    const userData = {
        name: userName,
        email: userEmail
    }

    const configurationObject = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData),
    };

    console.log("confObj", configurationObject)
    
    fetch 
    fetch("http://localhost:3000/users", configurationObject)
        .then(response => response.json())
        .then(serverData => {
            console.log("srvDat", serverData.id)
            
            const body = document.querySelector('body')
            console.log(body)
            const para = document.createElement('p')
            body.appendChild(para);
            para.textContent = serverData.id;
            
            
        })
};

