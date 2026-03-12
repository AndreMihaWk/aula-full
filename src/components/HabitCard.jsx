function HabitCard ({titulo, meta, ativo = true, diasFeitos =0,  categoria = 'Geral' }) {

const metaAtinginda  = diasFeitos >= meta


const mensagemMeta = metaAtinginda ? 'Meta da semana atingida' : `${diasFeitos} de ${meta} dias cnocluidos`


return(


    <div className="habit-card">
        <h3>{titulo}</h3>
        <p>{mensagemMeta}</p>
        <small>Categoria: {categoria}</small>


        <span>{ativo ? 'Ativo' : 'Pausado'}</span>

        {metaAtinginda && (<p>Parabéns ! Você manteve a sequência essa semana!</p>)}


    </div>
)


}

export default HabitCard