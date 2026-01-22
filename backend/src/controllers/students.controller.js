import pool from "../config/db.js";

export const getAllStudents = async (req, res) => {
    try{
       const results = await pool.query('select * from students');   
       res.status(200).json(results.rows);
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


export const addStudent = async (req, res) => {
    const { student_id, name, email, className } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO students (student_id, name, email, class_name) values ($1, $2, $3, $4) RETURNING *',
            [student_id, name, email, className]
        );

        res.status(201).json(result.rows[0]);
    }catch(error){
        console.error("Error adding student:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getStudentByClass = async (req, res) => {
    const {className} = req.params;
    try{
        const results = pool.query('select * from students where class_name=$1', [className]);
        res.status(200).json(await results.then(r=>r.rows));
    }catch(error){
        console.error("Error fetching studetns by class;", error);
        res.status(500).json({ error: "Internal server error"});
    }
}

export const deleteStudent =async (req, res) => {
    try{
        const {id} = req.params;
        await pool.query('delete from students where student_id=$1', [id]);
        res.status(201).json({message: "Student deleted successfully"});
    }catch(error){
        console.error("error deleting student:", error);
        res.status(500).json({ error: "Internal server error"});
    }
}