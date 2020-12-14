export default class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: true,
            value: cpf.replace(/\D+/g, '') // tira os pontos
        });
    }
    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfParcial);
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);
        this.novoCPF = cpfParcial + digito1 + digito2;  
    
                    //gera cpf novo
    }
   static geraDigito(cpfParcial) {
        let total = 0;
        let reverse = cpfParcial.length + 1; //valor do array + 1

        for (let i of cpfParcial) { // para cada valor do cpf parcial, faça
            total += reverse * Number(i); 
            reverse--;
            
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }


    valida(){
        if (!this.cpfLimpo) return false;
        if (typeof cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequence()) return false;
        if (!this.geraNovoCpf()) return false;
        return 'Validado';
    }

    isSequence(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
}