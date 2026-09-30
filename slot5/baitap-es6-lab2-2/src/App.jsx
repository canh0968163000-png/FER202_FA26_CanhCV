import StudentCard from './components/StudentCard.jsx'

const students = [
  {
    id: 'SE1701',
    name: 'Nguyễn Văn An',
    major: 'Software Engineering',
    gpa: 8.5,
    avatar: 'https://i.pravatar.cc/200?img=12',
    contact: {
      email: 'an.nv@fpt.edu.vn',
      phone: '0901 234 567',
    },
  },
  {
    id: 'SE1702',
    name: 'Trần Thị Bình',
    major: 'Software Engineering',
    gpa: 9.0,
    avatar: 'https://i.pravatar.cc/200?img=47',
    contact: {
      email: 'binh.tt@fpt.edu.vn',
      phone: '0902 345 678',
    },
  },
  {
    id: 'SE1703',
    name: 'Lê Văn Cường',
    major: 'Software Engineering',
    gpa: 7.8,
    avatar: 'https://i.pravatar.cc/200?img=11',
    contact: {
      email: 'cuong.lv@fpt.edu.vn',
      phone: '0903 456 789',
    },
  },
]

function App() {
  return (
    <main className="container py-5">
      <div className="d-flex gap-3 flex-wrap justify-content-center">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </main>
  )
}

export default App
