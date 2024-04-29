import skillset from '../../public/skills.png';
const Presentation = () => {
  const name = 'Anthony Pizzoni';
  const age = 34;
  const weight = '****';
  const skills = [
    'Html',
    'C',
    'Css',
    'Golang',
    'Javascript',
    'Rust',
    'React',
    'Linux',
    'Tailwind',
    'Sql',
    'NodeJs',
    'Git',
  ];

  const diplomasData = [
    {
      id: 1,
      school: 'Holberton School',
      dip: 'Bachelor Computer Science',
    },
    {
      id: 2,
      school: 'University of Bethune',
      dip: 'DUT Civil Engineering',
    },
    {
      id: 3,
      school: 'High School',
      dip: 'Scientific Diploma',
    },
  ];

  return (
    <div
      className="flex justify-center "
      id="about"
      style={{ paddingTop: '20px' }}
    >
      <div className="grid md:grid-cols-2 grid-cols-1 mx-auto bg-yellow-700 rounded-xl">
        <div className="mx-8 md:mx-auto p-4 my-4 bg-black text-white rounded-lg">
          <h2 className="text-xl text-purple-500 font-semibold mb-2">
            <em># What we know about this guy...</em>
          </h2>
          <h5 className="text-yellow-600 mb-2 font-bold">[ generals ]</h5>
          <div>
            <div>
              <span className="font-semibold">name = </span>{' '}
              <span className="text-purple-600 font-semibold">{name}</span>
            </div>
            <div>
              <span className="font-semibold">age = </span>{' '}
              <span className="text-purple-600 font-semibold">{age}</span>
            </div>
            <div>
              <span className="font-semibold">weight = </span>{' '}
              <span className="text-purple-600 font-semibold">unknown</span>
            </div>
          </div>
          <div>
            <h5 className="text-yellow-600 mb-2 font-bold mt-2">[ skills ]</h5>
            <div className="grid grid-cols-2">
              {skills.map((s, idx) => (
                <span className="font-semibold" key={idx}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-yellow-600 mb-2 font-bold mt-2">
              [ certifications ]
            </h5>
          </div>
          {diplomasData.map(d => (
            <div className="grid grid-cols-2 md:py-2 sm:py-4">
              <span className="font-semibold" key={d.id}>
                {d.school}
              </span>
              &nbsp;&nbsp;
              {d.dip}
            </div>
          ))}
          <h5 className="text-yellow-600 mb-2 font-bold mt-2">
            [ distinctive sign ]
          </h5>
          <p>
            This guy might makes you laugh.{' '}
            <span className="text-purple-600 font-semibold">Beware.</span>
          </p>
        </div>

        <div className="mx-auto md:order-2 p-4">
          <div className="rounded-xl overflow-hidden">
            <img
              src={skillset}
              alt="skills_panel"
              height={1200}
              width={440}
              style={{ objectFit: 'fill', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
