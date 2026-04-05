import { useState } from "react"

import './app.css'
import BlockDate from "./UI/BlockDate"
import Button from "./UI/button"

const date = new Date()

function App() {
  const [currentYear, setCurrentYear] = useState<number>(date.getFullYear())
  const [currentDay] = useState<number>(date.getDate())
  const [currentMonth, setCurrentMonth] = useState<number>(date.getMonth())
  const firstDay = new Date(currentYear, currentMonth, 1)
  const dayOffset:number = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1
  const februaryDays:number = ((currentYear % 4 == 0 && currentYear % 100 !== 0) || currentYear % 400 == 0? 29 : 28)
  const months:{month:string, days:number}[] = [
    { month: "January", days: 31 },
    { month: "February", days: februaryDays},
    { month: "March", days: 31 },
    { month: "April", days: 30 },
    { month: "May", days: 31 },
    { month: "June", days: 30 },
    { month: "July", days: 31 },
    { month: "August", days: 31 },
    { month: "September", days: 30 },
    { month: "October", days: 31 },
    { month: "November", days: 30 },
    { month: "December", days: 31 }
  ]


  const arrayDays = Array.from({length: (months[currentMonth].days + dayOffset)}, (element, index) => { 
    return index + 1;
  });

  function Prev(){
    if(currentMonth == 0)
    {
      setCurrentYear((prevCurrentYear) => prevCurrentYear - 1)
      setCurrentMonth(11)
    }
    else{
      setCurrentMonth((prevCurrentMonth) => prevCurrentMonth - 1)
    }
  }

  function Next(){
    if(currentMonth == 11)
    {
      setCurrentYear((prevCurrentYear) => prevCurrentYear + 1)
      setCurrentMonth(0)
    }
    else{
      setCurrentMonth((prevCurrentMonth) => prevCurrentMonth + 1)
    }
  }


  return (
    <>
      <div className="calendar-container">
        <div className="year-container">
          <p>{currentYear}</p>
        </div>
        <div className="months-container">
          <Button content="<" className="nav-btn prev" func={Prev!}/>
          <h2 className="month-name">{months[currentMonth].month}</h2>
          <Button content=">" className="nav-btn next" func={Next!}/>
        </div>

        <div className="week-container">
          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(d => (
            <div key={d} className="weekday-label">{d}</div>
          ))}
        </div>

        <div className="calendar-block-container">
          {arrayDays.map((element, index) => (
            <BlockDate 
              key={index}
              day={index < dayOffset ? 0 : ((index + 1) - dayOffset)} 
              classNameStatus={index + 1 == currentDay + dayOffset && currentMonth == date.getMonth() && currentYear == date.getFullYear() ? 'active' : 'inactive'} 
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
