const transmission = "a7XZtGeo9Bc";

function analyzeFluxEvents(text) {
    let count = 0;

    for (let letter of text) {
        if (letter > 'x') {
            count++;
        }
    }

    if (count > 0) {
        return "Detected " + count + " high-voltage anomalies in signal stream.";
    } else {
        return "Stream stable: no dominant flux events recorded.";
    }
}

const result = analyzeFluxEvents(transmission);
console.log(result);