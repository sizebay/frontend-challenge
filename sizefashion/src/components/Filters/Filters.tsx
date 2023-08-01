const Filters = () => {
  return (
    <div>
      {/* componente do botão de mostrar os filtros */}

      <div className={'hidden md:block md:top-4 md:sticky'}>
        <form onSubmit={e => e.preventDefault()}>
          {/* componentes:
          campo de busca
          categorias
          marcas */}
        </form>
        {/* botão de limpar filtros */}
      </div>
    </div>
  )
}

export default Filters
