import { useEffect, useRef, useState } from "react";
//import DisplayPage from "./DisplayPage";
import { FaCircleArrowDown } from "react-icons/fa6";



const Form = () => {
  const [date, setDate] = useState({days: "", months: "", years: ""});
  const [dateDifference, setDateDifference] = useState("");
   

  const handleInputChange = (e) => {
    setDate(e.target.value)
    
  }
  
     
  const inputRef = useRef()

    const ageCountHandler = () => {
      
      const currentDate = new Date();
      const birthDate = new Date(date)
      const diffInTime = currentDate - birthDate;
      const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24))
       const diffInMonths = currentDate.getMonth() - birthDate.getMonth() + 
       (12 * (currentDate.getFullYear() - birthDate.getFullYear()));
       const diffInYears = currentDate.getFullYear() - birthDate.getFullYear();
         
       setDateDifference({
        days: diffInDays,
        months: diffInMonths,
        years: diffInYears
      });
      
    };
  
  
     useEffect(() => {
       inputRef.current.focus()
       inputRef.current.value = "";
     },[])

    
      
      
    
       
    return ( 
        <>
            <form className="form">
            
                <div className="form-input">
                {date.days <= 31 && (
                <label htmlFor="day" className="label">DAY</label>)}
                {date.days > 31 && (<label htmlFor="day" className="label-error">DAY</label>)}
                    <br />
                   <input type="number" ref={inputRef} min={1} max={31} required value={date.days} placeholder="DD" onChange={handleInputChange}/>
                   <br />
                   {date.days > 31 && (
                <small className="error-msg">Must be a valid date</small>)}
                </div>
                
                <div>
                  {date.months <= 12 && (
                    <label htmlFor="month" className="label">MONTH</label>)}
                    {date.months > 12 && (
                     <label htmlFor="month" className="label-error">MONTH</label>
                    )}
                     <br />
  
                   <input type="number" min={1} max={12} required value={date.months} placeholder="MM" onChange={handleInputChange}/><br />
                   {date.months > 12 && (
                  <small className="error-msg">Must be a valid month</small>)}
         
                </div>
                <br />
                <div>
                  {date.years <= 2023 && (
                    <label htmlFor="year" className="label">YEAR</label>)}
                    {date.years > 2023 && (
                      <label htmlFor="year" className="label-error">YEAR</label>)}
                     <br />
                   <input type="number" value={date.years} required max={2023} placeholder="YYYY" onChange={handleInputChange}/><br />
                   {date.years > 2023 && (
                  <small className="error-msg">Must be a valid month</small>)}
                </div>
                
            </form>
            <div className='icon-container'>
           <hr />
           <FaCircleArrowDown size={48} className='icon' onClick={ageCountHandler}/>
        </div>
        <div className="page">
      {!dateDifference ? 
          (<h1 className="time"><span className="year-span">_ _</span> years</h1>) :
         
          ( <h1 className="time"><span>{dateDifference.years}</span> years</h1>) }
        <div>
        {!dateDifference ? (
          <h1 className="time"><span className="month-span">_ _</span> months</h1>) :
          ( <h1 className="time"><span>{dateDifference.months}</span> months</h1>)}
        </div>
         <div>
         {!dateDifference ? (
            <h1 className="time"><span className="day-span">_ _</span> days</h1>) :
        ( <h1 className="time"><span>{dateDifference.days}</span> days</h1>)}
         </div>
      </div>
         
        
     </>
     );
  }
  
export default Form;  