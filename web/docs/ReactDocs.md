# 1. React
## 1.1. JSX - Sintaxe do XML no JavaScript
* Componentes - separar a aplicação em pequenos blocos reutilizáveis
## 1.2. Propriedade - São atribudos que enviamos para o componente
  Ex:

  <code>
  const Header:React.FC<HeaderProps> = (props) => {
  return(
    <header>
      <h1>{props.title}</h1>
    </header>
  )
  }
  </code>

## 1.3. Interface (React com TS) - define a tipagem dum objeto
  Ex: `Interface HeaderProps{title: String}`, quando a propriedade é obrigatória
  Ex: `Interface HeaderProps{title: String}`, quando a propriedade não é obrigatória

## 1.4. Estado e imutalibilidade - Estado: quando queremos armazenar uma informação a partir do componente
  - Sempre que haver uma alteração nas propriedades, o estado se atualiza automaticamente.
  - Sempre que criarmos um estado para um array ou objeto, devemos informar manualmente o tipo da variável


  <code>
  const [counter, setCounter] = useState(100);
  function hadleButtonClick() {
    setCounter(counter / 2);
  }
  return (
    <div>
      <Header title={`Contador: ${counter}`} />
      <h1>{counter}</h1>
      <button type="button"
      onClick={hadleButtonClick>Aumentar</button>
    </div>
  );
  </code>

