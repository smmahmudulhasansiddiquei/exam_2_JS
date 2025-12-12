const transmission = "a7XZtGeo9Bc";

function analyzeFluxEvents(transmission) {
    let count = 0;

    for (let ch of transmission) {
        if (ch.charCodeAt() > 90) {  
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