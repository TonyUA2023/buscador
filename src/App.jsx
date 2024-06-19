import React, { useState } from 'react';

function obtenerPermutaciones(string) {
    if (string.length <= 1) {
        return [string];
    }

    const combinaciones = [];
    for (let i = 0; i < string.length; i++) {
        const letra = string[i];
        const letrasRestantes = string.slice(0, i) + string.slice(i + 1);
        const subPermutaciones = obtenerPermutaciones(letrasRestantes);
        for (const permutacion of subPermutaciones) {
            combinaciones.push(letra + permutacion);
        }
    }
    return combinaciones;
}

function ContadorPermutaciones() {
    const [texto, setTexto] = useState('');
    const [permutaciones, setPermutaciones] = useState([]);

    const manejarCambio = (e) => {
        const nuevoTexto = e.target.value;
        setTexto(nuevoTexto);
        if (nuevoTexto.length > 0) {
            const nuevasPermutaciones = obtenerPermutaciones(nuevoTexto);
            setPermutaciones([...new Set(nuevasPermutaciones)]);
        } else {
            setPermutaciones([]);
        }
    }

    return (
        <div>
            <textarea value={texto} onChange={manejarCambio} />
            <p>Las permutaciones del texto son:</p>
            <ul>
                {permutaciones.map((perm, index) => (
                    <li key={index}>{perm}</li>
                ))}
            </ul>
        </div>
    );
}

export default ContadorPermutaciones;
