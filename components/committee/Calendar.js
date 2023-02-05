import React, { useState, useContext, useCallback, useEffect } from "react";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";

import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";
import axios from "axios";

// import AppointmentForm from "./AppointmentForm";

// import AppointmentsContext from "../../store/Doctor/appointments-context";
// import CustomizedAppointmentForm from "./AppointmentForm/CustomizedAppointmentForm";
// import {
//   BasicLayout,
//   TextEditor,
//   Layout,
// } from "./AppointmentForm/CustomizedAppointmentForm";

function AppointmentCalendar(props) {
//   const appointmentsCtx = useContext(AppointmentsContext);
    const [eventList, setEventList] = useState([])
    async function getApprovedEvents(){
        const response = await axios.get(`http://localhost:5000/api/events/approved`,{},{})
        console.log(response.data)
        // setEventList(response.data)
    }

    useEffect(() => {
        getApprovedEvents()
        // if(!eventList){return Loading;}
    },[])

  const [addedAppointment, setAddedAppointment] = useState({});
  const [isAppointmentBeingCreated, setIsAppointmentBeingCreated] =
    useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [currentView, setCurrentView] = useState("Week");
    console.log(eventList)
  const calendarAppointments = eventList?.map((appointment) => {
    // const temp = { ...appointment?.appointment };
    let temp = {}
    const index = appointment.start_time.indexOf(":");
    let timeHours;
    if (index != -1) {
      timeHours = appointment.start_time.substring(0, index);
    } else {
      timeHours = appointment.start_time.substring(0);
    }
    let timeMinutes;
    if (index != -1) {
      timeMinutes = appointment.start_time.substring(index + 1);
    }
    const startDate = new Date(
      new Date(appointment.date).setHours(timeHours, timeMinutes && timeMinutes || 0)
    );

    const endDate = new Date(startDate.getTime() + 1000 * 60 * 60);

    temp.startDate = startDate;
    temp.endDate = endDate;
    temp.title = `${appointment?.name}`;
    return temp;
  });

  const viewChangeHandler = (event) => {
    setCurrentView(event.target.value);
  };

  const showAppointmentFormHandler = () => {
    setShowAppointmentForm(true);
  };

  const hideAppointmentFormHandler = () => {
    setShowAppointmentForm(false);
  };

  // const onCommitChanges = useCallback(
  //   ({ added, changed, deleted }) => {
  //     if (added) {
  //       const startingAddedId =
  //         data.length > 0 ? data[data.length - 1].id + 1 : 0;
  //       setData([...data, { id: startingAddedId, ...added }]);
  //     }
  //     if (changed) {
  //       setData(
  //         data.map((appointment) =>
  //           changed[appointment.id]
  //             ? { ...appointment, ...changed[appointment.id] }
  //             : appointment
  //         )
  //       );
  //     }
  //     if (deleted !== undefined) {
  //       setData(data.filter((appointment) => appointment.id !== deleted));
  //     }
  //     setIsAppointmentBeingCreated(false);
  //   },
  //   [setData, setIsAppointmentBeingCreated, data]
  // );

  const onCommitChanges = () => {};
  const onAddedAppointmentChange = useCallback((appointment) => {
    setAddedAppointment(appointment);
    setIsAppointmentBeingCreated(true);
  }, []);

  // const viewApppointmentHandler = ()

  const TimeTableCell = useCallback(
    React.memo(function table({ onDoubleClick, ...restProps }) {
      return (
        <WeekView.TimeTableCell
          {...restProps}
          // onDoubleClick={onDoubleClick}
        />
      );
    }),
    []
  );

  const allowDrag = useCallback(() => true, []);
  const allowResize = useCallback(() => true, []);

  const CommandButton = useCallback(({ id, ...restProps }) => {
    if (id === "deleteButton") {
      return (
        <AppointmentForm.CommandButton
          id={id}
          {...restProps}
          disabled={false}
        />
      );
    }
    return <AppointmentForm.CommandButton id={id} {...restProps} />;
  }, []);

  const viewStateActions = (
    <select
      defaultValue={currentView}
      onChange={viewChangeHandler}
      className="text-[13px] py-1 px-4 mb-2 rounded text-gray-400"
    >
      <option value="Month">Month</option>
      <option value="Week">Week</option>
      <option value="Work Week">Work Week</option>
      <option value="Day">Day</option>
    </select>
  );

  // const cust = <CustomizedAppointmentForm {...data[2]}/>

  return (
      <Scheduler data={calendarAppointments} height={300}>
        <ViewState currentViewName={currentView} currentDate={new Date()} />
        <EditingState
          onCommitChanges={onCommitChanges}
          addedAppointment={addedAppointment}
          onAddedAppointmentChange={onAddedAppointmentChange}
        />

        <IntegratedEditing />
        <WeekView
          startDayHour={0}
          endDayHour={24}
          timeTableCellComponent={TimeTableCell}
        />

        <WeekView
          name="Work Week"
          excludedDays={[0, 6]}
          startDayHour={9}
          endDayHour={19}
        />

        <DayView
          startDayHour={0}
          endDayHour={24}
          timeTableCellComponent={TimeTableCell}
        />

        <MonthView />

        <Appointments />

        <AppointmentTooltip
          // showOpenButton
          showDeleteButton={true}
        />

        {/* <AppointmentForm
          // basicLayoutComponent={BasicLayout}
          // textEditorComponent={TextEditor}
          layoutComponent={Layout}
          readOnly={false}
        /> */}

        {/* {showAppointmentForm && <AppointmentForm />} */}

        <DragDropProvider allowDrag={allowDrag} allowResize={allowResize} />
      </Scheduler>
  );
}

export default AppointmentCalendar;
