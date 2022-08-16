// create the team
const generateTeam = team => {
    console.log(team);

    //Create an empty array to push html elements and loop through team data
    const html = [];

    // create the manager html
    const generateManager = manager => {
        console.log(manager);
        let managerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${manager.name} <br/>
            <i class="fa-mug-hot"></i>Manager</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item>Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item>Office Number: ${manager.officeNumber}</li>
            </ul>
            </div>
             `;
             html.push(managerHTML);
    }

    // create the html for engineers
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${engineer.name} <br/>
            <i class="fas fa-glasses"></i>Engineer</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item>Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item>Github Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
            </ul>
            </div>
             `;
             html.push(engineerHTML);
    }

    // create the html for interns
    const generateIntern = intern => {
        console.log(intern);
        let internHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${intern.name} <br/>
            <i class="fas fa-user-graduate"></i>Intern</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item>Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item>School: ${intern.school}</li>
            </ul>
            </div>
             `;
             html.push(internHTML);
    }

    

    //create loop for all of the employees
    for (let i = 0; i < team.length; i++) {
        
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateManager(team[i]);
        }
    }

    //join HTML blocks
    return html.join('');

}


// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">"
    <link rel="stylesheet" href="../dist/style.css">
    <script src="https://kit.fontawesome.com/ed9dbe6958.js" crossorigin="anonymous"></script>
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1>My Team</h1>
    </header>
           <main> ${generateTeam(team)} </main>
           
</body>
</html>
    `;
}