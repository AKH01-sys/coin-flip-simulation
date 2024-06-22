function simulateContest(pHeads200, pHeads100, numSimulations) {
    const numCoins200 = 200; // 2X coins
    const numCoins100 = 100; // X coins
    
    let wins200 = 0;
    let wins100 = 0;
    let ties = 0;

    for (let i = 0; i < numSimulations; i++) {
        let heads200 = 0;
        let heads100 = 0;

        // Simulate the 2X coins with the given probability of heads
        for (let j = 0; j < numCoins200; j++) {
            if (Math.random() < pHeads200) {
                heads200++;
            }
        }

        // Simulate the X coins with the given probability of heads
        for (let k = 0; k < numCoins100; k++) {
            if (Math.random() < pHeads100) {
                heads100++;
            }
        }

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
    const pHeads200 = parseFloat(document.getElementById('probability200').value);
    const pHeads100 = parseFloat(document.getElementById('probability100').value);
    const numSimulations = parseInt(document.getElementById('numSimulations').value, 10);

    const results = simulateContest(pHeads200, pHeads100, numSimulations);

    document.getElementById('results').innerHTML = `
        <p>Probability of heads for 2X coins: ${pHeads200}</p>
        <p>Probability of heads for X coins: ${pHeads100}</p>
        <p>Number of simulations: ${numSimulations}</p>
        <p>2X coins set wins: ${results.wins200} times</p>
        <p>X coins set wins: ${results.wins100} times</p>
        <p>Ties: ${results.ties} times</p>
    `;
}
