const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const { reverse } = require("lodash");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(
  "mongodb://localhost:27017/studentsDetailsDB",
  {
    useNewUrlParser: true,
  }
);

const studentsSchema = {
  student_name: String,
  school_name: String,
};

const StudentDetail = mongoose.model("StudentDetail", studentsSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const sessionYear = req.body.sessionyear;
  const rollNo = req.body.rollno;
  const studentName = _.toUpper(req.body.studentname);
  const fatherName = _.toUpper(req.body.fathername);
  const motherName = _.toUpper(req.body.mothername);
  const schoolName = _.toUpper(req.body.schoolname);
  const Day = req.body.day;
  const Month = req.body.month;
  const Year = req.body.year;
  const studentClass = req.body.studentclass;
  const StudentDob = Day + "/" + Month + "/" + Year;

  const StudentInfo = new StudentDetail({
    student_name: studentName,
    school_name: schoolName,
  });

  StudentInfo.save();

  // 1st subject
  const sub1Code = req.body.sub1code;
  const sub1Name = _.toUpper(req.body.sub1name);
  const sub1ThMarks = Number(req.body.sub1thmarks);
  const sub1PrMarks = Number(req.body.sub1prmarks);
  const sub1TotalMarks = sub1ThMarks + sub1PrMarks;

  // 2nd subject
  const sub2Code = req.body.sub2code;
  const sub2Name = _.toUpper(req.body.sub2name);
  const sub2ThMarks = Number(req.body.sub2thmarks);
  const sub2PrMarks = Number(req.body.sub2prmarks);
  const sub2TotalMarks = sub2ThMarks + sub2PrMarks;

  // 3nd subject
  const sub3Code = req.body.sub3code;
  const sub3Name = _.toUpper(req.body.sub3name);
  const sub3ThMarks = Number(req.body.sub3thmarks);
  const sub3PrMarks = Number(req.body.sub3prmarks);
  const sub3TotalMarks = sub3ThMarks + sub3PrMarks;

  // 4th subject
  const sub4Code = req.body.sub4code;
  const sub4Name = _.toUpper(req.body.sub4name);
  const sub4ThMarks = Number(req.body.sub4thmarks);
  const sub4PrMarks = Number(req.body.sub4prmarks);
  const sub4TotalMarks = sub4ThMarks + sub4PrMarks;

  // 5th subjec5
  const sub5Code = req.body.sub5code;
  const sub5Name = _.toUpper(req.body.sub5name);
  const sub5ThMarks = Number(req.body.sub5thmarks);
  const sub5PrMarks = Number(req.body.sub5prmarks);
  const sub5TotalMarks = sub5ThMarks + sub5PrMarks;

  if (studentClass === "Class X") {
    res.render("class10th", {
      SESSIONYEAR: sessionYear,
      ROLLNO: rollNo,
      STUDENTNAME: studentName,
      FATHERNAME: fatherName,
      MOTHERNAME: motherName,
      STUDENTDOB: StudentDob,
      SCHOOLNAME: schoolName,
      CLASS: studentClass,

      // 1st subject
      SUB1CODE: sub1Code,
      SUB1NAME: sub1Name,
      SUB1THMARKS: sub1ThMarks,
      SUB1PRMARKS: sub1PrMarks,
      SUB1TOTALMARKS: sub1TotalMarks,

      // 2nd subject
      SUB2CODE: sub2Code,
      SUB2NAME: sub2Name,
      SUB2THMARKS: sub2ThMarks,
      SUB2PRMARKS: sub2PrMarks,
      SUB2TOTALMARKS: sub2TotalMarks,

      // 3rd subject
      SUB3CODE: sub3Code,
      SUB3NAME: sub3Name,
      SUB3THMARKS: sub3ThMarks,
      SUB3PRMARKS: sub3PrMarks,
      SUB3TOTALMARKS: sub3TotalMarks,

      // 4t subject
      SUB4CODE: sub4Code,
      SUB4NAME: sub4Name,
      SUB4THMARKS: sub4ThMarks,
      SUB4PRMARKS: sub4PrMarks,
      SUB4TOTALMARKS: sub4TotalMarks,

      // 5th subject
      SUB5CODE: sub5Code,
      SUB5NAME: sub5Name,
      SUB5THMARKS: sub5ThMarks,
      SUB5PRMARKS: sub5PrMarks,
      SUB5TOTALMARKS: sub5TotalMarks,
    });
  } else {
    res.render("index", {
      SESSIONYEAR: sessionYear,
      ROLLNO: rollNo,
      STUDENTNAME: studentName,
      FATHERNAME: fatherName,
      MOTHERNAME: motherName,
      SCHOOLNAME: schoolName,
      CLASS: studentClass,

      // 1st subject
      SUB1CODE: sub1Code,
      SUB1NAME: sub1Name,
      SUB1THMARKS: sub1ThMarks,
      SUB1PRMARKS: sub1PrMarks,
      SUB1TOTALMARKS: sub1TotalMarks,

      // 2nd subject
      SUB2CODE: sub2Code,
      SUB2NAME: sub2Name,
      SUB2THMARKS: sub2ThMarks,
      SUB2PRMARKS: sub2PrMarks,
      SUB2TOTALMARKS: sub2TotalMarks,

      // 3rd subject
      SUB3CODE: sub3Code,
      SUB3NAME: sub3Name,
      SUB3THMARKS: sub3ThMarks,
      SUB3PRMARKS: sub3PrMarks,
      SUB3TOTALMARKS: sub3TotalMarks,

      // 4t subject
      SUB4CODE: sub4Code,
      SUB4NAME: sub4Name,
      SUB4THMARKS: sub4ThMarks,
      SUB4PRMARKS: sub4PrMarks,
      SUB4TOTALMARKS: sub4TotalMarks,

      // 5th subject
      SUB5CODE: sub5Code,
      SUB5NAME: sub5Name,
      SUB5THMARKS: sub5ThMarks,
      SUB5PRMARKS: sub5PrMarks,
      SUB5TOTALMARKS: sub5TotalMarks,
    });
  }
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () =>
  console.log(`Server has started on port ${port} successfully !`)
);
