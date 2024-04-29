import WorkCard from './WorkCard';

const worksData = [
  {
    id: 1,
    title: 'Gates of (S)hell',
    description: 'Building my own shell in C',
    image: '/images/shell.png',
    gitUrl: 'https://github.com/HINKOKO/holbertonschool-shell_v2',
  },
  {
    id: 2,
    title: 'My Malloc',
    description: 'Implementing a custom malloc in C',
    image: '/images/malloc.png',
    gitUrl: 'https://github.com/HINKOKO/holbertonschool-malloc',
  },
  {
    id: 3,
    title: 'Blockchain in C',
    description: 'Did you know that C gives you everything to actu...',
    image: '/images/blockchain.png',
    gitUrl: 'https://github.com/HINKOKO/holbertonschool-blockchain',
  },
  {
    id: 4,
    title: 'Algorithms Fever',
    description: 'Working on the most terrific algorithms',
    image: '/images/algorithms.png',
    gitUrl: 'https://github.com/HINKOKO/holbertonschool-system_algorithms',
  },
  {
    id: 5,
    title: 'D-Auction',
    description:
      'Portfolio project where we leveraged blockchain for fine products',
    image: '/images/auction.png',
    gitUrl: 'https://github.com/HINKOKO/portfolio-fundation',
  },
  {
    id: 6,
    title: 'Go for a Booking system in Go',
    description:
      'Discovering Go language by building a sample bed & breakfast website',
    image: '/images/bookings.png',
    gitUrl: 'https://github.com/HINKOKO/bookings',
  },
];

const Works = () => {
  return (
    <section id="works" style={{ paddingTop: '70px' }}>
      <h2 className="text-center text-2xl font-bold mb-12 py-8">
        <span className="bg-clip-text text-transparent text-5xl bg-gradient-to-br from-purple-600 to-purple-200">
          A sample of my projects{' '}
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-20">
        {worksData.map(w => (
          <WorkCard
            key={w.id}
            title={w.title}
            desc={w.description}
            imgUrl={w.image}
            gitUrl={w.gitUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
