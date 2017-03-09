import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment';

import 'react-day-picker/lib/style.css';

class DayRangePicker extends Component {
    state = {
        from: null,
        to: null
    }

    handleDayClick = (day) => {
        console.log('handleDayClick');
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    render() {
        const { from, to } = this.state;

        const format = (day) => day ? moment(day).format('L') : '--/--';

        const fromFormatted = format(from);
        const toFormatted = format(to);

        return (
            <div>
              <p>Selected from {fromFormatted} to {toFormatted}.</p>
              <DayPicker selectedDays={ [from, {from, to}] } onDayClick={this.handleDayClick} />
            </div>
        );
    }
}

export default DayRangePicker;
