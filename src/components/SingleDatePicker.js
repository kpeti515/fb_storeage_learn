import React, { useState } from 'react'
import moment from 'moment'
import localization from 'moment/locale/hu'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
moment().locale("hu", localization)

const SingleDatePickerForm = () => {
  const [date, setDate] = useState(moment())
  const datePick = (validFrom) => {
    setDate(() => validFrom)
  }

  const [focused, setFocused] = useState({ focused: false })
  const setCalendarFocus = (focus) => {
    setFocused(() => focus)
  }

  return (
    <SingleDatePicker
      date={date}
      onDateChange={datePick}
      focused={focused.focused}
      onFocusChange={setCalendarFocus}
      numberOfMonths={1}
      isOutsideRange={() => false}
      block
    />
  )
}

export { SingleDatePickerForm as default }