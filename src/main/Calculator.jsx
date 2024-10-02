/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

//Variavel que irá representar o estado inicial da aplicação;
const initialState = {
  displayValue: '0',//valor que será exibido no display da calculadora;
  clearDisplay: false, //variavel que irá limpar o display, inicialmente valendo false;
  operation: null, //variavel que irá armazenar as operações;
  values: [0, 0], //Array que irá armazenar dois valores
   /*
    inicialmente irá digitar o primeiro valor e escolher alguma operação,
    após escolher alguma operação o valor é armazenado na primeira posição do array
    e o proximo valor que será escolhido será armazendo
  */
    current: 0 // vai dizer qual valor está manipulando, se é o indice 0 do array ou 1;
};
export default class Calculator extends Component {

  state = {...initialState} //clone do objeto initialState

  constructor(props) {
    super(props)

    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.addDigit = this.addDigit.bind(this)
  }
  clearMemory() {
    this.setState({...initialState}) //Se o clear memory for invocado ele irá voltar para o estado inicial;
  }
  setOperation(operation) {
    console.log(operation)
  }
  addDigit(n) {
    //Se eu já recebi um '.' no display eu não posso ter um outro '.', se já tiver um '.'
    //Vou passar para a proxima; (REGRA PARA EVITAR TER DOIS PONTOS)
    const clearDisplay = this.state.displayValue === '0'
    || this.state.clearDisplay
    //O valor current(atual) vai depender se o display será limpo ou não
    const currentValue = clearDisplay? '' : this.state.displayValue
    const displayValue= currentValue + n
    this.setState({displayValue, clearDisplay: false})

    //PROXIMA REGRA:
    if (n !== '.') {
      const i = this.state.current//peguei o indice do valor que eu estou alterando
      const newValue = parseFloat(displayValue) //converti para float
      const values = [...this.state.values]//peguei os valores e clonei usando o spred dentro de um novo array
      values[i] = newValue//alterei o valor atual que estou mexendo que pode ser o indice 0 ou 1 (colocando novo valor)
      this.setState({ values })//depois adicionar o novo array dentro de state
      console.log(values)
  }
  }
  render() {

    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearMemory} triple />
        <Button label="/" click={this.setOperation} operation />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDigit} double />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation />
      </div>
    )
  }
}