import ArticleCard from './ArticleCard';

const articleData = [
  {
    id: 7,
    title: 'Blockchain-Cryptography',
    description: 'Tackle cryptography concerns of a Blockchain in C',
    image: '/article_1.png',
    mediumUrl:
      'https://medium.com/@4984_30211/blockchain-cryptography-facbf793c05d',
  },
  {
    id: 8,
    title: 'ELF format',
    description: 'Dive into strange ELF world',
    image: '/article_2.png',
    mediumUrl: 'https://medium.com/@4984_30211/elf-format-toolbox-ee110fe987ba',
  },
  {
    id: 9,
    title: 'Virtual Memory',
    description: 'Virtual memory explained for real',
    image: '/article_3.png',
    mediumUrl:
      'https://medium.com/@4984_30211/virtual-memory-for-real-e08f8e078dc7',
  },
  {
    id: 10,
    title: 'D-Auction',
    description: 'Final year project - overview',
    image: '/article_4.png',
    mediumUrl:
      'https://medium.com/@4984_30211/holberton-school-final-project-story-9ba069fd44c8',
  },
  {
    id: 11,
    title: "2's complement",
    description: 'How your computer store numbers',
    image: '/article_5.png',
    mediumUrl:
      'https://medium.com/@4984_30211/twos-complement-storage-of-integers-in-binary-2d82e5e63eab',
  },
  {
    id: 12,
    title: '/proc filesystem',
    description: 'A guide to the /proc file system in Linux',
    image: '/article_6.png',
    mediumUrl:
      'https://medium.com/@4984_30211/thats-the-power-of-proc-a-closer-look-at-linux-internals-c01e0c109029',
  },
];

const Articles = () => {
  return (
    <section id="writing" style={{ paddingTop: '70px' }}>
      <h2 className="text-center text-2xl font-bold mb-12 py-8">
        <span className="bg-clip-text text-transparent text-5xl bg-gradient-to-br from-purple-600 to-purple-200">
          Computer Science Poetry{' '}
        </span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-20">
        {articleData.map(a => (
          <ArticleCard
            key={a.id}
            title={a.title}
            desc={a.description}
            imgUrl={a.image}
            mediumUrl={a.mediumUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;
