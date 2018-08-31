import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateTimePicker from 'terra-date-time-picker/lib/DateTimePicker';


const propTypes = {
  /**
   * The current entered date time. Use for the selected date message.
   */
  value: PropTypes.node,
};

const defaultProps = {
  value: '',
};

class DateTimePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dateTime: this.props.value };
    this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
  }

  handleDateTimeChange(event, dateTime) {
    this.setState({ dateTime });
  }

  render() {
    return (
      <div>
        <p>
Selected ISO Date Time:
          {this.state.dateTime}
        </p>
        <DateTimePicker
          name="date-time-picker-example"
          onChange={this.handleDateTimeChange}
          {...this.props}
        />
      </div>
    );
  }
}

DateTimePickerExample.propTypes = propTypes;
DateTimePickerExample.defualtProps = defaultProps;

const DateTimePickerExampleDST = () => (
  <DateTimePickerExample
    value={moment().format()}
  />
);

export default DateTimePickerExampleDST;
