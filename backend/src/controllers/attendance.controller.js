import pool from '../config/db.js';

export const markAttendance = async(req, res) => {
    const {student_id, class_name, date} = req.body;
    try{
        if(!student_id || !class_name){
            return res.status(400).json({ error: "student_id and class_name are required" });
        }
        const checkStudent = await pool.query('select * from students where student_id=$1',[student_id]);
        if(checkStudent.rows.length===0){
            return res.status(404).json({ error: "Student not found" });
        }
        const date1 = date||new Date().toISOString().split('T')[0];
        const results = await pool.query('insert into attendance (student_id, class_name, date1) values ($1, $2, $3)', [student_id, class_name, date1]);
        res.status(200).json(results.rows[0]);
    }catch(error){
        console.error("Error marking attendance:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


export const getAttendanceByClass = async(req, res) => {
    try{
        const {class_name, date} = req.query;
        if (!class_name || !date) {
            return res.status(400).json({ error: "class_name and date required" });
        }
        const results = await pool.query('select * from attendance where class_name=$1 and date1=$2', [class_name, date]);
        res.status(201).json(results.rows);
    }catch(error){
        console.error("Error fetching attendance by date:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getAttendanceByStudentId = async(req, res) =>{
    try{
        const student_id = req.params.student_id;
        if(!student_id){
            return res.status(400).json({ error: "student_id required" });
        }
        const results = await pool.query('select * from students s join attendance a on s.student_id=a.student_id where s.student_id=$1',[student_id]);
        res.status(200).json(results.rows);
    }catch(error){
        console.error("Error fetching attendance by student id:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}