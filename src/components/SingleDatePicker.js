import React, {useState} from 'react'
import moment from 'moment'
import localization from 'moment/locale/hu'
import 'react-dates/initialize';
import {  SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
moment().locale("hu", localization)

const SingleDatePickerForm = () => {
  const [date, setDate] = useState(moment())
  const datePick = (validFrom) => {
    setDate(() => validFrom)
  }

  const [focused, setFocused] = useState(false)
  const setCalendarFocus = (focus) => {
    setFocused(() => focus)
  }
  return (
    <SingleDatePicker
      date={date} // momentPropTypes.momentObj or null
      onDateChange={datePick} // PropTypes.func.isRequired
      focused={focused} // PropTypes.bool
      onFocusChange={setCalendarFocus} // PropTypes.func.isRequired
      id="your_unique_id" // PropTypes.string.isRequired,
    />
  )
}

export { SingleDatePickerForm as default }