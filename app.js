async function getResults() {
    try {
        const result = await fetch('./results.json');
        const data = await result.json();

        return data;
    }
    catch(error){
        console.log(error);
    }
}


const table = document.getElementById('table');


function createTable(Alltasks) {

    for (let task of Alltasks) {
    table.innerHTML += `
    <tr>
        <td>${task.title}</td>
        <td>${task.priority}</td>
        <td>${task.isDone}</td>
    </tr>
    `
    }}

async function main() {
    const dataResults = await getResults();
    createTable(dataResults.results)
}
main()