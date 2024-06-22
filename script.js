function simulateContest(pHeads, numSimulations = 10000) {
    const numCoins200 = 200;
    const numCoins100 = 100;
    
    let wins200 = 0;
    let wins100 = 0;
    let ties = 0;

    for (let i = 0; i < numSimulations; i++) {
        let heads200 = 0;
        for (let j = 0; j < numCoins200; j++) {
            if (Math.random() < pHeads) {
                heads200++;
            }
        }
        
        const heads100 = numCoins100;

        if (heads200 > heads100) {
            wins200++;
        } else if (heads200 < heads100) {
            wins100++;
        } else {
            ties++;
        }
    }

    return { wins200, wins100, ties };
}

function runSimulation() {
    const pHeads = parseFloat(document.getElementById('probability').value);
    const results = simulateContest(pHeads);

    document.getElementById('results').innerHTML = `
        <p>Probability of heads: ${pHeads}</p>
        <p>200 coins set wins: ${results.wins200} times</p>
        <p>100 coins set wins: ${results.wins100} times</p>
        <p>Ties: ${results.ties} times</p>
    `;
}
