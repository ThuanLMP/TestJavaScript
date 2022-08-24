<script type="text/babel">

const coursesItems = [
    {
        title: 'PHP',
        src: 'https://cdn.tgdd.vn/hoi-dap/1321801/javascript-la-gi-co-vai-tro-gi-cach-bat-javascript-tren.001.jpg',
        desc: "Học PHP tại f8 !",
        time: '1s trước',
        data: [{ a: 1 }, { b: 2 },]
    },
    {
        title: 'Javascript',
        src: 'https://cdn.tgdd.vn/hoi-dap/1321801/javascript-la-gi-co-vai-tro-gi-cach-bat-javascript-tren.001.jpg',
        desc: "Học !",
        time: '1s trước',
        data: [{ a: 1 }, { b: 2 },]
    },
    {
        title: 'Python',
        src: 'https://cdn.tgdd.vn/hoi-dap/1321801/javascript-la-gi-co-vai-tro-gi-cach-bat-javascript-tren.001.jpg',
        desc: "Học PHP tại f8 !",
        time: '1s trước',
        data: [{ a: 1 }, { b: 2 },]

    },
    {
        title: 'Java',
        src: 'https://cdn.tgdd.vn/hoi-dap/1321801/javascript-la-gi-co-vai-tro-gi-cach-bat-javascript-tren.001.jpg',
        desc: "Học PHP tại f8 !",
        time: '1s trước',
        data: [{ a: 1 }, { b: 2 },]
    }
]

function CourseItem(course) {
    
    return(
        <div>
            <h1 onClick = { () => alert(course.title) }>{course.title}</h1>
            <p>{course.desc}</p>
            <p>{course.time}</p>
            <img
                src={course.src}
                alt="hihi"
            />
        </div>
    )
}

function App() {
    return (
        <div id="wrapper">
            {
                coursesItems.map(course => <CourseItem key={course.id} {...course}/>)      
            }
        </div>
    )
}
ReactDOM.render(<App />,document.getElementById('root'));

</script>
