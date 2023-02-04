import { useEffect, useState, useContext } from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart, Bar }            from 'react-chartjs-2'
// import { DoctorListContext } from "./DoctorContext";
function BarChart(){
    const participantList = [{
        "month": "November 2022",
        "participants": 50
    },{
        "month": "December 2022",
        "participants": 20
    },{
        "month": "January 2023",
        "participants": 90
    },]
    const [userData, setUserData] = useState({
        labels: participantList?.map((data) => data.month),
        datasets: [{
            label: "Participants",
            data: participantList?.map((data) => data.participants),
            backgroundColor: ['#db2777'],
            barPercentage: 0.5
        }]
    });
    console.log(userData)
    // useEffect(() => {
    //     setUserData({
    //     labels: participantList?.map((data) => data.month),
    //     datasets: [{
    //         label: "Participants",
    //         data: participantList?.map((data) => data.participants),
    //         backgroundColor: ['#2f80ed'],
    //         barPercentage: 0.5
    //     }]
    // })
    // },[])
    const options = {
      scales: {
          x: {
              ticks: {
                  font: {
                      size: 8,
                  }
                  
              },
          },
          y: {
                    ticks: {
                        precision: 0
                    }
                }
    
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
  }
};
    return(
        <div>
            <Bar data = {userData} options={options}/>
        </div>
    );
}
export default BarChart;