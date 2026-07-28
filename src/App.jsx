import {Link,Routes,Route} from 'react-router-dom';
const Layout=({children})=><div style={{fontFamily:'Arial'}}><nav style={{display:'flex',gap:12,padding:16,background:'#1976d2'}}>{['/','/tasks','/team','/profile'].map((p,i)=><Link key={p} style={{color:'#fff'}} to={p}>{['Dashboard','Tasks','Team','Profile'][i]}</Link>)}</nav><div style={{padding:20}}>{children}</div></div>;
const P=t=><Layout><h1>{t.t}</h1><p>{t.d}</p></Layout>;
export default ()=> <Routes>
<Route path="/" element={<P t="Dashboard" d="Welcome to the mini React app."/>}/>
<Route path="/tasks" element={<P t="Tasks" d="Manage your tasks."/>}/>
<Route path="/team" element={<P t="Team" d="View your team."/>}/>
<Route path="/profile" element={<P t="Profile" d="Your profile page."/>}/>
</Routes>;
