import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { dateConverter, setRecentSunday } from '../../../../utils/Functions';
import { useRecoilState } from 'recoil';
import { filterSelect } from '../../../../atom/filterSelect';

registerLocale('ko', ko);
setDefaultLocale('ko');

const CalendarElement = ({ value }) => {
  const [startDate, setStartDate] = useState(setRecentSunday(new Date()));
  const [selectedFilterOptions, setSelectedFilterOptions] =
    useRecoilState(filterSelect);

  useEffect(() => {
    if (value === 'start-date') {
      const startDay = new Date();
      const previousDay = startDay.getDate() - 56;
      startDay.setDate(previousDay);

      const prevState = { ...selectedFilterOptions };
      setSelectedFilterOptions(() => {
        prevState[value] = dateConverter(startDay);
        return prevState;
      });
      setStartDate(startDay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeDate = dateObj => {
    if (value === 'deadline-week') {
      const prevState = { ...selectedFilterOptions };
      setRecentSunday(dateObj);
      prevState[value] = dateConverter(dateObj);
      setSelectedFilterOptions({ ...prevState });
    } else {
      const prevState = { ...selectedFilterOptions };
      setSelectedFilterOptions(() => {
        prevState[value] = dateConverter(dateObj);
        return prevState;
      });
    }
  };

  return (
    <DateInput
      tabIndex={0}
      dateFormat="yyyy-MM-dd"
      selected={
        value === 'deadline-week'
          ? startDate
          : selectedFilterOptions['deadline-week']
      }
      onChange={date => {
        changeDate(date);
        setStartDate(date);
      }}
    />
  );
};

const DateInput = styled(DatePicker)`
  ${props => props.theme.calendarInput};
`;

export default CalendarElement;
