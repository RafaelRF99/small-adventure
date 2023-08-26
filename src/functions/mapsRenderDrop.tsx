import { renderDrop } from "./renderDrop"

export function MapsRenderMonstros(qtd: number) {
    if (qtd === 1) {
        const variavel = ''
        let valor = renderDrop(11)
        return valor
    }
    if (qtd === 2) {
        const variavel = ''
        let valor = renderDrop(11)
        let valor2 = renderDrop(11)
        return valor + " " + valor2
    }
}

export function MapsRenderBau(bau: boolean) {
    if (bau) {
        let valor = renderDrop(3)
        return valor
    }
}

export function MapsRenderTrap(qtd: number) {
    if (qtd === 1) {
        const variavel = ''
        let valor = renderDrop(4)
        return valor
    }
    if (qtd === 2) {
        const variavel = ''
        let valor = renderDrop(4)
        let valor2 = renderDrop(4)
        return (
            <div>
                {valor}
                <hr />
                {valor2}
            </div>
        )
    }
    if (qtd === 3) {
        const variavel = ''
        let valor = renderDrop(4)
        let valor2 = renderDrop(4)
        let valor3 = renderDrop(4)
        return (
            <div>
                {valor}
                <hr />
                {valor2}
                <hr />
                {valor3}
            </div>
        )
    }
}