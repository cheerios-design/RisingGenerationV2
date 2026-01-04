import { Metadata } from 'next';
import {
  HeartIcon,
  SparklesIcon,
  GlobeEuropeAfricaIcon,
  UserGroupIcon,
  LightBulbIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'About Us | RisingGen',
  description: 'Learn about RisingGen - strengthening unity and connection among Young Adults of The Church of Jesus Christ of Latter-day Saints across Europe.',
};

const values = [
  {
    icon: HeartIcon,
    title: 'Unity & Connection',
    description: 'Building meaningful relationships and strengthening bonds among young adults across European nations.',
  },
  {
    icon: SparklesIcon,
    title: 'Faith & Discipleship',
    description: 'Growing closer to Jesus Christ through shared gospel experiences and spiritual activities.',
  },
  {
    icon: GlobeEuropeAfricaIcon,
    title: 'Cultural Diversity',
    description: 'Celebrating the rich diversity of European cultures while united in common faith and purpose.',
  },
  {
    icon: UserGroupIcon,
    title: 'Community Building',
    description: 'Creating inclusive spaces where every young adult feels welcomed, valued, and connected.',
  },
  {
    icon: LightBulbIcon,
    title: 'Personal Growth',
    description: 'Encouraging individual development through meaningful activities, service, and friendships.',
  },
  {
    icon: HandRaisedIcon,
    title: 'Service & Impact',
    description: 'Making a positive difference in our communities and lifting those around us.',
  },
];

const teamMembers = [
  {
    name: 'Area Leadership',
    role: 'Europe Area Presidency',
    description: 'Providing spiritual guidance and oversight for young adult initiatives across Europe.',
  },
  {
    name: 'Young Adult Coordinators',
    role: 'Regional Coordinators',
    description: 'Supporting local young adult programs and facilitating inter-stake connections.',
  },
  {
    name: 'Local Leaders',
    role: 'Stake & Ward Leadership',
    description: 'Working directly with young adults in their local congregations and communities.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-purple/5 via-primary-blue/5 to-accent-teal/5">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 via-primary-blue/20 to-accent-teal/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-text-dark mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-primary-purple via-primary-blue to-accent-teal bg-clip-text text-transparent">
                RisingGen
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strengthening unity, connection, and participation among Young Adults (ages 18-35) 
              of The Church of Jesus Christ of Latter-day Saints across Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  RisingGen exists to help young adults throughout Europe strengthen their faith in 
                  Jesus Christ, build meaningful connections with peers who share their values, and 
                  actively participate in the restored gospel of Jesus Christ.
                </p>
                <p className="text-lg leading-relaxed">
                  We believe that young adults are a rising generation with the power to change the 
                  world for good. Through this platform, we facilitate events, friendships, and 
                  community experiences that help young adults feel connected, supported, and empowered 
                  in their discipleship journey.
                </p>
                <p className="text-lg leading-relaxed">
                  As members of The Church of Jesus Christ of Latter-day Saints, we strive to follow 
                  the Savior's example of love, service, and inclusion while celebrating the cultural 
                  diversity that makes Europe unique.
                </p>
              </div>
            </div>
            <div className="card card-hover p-8 bg-gradient-to-br from-primary-purple/10 to-primary-blue/10">
              <h3 className="text-2xl font-bold text-text-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To create a thriving, interconnected community of young adult Latter-day Saints 
                across Europe who support each other spiritually, socially, and personally.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-purple mt-2" />
                  <p className="text-gray-600">
                    <strong>Connected:</strong> No young adult feels alone in their faith journey
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-blue mt-2" />
                  <p className="text-gray-600">
                    <strong>Engaged:</strong> Active participation in meaningful gospel-centered activities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-teal mt-2" />
                  <p className="text-gray-600">
                    <strong>Empowered:</strong> Equipped to serve, lead, and strengthen the kingdom of God
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at RisingGen, reflecting the principles 
              taught by Jesus Christ and His restored Church.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="card card-hover p-6 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-purple to-primary-blue flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Church Affiliation Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="card p-8 lg:p-12 bg-gradient-to-br from-primary-purple/5 to-primary-blue/5 border-2 border-primary-purple/20">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-text-dark mb-6">
                Our Church Affiliation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                RisingGen is an initiative supporting the young adult programs of{' '}
                <strong>The Church of Jesus Christ of Latter-day Saints</strong> in Europe. 
                We work in coordination with Area, Stake, and Ward leadership to strengthen 
                young adult participation and connection across the continent.
              </p>
              <p className="text-gray-600 mb-6">
                Our platform complements existing church programs by providing additional ways 
                for young adults to connect, serve, and grow together in faith. All activities 
                and events promoted through RisingGen align with church standards and teachings.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-primary-purple/30">
                <span className="text-gray-700">
                  Learn more at{' '}
                  <a 
                    href="https://www.churchofjesuschrist.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-purple font-semibold hover:text-primary-blue transition-colors"
                  >
                    ChurchofJesusChrist.org
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Leadership & Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              RisingGen is supported by dedicated Church leadership and volunteers who are 
              passionate about strengthening young adults across Europe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="card card-hover p-6 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-purple to-accent-teal flex items-center justify-center">
                  <UserGroupIcon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2">{member.name}</h3>
                <p className="text-primary-purple font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="card card-hover p-8 lg:p-12 text-center bg-gradient-to-br from-primary-purple via-primary-blue to-accent-teal text-white">
            <h2 className="text-3xl font-bold mb-4">Join the Rising Generation</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Whether you're new to the area or looking to strengthen existing friendships, 
              RisingGen is here to help you connect with other young adult Latter-day Saints 
              across Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/events"
                className="btn-primary bg-white text-primary-purple hover:bg-gray-50"
              >
                Explore Events
              </a>
              <a
                href="/community"
                className="btn-secondary border-white text-white hover:bg-white/10"
              >
                Find Friends
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
