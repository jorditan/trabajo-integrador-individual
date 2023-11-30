function Etiqueta({importancia, onClick}) {
     return (
          <div>
               <button type="button" id="botonEtiqueta" value={importancia.valor} onClick={() => onClick(importancia)}>
                    {importancia.valor}
               </button>
          </div>
     );
}

export default Etiqueta;