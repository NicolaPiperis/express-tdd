function replaceDash(str) {
    // funzione per sostituire tutti gli spazi con il secondo argomento della funzione
    return str.replace(/\s+/g, '-');
};

function slugCount(string, arrayS) {
    arrayS.push(string);
    return arrayS.length - 1; // Restituisce l'indice dell'ultimo elemento inserito
};

function missingTitleArray (string, array) {
    if (string === null ) {
        throw new Error('Manca il testo o non è un formato valido');
    }

    if (!Array.isArray(array)) {
        throw new Error('array mancante');
    }
};

module.exports = {
    replaceDash,
    slugCount,
    missingTitleArray
}