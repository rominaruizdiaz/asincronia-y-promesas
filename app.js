async function getResults() {
    try {
        const result = await fetch('./results.json');
        const data = await result.json();

        console.log(data)

        return data;
    }
    catch(error){
        console.log(error);
    }
}
getResults()