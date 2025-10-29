const Community = () => {
  const features = [
    {
      title: "Active Discussions",
      desc: "Join daily coding chats, game banter, tech news, and topic-specific rooms with like-minded enthusiasts.",
    },
    {
      title: "Weekly Challenges",
      desc: "Take on real coding & gaming quests. Earn XP, badges, and bragging rights in our leaderboard.",
    },
    {
      title: "Events & Streams",
      desc: "Watch live coding battles, game nights, AMAs, and community-hosted sessions.",
    },
    {
      title: "Team Up",
      desc: "Find partners for projects, co-op games, open source contributions, or hackathons.",
    },
    {
      title: "Share Your Wins",
      desc: "Post your game screenshots, projects, bugs, or stories. Inspire and be inspired.",
    },
    {
      title: "Feedback & Support",
      desc: "Get code reviews, project feedback, and career advice from a friendly squad of devs and gamers.",
    },
  ];
  return (
    <div className="lg:ml-64 min-h-screen px-6 md:px-20 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-(--text-primary) mb-4">
          Upcode GamerCave Community
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A place where gamers, coders, and creators unite. Share your skills,
          team up, join events, and grow together. This is more than a server —
          it's a squad.
        </p>
      </div>

      {/* Community Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-(--card) border border-(--border-primary) p-6 rounded-2xl hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-(--text-primary) mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Join CTA */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Join the GamerCave Brotherhood!
        </h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Whether you're here to level up your skills, make new friends, or just
          chill with fellow warriors — there's a spot for you.
        </p>
        <a
          href="https://discord.gg/your-invite"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-(--text-primary) text-black px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition"
        >
          Join Discord Now
        </a>
      </div>
    </div>
  );
};

export default Community;
