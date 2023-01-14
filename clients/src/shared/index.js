import { Spinner } from "react-bootstrap";
const fullmonthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const fullNumberMonth = ['01','02','03','04','05','06','07','08','09','10','11','12'];
function formateDate(date) {
  var event = new Date(date);
  let month = fullmonthName[event.getMonth()];
  let day = event.getDate();
  let year = event.getFullYear();
  return `${month} ${day} ${year}`;
}

function formateDateWithDay(date) {
  var event = new Date(date);
  let month = fullmonthName[event.getMonth()];
  let day = event.getDate();
  let dayName = weekday[event.getDay()];
  let year = event.getFullYear();
  return `${dayName}, ${month} ${day}, ${year}`;
}

function numberWithCommas(number) {
  if(number)
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function dateOfBirthFormate(date) {
  var event = new Date(date);
  let month =fullNumberMonth[event.getMonth()];
  let day =event.getDate();
  let year = event.getFullYear();
  return`${year}-${month}-${day} `;
}

function isNumber(evt) {
  evt = evt ? evt : window.event;
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode < 48 || charCode > 57) {
    evt.preventDefault();
  } else {
    return true;
  }
}

function buttonSpinner(show) {
  return (
    <>
      {show ? (
        <div className="spinner-button">
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        </div>
      ) : null}
    </>
  );
}

function spinner(show) {
  return (
    <>
      {show ? (
        <div className="text-center pt-4">
          <Spinner animation="border" role="status" variant="primary" />
        </div>
      ) : null}
    </>
  );
}



function CustomLoader() {
  return (
    <div className="loader-spinner-wrap">
      <div className="spinner-border-wrap">
        <div className="spinner-border"></div>
      </div>
    </div>
  );
}

export {
  formateDate,
  isNumber,
  buttonSpinner,
  spinner,
  CustomLoader,
  dateOfBirthFormate,
  formateDateWithDay,
  numberWithCommas,
};

// export default Common;
