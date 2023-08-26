import styles from './RandomItem.module.scss';
// JSON
import { acessorios, saque, baus, armadilhas, colares, clava1, clava2, clava3, monstros, monstros2, pocoes } from './drop';

export function renderDrop (tier: number) {
  if (tier === 1) {
    const qtd = acessorios.length
    const random = Math.floor(Math.random() * qtd)
    const escolha = acessorios[random]
    if (escolha.dano) {
      return (
        <span className={styles.render}><p> {escolha.lot + ' +' + escolha.dano} </p> <p> {escolha.effect} </p></span>
      )
    }
    return escolha.lot + '*'
  }
  if (tier === 2) {
    const qtd = saque.length
    const random = Math.floor(Math.random() * qtd)
    const escolha = saque[random]
    return escolha.lot
  }
  if (tier === 3) {
    const qtd = baus.length
    const random = Math.floor(Math.random() * qtd)
    const escolha = baus[random]
    return escolha.lot
  }
  if (tier === 4) {
    const qtd = armadilhas.length
    const random = Math.floor(Math.random() * qtd)
    const escolha = armadilhas[random]
    return (
      <span className={styles.render}><p> {escolha.trap} </p> <p> {escolha.effect} </p></span>
    )
  }
  if (tier === 5) {
    const qtd = colares.length
    const random = Math.floor(Math.random() * qtd)
    const escolha = colares[random]
    return (
      <span className={styles.render}><p> {escolha.lot} </p> <p> {escolha.effect} </p></span>
    )
  }
  if (tier === 6) {
    const qtd = clava1.length
    const random = Math.floor(Math.random() * qtd)
    const escolha = clava1[random]
    return escolha.bonus
  }
  if (tier === 7) {
    const qtd = clava2.length
    const random = Math.floor(Math.random() * qtd)
    const escolha = clava2[random]
    return escolha.bonus
  }
  if (tier === 8) {
    const qtd = clava3.length
    const random = Math.floor(Math.random() * qtd)
    const escolha = clava3[random]
    return escolha.bonus
  }
  if (tier === 11) {
    const qtd = monstros.length
    const random = Math.floor(Math.random() * qtd)
    const escolha = monstros[random]
    return escolha.mob
  }
  if (tier === 13) {
    const qtd = monstros2.length
    const random = Math.floor(Math.random() * qtd)
    const escolha = monstros2[random]
    return escolha.mob
  }else {
  }
  if (tier === 10) {
    const qtd = pocoes.length
    const random = Math.floor(Math.random() * qtd)
    const escolha = pocoes[random]
    return escolha.mob
  }else {
    return 'Erro'
  }
}
