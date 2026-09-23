import 'bootstrap/dist/css/bootstrap.min.css';
import StudentCard from './components/StudentCard';

const students = [
    {
        id: 'SE1701',
        name: 'Nguyễn Văn An',
        major: 'Software Engineering',
        gpa: 8.5,
        avatar: 'https://i.pravatar.cc/200?img=12',
        contact: { email: 'an.nv@fpt.edu.vn', phone: '0901 234 567' },
    },
    {
        id: 'SE1702',
        name: 'Trần Thị Bình',
        major: 'Software Engineering',
        gpa: 9.1,
        avatar: 'https://i.pravatar.cc/200?img=47',
        contact: { email: 'binh.tt@fpt.edu.vn', phone: '0902 345 678' },
    },
    {
        id: 'SE1703',
        name: 'Lê Minh Châu',
        major: 'Information Assurance',
        gpa: 8.8,
        avatar: 'https://i.pravatar.cc/200?img=32',
        contact: { email: 'chau.lm@fpt.edu.vn', phone: '0903 456 789' },
    },
];

function App() {
    return (
        <div className="container py-4">
            <h1 className="mb-4 text-center">Danh sách sinh viên</h1>

            <div className="d-flex gap-3 flex-wrap justify-content-center">
                {students.map((student) => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
        </div>
    );
}

export default App;