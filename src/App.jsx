import {Link,Routes,Route} from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/tasks', label: 'Tasks' },
  { path: '/team', label: 'Team' },
  { path: '/profile', label: 'Profile' }
];

const pageStyle = {
  fontFamily: 'Inter, system-ui, sans-serif',
  color: '#1f2937',
  minHeight: '100vh',
  background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)'
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: 24,
  padding: '18px 24px',
  background: '#0f172a',
  boxShadow: '0 10px 30px rgba(15,23,42,0.12)'
};

const linkStyle = {
  color: '#f8fafc',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: 16
};

const containerStyle = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '28px 24px'
};

const cardStyle = {
  background: '#fff',
  borderRadius: 24,
  padding: 24,
  boxShadow: '0 20px 45px rgba(15,23,42,0.08)',
  marginBottom: 24
};

const heroImage = 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80';
const teamImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80';
const taskImage = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80';
const profileImage = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80';

const Layout = ({ children }) => (
  <div style={pageStyle}>
    <nav style={navStyle}>
      {navItems.map((item) => (
        <Link key={item.path} to={item.path} style={linkStyle}>
          {item.label}
        </Link>
      ))}
    </nav>
    <div style={containerStyle}>{children}</div>
  </div>
);

const Dashboard = () => (
  <Layout>
    <section style={{ ...cardStyle, display: 'grid', gap: 24, gridTemplateColumns: '1.5fr 1fr', alignItems: 'center' }}>
      <div>
        <p style={{ color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 12 }}>Kubernetes Project</p>
        <h1 style={{ fontSize: 44, lineHeight: 1.05, marginBottom: 20 }}>Build and manage cloud-native applications with confidence.</h1>
        <p style={{ fontSize: 18, lineHeight: 1.8, color: '#475569', marginBottom: 24 }}>
          This project showcases a modern Kubernetes dashboard experience. Track workloads, review deployment progress, collaborate with your team, and keep your cluster running smoothly.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16 }}>
          {[
            { title: 'Secure clusters', desc: 'Automate security checks and policy enforcement across namespaces.' },
            { title: 'Fast deploys', desc: 'Use GitOps patterns to keep deployments reliable and repeatable.' },
            { title: 'Live metrics', desc: 'Monitor pod health, CPU, memory, and service performance.' }
          ].map((item) => (
            <div key={item.title} style={{ background: '#f8fafc', borderRadius: 18, padding: 18 }}>
              <h3 style={{ margin: 0, fontSize: 16, color: '#0f172a' }}>{item.title}</h3>
              <p style={{ marginTop: 8, color: '#64748b', fontSize: 14 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <img src={heroImage} alt="Cloud infrastructure" style={{ width: '100%', borderRadius: 24, objectFit: 'cover', minHeight: 340 }} />
    </section>

    <section style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
      {[
        { title: 'Cluster status', value: 'Healthy', detail: '3 namespaces, 12 nodes, 58 pods running' },
        { title: 'Deployment cadence', value: '6/7 tasks completed', detail: 'Latest release deployed 12 minutes ago' },
        { title: 'Team readiness', value: 'On track', detail: 'Active reviewers and automation pipelines operational' }
      ].map((item) => (
        <div key={item.title} style={cardStyle}>
          <p style={{ margin: 0, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', fontSize: 12 }}>{item.title}</p>
          <h2 style={{ margin: '16px 0 8px', fontSize: 28 }}>{item.value}</h2>
          <p style={{ margin: 0, color: '#64748b' }}>{item.detail}</p>
        </div>
      ))}
    </section>
  </Layout>
);

const Tasks = () => (
  <Layout>
    <section style={cardStyle}>
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: 34, marginBottom: 14 }}>Current Project Tasks</h2>
          <p style={{ color: '#475569', fontSize: 17, lineHeight: 1.8 }}>
            Track the project roadmap and see what’s next for your Kubernetes deployment. Each task is designed to improve reliability, security, and cluster visibility.
          </p>
          <ul style={{ marginTop: 20, paddingLeft: 18, color: '#334155' }}>
            <li style={{ marginBottom: 10 }}>Define namespace policy and RBAC for secure multi-team access.</li>
            <li style={{ marginBottom: 10 }}>Deploy the monitoring stack and configure alerting rules.</li>
            <li style={{ marginBottom: 10 }}>Migrate container images to a private registry.</li>
            <li style={{ marginBottom: 10 }}>Automate CI/CD pipeline for blue/green releases.</li>
          </ul>
        </div>
        <img src={taskImage} alt="Task planning" style={{ width: '100%', borderRadius: 20, minHeight: 320, objectFit: 'cover' }} />
      </div>
    </section>
    <section style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
      {[
        { title: 'Audit workflows', content: 'Review pipeline health and ensure deployments pass security gates.' },
        { title: 'Resource optimization', content: 'Tune CPU, memory, and autoscaling thresholds for cluster efficiency.' },
        { title: 'Release notes', content: 'Add changelog entries for each Kubernetes service update.' },
        { title: 'Documentation', content: 'Keep runbooks and architecture diagrams up to date.' }
      ].map((item) => (
        <div key={item.title} style={{ ...cardStyle, padding: 22 }}>
          <h3 style={{ marginBottom: 10 }}>{item.title}</h3>
          <p style={{ margin: 0, color: '#475569' }}>{item.content}</p>
        </div>
      ))}
    </section>
  </Layout>
);

const Team = () => (
  <Layout>
    <section style={cardStyle}>
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
        <img src={teamImage} alt="Team collaboration" style={{ width: '100%', borderRadius: 20, minHeight: 320, objectFit: 'cover' }} />
        <div>
          <h2 style={{ fontSize: 34, marginBottom: 14 }}>Meet the Kubernetes Crew</h2>
          <p style={{ color: '#475569', fontSize: 17, lineHeight: 1.8 }}>
            The team behind this project brings together engineering, DevOps, and cloud architecture expertise to deliver modern container orchestration solutions.
          </p>
        </div>
      </div>
    </section>
    <section style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
      {[
        { name: 'Priya Shah', role: 'DevOps Engineer', bio: 'Designs CI/CD pipelines and manages cluster scalability.' },
        { name: 'Rahul N.', role: 'Cloud Architect', bio: 'Defines the Kubernetes architecture and deployment strategy.' },
        { name: 'Anaya K.', role: 'Site Reliability Engineer', bio: 'Monitors cluster health and incident response automation.' }
      ].map((member) => (
        <div key={member.name} style={{ ...cardStyle, textAlign: 'left' }}>
          <h3 style={{ marginBottom: 8 }}>{member.name}</h3>
          <p style={{ margin: 0, color: '#0ea5e9', fontWeight: 700 }}>{member.role}</p>
          <p style={{ marginTop: 10, color: '#475569' }}>{member.bio}</p>
        </div>
      ))}
    </section>
  </Layout>
);

const Profile = () => (
  <Layout>
    <section style={{ ...cardStyle, display: 'grid', gap: 20, gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
      <div>
        <p style={{ color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 12 }}>Project Overview</p>
        <h2 style={{ fontSize: 34, marginBottom: 18 }}>Kubernetes Project Profile</h2>
        <p style={{ color: '#475569', fontSize: 17, lineHeight: 1.8 }}>
          This profile summarizes the current Kubernetes initiative, including goals, infrastructure, and progress toward a production-ready platform for cloud-native applications.
        </p>
        <div style={{ display: 'grid', gap: 14, marginTop: 22 }}>
          {[
            { label: 'Current phase', value: 'Deployment & monitoring' },
            { label: 'Target environment', value: 'AWS EKS / Azure AKS' },
            { label: 'Launch goal', value: 'Optimize reliability and security by next sprint' }
          ].map((item) => (
            <div key={item.label} style={{ padding: 16, borderRadius: 20, background: '#f1f5f9' }}>
              <p style={{ margin: 0, color: '#475569', fontSize: 14 }}>{item.label}</p>
              <p style={{ margin: '6px 0 0', fontSize: 18, fontWeight: 700 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <img src={profileImage} alt="Project profile" style={{ width: '100%', borderRadius: 24, minHeight: 360, objectFit: 'cover' }} />
    </section>
    <section style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
      {[
        { title: 'Cluster goals', content: 'Keep application availability above 99.9% and automate failover.' },
        { title: 'Security focus', content: 'Apply least-privilege access controls and image scanning.' },
        { title: 'Performance targets', content: 'Reduce pod startup time and improve autoscaling response.' },
        { title: 'Documentation', content: 'Maintain runbooks, architecture diagrams, and release notes.' }
      ].map((item) => (
        <div key={item.title} style={{ ...cardStyle, padding: 22 }}>
          <h3 style={{ marginBottom: 10 }}>{item.title}</h3>
          <p style={{ margin: 0, color: '#475569' }}>{item.content}</p>
        </div>
      ))}
    </section>
  </Layout>
);

export default () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/tasks" element={<Tasks />} />
    <Route path="/team" element={<Team />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
);
