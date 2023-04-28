import { useForm } from "react-hook-form";
import { useState } from "react";



function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });
  const onSubmit = data => {
    const { day, month, year } = data;
    const birthDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();
    const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
    const daysDiff = currentDate.getDate() - birthDate.getDate();
    setAge({ years: yearsDiff, months: monthsDiff, days: daysDiff });
  }

  return (
    <div className="bg-neutral-light-grey h-screen flex items-center justify-center font-poppins">
      <div className="bg-neutral-white w-2/5 p-8 rounded-3xl rounded-br-[10rem]">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <label className="text-neutral-smokey-grey text-xs" htmlFor="day">DAY</label>
              <input
                className={`p-3 w-32 border ${errors.day ? 'focus:border-primary-light-red border-primary-light-red' : 'border-neutral-dark-grey'
                  } text-lg rounded-lg focus:border-primary-purple focus:border focus:outline-none`}
                type="number"
                id="day"
                placeholder="DD"
                {...register("day", { required: "This field is required", min: { value: 1, message: "Must be a valit day" }, max: { value: 31, message: "Must be a valit day" } })}
              />
              {errors.day && <span className="text-primary-light-red text-xs italic">{errors.day.message}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-neutral-smokey-grey text-xs" htmlFor="month">MONTH</label>
              <input
                className={`p-3 w-32 border ${errors.month ? 'focus:border-primary-light-red border-primary-light-red' : 'border-neutral-dark-grey'
                  } text-lg rounded-lg focus:border-primary-purple focus:border focus:outline-none`}
                type="number"
                id="month"
                placeholder="MM"
                {...register("month", { required: "This field is required", min: { value: 1, message: "Must be a valit month" }, max: { value: 12, message: "Must be a valit month" } })}
              />
              {errors.month && <span className="text-primary-light-red text-xs italic">{errors.month.message}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-neutral-smokey-grey text-xs" htmlFor="year">
                YEAR
              </label>
              <input
                className={`p-3 w-32 border ${errors.year ? 'focus:border-primary-light-red border-primary-light-red' : 'border-neutral-dark-grey'
                  } text-lg rounded-lg focus:border-primary-purple focus:border focus:outline-none`}
                type="number"
                id="year"
                placeholder="YYYY"
                {...register("year", {
                  required: "This field is required",
                  max: {
                    value: new Date().getFullYear(),
                    message: `Must be in the past`
                  }
                })}
              />
              {errors.year && <span className="text-primary-light-red text-xs italic">{errors.year.message}</span>}
            </div>
          </div>

          <div className="flex items-center">
            <hr className="flex-grow border-neutral-grey"></hr>
            <button type="submit" className="bg-primary-purple rounded-full hover:bg-neutral-off-black">
              <img className="p-4 w-20 h-20" src="./src/assets/icon-arrow.svg" alt="Submit icon" />
            </button>
          </div>


        </form>
        <div>
          <div className="text-6xl flex gap-1">
            <p className="text-primary-purple font-bold">{age.years}</p>
            <p className="text-neutral-off-black  font-bold italic">Years</p>
          </div>
          <div className="text-6xl flex gap-1">
            <p className="text-primary-purple font-bold">{age.months}</p>
            <p className="text-neutral-off-black text-6xl font-bold italic">Months</p>
          </div>
          <div className="text-6xl flex gap-1">
            <p className="text-primary-purple font-bold">{age.days}</p>
            <p className="text-neutral-off-black text-6xl font-bold italic">Days</p>
          </div>




        </div>
      </div>

    </div>
  )
}

export default App
