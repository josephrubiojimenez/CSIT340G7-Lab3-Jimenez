const Header = (props) => {
  return (
    <div className="border-b border-[#000000] pb-5">
      <p className="text-xs font-semibold tracking-wider text-[#666666]">
        Course Information
      </p>

      <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#000000] sm:text-3xl">
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div className="flex items-center justify-between border-b border-[#e5e5e5] py-4 last:border-b-0">
      <p className="text-sm font-medium text-[#111111]">
        {props.name}
      </p>

      <span className="ml-4 shrink-0 font-mono text-sm font-semibold text-[#000000]">
        {props.exercises} units
      </span>
    </div>
  )
}

const Content = (props) => {
  return (
    <div className="mt-4 divide-y divide-[#e5e5e5]">
      <Part
        name={props.parts[0].name}
        exercises={props.parts[0].exercises}
      />

      <Part
        name={props.parts[1].name}
        exercises={props.parts[1].exercises}
      />

      <Part
        name={props.parts[2].name}
        exercises={props.parts[2].exercises}
      />
    </div>
  )
}

const Total = (props) => {
  return (
    <div className="mt-2 flex items-center justify-between border-t-2 border-[#000000] pt-4 text-[#000000]">
      <span className="text-xs font-bold tracking-wider">
        Number of units
      </span>

      <span className="font-mono text-lg font-bold text-[#000000]">
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises} units
      </span>
    </div>
  )
}

const Footer = (props) => {
  return (
    <footer className="mt-10 border-t border-[#000000] pt-6 text-center text-xs text-[#740707]">
      {props.fullName} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 - Industry Elective 1',
    parts: [
      {
        name: 'CSIT321 - Applications Development and Emerging Technologies',
        exercises: 3
      },
      {
        name: 'CSIT327 - Information Management 2',
        exercises: 3
      },
      {
        name: 'IT365 - Data Analytics 1',
        exercises: 3
      }
    ]
  }

  const fullName = 'Joseph Rubio Jimenez'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f4f4f5] p-4 sm:p-8">
      <div className="w-full max-w-2xl rounded-none border border-[#000000] bg-[#ffffff] p-6 sm:p-10">

        <Header course={course.name} />

        <Content parts={course.parts} />

        <Total parts={course.parts} />

        <Footer
          fullName={fullName}
          courseCode={courseCode}
          section={section}
        />

      </div>
    </div>
  )
}

export default App