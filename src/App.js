import Input from './components/Input';
import Button from './components/Button';


import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  
  const handleEraseNumber = () => {
    if(currentNumber !== '') {
    
    setCurrentNumber(prev => prev.slice(0, -1));
  }
}

const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }
// Vai validar se o primeiro número é igual a zero, quando clicar no botao de soma ele vai entrar no if ja que o first numero é zero 
// Ele só vai entrar no else quando clicar no botao de igual "handleEquals"  
// Não tá funcionando, só Jesus sabe o pq 
  const handlePercentageNumber = () => {
    console.log(firstNumber,currentNumber);

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('~')
    }else {
      console.log(firstNumber,currentNumber)
      const percentagem = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(percentagem))
      setOperation('')
    }

  }

// Vai adicionar os números no input setando na Variavel current number

  const handleAddNumber = (num) => {
    
   setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
   console.log(currentNumber, firstNumber)
  }

  // Vai validar se o primeiro número é igual a zero, quando clicar no botao de soma ele vai entrar no if ja que o first numero é zero 
  // Ele só vai entrar no else quando clicar no botao de igual "handleEquals"  
  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  // Vai validar se o primeiro número é igual a zero, quando clicar no botao de soma ele vai entrar no if ja que o first numero é zero 
  // Ele só vai entrar no else quando clicar no botao de igual "handleEquals"  


  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

 // Vai validar se o primeiro número é igual a zero, quando clicar no botao de soma ele vai entrar no if ja que o first numero é zero 
  // Ele só vai entrar no else quando clicar no botao de igual "handleEquals"  
  const handMultNumber = () => {
      if(firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('')
        setOperation('*')
        
    }else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }

  // Vai validar se o primeiro número é igual a zero, quando clicar no botao de soma ele vai entrar no if ja que o first numero é zero 
  // Ele só vai entrar no else quando clicar no botao de igual "handleEquals"  

  const handleShareNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const sharing = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sharing))
      setOperation('')
    }

  }
  // Só irá verificar qual o estado da variavel Operation e chamar a função da operação que estiver la, dentro da func. da op. ele vai entrar no else 
   const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handMultNumber();
            break;
          case '/':
            handleShareNumbers();
            break;
          case '~':
            handlePercentageNumber();
            break;
           default: 
            break;
        }
    }

  }

  return (
    
    <Container >
     
     <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="*" onClick={handMultNumber}/>
          <Button label="/" onClick={handleShareNumbers}/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="<--" onClick={handleEraseNumber} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="%" onClick={() => handlePercentageNumber}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={() => handleAddNumber(',')} />
          <Button label="HP" />
        </Row>
      </Content>
    </Container>
  );
}

export default App;