// importiamo il file con le funzioni per la parte di implementazione logica
const {replaceDash, slugCount, missingTitleArray} = require("./createSlug");

const {test, expect} = require("@jest/globals");

describe('SlugTest', () => {

    test('dovrebbe ritornare una stringa', () => { 

        const result = 'questo è un testo';

        expect(result).toBe('questo è un testo');

    }),
    test('dovrebbe ritornare una stringa in lowercase', () => {
        const testo = 'UN TESTO';
        const result = testo.toLowerCase();

        expect(result).toBe('un testo');
    }), 
    test('dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
        const testo = 'un testo con degli spazi';
        const result = replaceDash(testo);

        expect(result).toBe('un-testo-con-degli-spazi');
    }),
    test('dovrebbe incrementare di 1 lo slug quando esiste già', () => {
        const arraySlug = ['slug-1', 'slug-2'];
        const testo = 'slug-3';
        const result = slugCount(testo, arraySlug);
        expect(result).toBe(2); // L'array inizia dall'indice 0, quindi 'slug-3' è al terzo posto
    }),
    test('lanciare un errore in caso di titolo non presente o formato errato-lanciare un errore se manca array', () => {
        expect(() => missingTitleArray(null, ['slug-1', 'slug-2'])).toThrow('manca il testo');
        expect(() => missingTitleArray(1, ['slug-1', 'slug-2'])).toThrow('il testo dovrebbe essere una stringa');
        expect(() => missingTitleArray('testo', 'array')).toThrow('manca array');
    });
    

});