import React from 'react'
import { evaluate } from 'mathjs';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import BedtimeOffIcon from '@mui/icons-material/BedtimeOff';

const Calculator = () => {

  const [value, setValue] = React.useState('')
  const [theme, setTheme] = React.useState(false)

  function themeSetter(){
    setTheme((theme => !theme))
  }

  function appendValue(btn){
    setValue(value => value + btn)
    console.log(value);
  }

  function calculate(){
    let cal = evaluate(value);
    setValue(cal)
  }

  function allClear(){
    setValue('')
  }

  function lastClear(){
    let str =  value.slice(0, -1)
    setValue(str)
  }

  return (
    <div id='calculator' style={{backgroundColor: theme ? "#f6f1f1"  : "#1C1C1C" }}>
        {theme ? <BedtimeIcon onClick={themeSetter} style={{color:theme ? "#f6f1f1"  : "#1C1C1C", backgroundColor: theme ? "#1C1C1C"  : "#f6f1f1" }} id="theme1"/> : <BedtimeOffIcon onClick={themeSetter}  style={{color:theme ? "#f6f1f1"  : "#1C1C1C", backgroundColor: theme ? "#1C1C1C"  : "#f6f1f1" }} id="theme1"/>}
        <div id='input'>
            <textarea wrap='hard' type="text" value={value} style={{backgroundColor: theme ? "#f6f1f1"  : "#1C1C1C", color:theme ? "#1C1C1C"  : "#f6f1f1" }} readOnly disabled/>
        </div>
        <div id='btns'>
            <div className='btn white' onClick={allClear}>AC</div>
            <div className='btn white' onClick={lastClear}>C</div>
            <div className='btn white' onClick={() => appendValue("%")}>%</div>
            <div className='btn orange' onClick={() => appendValue("/")}>&divide;</div>
            <div className='btn grey' onClick={() => appendValue("7")}>7</div>
            <div className='btn grey' onClick={() => appendValue("8")}>8</div>
            <div className='btn grey' onClick={() => appendValue("9")}>9</div>
            <div className='btn orange' onClick={() => appendValue("*")}>&times;</div>
            <div className='btn grey' onClick={() => appendValue("4")}>4</div>
            <div className='btn grey' onClick={() => appendValue("5")}>5</div>
            <div className='btn grey' onClick={() => appendValue("6")}>6</div>
            <div className='btn orange' onClick={() => appendValue("-")}>-</div>
            <div className='btn grey' onClick={() => appendValue("1")}>1</div>
            <div className='btn grey' onClick={() => appendValue("2")}>2</div>
            <div className='btn grey' onClick={() => appendValue("3")}>3</div>
            <div className='btn orange' onClick={() => appendValue("+")}>+</div>
            <div className='btn0 grey' onClick={() => appendValue("0")}>0</div>
            <div className='btn grey' onClick={() => appendValue(".")}>.</div>
            <div className='btn orange' onClick={calculate}>=</div>
        </div>
    </div>
  )
}

export default Calculator