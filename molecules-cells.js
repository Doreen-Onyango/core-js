function DNAtoRNA(dna) {
    let rna = '';
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'G':
                rna += 'C';
                break;
            case 'C':
                rna += 'G';
                break;
            case 'T':
                rna += 'A';
                break;
            case 'A':
                rna += 'U';
                break;
            default:
                throw new Error('Invalid DNA nucleotide: ' + dna[i]);
        }
    }
    return rna;
}
function RNAtoDNA(rna) {
    let dna = '';
    for (let i = 0; i < rna.length; i++) {
        switch (rna[i]) {
            case 'C':
                dna += 'G';
                break;
            case 'G':
                dna += 'C';
                break;
            case 'A':
                dna += 'T';
                break;
            case 'U':
                dna += 'A';
                break;
            default:
                throw new Error('Invalid RNA nucleotide: ' + rna[i]);
        }
    }
    return dna;
}

console.log(DNAtoRNA("ATCG")); 
console.log(RNAtoDNA("UAGC")); 
